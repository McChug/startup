import React from 'react';

export function Start() {

    const joinGame = () => {
        // add function here
        return true;
    };

    return (
        <main>
            <img alt="logo" src="mva_logo.svg" />
            <form>
                <label htmlFor="name" id="nameLabel">Name</label>
                <input id="name" type="text" maxLength="12" autoFocus onKeyDown={(event) => { return /[a-zA-Z]|[0-9]/i.test(event.key) }} />
                <label htmlFor="pin" id="pinLabel">PIN</label>
                <input id="pin" type="text" maxLength="4" onKeyDown={(event) => { return /[a-zA-Z]/i.test(event.key) }} />
                <button className="reflection" onClick={joinGame} type="button" id="enterBtn">Enter</button>
            </form>
        </main>
    );
}