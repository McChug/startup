
const pins = []
//******replace with database connection
pins.push('SSSS')

function testIfInGame() {
    // test if username and pin exist in localStorage and go in-game if so
    const username = localStorage.getItem('username');
    const pin = localStorage.getItem('pin')

    if (username && pin) {
        enterLobby(username, pin);
    } else {
        console.log('not in game');
    }
}
// always call function when page is loaded
testIfInGame()

function joinGame() {
    // set username and pin based off form
    let username = document.getElementById("name").value;
    let pin = document.getElementById("pin").value;
    username = username.toUpperCase();
    pin = pin.toUpperCase();
   
    // validate username and pin, set to localStorage, and run enterLobby()
    if (username.length === 0) {
        const nameLabel = document.getElementById("nameLabel");
        nameLabel.style.color = "#ec2227";
        setTimeout(() => { nameLabel.style.color = "#fcdebd" }, 750);
    }
    if (!pins.includes(pin)) {
        const nameLabel = document.getElementById("pinLabel");
        nameLabel.style.color = "#ec2227";
        setTimeout(() => { nameLabel.style.color = "#fcdebd" }, 750);
    }
    if (username.length > 0 && pins.includes(pin)) {
        localStorage.setItem('username', username);
        localStorage.setItem('pin', pin);
        enterLobby(username, pin);
    }
}

function enterLobby(username, pin) {
    // create main and footer content
    //******websocket will populate this next line with each player, max of 8
    const playerCards = `<div class="player-card">${username}</div><div class="player-card">placeholder</div><div class="player-card">placeholder</div><div class="player-card">placeholder</div><div class="player-card-empty"><div class="empty"></div></div><div class="player-card"></div><div class="player-card"></div><div class="player-card"></div>` 
    const main = `<main style="width:100%;gap:2rem;">${playerCards}<button class="reflection" style="width:20%;margin-top:2rem;" onclick="runGame()">Start Game!</button></main>`
    const footer = `<footer><nav><menu><li><a>${username}</a></li><li><a>${pin}</a></li></menu></nav></footer>`
    const body = document.getElementById("body");
    body.innerHTML = `${main}${footer}<script src="play.js"></script>`;
}