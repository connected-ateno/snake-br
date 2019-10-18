import Game from './Game';
import Snake from './Snake';

// WHAT DID WE DO TODAY?
// 0. Created additional tests for Game
// 1. Create a Map object (with constructor test)
// 2. Asserted a Game cannot be created with fewer than 16 snakes (new req'ment)

// TODO:
// 0. Multiple snakes/players must exist in a 'game'.
// 1. The 'Snake' needs to be bound by a grid.
// 2. Integration-style to ensure that snakes are generated and placed nicely

// FEEDBACK:
// 1. 8, Liked the Live Share; It works; Fun to participate
// 2. 8, Like how we get a chance to think in a detailed way; wish it was quicker (Good point)
// 3. 9, It was fun; TypeScript optimization and details were interesting
// 4. 7, 8's and 9's are too high; This is for balance; Liked it as TypeScript is new thing to learn; Opportunity to practice skills
//       Multi-Pair is more efficient
// 5. 7.5, It's fun; Too slow to swap pairs and get coding; it'd nice to actually be able to reach the goal (completed game)
// 6. 8, Well organized, but not too prescriptive; room to think and make decisions; facilitation was good; cleared things up, not forcing the objective

const getDefaultSnakes = (): Snake[] => Array.from(Array(16)).map(() => ({} as Snake));

describe('Game', () => {

    describe('constructor', () => {

        const DEFAULT_SNAKES = getDefaultSnakes();

        it('can not be created with fewer than 16 snakes', () => {
            expect(() => {
                // tslint:disable-next-line: no-unused-expression
                new Game([]);
            }).toThrowError('We must have at least 16 snakes');
        });

        it('should be initialized with a map size', () => {
            const game = new Game(DEFAULT_SNAKES);
            expect(game.map.size).toEqual(12);
        });

        it('should have some players', () => {
            const game = new Game(DEFAULT_SNAKES);
            expect(game.snakes.length).toEqual(16);
        });

    });

});

// TODO:
// 1. Add a couple snakes,
// 2. Create a few game ticks (game loop) <-- research?
