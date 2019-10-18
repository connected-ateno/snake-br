import Map from './Map';
import Snake from './Snake';

class Game {

    public snakes: Snake[] = [];

    public map: Map = new Map();

    constructor(snakes: Snake[]) {
        if (snakes.length < 16) {
            throw new Error('We must have at least 16 snakes');
        }
        this.snakes = snakes;
    }
}

export default Game;
