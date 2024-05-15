import React from 'react';

export function Join() {

    function sanitizeInputs(nameInput, pinInput) {
        if (/^[a-zA-Z0-9]{1,12}$/.test(nameInput)) {
            if (/^[a-zA-Z]{1,4}$/.test(pinInput)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    const joinGame = () => {
        // set username and pin
        let username = document.getElementById('name').value;
        let pin = document.getElementById('pin').value;
        
        // abort functino if inputs are bad
        if (!sanitizeInputs(username, pin)) {
            return false;
        }
        
        // set username and pin to loval storage
        localStorage.setItem('username', username);
        localStorage.setItem('pin', pin);

        // 
    }
    
    return (
        <main>
            {/* Logo svg */}
            <img alt="logo" src="/mva_logo.svg" />

            {/* Name and PIN inputs */}
            <label htmlFor="name" id="nameLabel">Name</label>
            <input id="name" type="text" maxLength="12" autoFocus onKeyDown={(event) => { return /[a-zA-Z]|[0-9]/i.test(event.key) }} />
            <label htmlFor="pin" id="pinLabel">PIN</label>
            <input id="pin" type="text" maxLength="4" onKeyDown={(event) => { return /[a-zA-Z]/i.test(event.key) }} />

            {/* Enter Button */}
            <div className="red-button reflection" onClick={joinGame} id="joinBtn">Enter</div>
        </main>
    );
}