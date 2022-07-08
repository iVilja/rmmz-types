import { Rectangle } from "../core";
import { Window_Command } from "./Window_Command";
/**
 * Window_TitleCommand
 *
 * The window for selecting New Game/Continue on the title screen.
 */
export declare class Window_TitleCommand extends Window_Command {
    constructor(rect: Rectangle);
    static _lastCommandSymbol: string | null;
    static initCommandPosition(): void;
    makeCommandList(): void;
    isContinueEnabled(): boolean;
    processOk(): void;
    selectLast(): void;
}
