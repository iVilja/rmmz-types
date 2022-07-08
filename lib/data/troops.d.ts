import { DataBaseBase } from "./base";
import { DataCommand } from "./commands";
import { ActorID, EnemyID, SwitchID } from "./types";
export interface TroopMember {
    enemyId: EnemyID;
    x: number;
    y: number;
    hidden: boolean;
}
export interface TroopPageCondition {
    turnEnding: boolean;
    turnValid: boolean;
    turnA: number;
    turnB: number;
    enemyValid: boolean;
    enemyHp: number;
    enemyIndex: number;
    actorValid: boolean;
    actorHp: number;
    actorId: ActorID;
    switchValid: boolean;
    switchId: SwitchID;
}
export interface DataTroopPage {
    conditions: TroopPageCondition;
    list: DataCommand[];
    span: number;
}
export interface DataTroop extends DataBaseBase {
    members: TroopMember[];
    pages: DataTroopPage[];
}
