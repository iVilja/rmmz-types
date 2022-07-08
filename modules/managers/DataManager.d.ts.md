---
title: managers/DataManager.d.ts
nav_order: 53
parent: Modules
---

## DataManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataManager (class)](#datamanager-class)
    - [loadGlobalInfo (static method)](#loadglobalinfo-static-method)
    - [removeInvalidGlobalInfo (static method)](#removeinvalidglobalinfo-static-method)
    - [saveGlobalInfo (static method)](#saveglobalinfo-static-method)
    - [isGlobalInfoLoaded (static method)](#isglobalinfoloaded-static-method)
    - [loadDatabase (static method)](#loaddatabase-static-method)
    - [loadDataFile (static method)](#loaddatafile-static-method)
    - [onXhrLoad (static method)](#onxhrload-static-method)
    - [onXhrError (static method)](#onxhrerror-static-method)
    - [isDatabaseLoaded (static method)](#isdatabaseloaded-static-method)
    - [loadMapData (static method)](#loadmapdata-static-method)
    - [makeEmptyMap (static method)](#makeemptymap-static-method)
    - [isMapLoaded (static method)](#ismaploaded-static-method)
    - [onLoad (static method)](#onload-static-method)
    - [isMapObject (static method)](#ismapobject-static-method)
    - [extractArrayMetadata (static method)](#extractarraymetadata-static-method)
    - [extractMetadata (static method)](#extractmetadata-static-method)
    - [checkError (static method)](#checkerror-static-method)
    - [isBattleTest (static method)](#isbattletest-static-method)
    - [isEventTest (static method)](#iseventtest-static-method)
    - [isSkill (static method)](#isskill-static-method)
    - [isItem (static method)](#isitem-static-method)
    - [isWeapon (static method)](#isweapon-static-method)
    - [isArmor (static method)](#isarmor-static-method)
    - [createGameObjects (static method)](#creategameobjects-static-method)
    - [setupNewGame (static method)](#setupnewgame-static-method)
    - [setupBattleTest (static method)](#setupbattletest-static-method)
    - [setupEventTest (static method)](#setupeventtest-static-method)
    - [isAnySavefileExists (static method)](#isanysavefileexists-static-method)
    - [latestSavefileId (static method)](#latestsavefileid-static-method)
    - [earliestSavefileId (static method)](#earliestsavefileid-static-method)
    - [emptySavefileId (static method)](#emptysavefileid-static-method)
    - [loadAllSavefileImages (static method)](#loadallsavefileimages-static-method)
    - [loadSavefileImages (static method)](#loadsavefileimages-static-method)
    - [maxSavefiles (static method)](#maxsavefiles-static-method)
    - [savefileInfo (static method)](#savefileinfo-static-method)
    - [savefileExists (static method)](#savefileexists-static-method)
    - [saveGame (static method)](#savegame-static-method)
    - [loadGame (static method)](#loadgame-static-method)
    - [makeSavename (static method)](#makesavename-static-method)
    - [selectSavefileForNewGame (static method)](#selectsavefilefornewgame-static-method)
    - [makeSavefileInfo (static method)](#makesavefileinfo-static-method)
    - [makeSaveContents (static method)](#makesavecontents-static-method)
    - [extractSaveContents (static method)](#extractsavecontents-static-method)
    - [correctDataErrors (static method)](#correctdataerrors-static-method)
  - [RmmzError (interface)](#rmmzerror-interface)

---

# utils

## DataManager (class)

DataManager

The static class that manages the database and game objects.

**Signature**

```ts
export declare class DataManager {
  constructor()
}
```

### loadGlobalInfo (static method)

**Signature**

```ts
static loadGlobalInfo(): Promise<0 | undefined>;
```

### removeInvalidGlobalInfo (static method)

**Signature**

```ts
static removeInvalidGlobalInfo(): void;
```

### saveGlobalInfo (static method)

**Signature**

```ts
static saveGlobalInfo(): void;
```

### isGlobalInfoLoaded (static method)

**Signature**

```ts
static isGlobalInfoLoaded(): boolean;
```

### loadDatabase (static method)

**Signature**

```ts
static loadDatabase(): void;
```

### loadDataFile (static method)

**Signature**

```ts
static loadDataFile(name: string, src: string): void;
```

### onXhrLoad (static method)

**Signature**

```ts
static onXhrLoad(xhr: XMLHttpRequest, name: string, src: string, url: string): void;
```

### onXhrError (static method)

**Signature**

```ts
static onXhrError(name: string, src: string, url: string): void;
```

### isDatabaseLoaded (static method)

**Signature**

```ts
static isDatabaseLoaded(): boolean;
```

### loadMapData (static method)

**Signature**

```ts
static loadMapData(mapId: number): void;
```

### makeEmptyMap (static method)

**Signature**

```ts
static makeEmptyMap(): void;
```

### isMapLoaded (static method)

**Signature**

```ts
static isMapLoaded(): boolean;
```

### onLoad (static method)

**Signature**

```ts
static onLoad(object: unknown): void;
```

### isMapObject (static method)

**Signature**

```ts
static isMapObject(object: unknown): object is DataMap;
```

### extractArrayMetadata (static method)

**Signature**

```ts
static extractArrayMetadata(array: unknown): void;
```

### extractMetadata (static method)

**Signature**

```ts
static extractMetadata(data: {
        note: string;
        meta?: Meta;
    }): void;
```

### checkError (static method)

**Signature**

```ts
static checkError(): void;
```

### isBattleTest (static method)

**Signature**

```ts
static isBattleTest(): boolean;
```

### isEventTest (static method)

**Signature**

```ts
static isEventTest(): boolean;
```

### isSkill (static method)

**Signature**

```ts
static isSkill(item: unknown): item is DataSkill;
```

### isItem (static method)

**Signature**

```ts
static isItem(item: unknown): item is DataItem;
```

### isWeapon (static method)

**Signature**

```ts
static isWeapon(item: unknown): item is DataWeapon;
```

### isArmor (static method)

**Signature**

```ts
static isArmor(item: unknown): item is DataArmor;
```

### createGameObjects (static method)

**Signature**

```ts
static createGameObjects(): void;
```

### setupNewGame (static method)

**Signature**

```ts
static setupNewGame(): void;
```

### setupBattleTest (static method)

**Signature**

```ts
static setupBattleTest(): void;
```

### setupEventTest (static method)

**Signature**

```ts
static setupEventTest(): void;
```

### isAnySavefileExists (static method)

**Signature**

```ts
static isAnySavefileExists(): boolean;
```

### latestSavefileId (static method)

**Signature**

```ts
static latestSavefileId(): number;
```

### earliestSavefileId (static method)

**Signature**

```ts
static earliestSavefileId(): number;
```

### emptySavefileId (static method)

**Signature**

```ts
static emptySavefileId(): number;
```

### loadAllSavefileImages (static method)

**Signature**

```ts
static loadAllSavefileImages(): void;
```

### loadSavefileImages (static method)

**Signature**

```ts
static loadSavefileImages(info: DataSaveInfo): void;
```

### maxSavefiles (static method)

**Signature**

```ts
static maxSavefiles(): number;
```

### savefileInfo (static method)

**Signature**

```ts
static savefileInfo(savefileId: number): DataSaveInfo | null | undefined;
```

### savefileExists (static method)

**Signature**

```ts
static savefileExists(savefileId: number): any;
```

### saveGame (static method)

**Signature**

```ts
static saveGame(savefileId: number): Promise<number>;
```

### loadGame (static method)

**Signature**

```ts
static loadGame(savefileId: number): Promise<number>;
```

### makeSavename (static method)

**Signature**

```ts
static makeSavename(savefileId: number): string;
```

### selectSavefileForNewGame (static method)

**Signature**

```ts
static selectSavefileForNewGame(): void;
```

### makeSavefileInfo (static method)

**Signature**

```ts
static makeSavefileInfo(): DataSaveInfo;
```

### makeSaveContents (static method)

**Signature**

```ts
static makeSaveContents(): SaveContents;
```

### extractSaveContents (static method)

**Signature**

```ts
static extractSaveContents(contents: SaveContents): void;
```

### correctDataErrors (static method)

**Signature**

```ts
static correctDataErrors(): void;
```

## RmmzError (interface)

**Signature**

```ts
export interface RmmzError {
  name: string
  src: string
  url: string
}
```
