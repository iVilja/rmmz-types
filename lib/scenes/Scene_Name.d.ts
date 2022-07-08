import { Rectangle } from "../core";
import { ActorID } from "../data";
import { Game_Actor } from "../objects";
import { Window_NameEdit, Window_NameInput } from "../windows";
import { Scene_MenuBase } from "./Scene_MenuBase";
export declare class Scene_Name extends Scene_MenuBase {
    _actorId: ActorID;
    _maxLength: number;
    _actor: Game_Actor | null;
    _editWindow: Window_NameEdit;
    _inputWindow: Window_NameInput;
    prepare(actorId: ActorID, maxLength: number): void;
    create(): void;
    start(): void;
    createEditWindow(): void;
    editWindowRect(): Rectangle;
    createInputWindow(): void;
    inputWindowRect(): Rectangle;
    onInputOk(): void;
}
