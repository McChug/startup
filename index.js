const express = require('express');
const app = express();
const querystring = require('querystring');
const https = require('https');
// Load .env variables
require('dotenv').config();

const { MongoClient } = require('mongodb');

async function main() {
    const dbUrl = `mongodb+srv://${process.env.usernameDB}:${process.env.passwordDB}@${process.env.hostnameDB}`
    const client = new MongoClient(dbUrl);
    const db = client.db('rental');
    const collection = db.collection('house');

//     // Test that you can connect to the database
//     (async function testConnection() {
//         await client.connect();
//         await db.command({ ping: 1 });
//     })().catch((ex) => {
//         console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//         process.exit(1);
//     });

//     // Insert a document
//     const house = {
//         name: 'Beachfront views',
//         summary: 'From your bedroom to the beach, no shoes required',
//         property_type: 'Condo',
//         beds: 1,
//     };
//     await collection.insertOne(house);

//     // Query the documents
//     const query = { property_type: 'Condo', beds: { $lt: 2 } };
//     const options = {
//         sort: { score: -1 },
//         limit: 10,
//     };

//     const cursor = collection.find(query, options);
//     const rentals = await cursor.toArray();
//     rentals.forEach((i) => console.log(i));
// }

main().catch(console.error);


// service port
const port = 4000;

let players = [];
let pins = ['SSSS'];

// This handles JSON parsing with built-in middleware
app.use(express.json());

// Display frontend static content
app.use(express.static('public')); //change to 'public' before deployment

// Endpoint to retrieve pins
app.get('/pins', (req, res) => {
    res.json({ pins });
});

// Endpoint for adding usernames to players array
app.post('/user', (req, res) => {
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
    app.get('/search', async (req, res) => {
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

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});