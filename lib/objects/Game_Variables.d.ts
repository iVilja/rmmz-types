import { VariableID } from "../data";
/**
 * Game_Variables
 *
 * The game object class for variables.
 */
export declare class Game_Variables {
    _data: number[];
    clear(): void;
    value(variableId?: VariableID): number;
    setValue(variableId: VariableID, value: number): void;
    onChange(): void;
}
