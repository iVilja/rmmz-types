import { CommonEventID } from "../data";
import { Game_Interpreter } from "./Game_Interpreter";
/**
 * Game_CommonEvent
*
* The game object class for a common event. It contains functionality for
// running parallel process events.
*/
export declare class Game_CommonEvent {
    _commonEventId: number;
    _interpreter: Game_Interpreter | null;
    constructor(commonEventId: CommonEventID);
    event(): import("../data").DataCommonEvent;
    list(): import("../data").DataCommand[];
    refresh(): void;
    isActive(): boolean;
    update(): void;
}
