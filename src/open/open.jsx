import React from "react";
import { populateInvite } from "./invite";
import { Lobby } from "../../service/lobbyclass.js";

export function Open() {
  const handlePopulateInvite = (event) => {
    populateInvite(event);
  };

  return (
    <div className="main-page">
      <main>
        <h1>Open New Lobby</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          style={{ textTransform: "uppercase", fontWeight: "bold" }}
        />

        <div className="red-button reflection" id="login">
          Open Lobby
        </div>

        <div className="get-party-invite">
          <h2>Get Party Invite</h2>

          <label htmlFor="date">Day and Time (MTS)</label>
          <input id="date" type="datetime-local" />
          <label htmlFor="where">Location</label>
          <input id="where" type="text" maxLength="30" />
          <div
            type="button"
            className="red-button reflection"
            onClick={handlePopulateInvite}
          >
            Generate
          </div>
        </div>
      </main>

      <script src="invite.js"></script>
      <script src="login.js"></script>
    </div>
  );
}
