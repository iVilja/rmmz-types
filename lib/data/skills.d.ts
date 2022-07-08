import { ActionEffectBase, HitType } from "./actions";
import { Damage, DataItemBase, Occasion, Scope } from "./base";
import { AnimationID, SkillType, WeaponType } from "./types";
export interface DataSkill extends DataItemBase {
    stypeId: SkillType;
    mpCost: number;
    tpCost: number;
    scope: Scope;
    occasion: Occasion;
    speed: number;
    successRate: number;
    repeats: number;
    tpGain: number;
    hitType: HitType;
    animationId: AnimationID;
    message1: string;
    message2: string;
    requiredWtypeId1: WeaponType;
    requiredWtypeId2: WeaponType;
    damage: Damage;
    effects: ActionEffectBase[];
}
