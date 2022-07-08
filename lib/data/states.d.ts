import { DataBase, Trait } from "./base";
export declare type Restriction = 0 | 1 | 2 | 3 | 4;
export declare type Motion = 0 | 1 | 2 | 3;
export declare type Overlay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export declare type AutoRemovalTiming = 0 | 1 | 2;
export interface DataState extends DataBase {
    iconIndex: number;
    restriction: Restriction;
    priority: number;
    motion: Motion;
    overlay: Overlay;
    removeAtBattleEnd: boolean;
    removeByRestriction: boolean;
    autoRemovalTiming: AutoRemovalTiming;
    minTurns: number;
    maxTurns: number;
    removeByDamage: boolean;
    chanceByDamage: number;
    removeByWalking: boolean;
    stepsToRemove: number;
    message1: string;
    message2: string;
    message3: string;
    message4: string;
    traits: Trait[];
    releaseByDamage: boolean;
    messageType: number;
}
