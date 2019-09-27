import Game from './Game';

describe('Game', () => {
    describe('constructor', () => {
        it ('should return a game with no snakes', () => {
            const game = new Game();

            expect(game.snakes.length).toEqual(0);
        });
    });
});
