const username = localStorage.getItem('username');

async function loginPlayer() {
    setUser('/auth/login');
}

async function createPlayer() {
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
    } else {
        const errorMsg = await response.json();
        const msgDiv = document.getElementById('loginMsg');
        msgDiv.textContent = `Error: ${errorMsg}`;
    };
}