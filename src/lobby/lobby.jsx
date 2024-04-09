import React from 'react';

export function Lobby() {
    return (
        <div className='main-page'>
            <main>
                <h1>Open New Lobby</h1>
                <form>
                    <label for="name">Name</label>
                    <input id="name" type="text" autofocus style="text-transform:uppercase;font-weight:bold" />
                    <label for="pw">Password</label>
                    <input id="pw" type="password" />
                    <div id="loginMsg"></div>
                    <div style="display:flex;">
                        <button class="reflection" id="login" onclick="loginPlayer(event)">Open Lobby</button><div style="width:1rem;"></div>
                        <button class="reflection" id="newUser" onclick="createPlayer(event)" style="width:15rem;">Create Account</button>
                    </div>
                </form>

                <div style="margin:10%;width:100%;display:flex;flex-direction:column;align-items:center;">
                    <h2>Get Party Invite</h2>
                    <form>
                        <label for="date">Day and Time (MTS)</label>
                        <input id="date" type="datetime-local" />
                        <label for="where">Location</label>
                        <input id="where" type="text" maxlength="30" />
                        <button type="button" class="reflection" onclick="populateInvite(event);">Generate</button>
                    </form>
                </div> 
            </main>

            <footer>
                <nav>
                    <menu>
                        <li><a href="index.html">Return</a></li>
                    </menu>
                </nav>
            </footer>

            <script src="invite.js"></script>
            <script src="login.js"></script>
        </div>
    );
}