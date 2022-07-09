---
title: scenes/Scene_Map.d.ts
nav_order: 107
parent: Modules
---

## Scene_Map.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Scene_Map (class)](#scene_map-class)
    - [create (method)](#create-method)
    - [isReady (method)](#isready-method)
    - [onMapLoaded (method)](#onmaploaded-method)
    - [onTransfer (method)](#ontransfer-method)
    - [start (method)](#start-method)
    - [onTransferEnd (method)](#ontransferend-method)
    - [shouldAutosave (method)](#shouldautosave-method)
    - [update (method)](#update-method)
    - [updateMainMultiply (method)](#updatemainmultiply-method)
    - [updateMain (method)](#updatemain-method)
    - [isPlayerActive (method)](#isplayeractive-method)
    - [isFastForward (method)](#isfastforward-method)
    - [stop (method)](#stop-method)
    - [isBusy (method)](#isbusy-method)
    - [terminate (method)](#terminate-method)
    - [needsFadeIn (method)](#needsfadein-method)
    - [needsSlowFadeOut (method)](#needsslowfadeout-method)
    - [updateWaitCount (method)](#updatewaitcount-method)
    - [updateDestination (method)](#updatedestination-method)
    - [updateMenuButton (method)](#updatemenubutton-method)
    - [hideMenuButton (method)](#hidemenubutton-method)
    - [updateMapNameWindow (method)](#updatemapnamewindow-method)
    - [isMenuEnabled (method)](#ismenuenabled-method)
    - [isMapTouchOk (method)](#ismaptouchok-method)
    - [processMapTouch (method)](#processmaptouch-method)
    - [isAnyButtonPressed (method)](#isanybuttonpressed-method)
    - [onMapTouch (method)](#onmaptouch-method)
    - [isSceneChangeOk (method)](#isscenechangeok-method)
    - [updateScene (method)](#updatescene-method)
    - [createDisplayObjects (method)](#createdisplayobjects-method)
    - [createSpriteset (method)](#createspriteset-method)
    - [createAllWindows (method)](#createallwindows-method)
    - [createMapNameWindow (method)](#createmapnamewindow-method)
    - [mapNameWindowRect (method)](#mapnamewindowrect-method)
    - [createButtons (method)](#createbuttons-method)
    - [createMenuButton (method)](#createmenubutton-method)
    - [updateTransferPlayer (method)](#updatetransferplayer-method)
    - [updateEncounter (method)](#updateencounter-method)
    - [updateCallMenu (method)](#updatecallmenu-method)
    - [isMenuCalled (method)](#ismenucalled-method)
    - [callMenu (method)](#callmenu-method)
    - [updateCallDebug (method)](#updatecalldebug-method)
    - [isDebugCalled (method)](#isdebugcalled-method)
    - [fadeInForTransfer (method)](#fadeinfortransfer-method)
    - [fadeOutForTransfer (method)](#fadeoutfortransfer-method)
    - [launchBattle (method)](#launchbattle-method)
    - [stopAudioOnBattleStart (method)](#stopaudioonbattlestart-method)
    - [startEncounterEffect (method)](#startencountereffect-method)
    - [updateEncounterEffect (method)](#updateencountereffect-method)
    - [snapForBattleBackground (method)](#snapforbattlebackground-method)
    - [startFlashForEncounter (method)](#startflashforencounter-method)
    - [encounterEffectSpeed (method)](#encountereffectspeed-method)
    - [isMessageWindowClosing (method)](#ismessagewindowclosing-method)
    - [\_waitCount (property)](#_waitcount-property)
    - [\_encounterEffectDuration (property)](#_encountereffectduration-property)
    - [\_mapLoaded (property)](#_maploaded-property)
    - [\_touchCount (property)](#_touchcount-property)
    - [\_menuEnabled (property)](#_menuenabled-property)
    - [\_transfer (property)](#_transfer-property)
    - [\_lastMapWasNull (property)](#_lastmapwasnull-property)
    - [\_mapNameWindow (property)](#_mapnamewindow-property)
    - [\_spriteset (property)](#_spriteset-property)
    - [menuCalling (property)](#menucalling-property)
    - [\_menuButton (property)](#_menubutton-property)
    - [\_windowLayer (property)](#_windowlayer-property)

---

# utils

## Scene_Map (class)

**Signature**

```ts
export declare class Scene_Map
```

### create (method)

**Signature**

```ts
create(): void
```

### isReady (method)

**Signature**

```ts
isReady(): boolean
```

### onMapLoaded (method)

**Signature**

```ts
onMapLoaded(): void
```

### onTransfer (method)

**Signature**

```ts
onTransfer(): void
```

### start (method)

**Signature**

```ts
start(): void
```

### onTransferEnd (method)

**Signature**

```ts
onTransferEnd(): void
```

### shouldAutosave (method)

**Signature**

```ts
shouldAutosave(): boolean
```

### update (method)

**Signature**

```ts
update(): void
```

### updateMainMultiply (method)

**Signature**

```ts
updateMainMultiply(): void
```

### updateMain (method)

**Signature**

```ts
updateMain(): void
```

### isPlayerActive (method)

**Signature**

```ts
isPlayerActive(): boolean
```

### isFastForward (method)

**Signature**

```ts
isFastForward(): boolean
```

### stop (method)

**Signature**

```ts
stop(): void
```

### isBusy (method)

**Signature**

```ts
isBusy(): boolean
```

### terminate (method)

**Signature**

```ts
terminate(): void
```

### needsFadeIn (method)

**Signature**

```ts
needsFadeIn(): boolean
```

### needsSlowFadeOut (method)

**Signature**

```ts
needsSlowFadeOut(): boolean | null
```

### updateWaitCount (method)

**Signature**

```ts
updateWaitCount(): boolean
```

### updateDestination (method)

**Signature**

```ts
updateDestination(): void
```

### updateMenuButton (method)

**Signature**

```ts
updateMenuButton(): void
```

### hideMenuButton (method)

**Signature**

```ts
hideMenuButton(): void
```

### updateMapNameWindow (method)

**Signature**

```ts
updateMapNameWindow(): void
```

### isMenuEnabled (method)

**Signature**

```ts
isMenuEnabled(): boolean
```

### isMapTouchOk (method)

**Signature**

```ts
isMapTouchOk(): boolean
```

### processMapTouch (method)

**Signature**

```ts
processMapTouch(): void
```

### isAnyButtonPressed (method)

**Signature**

```ts
isAnyButtonPressed(): boolean
```

### onMapTouch (method)

**Signature**

```ts
onMapTouch(): void
```

### isSceneChangeOk (method)

**Signature**

```ts
isSceneChangeOk(): boolean
```

### updateScene (method)

**Signature**

```ts
updateScene(): void
```

### createDisplayObjects (method)

**Signature**

```ts
createDisplayObjects(): void
```

### createSpriteset (method)

**Signature**

```ts
createSpriteset(): void
```

### createAllWindows (method)

**Signature**

```ts
createAllWindows(): void
```

### createMapNameWindow (method)

**Signature**

```ts
createMapNameWindow(): void
```

### mapNameWindowRect (method)

**Signature**

```ts
mapNameWindowRect(): Rectangle
```

### createButtons (method)

**Signature**

```ts
createButtons(): void
```

### createMenuButton (method)

**Signature**

```ts
createMenuButton(): void
```

### updateTransferPlayer (method)

**Signature**

```ts
updateTransferPlayer(): void
```

### updateEncounter (method)

**Signature**

```ts
updateEncounter(): void
```

### updateCallMenu (method)

**Signature**

```ts
updateCallMenu(): void
```

### isMenuCalled (method)

**Signature**

```ts
isMenuCalled(): boolean
```

### callMenu (method)

**Signature**

```ts
callMenu(): void
```

### updateCallDebug (method)

**Signature**

```ts
updateCallDebug(): void
```

### isDebugCalled (method)

**Signature**

```ts
isDebugCalled(): boolean
```

### fadeInForTransfer (method)

**Signature**

```ts
fadeInForTransfer(): void
```

### fadeOutForTransfer (method)

**Signature**

```ts
fadeOutForTransfer(): void
```

### launchBattle (method)

**Signature**

```ts
launchBattle(): void
```

### stopAudioOnBattleStart (method)

**Signature**

```ts
stopAudioOnBattleStart(): void
```

### startEncounterEffect (method)

**Signature**

```ts
startEncounterEffect(): void
```

### updateEncounterEffect (method)

**Signature**

```ts
updateEncounterEffect(): void
```

### snapForBattleBackground (method)

**Signature**

```ts
snapForBattleBackground(): void
```

### startFlashForEncounter (method)

**Signature**

```ts
startFlashForEncounter(duration: number): void
```

### encounterEffectSpeed (method)

**Signature**

```ts
encounterEffectSpeed(): number
```

### isMessageWindowClosing (method)

**Signature**

```ts
isMessageWindowClosing(): boolean
```

### \_waitCount (property)

**Signature**

```ts
_waitCount: number
```

### \_encounterEffectDuration (property)

**Signature**

```ts
_encounterEffectDuration: number
```

### \_mapLoaded (property)

**Signature**

```ts
_mapLoaded: boolean
```

### \_touchCount (property)

**Signature**

```ts
_touchCount: number
```

### \_menuEnabled (property)

**Signature**

```ts
_menuEnabled: boolean
```

### \_transfer (property)

**Signature**

```ts
_transfer: boolean
```

### \_lastMapWasNull (property)

**Signature**

```ts
_lastMapWasNull: boolean
```

### \_mapNameWindow (property)

**Signature**

```ts
_mapNameWindow: Window_MapName
```

### \_spriteset (property)

**Signature**

```ts
_spriteset: Spriteset_Map
```

### menuCalling (property)

**Signature**

```ts
menuCalling: boolean
```

### \_menuButton (property)

**Signature**

```ts
_menuButton: Sprite_Button | undefined
```

### \_windowLayer (property)

**Signature**

```ts
_windowLayer: WindowLayer
```
