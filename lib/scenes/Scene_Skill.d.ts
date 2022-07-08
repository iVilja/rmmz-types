import { Rectangle } from "../core";
import { DataSkill } from "../data";
import { Window_SkillList, Window_SkillStatus, Window_SkillType } from "../windows";
import { Scene_ItemBase } from "./Scene_ItemBase";
export declare class Scene_Skill extends Scene_ItemBase<DataSkill> {
    _skillTypeWindow: Window_SkillType;
    _statusWindow: Window_SkillStatus;
    _itemWindow: Window_SkillList;
    create(): void;
    start(): void;
    createSkillTypeWindow(): void;
    skillTypeWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createItemWindow(): void;
    itemWindowRect(): Rectangle;
    needsPageButtons(): boolean;
    arePageButtonsEnabled(): boolean;
    refreshActor(): void;
    user(): import("..").Game_Actor;
    commandSkill(): void;
    onItemOk(): void;
    onItemCancel(): void;
    playSeForItem(): void;
    useItem(): void;
    onActorChange(): void;
}
