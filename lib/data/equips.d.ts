import { DataPricedItemBase, Trait } from "./base";
import { ArmorType, EquipmentType, WeaponType } from "./types";
export interface DataEquipment extends DataPricedItemBase {
    etypeId: EquipmentType;
    traits: Trait[];
    params: [number, number, number, number, number, number, number, number];
}
export interface DataWeapon extends DataEquipment {
    etypeId: 1;
    wtypeId: WeaponType;
    animationId: 0;
}
export interface DataArmor extends DataEquipment {
    etypeId: Exclude<EquipmentType, 1>;
    atypeId: ArmorType;
}
