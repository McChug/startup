import React from 'react';

export function Demo() {
    return (
        <main>
            <div style="display:flex;gap:0.5rem;"><div class="player-dot"></div><div class="player-dot"></div><div class="player-dot"></div><div class="player-dot"></div><div class="player-dot"></div><div class="player-dot"></div><div class="player-dot"></div><div class="player-dot"></div><div class="player-dot"></div></div>
            
            <h1>Prompt:</h1>
            <p>What song describes your last birthday?</p>

            <form id="songSearchForm">
                <label for="songSearch" style="display:none;">Search Songs</label>
                <input id="songSearch" type="text" onKeyUp="songSearcher();" style={{ width: "50%", minWidth: "20rem" }} />
                <div id="results" style="text-align:center;"></div>
            </form>
            <form id="timestampForm">
                <div id="selectedSong"></div>
                <div id="labelTimestamp">
                    <label for="timestamp">Timestamp:</label>
                    <div id="timestampDisplay">0:00</div>
                    <input id="timestamp" type="range" min="0" />
                </div>
                <input type="hidden" id="trackId" />
                <button onClick="submitSong(event)">Send!</button>
            </form>
        </main>
    )
}