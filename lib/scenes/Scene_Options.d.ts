import { Rectangle } from "../core";
import { Window_Options } from "../windows";
import { Scene_MenuBase } from "./Scene_MenuBase";
export declare class Scene_Options extends Scene_MenuBase {
    _optionsWindow: Window_Options;
    create(): void;
    terminate(): void;
    createOptionsWindow(): void;
    optionsWindowRect(): Rectangle;
    maxCommands(): number;
    maxVisibleCommands(): number;
}
