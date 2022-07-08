import { SelfSwitchID } from "../data";
/**
 * Game_SelfSwitches
 *
 * The game object class for self switches.
 */
export declare class Game_SelfSwitches {
    _data: Record<string, boolean>;
    value(key: SelfSwitchID): boolean;
    setValue(key: SelfSwitchID, value: boolean): void;
    onChange(): void;
}
