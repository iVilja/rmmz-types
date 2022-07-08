import { DataAudio, Color } from "./base";
import { TextWindowBackgroundType } from "./commands";
import { Terms } from "./terms";
import { ActorID, ArmorID, MapID, SkillType, TroopID, WeaponID } from "./types";
export interface Advanced {
    gameId: number;
    screenWidth: number;
    screenHeight: number;
    uiAreaWidth: number;
    uiAreaHeight: number;
    mainFontFilename: string;
    numberFontFilename: string;
    fallbackFonts: string;
    fontSize: number;
    windowOpacity?: number;
}
export declare type VehicleType = "airship" | "boat" | "ship" | "walk";
export interface DataVehicle {
    bgm: DataAudio;
    characterIndex: number;
    characterName: string;
    startMapId: MapID;
    startX: number;
    startY: number;
}
export declare type AttackMotionType = 0 | 1 | 2;
export declare type AttackMotionImage = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;
export interface AttackMotion {
    type: AttackMotionType;
    weaponImageId: AttackMotionImage;
}
interface TestBattler {
    actorId: ActorID;
    level: number;
    equips: (WeaponID | ArmorID)[];
}
export interface TitleCommandWindow {
    background: TextWindowBackgroundType;
    offsetX: number;
    offsetY: number;
}
export declare type BattleSystem = 0 | 1 | 2;
export interface DataSystem {
    gameTitle: string;
    partyMembers: number[];
    currencyUnit: string;
    windowTone: Color;
    boat: DataVehicle;
    ship: DataVehicle;
    airship: DataVehicle;
    startMapId: MapID;
    startX: number;
    startY: number;
    title1Name: string;
    title2Name: string;
    optDrawTitle: boolean;
    titleCommandWindow: TitleCommandWindow;
    optSideView: boolean;
    battleSystem: BattleSystem;
    optTransparent: boolean;
    optFollowers: boolean;
    optSlipDeath: boolean;
    optFloorDeath: boolean;
    optDisplayTp: boolean;
    optExtraExp: boolean;
    optKeyItemsNumber: boolean;
    optAutosave: boolean;
    titleBgm: DataAudio;
    battleBgm: DataAudio;
    victoryMe: DataAudio;
    defeatMe: DataAudio;
    gameoverMe: DataAudio;
    sounds: [
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio,
        DataAudio
    ];
    menuCommands: [
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
    ];
    itemCategories: [
        boolean,
        boolean,
        boolean,
        boolean
    ];
    magicSkills: SkillType[];
    attackMotions: AttackMotion[];
    advanced: Advanced;
    battleback1Name: string;
    battleback2Name: string;
    battlerHue: number;
    battlerName: string;
    editMapId: MapID;
    locale: string;
    elements: string[];
    skillTypes: string[];
    weaponTypes: string[];
    armorTypes: string[];
    equipTypes: string[];
    terms: Terms;
    switches: string[];
    variables: string[];
    testBattlers: [TestBattler, TestBattler, TestBattler, TestBattler];
    testTroopId: TroopID;
    versionId: number;
    tileSize?: number;
    hasEncryptedImages: boolean;
    hasEncryptedAudio: boolean;
    encryptionKey: string;
}
export {};
