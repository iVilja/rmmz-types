import { Rectangle } from "../core";
import { DataSaveInfo } from "../data";
import { Window_Selectable } from "./Window_Selectable";
export declare type SavefileMode = "save" | "load";
/**
 * Window_SavefileList
 *
 * The window for selecting a save file on the save and load screens.
 */
export declare class Window_SavefileList extends Window_Selectable {
    _mode: SavefileMode | null;
    _autosave: boolean;
    constructor(rect: Rectangle);
    setMode(mode: SavefileMode, autosave: boolean): void;
    maxItems(): number;
    numVisibleRows(): number;
    itemHeight(): number;
    drawItem(index: number): void;
    indexToSavefileId(index: number): number;
    savefileIdToIndex(savefileId: number): number;
    isEnabled(savefileId: number): boolean;
    savefileId(): number;
    selectSavefile(savefileId: number): void;
    drawTitle(savefileId: number, x: number, y: number): void;
    drawContents(info: DataSaveInfo, rect: Rectangle): void;
    drawPartyCharacters(info: DataSaveInfo, x: number, y: number): void;
    drawPlaytime(info: DataSaveInfo, x: number, y: number, width: number): void;
    playOkSound(): void;
}
