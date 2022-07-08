import { Rectangle } from "../core";
import { Window_Gold, Window_MenuCommand, Window_MenuStatus } from "../windows";
import { Scene_MenuBase } from "./Scene_MenuBase";
export declare class Scene_Menu extends Scene_MenuBase {
    _statusWindow: Window_MenuStatus;
    _commandWindow: Window_MenuCommand;
    _goldWindow: Window_Gold;
    helpAreaHeight(): number;
    create(): void;
    start(): void;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    createGoldWindow(): void;
    goldWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    commandItem(): void;
    commandPersonal(): void;
    commandFormation(): void;
    commandOptions(): void;
    commandSave(): void;
    commandGameEnd(): void;
    onPersonalOk(): void;
    onPersonalCancel(): void;
    onFormationOk(): void;
    onFormationCancel(): void;
}
