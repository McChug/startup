import React from 'react';
import './app.css';

export default function App() {
  return (
    <div className='main-page'>
        <main>
            <img alt="logo" src="mva_logo.svg" />
            <p>App components will go here</p>
        </main>

        <footer>
            <nav>
                <menu>
                    <li><a href="rules.html">How to Play</a></li>
                    <li><a href="openlobby.html">Open Lobby</a></li>
                    <li><a href="https://github.com/McChug/startup">GitHub</a></li>
                </menu>
            </nav>
        </footer>
        <script src="join.js"></script>
        <script src="play.js"></script>
    </div>
  );
}