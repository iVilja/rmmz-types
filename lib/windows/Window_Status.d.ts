import { Rectangle } from "../core";
import { Game_Actor } from "../objects";
import { Window_StatusBase } from "./Window_StatusBase";
/**
 * Window_Status
 *
 * The window for displaying full status on the status screen.
 */
export declare class Window_Status extends Window_StatusBase {
    _actor: Game_Actor | null;
    constructor(rect: Rectangle);
    setActor(actor: Game_Actor): void;
    refresh(): void;
    drawBlock1(): void;
    block1Y(): number;
    drawBlock2(): void;
    block2Y(): number;
    drawBasicInfo(x: number, y: number): void;
    drawExpInfo(x: number, y: number): void;
    expTotalValue(): number | "-------";
    expNextValue(): number | "-------";
}
