
import { promptList } from '../src/open/promptList.js';

export class Lobby {
  constructor(pin) {
    this.pin = pin;
    this.playerList = [];
    this.curAmbassador;
    this.usedPrompts = [];
    this.curRoundNumber = 0;
  }

  initializeRound() {
    
    checkEndGame(); //We need to make this function still

    // Reshuffle after every player has been the ambassador
    if (this.curRoundNumber % this.playerList.length() == 0) {
      shuffleArray(this.playerList);
    }
    this.curRoundNumber += 1

    // set ambassador order by running shuffleArray on the playerList
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    // 

  }
}
