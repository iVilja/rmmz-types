---
title: scenes/Scene_Base.d.ts
nav_order: 95
parent: Modules
---

## Scene_Base.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Scene_Base (class)](#scene_base-class)
    - [create (method)](#create-method)
    - [isActive (method)](#isactive-method)
    - [isReady (method)](#isready-method)
    - [start (method)](#start-method)
    - [update (method)](#update-method)
    - [stop (method)](#stop-method)
    - [isStarted (method)](#isstarted-method)
    - [isBusy (method)](#isbusy-method)
    - [isFading (method)](#isfading-method)
    - [terminate (method)](#terminate-method)
    - [createWindowLayer (method)](#createwindowlayer-method)
    - [addWindow (method)](#addwindow-method)
    - [startFadeIn (method)](#startfadein-method)
    - [startFadeOut (method)](#startfadeout-method)
    - [createColorFilter (method)](#createcolorfilter-method)
    - [updateColorFilter (method)](#updatecolorfilter-method)
    - [updateFade (method)](#updatefade-method)
    - [updateChildren (method)](#updatechildren-method)
    - [popScene (method)](#popscene-method)
    - [checkGameover (method)](#checkgameover-method)
    - [fadeOutAll (method)](#fadeoutall-method)
    - [fadeSpeed (method)](#fadespeed-method)
    - [slowFadeSpeed (method)](#slowfadespeed-method)
    - [scaleSprite (method)](#scalesprite-method)
    - [centerSprite (method)](#centersprite-method)
    - [isBottomHelpMode (method)](#isbottomhelpmode-method)
    - [isBottomButtonMode (method)](#isbottombuttonmode-method)
    - [isRightInputMode (method)](#isrightinputmode-method)
    - [mainCommandWidth (method)](#maincommandwidth-method)
    - [buttonAreaTop (method)](#buttonareatop-method)
    - [buttonAreaBottom (method)](#buttonareabottom-method)
    - [buttonAreaHeight (method)](#buttonareaheight-method)
    - [buttonY (method)](#buttony-method)
    - [calcWindowHeight (method)](#calcwindowheight-method)
    - [requestAutosave (method)](#requestautosave-method)
    - [isAutosaveEnabled (method)](#isautosaveenabled-method)
    - [executeAutosave (method)](#executeautosave-method)
    - [onAutosaveSuccess (method)](#onautosavesuccess-method)
    - [onAutosaveFailure (method)](#onautosavefailure-method)
    - [\_started (property)](#_started-property)
    - [\_active (property)](#_active-property)
    - [\_fadeSign (property)](#_fadesign-property)
    - [\_fadeDuration (property)](#_fadeduration-property)
    - [\_fadeWhite (property)](#_fadewhite-property)
    - [\_fadeOpacity (property)](#_fadeopacity-property)
    - [\_colorFilter (property)](#_colorfilter-property)
    - [\_windowLayer (property)](#_windowlayer-property)

---

# utils

## Scene_Base (class)

**Signature**

```ts
export declare class Scene_Base {
  constructor()
}
```

### create (method)

**Signature**

```ts
create(): void;
```

### isActive (method)

**Signature**

```ts
isActive(): boolean;
```

### isReady (method)

**Signature**

```ts
isReady(): boolean;
```

### start (method)

**Signature**

```ts
start(): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### stop (method)

**Signature**

```ts
stop(): void;
```

### isStarted (method)

**Signature**

```ts
isStarted(): boolean;
```

### isBusy (method)

**Signature**

```ts
isBusy(): boolean;
```

### isFading (method)

**Signature**

```ts
isFading(): boolean;
```

### terminate (method)

**Signature**

```ts
terminate(): void;
```

### createWindowLayer (method)

**Signature**

```ts
createWindowLayer(): void;
```

### addWindow (method)

**Signature**

```ts
addWindow(window: PIXI.Container): void;
```

### startFadeIn (method)

**Signature**

```ts
startFadeIn(duration: number, white?: number | boolean): void;
```

### startFadeOut (method)

**Signature**

```ts
startFadeOut(duration: number, white?: number | boolean): void;
```

### createColorFilter (method)

**Signature**

```ts
createColorFilter(): void;
```

### updateColorFilter (method)

**Signature**

```ts
updateColorFilter(): void;
```

### updateFade (method)

**Signature**

```ts
updateFade(): void;
```

### updateChildren (method)

**Signature**

```ts
updateChildren(): void;
```

### popScene (method)

**Signature**

```ts
popScene(): void;
```

### checkGameover (method)

**Signature**

```ts
checkGameover(): void;
```

### fadeOutAll (method)

**Signature**

```ts
fadeOutAll(): void;
```

### fadeSpeed (method)

**Signature**

```ts
fadeSpeed(): number;
```

### slowFadeSpeed (method)

**Signature**

```ts
slowFadeSpeed(): number;
```

### scaleSprite (method)

**Signature**

```ts
scaleSprite(sprite: Sprite): void;
```

### centerSprite (method)

**Signature**

```ts
centerSprite(sprite: Sprite): void;
```

### isBottomHelpMode (method)

**Signature**

```ts
isBottomHelpMode(): boolean;
```

### isBottomButtonMode (method)

**Signature**

```ts
isBottomButtonMode(): boolean;
```

### isRightInputMode (method)

**Signature**

```ts
isRightInputMode(): boolean;
```

### mainCommandWidth (method)

**Signature**

```ts
mainCommandWidth(): number;
```

### buttonAreaTop (method)

**Signature**

```ts
buttonAreaTop(): number;
```

### buttonAreaBottom (method)

**Signature**

```ts
buttonAreaBottom(): number;
```

### buttonAreaHeight (method)

**Signature**

```ts
buttonAreaHeight(): number;
```

### buttonY (method)

**Signature**

```ts
buttonY(): number;
```

### calcWindowHeight (method)

**Signature**

```ts
calcWindowHeight(numLines: number, selectable: boolean): number;
```

### requestAutosave (method)

**Signature**

```ts
requestAutosave(): void;
```

### isAutosaveEnabled (method)

**Signature**

```ts
isAutosaveEnabled(): boolean;
```

### executeAutosave (method)

**Signature**

```ts
executeAutosave(): void;
```

### onAutosaveSuccess (method)

**Signature**

```ts
onAutosaveSuccess(): void;
```

### onAutosaveFailure (method)

**Signature**

```ts
onAutosaveFailure(): void;
```

### \_started (property)

**Signature**

```ts
_started: boolean
```

### \_active (property)

**Signature**

```ts
_active: boolean
```

### \_fadeSign (property)

**Signature**

```ts
_fadeSign: number
```

### \_fadeDuration (property)

**Signature**

```ts
_fadeDuration: number
```

### \_fadeWhite (property)

**Signature**

```ts
_fadeWhite: number | boolean
```

### \_fadeOpacity (property)

**Signature**

```ts
_fadeOpacity: number
```

### \_colorFilter (property)

**Signature**

```ts
_colorFilter: ColorFilter
```

### \_windowLayer (property)

**Signature**

```ts
_windowLayer: WindowLayer | undefined
```
