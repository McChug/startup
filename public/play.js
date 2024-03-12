async function grabUsername() {
    // Fetch the list of valid pins from the backend
    const response = await fetch('/pins');
    const data = await response.json();
    const pins = data.pins;
    return pins;
}

async function runGame() {
    // set up game with players
    // repeat rounds

    // grab name variable and pin variable from localStorage
    const username = localStorage.getItem('username');
    const pin = localStorage.getItem('pin')

    const players = ['LIMIT12CHARA','placeholder','placeholder','placeholder','placeholder','placeholder','placeholder','placeholder']; //*****websocket tech will be used for players array
    const numOfRounds = players.length * 2;
    let playerIndex = 0;

    for (let curRound = 1; curRound < numOfRounds; curRound++) {
        await playRound(playerIndex, username, pin);
        if (playerIndex < 7) {
        playerIndex++ 
        } else {
            playerIndex = 0
        }
    }

    async function playRound(playerIndex, username, pin) {
        //new Promise(resolve) => {
            // start round by letting ambassador pick an alien
            let curAmbassador = players[playerIndex];

            // change ambassador's screen to alien select, and others to logo
            if (username === curAmbassador) {
                const main = `<main><h1>You are the Ambassador!</h1><p>alien select menu</p></main>`
                const footer = `<footer><nav><menu><li><a>${username}</a></li><li><a>${pin}</a></li></menu></nav></footer>`
                const body = document.getElementById("body");
                body.innerHTML = `${main}${footer}<script src="play.js"></script>`;
            } else {
                const main = '<main><img src="mva_logo.svg" alt="logo"><h1>Waiting on Ambassador . . .</main>'
                const footer = `<footer><nav><menu><li><a>${username}</a></li><li><a>${pin}</a></li></menu></nav></footer>`
                const body = document.getElementById("body");
                body.innerHTML = `${main}${footer}<script src="play.js"></script>`;
            }
       // }
    }
}