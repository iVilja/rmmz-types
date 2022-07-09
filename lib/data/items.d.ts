import { ActionEffectBase, HitType } from "./actions"
import { Damage, DataPricedItemBase, Occasion, Scope } from "./base"
import { AnimationID } from "./types"
export declare type ItemType = 0 | 1 | 2 | 3
export interface DataItem extends DataPricedItemBase {
  itypeId: ItemType
  price: number
  consumable: boolean
  scope: Scope
  occasion: Occasion
  speed: number
  successRate: number
  repeats: number
  tpGain: number
  hitType: HitType
  animationId: AnimationID
  damage: Damage
  effects: ActionEffectBase[]
}
