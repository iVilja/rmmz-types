import { Game_Action, Game_Actor, Game_Enemy, Game_Party, Game_Troop } from "../objects"
import { ParamID } from "./classes"
import { DataItem } from "./items"
import { DataSkill } from "./skills"
import { CommonEventID, SkillID, StateID } from "./types"
declare type $<TCode, TDataID, TValue1 = undefined, TValue2 = undefined> = {
  code: TCode
  dataId: TDataID
  value1: TValue1
  value2: TValue2
}
export declare type HitType =
  | typeof Game_Action.HITTYPE_CERTAIN
  | typeof Game_Action.HITTYPE_PHYSICAL
  | typeof Game_Action.HITTYPE_MAGICAL
export declare type SpecialEffectType = typeof Game_Action.SPECIAL_EFFECT_ESCAPE
export declare type ActionEffectBase =
  | $<typeof Game_Action.EFFECT_RECOVER_HP, undefined, number, number>
  | $<typeof Game_Action.EFFECT_RECOVER_MP, undefined, number, number>
  | $<typeof Game_Action.EFFECT_GAIN_TP, undefined, number>
  | $<typeof Game_Action.EFFECT_ADD_STATE, StateID, number>
  | $<typeof Game_Action.EFFECT_REMOVE_STATE, StateID, number>
  | $<typeof Game_Action.EFFECT_ADD_BUFF, ParamID, number>
  | $<typeof Game_Action.EFFECT_ADD_DEBUFF, ParamID, number>
  | $<typeof Game_Action.EFFECT_REMOVE_BUFF, ParamID>
  | $<typeof Game_Action.EFFECT_REMOVE_DEBUFF, ParamID>
  | $<typeof Game_Action.EFFECT_SPECIAL, SpecialEffectType>
  | $<typeof Game_Action.EFFECT_GROW, ParamID, number>
  | $<typeof Game_Action.EFFECT_LEARN_SKILL, SkillID>
  | $<typeof Game_Action.EFFECT_COMMON_EVENT, CommonEventID>
export declare type ActionEffect<TCode> = Extract<
  ActionEffectBase,
  {
    code: TCode
  }
>
export declare type ActionUnit = Game_Party | Game_Troop
export declare type ActionTarget = Game_Actor | Game_Enemy
export declare type ActionItem = DataSkill | DataItem
export declare type ActionState = "undecided" | "inputting" | "waiting" | "acting" | "done"
export declare type BattlerEffectType =
  | "whiten"
  | "blink"
  | "collapse"
  | "bossCollapse"
  | "instantCollapse"
  | "appear"
  | "disappear"
export declare type BattlerMotionType =
  | "walk"
  | "wait"
  | "chant"
  | "guard"
  | "damage"
  | "evade"
  | "thrust"
  | "swing"
  | "missile"
  | "skill"
  | "spell"
  | "item"
  | "escape"
  | "victory"
  | "dying"
  | "abnormal"
  | "sleep"
  | "dead"
export {}
