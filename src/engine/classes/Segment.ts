import IPoint from '../interfaces/IPoint';

class Segment implements IPoint {
    public x: number = 0;
    public y: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

}

export default Segment;

