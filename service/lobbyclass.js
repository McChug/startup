
import { promptList } from '../src/open/promptList.js';

export class Lobby {
  constructor(pin) {
    this.pin = pin;
    this.playerList = [];
    this.currentAmbassador;
    this.usedPrompts = [];
    this.currentPrompt = 'Sorry, Shaun and Alex broke the game :(';
    this.currentRoundNumber = 0;
    this.lobbyPromptList = structuredClone(promptList);

    this.submissions = [];
  }

  initializeRound() {

    this.currentRoundNumber += 1

    checkEndGame(); //We need to make this function still

    // Reshuffle after every player has been the ambassador
    if (this.currentRoundNumber % this.playerList.length === 0) {
      shuffleArray(this.playerList);
    }

    // set ambassador order by running shuffleArray on the playerList
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    // choose a prompt from lobbyPromptList and remove it from the array
    const randomIndex = Math.floor(Math.random() * promptList.length);
    this.currentPrompt = this.lobbyPromptList.pop(randomIndex);
    
    const message = { 
      type: "newRound",
      prompt: this.currentPrompt
    }

    // send a message to every player
    this.playerList.forEach(player => {
      player.client.send(message);
    })
  }
//  luv u shawn
  checkEndGame() {
    if (this.currentRoundNumber > this.playerList.length * 2) {
      let playerName = '';
      let score = 0
      this.playerList.forEach(player => {
        if (player.score > score) {
          score = player.score;
          playerName = player.name
        }
      })
      let message = {
        type : "gameEnd",
        winnerName : playerName,
        score : score
      }
      this.playerList.forEach(player => {
        player.client.send(message);
      })
    }
  }
}
