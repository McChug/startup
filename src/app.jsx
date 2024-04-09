import React from 'react';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Rules } from './rules/rules';
import { Lobby } from './lobby/lobby';

export default function App() {
  return (
    <BrowserRouter>
    <div className='main-page'>
        <div>
        </div>
        <main>
            <img alt="logo" src="mva_logo.svg" />
            
            <Routes>
                <Route path='/rules' element={<Rules />} />
                <Route path='/lobby' element={<Lobby />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>

        <footer>
            <nav>
                <menu>
                    <li><NavLink className='nav-link' to='rules'>How to Play</NavLink></li>
                    <li><NavLink className='nav-link' to='lobby'>Open Lobby</NavLink></li>
                    <li><a href="https://github.com/McChug/startup">GitHub</a></li>
                </menu>
            </nav>
        </footer>
        <script src="join.js"></script>
        <script src="play.js"></script>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main>404: Sorry, buddy. Address unkown.</main>;
}