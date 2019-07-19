import Direction from './constants/Direction';
const DEFAULT_BODY_LENGTH = 3;
export default class Snake {
    
    velocity: number;
    x: number;
    y: number;
    bodyLength: number;
    
    constructor(velocity: number, x: number, y: number, l: number=DEFAULT_BODY_LENGTH) {
        this.velocity = velocity;
        this.x = x;
        this.y = y;
        this.bodyLength = l;
    }
    
    move() {
        const deltaX = Math.round(Math.cos(this.velocity));
        const deltaY = -1 * Math.round(Math.sin(this.velocity));
        this.x += deltaX;
        this.y += deltaY;
    }
    
    changeDirection(direction: Direction) {
        this.velocity = direction;
    }

    grow() {
        return;
    }
    length(): any {
        return length + 1;
    }
    
}