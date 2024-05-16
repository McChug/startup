

export class Player {
    constructor(name, client) {
        this.name = name;
        this.client = client;
        this.numberOfAmbassadorTurns = 0;
        this.score = 0;
    }
}