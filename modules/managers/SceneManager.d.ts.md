---
title: managers/SceneManager.d.ts
nav_order: 60
parent: Modules
---

## SceneManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [SceneConstructor (type alias)](#sceneconstructor-type-alias)
  - [SceneManager (class)](#scenemanager-class)
    - [run (static method)](#run-static-method)
    - [initialize (static method)](#initialize-static-method)
    - [checkBrowser (static method)](#checkbrowser-static-method)
    - [checkPluginErrors (static method)](#checkpluginerrors-static-method)
    - [initGraphics (static method)](#initgraphics-static-method)
    - [initAudio (static method)](#initaudio-static-method)
    - [initVideo (static method)](#initvideo-static-method)
    - [initInput (static method)](#initinput-static-method)
    - [setupEventHandlers (static method)](#setupeventhandlers-static-method)
    - [update (static method)](#update-static-method)
    - [determineRepeatNumber (static method)](#determinerepeatnumber-static-method)
    - [terminate (static method)](#terminate-static-method)
    - [onError (static method)](#onerror-static-method)
    - [onReject (static method)](#onreject-static-method)
    - [onUnload (static method)](#onunload-static-method)
    - [onKeyDown (static method)](#onkeydown-static-method)
    - [reloadGame (static method)](#reloadgame-static-method)
    - [showDevTools (static method)](#showdevtools-static-method)
    - [catchException (static method)](#catchexception-static-method)
    - [catchNormalError (static method)](#catchnormalerror-static-method)
    - [catchLoadError (static method)](#catchloaderror-static-method)
    - [catchUnknownError (static method)](#catchunknownerror-static-method)
    - [updateMain (static method)](#updatemain-static-method)
    - [updateFrameCount (static method)](#updateframecount-static-method)
    - [updateInputData (static method)](#updateinputdata-static-method)
    - [updateEffekseer (static method)](#updateeffekseer-static-method)
    - [changeScene (static method)](#changescene-static-method)
    - [updateScene (static method)](#updatescene-static-method)
    - [isGameActive (static method)](#isgameactive-static-method)
    - [onSceneTerminate (static method)](#onsceneterminate-static-method)
    - [onSceneCreate (static method)](#onscenecreate-static-method)
    - [onBeforeSceneStart (static method)](#onbeforescenestart-static-method)
    - [onSceneStart (static method)](#onscenestart-static-method)
    - [isSceneChanging (static method)](#isscenechanging-static-method)
    - [isCurrentSceneBusy (static method)](#iscurrentscenebusy-static-method)
    - [isNextScene (static method)](#isnextscene-static-method)
    - [isPreviousScene (static method)](#ispreviousscene-static-method)
    - [goto (static method)](#goto-static-method)
    - [push (static method)](#push-static-method)
    - [pop (static method)](#pop-static-method)
    - [exit (static method)](#exit-static-method)
    - [clearStack (static method)](#clearstack-static-method)
    - [stop (static method)](#stop-static-method)
    - [prepareNextScene (static method)](#preparenextscene-static-method)
    - [snap (static method)](#snap-static-method)
    - [snapForBackground (static method)](#snapforbackground-static-method)
    - [backgroundBitmap (static method)](#backgroundbitmap-static-method)
    - [resume (static method)](#resume-static-method)

---

# utils

## SceneConstructor (type alias)

**Signature**

```ts
export declare type SceneConstructor = new () => Scene_Base
```

## SceneManager (class)

SceneManager

The static class that manages scene transitions.

**Signature**

```ts
export declare class SceneManager {
  constructor()
}
```

### run (static method)

**Signature**

```ts
static run(sceneClass: SceneConstructor): void
```

### initialize (static method)

**Signature**

```ts
static initialize(): void
```

### checkBrowser (static method)

**Signature**

```ts
static checkBrowser(): void
```

### checkPluginErrors (static method)

**Signature**

```ts
static checkPluginErrors(): void
```

### initGraphics (static method)

**Signature**

```ts
static initGraphics(): void
```

### initAudio (static method)

**Signature**

```ts
static initAudio(): void
```

### initVideo (static method)

**Signature**

```ts
static initVideo(): void
```

### initInput (static method)

**Signature**

```ts
static initInput(): void
```

### setupEventHandlers (static method)

**Signature**

```ts
static setupEventHandlers(): void
```

### update (static method)

**Signature**

```ts
static update(deltaTime: number): void
```

### determineRepeatNumber (static method)

**Signature**

```ts
static determineRepeatNumber(deltaTime: number): number
```

### terminate (static method)

**Signature**

```ts
static terminate(): void
```

### onError (static method)

**Signature**

```ts
static onError(event: ErrorEvent): void
```

### onReject (static method)

**Signature**

```ts
static onReject(event: PromiseRejectionEvent): void
```

### onUnload (static method)

**Signature**

```ts
static onUnload(): void
```

### onKeyDown (static method)

**Signature**

```ts
static onKeyDown(event: KeyboardEvent): void
```

### reloadGame (static method)

**Signature**

```ts
static reloadGame(): void
```

### showDevTools (static method)

**Signature**

```ts
static showDevTools(): void
```

### catchException (static method)

**Signature**

```ts
static catchException(e: unknown): void
```

### catchNormalError (static method)

**Signature**

```ts
static catchNormalError(e: Error): void
```

### catchLoadError (static method)

**Signature**

```ts
static catchLoadError(e: ["LoadError", string, () => void]): void
```

### catchUnknownError (static method)

**Signature**

```ts
static catchUnknownError(e: unknown): void
```

### updateMain (static method)

**Signature**

```ts
static updateMain(): void
```

### updateFrameCount (static method)

**Signature**

```ts
static updateFrameCount(): void
```

### updateInputData (static method)

**Signature**

```ts
static updateInputData(): void
```

### updateEffekseer (static method)

**Signature**

```ts
static updateEffekseer(): void
```

### changeScene (static method)

**Signature**

```ts
static changeScene(): void
```

### updateScene (static method)

**Signature**

```ts
static updateScene(): void
```

### isGameActive (static method)

**Signature**

```ts
static isGameActive(): boolean
```

### onSceneTerminate (static method)

**Signature**

```ts
static onSceneTerminate(): void
```

### onSceneCreate (static method)

**Signature**

```ts
static onSceneCreate(): void
```

### onBeforeSceneStart (static method)

**Signature**

```ts
static onBeforeSceneStart(): void
```

### onSceneStart (static method)

**Signature**

```ts
static onSceneStart(): void
```

### isSceneChanging (static method)

**Signature**

```ts
static isSceneChanging(): boolean
```

### isCurrentSceneBusy (static method)

**Signature**

```ts
static isCurrentSceneBusy(): boolean | null
```

### isNextScene (static method)

**Signature**

```ts
static isNextScene(sceneClass: SceneConstructor): boolean | null
```

### isPreviousScene (static method)

**Signature**

```ts
static isPreviousScene(sceneClass: SceneConstructor): boolean
```

### goto (static method)

**Signature**

```ts
static goto(sceneClass: SceneConstructor | null): void
```

### push (static method)

**Signature**

```ts
static push(sceneClass: SceneConstructor): void
```

### pop (static method)

**Signature**

```ts
static pop(): void
```

### exit (static method)

**Signature**

```ts
static exit(): void
```

### clearStack (static method)

**Signature**

```ts
static clearStack(): void
```

### stop (static method)

**Signature**

```ts
static stop(): void
```

### prepareNextScene (static method)

**Signature**

```ts
static prepareNextScene<
    T extends Scene_Base & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      prepare: (...args: any[]) => void
    }
  >(...args: Parameters<T["prepare"]>): void
```

### snap (static method)

**Signature**

```ts
static snap(): Bitmap
```

### snapForBackground (static method)

**Signature**

```ts
static snapForBackground(): void
```

### backgroundBitmap (static method)

**Signature**

```ts
static backgroundBitmap(): Bitmap | null
```

### resume (static method)

**Signature**

```ts
static resume(): void
```
