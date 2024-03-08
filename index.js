const express = require('express');
const app = express();

// service port
const port = 3000;

// This handles JSON parsing with built-in middleware
app.use(express.json());

// Display frontend static content
app.use(express.static('startup/public'));



// Return to index.html without specified path
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});