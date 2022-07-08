import { Rectangle } from "../core";
import { Window_GameEnd } from "../windows";
import { Scene_MenuBase } from "./Scene_MenuBase";
export declare class Scene_GameEnd extends Scene_MenuBase {
    _commandWindow: Window_GameEnd;
    create(): void;
    stop(): void;
    createBackground(): void;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    commandToTitle(): void;
}
