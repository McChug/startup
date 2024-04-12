
export async function songSearcher(query) {
    try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.tracks.items.slice(0, 10); // Return the search results
    } catch (error) {
        console.error('Error searching song:', error);
        // Handle error
        return []; // Return an empty array in case of error
    }
}

export function msToMMSS(ms) {
    // Convert to Seconds
    let seconds = ms / 1000;
    // Get minutes
    const minutes = Math.floor(seconds/60);
    seconds = seconds % 60;
    seconds = Math.round(seconds);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    };
    return `${minutes}:${seconds}`;
}

function explicitSign(x) {
    if (x) {
        // const E = document.createElement('span');
        // E.classList.add('explicit')
        return '(E)';
    } else {
        return '';
    }
}

let socket

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
socket.onopen = () => {
    console.log('WebSocket connected')
}
let numDot = 0;

export function submitSong(event) {
    event.preventDefault();

    const chosenTime = document.getElementById('timestamp').value;
    const chosenTrackId = document.getElementById('trackId').value;

    socket.send('changeColor');
}

socket.onmessage = (event) => {
    if (event.data === 'changeColor') {
        const playerDots = document.querySelectorAll('.player-dot');
        playerDots[numDot].style.backgroundColor = '#ec2227';
        numDot += 1;
    }
}