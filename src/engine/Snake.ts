export default class Snake {
    
    velocity: number;
    x: number;
    y: number;
    
    constructor(velocity: number, x: number, y: number) {
        this.velocity = velocity;
        this.x = x;
        this.y = y;
    }

    move() {
        this.x += this.velocity;
    }

}