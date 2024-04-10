import React from 'react';

export function Lobby() {
    
    const loginPlayer = () => {
        // add function here
        return true;
    };

    const createPlayer = () => {
        // add function here
        return true;
    };

    return (
        <div className='main-page'>
            <main>
                <h1>Open New Lobby</h1>
                <form>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" style={{textTransform:"uppercase", fontWeight:"bold"}} />
                    <label htmlFor="pw">Password</label>
                    <input id="pw" type="password" />
                    <div id="loginMsg"></div>
                    <div style={{display: "flex"}}>
                        <button className="reflection" id="login" onClick={loginPlayer}>Open Lobby</button><div style={{width:"1rem"}}></div>
                        <button className="reflection" id="newUser" onClick={createPlayer} style={{width:"15rem"}}>Create Account</button>
                    </div>
                </form>

                <div className="get-party-invite">
                    <h2>Get Party Invite</h2>
                    <form>
                        <label htmlFor="date">Day and Time (MTS)</label>
                        <input id="date" type="datetime-local" />
                        <label htmlFor="where">Location</label>
                        <input id="where" type="text" maxLength="30" />
                        <button type="button" className="reflection" onClick="populateInvite(event);">Generate</button>
                    </form>
                </div> 
            </main>

            <script src="invite.js"></script>
            <script src="login.js"></script>
        </div>
    );
}