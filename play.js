


function runGame() {
    // set up game with players
    // repeat rounds

    const numOfPlayers = 8; //*****websocket tech will be used for player count
    const numOfRounds = numOfPlayers * 2;

    for (let curRound = 1; curRound < numOfPlayers; curRound++) {
        playRound(curRound);
    }

    function playRound(curRound) {
        // start round by letting ambassador pick an alien
        
    }
}