import { SwitchID } from "../data"
/**
 * Game_Switches
 *
 * The game object class for switches.
 */
export declare class Game_Switches {
  _data: boolean[]
  clear(): void
  value(switchId?: SwitchID): boolean
  setValue(switchId: number, value: boolean): void
  onChange(): void
}
