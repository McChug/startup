import React from 'react';

export function Rules() {
    return (
    <div className='main-page'>
        <header>
            <h1>HOW TO PLAY</h1>
        </header>

        <main>
            <h2>ALIEN INVASION?!</h2>
            <p>In Mixtapes vs. Aliens, form a team of 3-8 ambassadors to give these aliens a reason not to take over. The only thing is . . . we can only comminucate with music.</p>

            <h2 id="setup">SETUP</h2>
            <p>On the <a href="index.html">main page,</a> hit "Open Lobby" at the bottom to create a new room. Let your fellow ambassadors know the 4-letter code to they can enter too. When you're ready to begin, hit the "Start" button!</p>
        
            <h2 id="rounds">ROUNDS</h2>
            <p style="margin-bottom:1.5rem;">Each round goes a little something like this:</p> 
            <ol type="I">        
                <li>One player is designated as ambassador.</li> 
                <li>They select which alien will give an inquiry.</li>
                <li>Each player is presented the inquiry on their device.</li>
                <li>Putting the their headphones, they'll search for a song and note a timestamp.</li>
                <li>After submitting the info, each response to shuffled and spat back to the players.</li>
                <li>The ambassador is played each song and selects which one to share to the alien.</li>
            </ol>        

            <h2 id="scoring">SCORING</h2>
            <p>Rounds end with the winning player receiving a space cookie. After each player has served two terms as ambassador, the player with the most space cookies wins!</p>

            <h2 id="extra-features">EXTRA FEATURES</h2>
            <p>Like the songs you heard? Tap the link at the end of a game to turn them into a playlist.
            <br />Prepping a party, download and share an MvA invite from the "Open Lobby" page.</p>
        </main>

        <footer>
            <nav>
                <menu>
                    <li><a href="index.html">Return</a></li>
                </menu>
            </nav>
        </footer>
    </div>
    );
}