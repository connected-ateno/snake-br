import Segment from './classes/Segment';
import Direction from './constants/Direction';
import IPoint from './interfaces/IPoint';

const DEFAULT_BODY_LENGTH = 3;

export default class Snake implements IPoint {

    public velocity: number;
    public x: number;
    public y: number;
    public bodyLength: number;
    public segments: Segment[] = [];

    constructor(velocity: number, x: number, y: number, l: number = DEFAULT_BODY_LENGTH) {
        this.velocity = velocity;
        this.x = x;
        this.y = y;
        this.bodyLength = l;
        const deltaX = this.deltaX;
        const deltaY = this.deltaY;

        for (let i = 0; i < l; i++) {
            this.segments[i] = {x: x - (deltaX * (i + 1)), y: y - (deltaY * (i + 1))};
        }
    }

    public move() {
        this.x += this.deltaX;
        this.y += this.deltaY;
        // TODO: Refactor
        // Discard n-th segment and insert a new 0th segment at the next position.
        // Re-model snake to care only about segments
    }

    public changeDirection(direction: Direction) {
        this.velocity = direction;
    }

    public grow() {
        const initialLast: Segment = this.segments[this.bodyLength - 1];
        this.bodyLength += 1;
        this.segments[this.bodyLength - 1] = {x: initialLast.x, y: initialLast.y};
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
