---
title: objects/Game_System.d.ts
nav_order: 86
parent: Modules
---

## Game_System.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_System (class)](#game_system-class)
    - [isJapanese (method)](#isjapanese-method)
    - [isChinese (method)](#ischinese-method)
    - [isKorean (method)](#iskorean-method)
    - [isCJK (method)](#iscjk-method)
    - [isRussian (method)](#isrussian-method)
    - [isSideView (method)](#issideview-method)
    - [isAutosaveEnabled (method)](#isautosaveenabled-method)
    - [isSaveEnabled (method)](#issaveenabled-method)
    - [disableSave (method)](#disablesave-method)
    - [enableSave (method)](#enablesave-method)
    - [isMenuEnabled (method)](#ismenuenabled-method)
    - [disableMenu (method)](#disablemenu-method)
    - [enableMenu (method)](#enablemenu-method)
    - [isEncounterEnabled (method)](#isencounterenabled-method)
    - [disableEncounter (method)](#disableencounter-method)
    - [enableEncounter (method)](#enableencounter-method)
    - [isFormationEnabled (method)](#isformationenabled-method)
    - [disableFormation (method)](#disableformation-method)
    - [enableFormation (method)](#enableformation-method)
    - [battleCount (method)](#battlecount-method)
    - [winCount (method)](#wincount-method)
    - [escapeCount (method)](#escapecount-method)
    - [saveCount (method)](#savecount-method)
    - [versionId (method)](#versionid-method)
    - [savefileId (method)](#savefileid-method)
    - [setSavefileId (method)](#setsavefileid-method)
    - [windowTone (method)](#windowtone-method)
    - [setWindowTone (method)](#setwindowtone-method)
    - [battleBgm (method)](#battlebgm-method)
    - [setBattleBgm (method)](#setbattlebgm-method)
    - [victoryMe (method)](#victoryme-method)
    - [setVictoryMe (method)](#setvictoryme-method)
    - [defeatMe (method)](#defeatme-method)
    - [setDefeatMe (method)](#setdefeatme-method)
    - [onBattleStart (method)](#onbattlestart-method)
    - [onBattleWin (method)](#onbattlewin-method)
    - [onBattleEscape (method)](#onbattleescape-method)
    - [onBeforeSave (method)](#onbeforesave-method)
    - [onAfterLoad (method)](#onafterload-method)
    - [playtime (method)](#playtime-method)
    - [playtimeText (method)](#playtimetext-method)
    - [saveBgm (method)](#savebgm-method)
    - [replayBgm (method)](#replaybgm-method)
    - [saveWalkingBgm (method)](#savewalkingbgm-method)
    - [replayWalkingBgm (method)](#replaywalkingbgm-method)
    - [saveWalkingBgm2 (method)](#savewalkingbgm2-method)
    - [mainFontFace (method)](#mainfontface-method)
    - [numberFontFace (method)](#numberfontface-method)
    - [mainFontSize (method)](#mainfontsize-method)
    - [windowPadding (method)](#windowpadding-method)
    - [windowOpacity (method)](#windowopacity-method)
    - [\_saveEnabled (property)](#_saveenabled-property)
    - [\_menuEnabled (property)](#_menuenabled-property)
    - [\_encounterEnabled (property)](#_encounterenabled-property)
    - [\_formationEnabled (property)](#_formationenabled-property)
    - [\_battleCount (property)](#_battlecount-property)
    - [\_winCount (property)](#_wincount-property)
    - [\_escapeCount (property)](#_escapecount-property)
    - [\_saveCount (property)](#_savecount-property)
    - [\_versionId (property)](#_versionid-property)
    - [\_savefileId (property)](#_savefileid-property)
    - [\_framesOnSave (property)](#_framesonsave-property)
    - [\_bgmOnSave (property)](#_bgmonsave-property)
    - [\_bgsOnSave (property)](#_bgsonsave-property)
    - [\_windowTone (property)](#_windowtone-property)
    - [\_battleBgm (property)](#_battlebgm-property)
    - [\_victoryMe (property)](#_victoryme-property)
    - [\_defeatMe (property)](#_defeatme-property)
    - [\_savedBgm (property)](#_savedbgm-property)
    - [\_walkingBgm (property)](#_walkingbgm-property)

---

# utils

## Game_System (class)

Game_System

The game object class for the system data.

**Signature**

```ts
export declare class Game_System
```

### isJapanese (method)

**Signature**

```ts
isJapanese(): RegExpMatchArray | null;
```

### isChinese (method)

**Signature**

```ts
isChinese(): RegExpMatchArray | null;
```

### isKorean (method)

**Signature**

```ts
isKorean(): RegExpMatchArray | null;
```

### isCJK (method)

**Signature**

```ts
isCJK(): RegExpMatchArray | null;
```

### isRussian (method)

**Signature**

```ts
isRussian(): RegExpMatchArray | null;
```

### isSideView (method)

**Signature**

```ts
isSideView(): boolean;
```

### isAutosaveEnabled (method)

**Signature**

```ts
isAutosaveEnabled(): boolean;
```

### isSaveEnabled (method)

**Signature**

```ts
isSaveEnabled(): boolean;
```

### disableSave (method)

**Signature**

```ts
disableSave(): void;
```

### enableSave (method)

**Signature**

```ts
enableSave(): void;
```

### isMenuEnabled (method)

**Signature**

```ts
isMenuEnabled(): boolean;
```

### disableMenu (method)

**Signature**

```ts
disableMenu(): void;
```

### enableMenu (method)

**Signature**

```ts
enableMenu(): void;
```

### isEncounterEnabled (method)

**Signature**

```ts
isEncounterEnabled(): boolean;
```

### disableEncounter (method)

**Signature**

```ts
disableEncounter(): void;
```

### enableEncounter (method)

**Signature**

```ts
enableEncounter(): void;
```

### isFormationEnabled (method)

**Signature**

```ts
isFormationEnabled(): boolean;
```

### disableFormation (method)

**Signature**

```ts
disableFormation(): void;
```

### enableFormation (method)

**Signature**

```ts
enableFormation(): void;
```

### battleCount (method)

**Signature**

```ts
battleCount(): number;
```

### winCount (method)

**Signature**

```ts
winCount(): number;
```

### escapeCount (method)

**Signature**

```ts
escapeCount(): number;
```

### saveCount (method)

**Signature**

```ts
saveCount(): number;
```

### versionId (method)

**Signature**

```ts
versionId(): number;
```

### savefileId (method)

**Signature**

```ts
savefileId(): number;
```

### setSavefileId (method)

**Signature**

```ts
setSavefileId(savefileId: number): void;
```

### windowTone (method)

**Signature**

```ts
windowTone(): Color;
```

### setWindowTone (method)

**Signature**

```ts
setWindowTone(value: Color): void;
```

### battleBgm (method)

**Signature**

```ts
battleBgm(): DataAudio;
```

### setBattleBgm (method)

**Signature**

```ts
setBattleBgm(value: DataAudio): void;
```

### victoryMe (method)

**Signature**

```ts
victoryMe(): DataAudio;
```

### setVictoryMe (method)

**Signature**

```ts
setVictoryMe(value: DataAudio): void;
```

### defeatMe (method)

**Signature**

```ts
defeatMe(): DataAudio;
```

### setDefeatMe (method)

**Signature**

```ts
setDefeatMe(value: DataAudio): void;
```

### onBattleStart (method)

**Signature**

```ts
onBattleStart(): void;
```

### onBattleWin (method)

**Signature**

```ts
onBattleWin(): void;
```

### onBattleEscape (method)

**Signature**

```ts
onBattleEscape(): void;
```

### onBeforeSave (method)

**Signature**

```ts
onBeforeSave(): void;
```

### onAfterLoad (method)

**Signature**

```ts
onAfterLoad(): void;
```

### playtime (method)

**Signature**

```ts
playtime(): number;
```

### playtimeText (method)

**Signature**

```ts
playtimeText(): string;
```

### saveBgm (method)

**Signature**

```ts
saveBgm(): void;
```

### replayBgm (method)

**Signature**

```ts
replayBgm(): void;
```

### saveWalkingBgm (method)

**Signature**

```ts
saveWalkingBgm(): void;
```

### replayWalkingBgm (method)

**Signature**

```ts
replayWalkingBgm(): void;
```

### saveWalkingBgm2 (method)

**Signature**

```ts
saveWalkingBgm2(): void;
```

### mainFontFace (method)

**Signature**

```ts
mainFontFace(): string;
```

### numberFontFace (method)

**Signature**

```ts
numberFontFace(): string;
```

### mainFontSize (method)

**Signature**

```ts
mainFontSize(): number;
```

### windowPadding (method)

**Signature**

```ts
windowPadding(): number;
```

### windowOpacity (method)

**Signature**

```ts
windowOpacity(): number;
```

### \_saveEnabled (property)

**Signature**

```ts
_saveEnabled: boolean
```

### \_menuEnabled (property)

**Signature**

```ts
_menuEnabled: boolean
```

### \_encounterEnabled (property)

**Signature**

```ts
_encounterEnabled: boolean
```

### \_formationEnabled (property)

**Signature**

```ts
_formationEnabled: boolean
```

### \_battleCount (property)

**Signature**

```ts
_battleCount: number
```

### \_winCount (property)

**Signature**

```ts
_winCount: number
```

### \_escapeCount (property)

**Signature**

```ts
_escapeCount: number
```

### \_saveCount (property)

**Signature**

```ts
_saveCount: number
```

### \_versionId (property)

**Signature**

```ts
_versionId: number
```

### \_savefileId (property)

**Signature**

```ts
_savefileId: number
```

### \_framesOnSave (property)

**Signature**

```ts
_framesOnSave: number
```

### \_bgmOnSave (property)

**Signature**

```ts
_bgmOnSave: DataAudio | null
```

### \_bgsOnSave (property)

**Signature**

```ts
_bgsOnSave: DataAudio | null
```

### \_windowTone (property)

**Signature**

```ts
_windowTone: Color | null
```

### \_battleBgm (property)

**Signature**

```ts
_battleBgm: DataAudio | null
```

### \_victoryMe (property)

**Signature**

```ts
_victoryMe: DataAudio | null
```

### \_defeatMe (property)

**Signature**

```ts
_defeatMe: DataAudio | null
```

### \_savedBgm (property)

**Signature**

```ts
_savedBgm: DataAudio | null
```

### \_walkingBgm (property)

**Signature**

```ts
_walkingBgm: DataAudio | null
```
