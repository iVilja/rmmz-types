import { Rectangle } from "../core";
import { Window_StatusBase } from "./Window_StatusBase";
/**
 * Window_MenuStatus
 *
 * The window for displaying party member status on the menu screen.
 */
export declare class Window_MenuStatus extends Window_StatusBase {
    _formationMode: boolean;
    _pendingIndex: number;
    constructor(rect: Rectangle);
    maxItems(): number;
    numVisibleRows(): number;
    itemHeight(): number;
    actor(index: number): import("..").Game_Actor;
    drawItem(index: number): void;
    drawPendingItemBackground(index: number): void;
    drawItemImage(index: number): void;
    drawItemStatus(index: number): void;
    processOk(): void;
    isCurrentItemEnabled(): boolean;
    selectLast(): void;
    formationMode(): boolean;
    setFormationMode(formationMode: boolean): void;
    pendingIndex(): number;
    setPendingIndex(index: number): void;
}
