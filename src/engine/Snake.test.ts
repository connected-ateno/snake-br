import Snake from './Snake';

const INITIAL_VELOCITY = 1;
const DEFAULT_X = 0;
const DEFAULT_Y = 0;

describe('Snake', () => {
    describe('constructor', () => {
        it('returns a snake with a head, velocity, and a position', () => {
            const snake = new Snake(INITIAL_VELOCITY, DEFAULT_X, DEFAULT_Y);
            expect(snake).not.toBeNull();
            expect(snake.velocity).toEqual(INITIAL_VELOCITY);
            expect(snake.x).toEqual(DEFAULT_X);
            expect(snake.y).toEqual(DEFAULT_Y);
        });
    });
    describe('when snake has velocity 1', () => {
        it('should move the snake 1 unit right from default origin', () => {
            const snake = new Snake(INITIAL_VELOCITY, DEFAULT_X, DEFAULT_Y);
            snake.move();
            expect(snake.x).toEqual(DEFAULT_X + 1);
        });
    });
});
