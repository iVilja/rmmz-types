import { DataSkill, SkillType } from "../data";
import { Game_Actor } from "../objects";
import { Window_Selectable } from "./Window_Selectable";
/**
 * Window_SkillList
 *
 * The window for selecting a skill on the skill screen.
 */
export declare class Window_SkillList extends Window_Selectable {
    _actor: Game_Actor | null;
    _stypeId: SkillType;
    _data: DataSkill[];
    setActor(actor: Game_Actor): void;
    setStypeId(stypeId: SkillType): void;
    maxCols(): number;
    colSpacing(): number;
    maxItems(): number;
    item(): DataSkill | null;
    itemAt(index: number): DataSkill | null;
    isCurrentItemEnabled(): boolean;
    includes(item: DataSkill): boolean;
    isEnabled(item: DataSkill): boolean;
    makeItemList(): void;
    selectLast(): void;
    drawItem(index: number): void;
    costWidth(): number;
    drawSkillCost(skill: DataSkill, x: number, y: number, width: number): void;
    updateHelp(): void;
    refresh(): void;
}
