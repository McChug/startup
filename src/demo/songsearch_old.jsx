import React, { useState, useEffect } from 'react';

export async function songSearcher() {
    const query = document.getElementById('songSearch').value.trim();
    const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    const data = await response.json();

    const displayResults = document.getElementById('results');
    //reset div
    displayResults.innerHTML = '';

        <div className="song-card" style={{cursor: "pointer"}}>
            <img src="albumcover" class="album-cover" />
            <div className="text-cols">
                <p>NAme</p>
                <div className="artist-length">
                    <p style={{fontStyle: "italic"}}>Artist</p>
                    <p>DUration</p>
                </div>
            </div>
        </div>

    data.tracks.items.slice(0,10).forEach(item => {
        const songArtist = document.createElement('p');
        const songTitle = document.createElement('p');
        const songAlbum = document.createElement('p');
        const songLength = document.createElement('p');
        songArtist.textContent = item.artists.map(artist => artist.name).join(', ');
        songArtist.style.fontStyle = 'italic';
        songTitle.textContent = item.name;
        songAlbum.textContent = item.album.name;
        songLength.textContent = msToMMSS(item.duration_ms);
        const trackInfo = document.createElement('div');
        const albumCoverSRC = item.album.images[0].url;
        const albumCover = document.createElement('img')
        albumCover.src = albumCoverSRC;
        albumCover.classList.add('album-cover');
        trackInfo.classList.add('song-card');
        const textCols = document.createElement('div');
        textCols.classList.add('text-cols');
        const artistLengthRow = document.createElement('div');
        artistLengthRow.classList.add('artist-length');
        trackInfo.appendChild(albumCover);
        textCols.appendChild(songTitle);
        artistLengthRow.appendChild(songArtist);
        artistLengthRow.appendChild(songLength);
        textCols.appendChild(artistLengthRow);
        // trackInfo.appendChild(songAlbum);
        trackInfo.appendChild(textCols);
        trackInfo.style.cursor = 'pointer';
        displayResults.appendChild(trackInfo);
        trackInfo.addEventListener('click', () => {
            var selectedId = item.id;
            const everySongCard = document.querySelectorAll('.song-card');
            everySongCard.forEach(element => {
                if (element !== trackInfo) {
                    element.style.display = 'none';
                }
            const timestampForm = document.getElementById('timestampForm');
            const trackId = document.getElementById('trackId');
            trackId.value = selectedId;
            timestampForm.style.display = 'flex';
            const timestampRange = document.getElementById('timestamp');
            timestampRange.max = item.duration_ms;

            // Add input event listener to timestampRange
            timestampRange.addEventListener('input', () => {
                const timestampDisplay = document.getElementById('timestampDisplay');
                timestampDisplay.textContent = msToMMSS(timestampRange.value);
            });
            })
        })
    })
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