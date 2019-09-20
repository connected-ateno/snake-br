import Direction from './constants/Direction';
import Snake from './Snake';

describe('Class Snake', () => {

    describe('constructor', () => {

        const INITIAL_DIRECTION = Direction.LEFT;
        const DEFAULT_X = 0;
        const DEFAULT_Y = 0;
        const ALT_X = 50;
        const ALT_Y = 50;
        const INITIAL_LENGTH = 3;
        const ALT_LENGTH = 4;
        const CONSTRUCTOR_SEGMENTS_POSITIONS: ConstructorCase[] = [
            [
                DEFAULT_X,
                DEFAULT_Y,
                Direction.LEFT,
                INITIAL_LENGTH,
                'Facing Left, Origin: Top Left',
                [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            ],
            [
                DEFAULT_X,
                DEFAULT_Y,
                Direction.UP,
                INITIAL_LENGTH,
                'Facing Up, Origin: Top Left',
                [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
            ],
            [
                ALT_X,
                ALT_Y,
                Direction.RIGHT,
                ALT_LENGTH,
                'Facing Right, Origin: (50,50)',
                [{ x: 50, y: 50 }, { x: 49, y: 50 }, { x: 48, y: 50 }, { x: 47, y: 50 }],
            ],
            [
                ALT_X,
                ALT_Y,
                Direction.DOWN,
                ALT_LENGTH,
                'Facing Down, Origin: (50,50)',
                [{ x: 50, y: 50 }, { x: 50, y: 49 }, { x: 50, y: 48 }, { x: 50, y: 47 }],
            ],
        ];

        CONSTRUCTOR_SEGMENTS_POSITIONS.forEach(([
            initialX,
            initialY,
            initialDirection,
            initialLength,
            label,
            expectedSegments,
        ]) => {

            describe(label, () => {

                it('should generate correctly aligned segments', () => {

                    const snake = new Snake(initialDirection, initialX, initialY, initialLength);
                    expect(snake.x).toBe(initialX);
                    expect(snake.y).toBe(initialY);
                    expect(snake.segments).toEqual(expectedSegments);

                });

            });

        });

        it('returns a snake with a head, velocity, length, and a position', () => {
            const snake = new Snake(INITIAL_DIRECTION, DEFAULT_X, DEFAULT_Y, INITIAL_LENGTH);
            expect(snake).not.toBeNull();
            expect(snake.velocity).toEqual(INITIAL_DIRECTION);
            expect(snake.bodyLength).toEqual(3);
            expect(snake.x).toEqual(DEFAULT_X);
            expect(snake.y).toEqual(DEFAULT_Y);
            expect(snake.segments).toEqual([
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
            ]);
        });
    });

    describe('Movement', () => {

        const MOVEMENT_CASES: MovementCase[] = [
            [Direction.RIGHT, 'Direction is 0, moves right', [1, 0]],
            [Direction.UP, 'Direction is π/2, moves up', [0, -1]],
            [Direction.LEFT, 'Direction is π, moves left', [-1, 0]],
            [Direction.DOWN, 'Direction is 3π/2, moves down', [0, 1]],
        ];

        /* TESTING SNAKE MOVE */
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

        describe('a snake with length 3', () => {

            const INITIAL_LENGTH = 3;

            it('tail length increases by one unit to 4', () => {
                const snake = new Snake(0, 0, 0, INITIAL_LENGTH);
                snake.grow();
                expect(snake.bodyLength).toEqual(4);
            });

        });

        describe('a snake with length 20', () => {

            const INITIAL_LENGTH = 20;

            it('tail length increases by one unit to 21', () => {
                const snake = new Snake(0, 0, 0, INITIAL_LENGTH);
                snake.grow();
                expect(snake.bodyLength).toEqual(21);
            });

        });

        describe('a new body segment', () => {

            const INITIAL_LENGTH = 2;

            it('should have a position equal to the last body segment', () => {
                const snake = new Snake(0, 0, 0, INITIAL_LENGTH);
                const lastSegmentPosition = snake.segments[INITIAL_LENGTH - 1];
                snake.grow();
                expect(snake.segments.length).toEqual(INITIAL_LENGTH + 1);
                expect(snake.segments[INITIAL_LENGTH]).toEqual(lastSegmentPosition);
            });

        });

    });

});
