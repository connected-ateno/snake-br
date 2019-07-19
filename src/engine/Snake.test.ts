import Snake from './Snake';
import Direction from './constants/Direction';

const INITIAL_DIRECTION = 1;
const DEFAULT_X = 0;
const DEFAULT_Y = 0;
const INITIAL_LENGTH = 3;

type MovementCase = [number, string, [number, number]];
type DirectionCase = [Direction, string];

describe('Snake', () => {

    describe('constructor', () => {

        it('returns a snake with a head, velocity, length, and a position', () => {
            const snake = new Snake(INITIAL_DIRECTION, DEFAULT_X, DEFAULT_Y, INITIAL_LENGTH);
            expect(snake).not.toBeNull();
            expect(snake.velocity).toEqual(INITIAL_DIRECTION);
            expect(snake.length()).toEqual(3);
            expect(snake.x).toEqual(DEFAULT_X);
            expect(snake.y).toEqual(DEFAULT_Y);
        });

    });

    const MOVEMENT_CASES: MovementCase[] = [
        // Direction, Label, Expected
        [0, 'Direction is 0, moves right', [1, 0]],
        [Math.PI / 2, 'Direction is π/2, moves up', [0, -1]],
        [Math.PI, 'Direction is π, moves left', [-1, 0]],
        [Math.PI * 3 / 2, 'Direction is 3π/2, moves down', [0, 1]],
    ];

    MOVEMENT_CASES.forEach(([direction, label, expected]) => {

        describe(label, () => {

            const [expectedX, expectedY] = expected;

            it(`should be located at (${expectedX}, ${expectedY})`, () => {
                const snake = new Snake(direction, 0, 0);
                snake.move();
                expect(snake.x).toEqual(expectedX);
                expect(snake.y).toEqual(expectedY);
            });

        });

    });

    const DIRECTION_CASES: DirectionCase[] = [
        [Direction.LEFT, 'to the left, should set direction left'],
        [Direction.UP, 'to the up, should set direction up'],
        [Direction.RIGHT, 'to the right, should set direction right'],
        [Direction.DOWN, 'to the down, should set direction down'],
    ];

    describe('changeDirection', () => {

        DIRECTION_CASES.forEach(([direction, label]) => {

            it(label, () => {
                const snake = new Snake(0, 0, 0, 0);
                snake.changeDirection(direction);
                expect(snake.velocity).toEqual(direction);
            });

        });

    });

    describe('grow', () => {


        it('tail length increases by one unit', () => {
            const snake = new Snake(0, 0, 0, 3);
            snake.grow();
            expect(snake.length()).toEqual(4);
        });

    });











});
