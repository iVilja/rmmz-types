import { DataBase, Trait } from "./base";
import { DataID, SkillID } from "./types";
export declare type DropItemType = 0 | 1 | 2 | 3;
export declare type ConditionType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export interface DropItem {
    kind: DropItemType;
    dataId: DataID;
    denominator: number;
}
export interface EnemyAction {
    skillId: SkillID;
    rating: number;
    conditionType: ConditionType;
    conditionParam1: number;
    conditionParam2: number;
}
export interface DataEnemy extends DataBase {
    battlerHue: number;
    battlerName: string;
    params: [number, number, number, number, number, number, number, number];
    exp: number;
    gold: number;
    dropItems: [DropItem?, DropItem?, DropItem?];
    actions: EnemyAction[];
    traits: Trait[];
}
