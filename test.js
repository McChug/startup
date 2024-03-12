// // Load environment variables from .env file
require('dotenv').config();

// // Print out the value of SPOTIFY_ACCESS_TOKEN
// console.log(process.env.SPOTIFY_CLIENT_ID);
// console.log('done')

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

console.log(clientId); // Check if the client ID is loaded correctly
console.log(clientSecret); // Check if the client secret is loaded correctly
