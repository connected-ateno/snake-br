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
        for (let i = 0; i < l; i++) {
            this.segments[i] = {x: x + i + 1, y};
        }
    }

    public move() {
        const deltaX = Math.round(Math.cos(this.velocity));
        const deltaY = -1 * Math.round(Math.sin(this.velocity));
        this.x += deltaX;
        this.y += deltaY;
    }

    public changeDirection(direction: Direction) {
        this.velocity = direction;
    }

    public grow() {
        const initialLast: Segment = this.segments[this.bodyLength - 1];
        this.bodyLength += 1;
        this.segments[this.bodyLength - 1] = {x: initialLast.x, y: initialLast.y};
    }

    // TODO: Below is an example of a read-only getter!
    get length(): number {
        return this.bodyLength;
    }

}
