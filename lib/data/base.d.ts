import { Game_BattlerBase } from "../objects"
import { DataID, ElementType } from "./types"
export declare type Meta = Record<string, unknown>
export interface DataBaseBase {
  id: DataID
  name: string
}
export interface DataBase extends DataBaseBase {
  note: string
  meta: Meta
}
export declare type DataClassID = "item" | "skill" | "weapon" | "armor"
export interface DataItemBase extends DataBase {
  description: string
  iconIndex: number
}
export interface DataPricedItemBase extends DataItemBase {
  price: number
}
export declare type TraitType =
  | typeof Game_BattlerBase.TRAIT_ELEMENT_RATE
  | typeof Game_BattlerBase.TRAIT_DEBUFF_RATE
  | typeof Game_BattlerBase.TRAIT_STATE_RATE
  | typeof Game_BattlerBase.TRAIT_STATE_RESIST
  | typeof Game_BattlerBase.TRAIT_PARAM
  | typeof Game_BattlerBase.TRAIT_XPARAM
  | typeof Game_BattlerBase.TRAIT_SPARAM
  | typeof Game_BattlerBase.TRAIT_ATTACK_ELEMENT
  | typeof Game_BattlerBase.TRAIT_ATTACK_STATE
  | typeof Game_BattlerBase.TRAIT_ATTACK_SPEED
  | typeof Game_BattlerBase.TRAIT_ATTACK_TIMES
  | typeof Game_BattlerBase.TRAIT_ATTACK_SKILL
  | typeof Game_BattlerBase.TRAIT_STYPE_ADD
  | typeof Game_BattlerBase.TRAIT_STYPE_SEAL
  | typeof Game_BattlerBase.TRAIT_SKILL_ADD
  | typeof Game_BattlerBase.TRAIT_SKILL_SEAL
  | typeof Game_BattlerBase.TRAIT_EQUIP_WTYPE
  | typeof Game_BattlerBase.TRAIT_EQUIP_ATYPE
  | typeof Game_BattlerBase.TRAIT_EQUIP_LOCK
  | typeof Game_BattlerBase.TRAIT_EQUIP_SEAL
  | typeof Game_BattlerBase.TRAIT_SLOT_TYPE
  | typeof Game_BattlerBase.TRAIT_ACTION_PLUS
  | typeof Game_BattlerBase.TRAIT_SPECIAL_FLAG
  | typeof Game_BattlerBase.TRAIT_COLLAPSE_TYPE
  | typeof Game_BattlerBase.TRAIT_PARTY_ABILITY
export interface Trait {
  code: TraitType
  dataId: DataID
  value: number
}
export interface DataAudio {
  name: string
  pan: number
  pitch: number
  volume: number
  pos?: number
}
export declare type DamageType = 0 | 1 | 2 | 3 | 4 | 5 | 6
export interface Damage {
  type: DamageType
  elementId: ElementType
  formula: string
  variance: number
  critical: boolean
}
export declare type Scope = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
export declare type Occasion = 0 | 1 | 2 | 3
export declare type Color = readonly [number, number, number, number]
export declare type Direction = 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9
