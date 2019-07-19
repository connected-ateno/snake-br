import Direction from './constants/Direction';
const DEFAULT_BODY_LENGTH = 3;
export default class Snake {

    public velocity: number;
    public x: number;
    public y: number;
    public bodyLength: number;

    constructor(velocity: number, x: number, y: number, l: number= DEFAULT_BODY_LENGTH) {
        this.velocity = velocity;
        this.x = x;
        this.y = y;
        this.bodyLength = l;
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
        return;
    }
    public length(): any {
        return length + 1;
    }

}
