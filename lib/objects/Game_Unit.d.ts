import { Game_Battler } from "./Game_Battler";
/**
 * Game_Unit
 *
 * The superclass of Game_Party and Game_Troop.
 */
export declare class Game_Unit<T extends Game_Battler> {
    _inBattle: boolean;
    inBattle(): boolean;
    members(): T[];
    aliveMembers(): T[];
    deadMembers(): T[];
    movableMembers(): T[];
    clearActions(): void;
    agility(): number;
    tgrSum(): number;
    randomTarget(): T | null;
    randomDeadTarget(): T | null;
    smoothTarget(index: number): T;
    smoothDeadTarget(index: number): T;
    clearResults(): void;
    onBattleStart(advantageous: boolean): void;
    onBattleEnd(): void;
    makeActions(): void;
    select(activeMember: Game_Battler | null): void;
    isAllDead(): boolean;
    substituteBattler(): T | null;
    tpbBaseSpeed(): number;
    tpbReferenceTime(): 60 | 240;
    updateTpb(): void;
}
