import { SelfSwitchCharacter } from "./events"
export declare type DataID = number
export declare type ElementType = DataID
export declare type SkillType = DataID
export declare type WeaponType = DataID
export declare type ArmorType = DataID
export declare type EquipmentType = DataID
export declare type ActorID = DataID
export declare type ClassID = DataID
export declare type SkillID = DataID
export declare type ItemID = DataID
export declare type EquipmentSlotID = EquipmentType
export declare type WeaponID = DataID
export declare type ArmorID = DataID
export declare type EnemyID = DataID
export declare type TroopID = DataID
export declare type StateID = DataID
export declare type AnimationID = DataID
export declare type BalloonIconID = DataID
export declare type TilesetID = DataID
export declare type CommonEventID = DataID
export declare type MapID = DataID
export declare type EventID = DataID
export declare type SwitchID = DataID
export declare type VariableID = DataID
export declare type SelfSwitchID = readonly [MapID, EventID, SelfSwitchCharacter]
export declare type CharacterID = -1 | 0 | EventID
export declare type ActionDataType = 0 | 1 | 2 | 3 | 4 | 5
export declare type PictureID = DataID
export declare type TileID = DataID
