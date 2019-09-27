import Segment from './classes/Segment';
import Direction from './constants/Direction';

const DEFAULT_BODY_LENGTH = 3;

export default class Snake {
    public velocity: number;
    public segments: Segment[] = [];

    constructor(velocity: number, x: number, y: number, l: number = DEFAULT_BODY_LENGTH) {
        this.velocity = velocity;
        const deltaX = this.deltaX;
        const deltaY = this.deltaY;
        for (let i = 0; i < l; i++) {
            this.segments[i] = { x: x - (deltaX * i), y: y - (deltaY * i) };
        }
    }

    public move() {
        const recycledSegment = this.segments.pop();
        if (!recycledSegment) {
            throw Error('Somehow, you have no snake');
        }
        recycledSegment.x = this.x + this.deltaX;
        recycledSegment.y = this.y + this.deltaY;
        this.segments.unshift(recycledSegment);
    }

    public grow() {
        const initialLast: Segment = this.segments[this.bodyLength - 1];
        this.segments.push(new Segment(initialLast.x, initialLast.y));
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

    get bodyLength(): number {
        return this.segments.length;
    }

    get deltaX(): number {
        return Math.round(Math.cos(this.velocity));
    }

    get deltaY(): number {
        return -1 * Math.round(Math.sin(this.velocity));
    }

}
