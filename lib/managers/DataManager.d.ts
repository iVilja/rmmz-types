import {
  DataArmor,
  DataGlobalInfo,
  DataItem,
  DataMap,
  DataSaveInfo,
  DataSkill,
  DataWeapon,
  Meta,
  SaveContents,
} from "../data"
export interface RmmzError {
  name: string
  src: string
  url: string
}
/**
 * DataManager
 *
 * The static class that manages the database and game objects.
 */
export declare class DataManager {
  constructor()
  static _globalInfo: DataGlobalInfo | null
  static _errors: RmmzError[]
  static readonly _databaseFiles: readonly [
    {
      readonly name: "$dataActors"
      readonly src: "Actors.json"
    },
    {
      readonly name: "$dataClasses"
      readonly src: "Classes.json"
    },
    {
      readonly name: "$dataSkills"
      readonly src: "Skills.json"
    },
    {
      readonly name: "$dataItems"
      readonly src: "Items.json"
    },
    {
      readonly name: "$dataWeapons"
      readonly src: "Weapons.json"
    },
    {
      readonly name: "$dataArmors"
      readonly src: "Armors.json"
    },
    {
      readonly name: "$dataEnemies"
      readonly src: "Enemies.json"
    },
    {
      readonly name: "$dataTroops"
      readonly src: "Troops.json"
    },
    {
      readonly name: "$dataStates"
      readonly src: "States.json"
    },
    {
      readonly name: "$dataAnimations"
      readonly src: "Animations.json"
    },
    {
      readonly name: "$dataTilesets"
      readonly src: "Tilesets.json"
    },
    {
      readonly name: "$dataCommonEvents"
      readonly src: "CommonEvents.json"
    },
    {
      readonly name: "$dataSystem"
      readonly src: "System.json"
    },
    {
      readonly name: "$dataMapInfos"
      readonly src: "MapInfos.json"
    }
  ]
  static loadGlobalInfo(): Promise<0 | undefined>
  static removeInvalidGlobalInfo(): void
  static saveGlobalInfo(): void
  static isGlobalInfoLoaded(): boolean
  static loadDatabase(): void
  static loadDataFile(name: string, src: string): void
  static onXhrLoad(xhr: XMLHttpRequest, name: string, src: string, url: string): void
  static onXhrError(name: string, src: string, url: string): void
  static isDatabaseLoaded(): boolean
  static loadMapData(mapId: number): void
  static makeEmptyMap(): void
  static isMapLoaded(): boolean
  static onLoad(object: unknown): void
  static isMapObject(object: unknown): object is DataMap
  static extractArrayMetadata(array: unknown): void
  static extractMetadata(data: { note: string; meta?: Meta }): void
  static checkError(): void
  static isBattleTest(): boolean
  static isEventTest(): boolean
  static isSkill(item: unknown): item is DataSkill
  static isItem(item: unknown): item is DataItem
  static isWeapon(item: unknown): item is DataWeapon
  static isArmor(item: unknown): item is DataArmor
  static createGameObjects(): void
  static setupNewGame(): void
  static setupBattleTest(): void
  static setupEventTest(): void
  static isAnySavefileExists(): boolean
  static latestSavefileId(): number
  static earliestSavefileId(): number
  static emptySavefileId(): number
  static loadAllSavefileImages(): void
  static loadSavefileImages(info: DataSaveInfo): void
  static maxSavefiles(): number
  static savefileInfo(savefileId: number): DataSaveInfo | null | undefined
  static savefileExists(savefileId: number): boolean
  static saveGame(savefileId: number): Promise<number>
  static loadGame(savefileId: number): Promise<number>
  static makeSavename(savefileId: number): string
  static selectSavefileForNewGame(): void
  static makeSavefileInfo(): DataSaveInfo
  static makeSaveContents(): SaveContents
  static extractSaveContents(contents: SaveContents): void
  static correctDataErrors(): void
}
