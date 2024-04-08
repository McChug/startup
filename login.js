const username = localStorage.getItem('username');

async function loginPlayer(event) {
    event.preventDefault();
    setUser('/auth/login');
}

async function createPlayer(event) {
    event.preventDefault();
    setUser('/auth/create');
}

async function setUser(endpoint) {
    const username = document.querySelector('#name')?.value;
    const password = document.querySelector('#pw')?.value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: username, password: password}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    if (response.ok) {
        localStorage.setItem('username', username);
        console.log('Logged in!');
        const body = await response.json();
        const msgDiv = document.getElementById('loginMsg');
        msgDiv.textContent = `Your PIN is ${body.pin}`;
    } else {
        const body = await response.json();
        const msgDiv = document.getElementById('loginMsg');
        msgDiv.textContent = `Error: ${body.msg}`;
    };
}