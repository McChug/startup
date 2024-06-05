import { Lobby } from './lobbyclass.js';

const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const querystring = require('querystring');
const https = require('https');
const DB = require('./database.js');
// Load .env variables
require('dotenv').config();

const authCookieName = 'token';

// service port
const port = 4000;

// This handles JSON parsing with built-in middleware
app.use(express.json());

// Display frontend static content
app.use(express.static('public')); //change to 'public' before deployment

// WebSocket stuff

const { WebSocketServer } = require('ws');

// Variables for game logic
var lobbies = []


function setWebSocket(httpService) {

    const wss = new WebSocketServer({ port: 9900 });

    httpService.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });

    wss.on('connection', (ws) => {
        ws.on('message', (data) => {
            let message;
            message = JSON.parse(data)

            if (message) {
                if (message.type === "submission") {
                    // Put submission login below

                } else if (message.type === "newLobby") {
                    const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                    let pin = ''
                    for (let i = 0; i < 4; i++) {
                        pin += upperCaseLetters[Math.floor(Math.random()*25)];
                    }
                    let lobby = new Lobby(pin);
                    lobbies.push(lobby);
                } else if (message.type === "joinLobby") {

                } else if (message.type === "startGame") {
                    // pls fix line below vvvvv
                    lobby.initializeRound();
                }
            }
            // wss.clients.forEach(client => {
            //     client.send(data); // add functionlity to create a new game, join player to game, send a submission, etx.
            // });
        });
    });
};

//Endpoint for creating a player
app.post('/api/auth/create', async (req, res) => {
    if (await DB.getPlayer(req.body.email)) {
        res.status(409).send({ msg: 'Existing User :)' });
    } else {
        const user = await DB.createNewPlayer(req.body.email, req.body.password);

        // Set cookie!!
        setAuthCookie(res, user.token)

        res.send({
            id: user._id,
        });
    }
});

app.post('/api/auth/login', async (req, res) => {
    const player = await DB.getPlayer(req.body.email);

    if (!await DB.getPlayer(req.body.email)) {
        res.status(409).send({ msg: 'Register account first!' });
    } else if (!await bcrypt.compare(req.body.password, player.password)) {
        res.status(401).send({ msg: 'Invalid Password :('})
    } else {
        const newPin = await DB.makeNewPin()
        DB.setPin(newPin);
        res.send({
            pin: newPin,
        });
    }
})

// Endpoint to retrieve pins
// app.get('/pins', (req, res) => {
//     res.json({ pins });
// });

// Endpoint for adding usernames to players array
app.post('/api/user', (req, res) => {
    const { username, pin } = req.body;
    // Check if the pin is valid
    if (!pins.includes(pin)) {
        return res.status(400).json({ error: 'Invalid PIN' });
    }
    // Store the username and pin
    res.status(200).send('Username stored with pin yay!');
});

// SONG SEARCH!!
    // Route for handling song search
    app.get('/api/search', async (req, res) => {
        try {
            const query = req.query.query;
            const accessToken = await getAccessToken();

            // Make request to Spotify API to search for tracks
            const searchResults = await searchSpotifyTracks(query, accessToken);

            res.json(searchResults);
        } catch (error) {
            console.error('Error searching song:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Helper function to retrieve access token from Spotify
    function getAccessToken() {
        return new Promise((resolve, reject) => {
            const clientId = process.env.SPOTIFY_CLIENT_ID;
            const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

            const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
            const data = querystring.stringify({
                'grant_type': 'client_credentials'
            });

            const options = {
                hostname: 'accounts.spotify.com',
                path: '/api/token',
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${authString}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': data.length
                }
            };

            const request = https.request(options, response => {
                let body = '';

                response.on('data', chunk => {
                    body += chunk;
                });

                response.on('end', () => {
                    const responseData = JSON.parse(body);
                    const accessToken = responseData.access_token;
                    resolve(accessToken);
                });
            });

            request.on('error', error => {
                console.error('Error fetching access token:', error);
                reject(error);
            });

            request.write(data);
            request.end();
        });
    }

    // Helper function to search for tracks on Spotify
    function searchSpotifyTracks(query, accessToken) {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'api.spotify.com',
                path: `/v1/search?q=${encodeURIComponent(query)}&type=track`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            };

            const request = https.request(options, response => {
                let body = '';

                response.on('data', chunk => {
                    body += chunk;
                });

                response.on('end', () => {
                    const responseData = JSON.parse(body);
                    resolve(responseData);
                });
            });

            request.on('error', error => {
                console.error('Error searching tracks:', error);
                reject(error);
            });

            request.end();
        });
    }

// Return to index.html without specified path
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        hhtpOnly: true,
        sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

setWebSocket(httpService);