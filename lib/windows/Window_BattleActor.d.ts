import { Rectangle } from "../core";
import { Window_BattleStatus } from "./Window_BattleStatus";
/**
 * Window_BattleActor
 *
 * The window for selecting a target actor on the battle screen.
 */
export declare class Window_BattleActor extends Window_BattleStatus {
    constructor(rect: Rectangle);
    show(): void;
    hide(): void;
    select(index: number): void;
    processTouch(): void;
}
