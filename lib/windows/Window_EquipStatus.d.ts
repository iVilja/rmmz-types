import { Rectangle } from "../core";
import { ParamID } from "../data";
import { Game_Actor } from "../objects";
import { Window_StatusBase } from "./Window_StatusBase";
/**
 * Window_EquipStatus
 *
 * The window for displaying parameter changes on the equipment screen.
 */
export declare class Window_EquipStatus extends Window_StatusBase {
    _actor: Game_Actor | null;
    _tempActor: Game_Actor | null;
    constructor(rect: Rectangle);
    setActor(actor: Game_Actor): void;
    colSpacing(): number;
    refresh(): void;
    setTempActor(tempActor: Game_Actor | null): void;
    drawAllParams(): void;
    drawItem(x: number, y: number, paramId: ParamID): void;
    drawParamName(x: number, y: number, paramId: ParamID): void;
    drawCurrentParam(x: number, y: number, paramId: ParamID): void;
    drawRightArrow(x: number, y: number): void;
    drawNewParam(x: number, y: number, paramId: ParamID): void;
    rightArrowWidth(): number;
    paramWidth(): number;
    paramX(): number;
    paramY(index: number): number;
}
