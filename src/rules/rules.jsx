import React from 'react';
import { NavLink } from 'react-router-dom';
import './rules.css';

export function Rules() {
    return (
        <div className='main-page'>
            <header className='header'>
                <h1 className='h1'>HOW TO PLAY</h1>
            </header>

            <main className='main'>
                <h2 className='h2'>ALIEN INVASION?!</h2>
                <p className='p'>In Mixtapes vs. Aliens, form a team of 3-8 ambassadors to give these aliens a reason not to take over. The only thing is . . . we can only comminucate with music.</p>

                <h2 className='h2' id="setup">SETUP</h2>
                <p className='p'>On the <NavLink style={{color:'#fcdebd'}} to='/'>main page,</NavLink> hit "Open Lobby" at the bottom to create a new room. Let your fellow ambassadors know the 4-letter code to they can enter too. When you're ready to begin, hit the "Start" button!</p>
            
                <h2 className='h2' id="rounds">ROUNDS</h2>
                <p  className='p' style={{marginBottom: '1.5rem' }}>Each round goes a little something like this:</p> 
                <ol  className='ol' type="I">        
                    <li className='li'>One player is designated as ambassador.</li> 
                    <li className='li'>They select which alien will give an inquiry.</li>
                    <li className='li'>Each player is presented the inquiry on their device.</li>
                    <li className='li'>Putting the their headphones, they'll search for a song and note a timestamp.</li>
                    <li className='li'>After submitting the info, each response to shuffled and spat back to the players.</li>
                    <li className='li'>The ambassador is played each song and selects which one to share to the alien.</li>
                </ol>        

                <h2 className='h2' id="scoring">SCORING</h2>
                <p className='p'>Rounds end with the winning player receiving a space cookie. After each player has served two terms as ambassador, the player with the most space cookies wins!</p>

                <h2 className='h2' id="extra-features">EXTRA FEATURES</h2>
                <p className='p'>Like the songs you heard? Tap the link at the end of a game to turn them into a playlist.
                <br />Prepping a party, download and share an MvA invite from the "Open Lobby" page.</p>
            </main>
        </div>
    );
}