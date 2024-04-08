const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
require('dotenv').config();

const dbUrl = `mongodb+srv://${process.env.usernameDB}:${process.env.passwordDB}@${process.env.hostnameDB}`
const client = new MongoClient(dbUrl);
const db = client.db('startup');
const playerCollection = db.collection('player');
const pinCollection = db.collection('pins');

// test connection
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${dbUrl} because ${ex.message}`);
    process.exit(1);
});

function getPlayer(email) {
    return playerCollection.findOne({ email: email });
}

function getPlayerByToken(token) {
    return playerCollection.findOne({ token: token });
}

async function createNewPlayer(email, password) {
    // encrypt the password first
    const pwHash = await bcrypt.hash(password, 10);

    const player = {
        email: email,
        password: pwHash,
        token: uuid.v4(),
    };

    await playerCollection.insertOne(player);

    return player
}

async function setPin(pin) {
    const code = {
        pin: pin
    };

    await pinCollection.insertOne(code)

    return code
}

async function makeNewPin() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomPin = '';
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        randomPin += letters.charAt(randomIndex);
    }
    const pinList = (await pinCollection.find({}, { projection: { _id: 0, pin: 1 } }).toArray()).map(doc => doc.pin);
    if ( pinList.includes(randomPin) ) {
        return makeNewPin();
    } else {
        return randomPin;
    }
}

module.exports = {
    getPlayer,
    getPlayerByToken,
    createNewPlayer,
    createNewPlayer,
    setPin,
    makeNewPin
};