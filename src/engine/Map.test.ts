import Map from './Map';

describe('Map', () => {
    describe('constructor', () => {
        it ('should return a map with default size', () => {
            const map = new Map();
            expect(map.size).toEqual(12);
        });
    });
});
