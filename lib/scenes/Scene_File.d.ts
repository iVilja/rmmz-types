import { Rectangle } from "../core";
import { SavefileMode, Window_SavefileList } from "../windows";
import { Scene_MenuBase } from "./Scene_MenuBase";
export declare class Scene_File extends Scene_MenuBase {
    _listWindow: Window_SavefileList;
    create(): void;
    helpAreaHeight(): number;
    start(): void;
    savefileId(): number;
    isSavefileEnabled(savefileId: number): boolean;
    createHelpWindow(): void;
    helpWindowRect(): Rectangle;
    createListWindow(): void;
    listWindowRect(): Rectangle;
    mode(): SavefileMode;
    needsAutosave(): boolean;
    activateListWindow(): void;
    helpWindowText(): string;
    firstSavefileId(): number;
    onSavefileOk(): void;
}
