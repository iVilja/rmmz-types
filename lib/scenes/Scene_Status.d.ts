import { Rectangle } from "../core";
import { Window_Help, Window_Status, Window_StatusEquip, Window_StatusParams } from "../windows";
import { Scene_MenuBase } from "./Scene_MenuBase";
export declare class Scene_Status extends Scene_MenuBase {
    _profileWindow: Window_Help;
    _statusWindow: Window_Status;
    _statusParamsWindow: Window_StatusParams;
    _statusEquipWindow: Window_StatusEquip;
    create(): void;
    helpAreaHeight(): number;
    createProfileWindow(): void;
    profileWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createStatusParamsWindow(): void;
    statusParamsWindowRect(): Rectangle;
    createStatusEquipWindow(): void;
    statusEquipWindowRect(): Rectangle;
    statusParamsWidth(): number;
    statusParamsHeight(): number;
    profileHeight(): number;
    start(): void;
    needsPageButtons(): boolean;
    refreshActor(): void;
    onActorChange(): void;
}
