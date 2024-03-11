const express = require('express');
const app = express();
// service port
const port = 4000;

let players = [];
let pins = ['SSSS'];

// This handles JSON parsing with built-in middleware
app.use(express.json());

// Display frontend static content
app.use(express.static('startup/public'));

// Endpoint to get the list of valid pins
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
    res.status(200).send('User information stored successfully');
});

// Return to index.html without specified path
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});