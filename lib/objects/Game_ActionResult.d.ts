import { ParamID, StateID } from "../data";
/**
 * Game_ActionResult
*
* The game object class for a result of a battle action. For convinience, all
// member variables in this class are public.
*/
export declare class Game_ActionResult {
    used: boolean;
    missed: boolean;
    evaded: boolean;
    physical: boolean;
    drain: boolean;
    critical: boolean;
    success: boolean;
    hpAffected: boolean;
    hpDamage: number;
    mpDamage: number;
    tpDamage: number;
    addedStates: StateID[];
    removedStates: StateID[];
    addedBuffs: ParamID[];
    addedDebuffs: ParamID[];
    removedBuffs: ParamID[];
    constructor();
    clear(): void;
    addedStateObjects(): import("../data").DataState[];
    removedStateObjects(): import("../data").DataState[];
    isStatusAffected(): boolean;
    isHit(): boolean;
    isStateAdded(stateId: StateID): boolean;
    pushAddedState(stateId: StateID): void;
    isStateRemoved(stateId: StateID): boolean;
    pushRemovedState(stateId: StateID): void;
    isBuffAdded(paramId: ParamID): boolean;
    pushAddedBuff(paramId: ParamID): void;
    isDebuffAdded(paramId: ParamID): boolean;
    pushAddedDebuff(paramId: ParamID): void;
    isBuffRemoved(paramId: ParamID): boolean;
    pushRemovedBuff(paramId: ParamID): void;
}
