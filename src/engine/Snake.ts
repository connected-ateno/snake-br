import Segment from './classes/Segment';
import Direction from './constants/Direction';
import IPoint from './interfaces/IPoint';

const DEFAULT_BODY_LENGTH = 3;

// TODO: Refactor
// 1. Still going Green (post-interface update), need to repair the 'grow' tests
// 2. Discard n-th segment and insert a new 0th segment at the next position.

export default class Snake implements IPoint {

    public velocity: number;
    public segments: Segment[] = [];

    constructor(velocity: number, x: number, y: number, l: number = DEFAULT_BODY_LENGTH) {
        this.velocity = velocity;
        const deltaX = this.deltaX;
        const deltaY = this.deltaY;

        for (let i = 0; i < l + 1; i++) {
            this.segments[i] = { x: x - (deltaX * i), y: y - (deltaY * i) };
        }
    }

    public move() {
        // TODO: This needs to be replaced as part of the refactor
        // this.x += this.deltaX;
        // this.y += this.deltaY;
        // segments[this.segments.length - 1];
    }

    public get x(): number {
        return this.segments[0].x;
    }

    public get y(): number {
        return this.segments[0].y;
    }

    public changeDirection(direction: Direction) {
        this.velocity = direction;
    }

    public grow() {
        const initialLast: Segment = this.segments[this.bodyLength - 1];
        this.segments[this.bodyLength - 1] = { x: initialLast.x, y: initialLast.y };
    }

    get bodyLength(): number {
        return this.segments.length - 1;
    }

    get length(): number {
        return this.bodyLength;
    }

    get deltaX(): number {
        return Math.round(Math.cos(this.velocity));
    }

    get deltaY(): number {
        return -1 * Math.round(Math.sin(this.velocity));
    }

}
