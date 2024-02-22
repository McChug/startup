
const pins = []
//replace with database connection
pins.push('ssss')

function testIfInGame() {
    const username = localStorage.getItem('username');
    const pin = localStorage.getItem('pin')

    if (username && pin) {
        enterLobby(username, pin);
    } else {
        console.log('not in game');
    }
}
testIfInGame()

function joinGame() {
    const username = document.getElementById("name").value;
    const pin = document.getElementById("pin").value;
    // console.log(username);
    // console.log(pin);
    if (username.length > 0 && pins.includes(pin)) {
        localStorage.setItem('username', username);
        localStorage.setItem('pin', pin);
        enterLobby(username, pin);
    }
}

function enterLobby(username, pin) {
    const body = document.getElementById("body");
    body.innerHTML = '<p>test</p>';
}