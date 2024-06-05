# Game Design

## Classes

### class Player

Variables:

- name
- client
- numOfAmbassadorTurns
- score

### class Lobby

Variables:

- pin
- playerList (name of each player as string)
- curAmbassador
- usedPrompts (stores each prompt as a string to compare against future fetches)
- curRoundNumber

Methods:

- initializeRound (run checkEndGame, selects ambassador, choose prompt and displays player and ambassador screens)
- noDoubleSubmissions (not necessary but would stop people from trying to break the game)
- onSubmission (if every player has submitted, send songs back to player screens and give the ambassador a list of all songs)
- awardPoint (runs when the ambassador selects winner, gives player a point and displays to everyone who won and shows leaderboard, then runs initializeRound)
- checkEndGame (if every player has been ambassador twice, run endGame)
- endGame (show leaderbaord and celebrate baby)

### class Submission

Variables:

- spotifyTrackId
- timeStamp
- playerName
- pin

## Reconnecting

Save latest username and pin to localstorage. If the pin saved is currently active on page load, then replace Enter button with "Reconnect" and if the player reconnects, get their session back.

## MISC Notes

Create a PIN stored in a map as the key

Upon each song submission during a round, check if every player has submitted a song.

Prompts

If a user enters a name that is already in the lobby, break 'em
