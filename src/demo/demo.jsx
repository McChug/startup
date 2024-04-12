import React from 'react';
import './demopage.css';
import { songSearcher, submitSong } from './songsearch';

export function Demo() {

    const handleKeyUp = () => {
        songSearcher();
    };

    const handleSubmit = (event) => {
        submitSong(event);
    };

    return (
        <main>
        <div style={{ display: "flex", gap: "0.5rem" }}>
            <div className="player-dot"></div>
            <div className="player-dot"></div>
            <div className="player-dot"></div>
            <div className="player-dot"></div>
            <div className="player-dot"></div>
            <div className="player-dot"></div>
            <div className="player-dot"></div>
            <div className="player-dot"></div>
            <div className="player-dot"></div>
        </div>
        
        <h1>Prompt:</h1>
        <p>What song describes your last birthday?</p>

        <form id="songSearchForm">
            <label htmlFor="songSearch" style={{ display: "none" }}>Search Songs</label>
            <input id="songSearch" type="text" onKeyUp={handleKeyUp} style={{ width: "50%", minWidth: "20rem" }} />
            <div id="results" style={{ textAlign: "center" }}></div>
        </form>
        
        <form id="timestampForm">
            <div id="selectedSong"></div>
            <div id="labelTimestamp">
            <label htmlFor="timestamp">Timestamp:</label>
            <div id="timestampDisplay">0:00</div>
            <input id="timestamp" type="range" min="0" />
            </div>
            <input type="hidden" id="trackId" />
            <button onClick={handleSubmit}>Send!</button>
        </form>
        </main>
    );
}
