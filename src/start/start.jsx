import React from 'react';

export function Start() {
    return (
        <main>
            <img alt="logo" src="mva_logo.svg" />
            <form>
                <label for="name" id="nameLabel">Name</label>
                <input id="name" type="text" maxlength="12" autofocus onkeydown="return /[a-zA-Z]|[0-9]/i.test(event.key)" />
                <label for="pin" id="pinLabel">PIN</label>
                <input id="pin" type="text" maxlength="4" onkeydown="return /[a-zA-Z]/i.test(event.key)" />
                <button class="reflection" onclick="joinGame()" type="button" id="enterBtn">Enter</button>
            </form>
        </main>
    );
}