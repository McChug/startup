import React, { useState } from 'react';
import './demopage.css';
import { songSearcher, submitSong, msToMMSS } from './songsearch';

export function Demo() {
    const [searchResults, setSearchResults] = useState([]);

    const handleKeyUp = async (event) => {
        const query = event.target.value;
        const results = await songSearcher(query);
        setSearchResults(results);
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
            <div id="results" style={{ textAlign: "center" }}>
                {searchResults.map(item => (
                    <div className="song-card" style={{ cursor: "pointer" }} key={item.id}>
                        <img src={item.album.images[0].url} className="album-cover" alt="Album Cover" />
                        <div className="text-cols">
                            <p>{item.name}</p>
                            <div className="artist-length">
                                <p style={{ fontStyle: "italic" }}>{item.artists.map(artist => artist.name).join(', ')}</p>
                                <p>{msToMMSS(item.duration_ms)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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
