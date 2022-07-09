---
title: core/Graphics.d.ts
nav_order: 3
parent: Modules
---

## Graphics.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Graphics (class)](#graphics-class)
    - [initialize (static method)](#initialize-static-method)
    - [setTickHandler (static method)](#settickhandler-static-method)
    - [startGameLoop (static method)](#startgameloop-static-method)
    - [stopGameLoop (static method)](#stopgameloop-static-method)
    - [setStage (static method)](#setstage-static-method)
    - [startLoading (static method)](#startloading-static-method)
    - [endLoading (static method)](#endloading-static-method)
    - [printError (static method)](#printerror-static-method)
    - [showRetryButton (static method)](#showretrybutton-static-method)
    - [eraseError (static method)](#eraseerror-static-method)
    - [pageToCanvasX (static method)](#pagetocanvasx-static-method)
    - [pageToCanvasY (static method)](#pagetocanvasy-static-method)
    - [isInsideCanvas (static method)](#isinsidecanvas-static-method)
    - [showScreen (static method)](#showscreen-static-method)
    - [hideScreen (static method)](#hidescreen-static-method)
    - [resize (static method)](#resize-static-method)
    - [\_createAllElements (static method)](#_createallelements-static-method)
    - [\_updateAllElements (static method)](#_updateallelements-static-method)
    - [\_onTick (static method)](#_ontick-static-method)
    - [\_canRender (static method)](#_canrender-static-method)
    - [\_updateRealScale (static method)](#_updaterealscale-static-method)
    - [\_stretchWidth (static method)](#_stretchwidth-static-method)
    - [\_stretchHeight (static method)](#_stretchheight-static-method)
    - [\_makeErrorHtml (static method)](#_makeerrorhtml-static-method)
    - [\_defaultStretchMode (static method)](#_defaultstretchmode-static-method)
    - [\_createErrorPrinter (static method)](#_createerrorprinter-static-method)
    - [\_updateErrorPrinter (static method)](#_updateerrorprinter-static-method)
    - [\_createCanvas (static method)](#_createcanvas-static-method)
    - [\_updateCanvas (static method)](#_updatecanvas-static-method)
    - [\_updateVideo (static method)](#_updatevideo-static-method)
    - [\_createLoadingSpinner (static method)](#_createloadingspinner-static-method)
    - [\_createFPSCounter (static method)](#_createfpscounter-static-method)
    - [\_centerElement (static method)](#_centerelement-static-method)
    - [\_disableContextMenu (static method)](#_disablecontextmenu-static-method)
    - [\_applyCanvasFilter (static method)](#_applycanvasfilter-static-method)
    - [\_clearCanvasFilter (static method)](#_clearcanvasfilter-static-method)
    - [\_setupEventHandlers (static method)](#_setupeventhandlers-static-method)
    - [\_onWindowResize (static method)](#_onwindowresize-static-method)
    - [\_onKeyDown (static method)](#_onkeydown-static-method)
    - [\_switchFPSCounter (static method)](#_switchfpscounter-static-method)
    - [\_switchStretchMode (static method)](#_switchstretchmode-static-method)
    - [\_switchFullScreen (static method)](#_switchfullscreen-static-method)
    - [\_isFullScreen (static method)](#_isfullscreen-static-method)
    - [\_requestFullScreen (static method)](#_requestfullscreen-static-method)
    - [\_cancelFullScreen (static method)](#_cancelfullscreen-static-method)
    - [\_createPixiApp (static method)](#_createpixiapp-static-method)
    - [\_setupPixi (static method)](#_setuppixi-static-method)
    - [\_createEffekseerContext (static method)](#_createeffekseercontext-static-method)

---

# utils

## Graphics (class)

The static class that carries out graphics processing.

**Signature**

```ts
export declare class Graphics {
  constructor()
}
```

### initialize (static method)

Initializes the graphics system.

**Signature**

```ts
static initialize(): boolean
```

### setTickHandler (static method)

Register a handler for tick events.

**Signature**

```ts
static setTickHandler(handler: (deltaTime: number) => void): void
```

### startGameLoop (static method)

Starts the game loop.

**Signature**

```ts
static startGameLoop(): void
```

### stopGameLoop (static method)

Stops the game loop.

**Signature**

```ts
static stopGameLoop(): void
```

### setStage (static method)

Sets the stage to be rendered.

**Signature**

```ts
static setStage(stage: Stage | null): void
```

### startLoading (static method)

Shows the loading spinner.

**Signature**

```ts
static startLoading(): void
```

### endLoading (static method)

Erases the loading spinner.

**Signature**

```ts
static endLoading(): boolean
```

### printError (static method)

Displays the error text to the screen.

**Signature**

```ts
static printError(name: string, message: string, error?: Error | ErrorEvent): void
```

### showRetryButton (static method)

Displays a button to try to reload resources.

**Signature**

```ts
static showRetryButton(retry: () => void): void
```

### eraseError (static method)

Erases the loading error text.

**Signature**

```ts
static eraseError(): void
```

### pageToCanvasX (static method)

Converts an x coordinate on the page to the corresponding
x coordinate on the canvas area.

**Signature**

```ts
static pageToCanvasX(x: number): number
```

### pageToCanvasY (static method)

Converts a y coordinate on the page to the corresponding
y coordinate on the canvas area.

**Signature**

```ts
static pageToCanvasY(y: number): number
```

### isInsideCanvas (static method)

Checks whether the specified point is inside the game canvas area.

**Signature**

```ts
static isInsideCanvas(x: number, y: number): boolean
```

### showScreen (static method)

Shows the game screen.

**Signature**

```ts
static showScreen(): void
```

### hideScreen (static method)

Hides the game screen.

**Signature**

```ts
static hideScreen(): void
```

### resize (static method)

Changes the size of the game screen.

**Signature**

```ts
static resize(width: number, height: number): void
```

### \_createAllElements (static method)

**Signature**

```ts
static _createAllElements(): void
```

### \_updateAllElements (static method)

**Signature**

```ts
static _updateAllElements(): void
```

### \_onTick (static method)

**Signature**

```ts
static _onTick(deltaTime: number): void
```

### \_canRender (static method)

**Signature**

```ts
static _canRender(): boolean
```

### \_updateRealScale (static method)

**Signature**

```ts
static _updateRealScale(): void
```

### \_stretchWidth (static method)

**Signature**

```ts
static _stretchWidth(): number
```

### \_stretchHeight (static method)

**Signature**

```ts
static _stretchHeight(): number
```

### \_makeErrorHtml (static method)

**Signature**

```ts
static _makeErrorHtml(name?: string, message?: string, _error?: Error | ErrorEvent): string
```

### \_defaultStretchMode (static method)

**Signature**

```ts
static _defaultStretchMode(): boolean
```

### \_createErrorPrinter (static method)

**Signature**

```ts
static _createErrorPrinter(): void
```

### \_updateErrorPrinter (static method)

**Signature**

```ts
static _updateErrorPrinter(): void
```

### \_createCanvas (static method)

**Signature**

```ts
static _createCanvas(): void
```

### \_updateCanvas (static method)

**Signature**

```ts
static _updateCanvas(): void
```

### \_updateVideo (static method)

**Signature**

```ts
static _updateVideo(): void
```

### \_createLoadingSpinner (static method)

**Signature**

```ts
static _createLoadingSpinner(): void
```

### \_createFPSCounter (static method)

**Signature**

```ts
static _createFPSCounter(): void
```

### \_centerElement (static method)

**Signature**

```ts
static _centerElement(element: HTMLCanvasElement): void
```

### \_disableContextMenu (static method)

**Signature**

```ts
static _disableContextMenu(): void
```

### \_applyCanvasFilter (static method)

**Signature**

```ts
static _applyCanvasFilter(): void
```

### \_clearCanvasFilter (static method)

**Signature**

```ts
static _clearCanvasFilter(): void
```

### \_setupEventHandlers (static method)

**Signature**

```ts
static _setupEventHandlers(): void
```

### \_onWindowResize (static method)

**Signature**

```ts
static _onWindowResize(): void
```

### \_onKeyDown (static method)

**Signature**

```ts
static _onKeyDown(event: KeyboardEvent): void
```

### \_switchFPSCounter (static method)

**Signature**

```ts
static _switchFPSCounter(): void
```

### \_switchStretchMode (static method)

**Signature**

```ts
static _switchStretchMode(): void
```

### \_switchFullScreen (static method)

**Signature**

```ts
static _switchFullScreen(): void
```

### \_isFullScreen (static method)

**Signature**

```ts
static _isFullScreen(): any
```

### \_requestFullScreen (static method)

**Signature**

```ts
static _requestFullScreen(): void
```

### \_cancelFullScreen (static method)

**Signature**

```ts
static _cancelFullScreen(): void
```

### \_createPixiApp (static method)

**Signature**

```ts
static _createPixiApp(): void
```

### \_setupPixi (static method)

**Signature**

```ts
static _setupPixi(): void
```

### \_createEffekseerContext (static method)

**Signature**

```ts
static _createEffekseerContext(): void
```
