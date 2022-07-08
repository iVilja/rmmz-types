import { DataClassID, DataItemBase } from "../data";
/**
 * Game_Item
*
* The game object class for handling skills, items, weapons, and armor. It is
// required because save data should not include the database object itself.
*/
export declare class Game_Item<T extends DataItemBase = DataItemBase> {
    _dataClass: DataClassID | "";
    _itemId: number;
    constructor(item?: T | null);
    isSkill(): boolean;
    isItem(): boolean;
    isUsableItem(): boolean;
    isWeapon(): boolean;
    isArmor(): boolean;
    isEquipItem(): boolean;
    isNull(): boolean;
    itemId(): number;
    object(): T;
    setObject(item: T | null): void;
    setEquip(isWeapon: boolean, itemId: number): void;
}
