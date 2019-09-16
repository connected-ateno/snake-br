import Segment from "./src/engine/classes/Segment";
import Direction from "./src/engine/constants/Direction";

// Type definitions for snake-br 1.0
// Project: snake-br
// Definitions by: Alexander Teno <https://github.com/alexanderteno>

declare global {

    // Direction, Label, Expected
    type MovementCase = [number, string, [number, number]];

    // X, Y, Direction, Length, Label, Expected Segments
    type ConstructorCase = [number, number, Direction, number, string, Segment[]];

    // Direction, Label
    type DirectionCase = [Direction, string];

}

/*~ If your module exports nothing, you'll need this line. Otherwise, delete it */
export { };

// Source: global-modifying-module-d-ts
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html