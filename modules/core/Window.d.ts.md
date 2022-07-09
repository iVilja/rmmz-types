---
title: core/Window.d.ts
nav_order: 20
parent: Modules
---

## Window.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window (class)](#window-class)
    - [destroy (method)](#destroy-method)
    - [update (method)](#update-method)
    - [move (method)](#move-method)
    - [isOpen (method)](#isopen-method)
    - [isClosed (method)](#isclosed-method)
    - [setCursorRect (method)](#setcursorrect-method)
    - [moveCursorBy (method)](#movecursorby-method)
    - [moveInnerChildrenBy (method)](#moveinnerchildrenby-method)
    - [setTone (method)](#settone-method)
    - [addChildToBack (method)](#addchildtoback-method)
    - [addInnerChild (method)](#addinnerchild-method)
    - [updateTransform (method)](#updatetransform-method)
    - [drawShape (method)](#drawshape-method)
    - [\_createAllParts (method)](#_createallparts-method)
    - [\_createContainer (method)](#_createcontainer-method)
    - [\_createBackSprite (method)](#_createbacksprite-method)
    - [\_createFrameSprite (method)](#_createframesprite-method)
    - [\_createClientArea (method)](#_createclientarea-method)
    - [\_createContentsBackSprite (method)](#_createcontentsbacksprite-method)
    - [\_createCursorSprite (method)](#_createcursorsprite-method)
    - [\_createContentsSprite (method)](#_createcontentssprite-method)
    - [\_createArrowSprites (method)](#_createarrowsprites-method)
    - [\_createPauseSignSprites (method)](#_createpausesignsprites-method)
    - [\_onWindowskinLoad (method)](#_onwindowskinload-method)
    - [\_refreshAllParts (method)](#_refreshallparts-method)
    - [\_refreshBack (method)](#_refreshback-method)
    - [\_refreshFrame (method)](#_refreshframe-method)
    - [\_refreshCursor (method)](#_refreshcursor-method)
    - [\_setRectPartsGeometry (method)](#_setrectpartsgeometry-method)
    - [\_refreshArrows (method)](#_refresharrows-method)
    - [\_refreshPauseSign (method)](#_refreshpausesign-method)
    - [\_updateClientArea (method)](#_updateclientarea-method)
    - [\_updateFrame (method)](#_updateframe-method)
    - [\_updateContentsBack (method)](#_updatecontentsback-method)
    - [\_updateCursor (method)](#_updatecursor-method)
    - [\_makeCursorAlpha (method)](#_makecursoralpha-method)
    - [\_updateContents (method)](#_updatecontents-method)
    - [\_updateArrows (method)](#_updatearrows-method)
    - [\_updatePauseSign (method)](#_updatepausesign-method)
    - [\_updateFilterArea (method)](#_updatefilterarea-method)
    - [\_isWindow (property)](#_iswindow-property)
    - [\_windowskin (property)](#_windowskin-property)
    - [\_width (property)](#_width-property)
    - [\_height (property)](#_height-property)
    - [\_cursorRect (property)](#_cursorrect-property)
    - [\_openness (property)](#_openness-property)
    - [\_animationCount (property)](#_animationcount-property)
    - [\_padding (property)](#_padding-property)
    - [\_margin (property)](#_margin-property)
    - [\_colorTone (property)](#_colortone-property)
    - [\_innerChildren (property)](#_innerchildren-property)
    - [\_container (property)](#_container-property)
    - [\_backSprite (property)](#_backsprite-property)
    - [\_frameSprite (property)](#_framesprite-property)
    - [\_contentsBackSprite (property)](#_contentsbacksprite-property)
    - [\_cursorSprite (property)](#_cursorsprite-property)
    - [\_contentsSprite (property)](#_contentssprite-property)
    - [\_downArrowSprite (property)](#_downarrowsprite-property)
    - [\_upArrowSprite (property)](#_uparrowsprite-property)
    - [\_pauseSignSprite (property)](#_pausesignsprite-property)
    - [\_clientArea (property)](#_clientarea-property)
    - [origin (property)](#origin-property)
    - [active (property)](#active-property)
    - [frameVisible (property)](#framevisible-property)
    - [cursorVisible (property)](#cursorvisible-property)
    - [downArrowVisible (property)](#downarrowvisible-property)
    - [upArrowVisible (property)](#uparrowvisible-property)
    - [pause (property)](#pause-property)

---

# utils

## Window (class)

The window in the game.

**Signature**

```ts
export declare class Window {
  constructor()
}
```

### destroy (method)

Destroys the window.

**Signature**

```ts
destroy(_options?: PIXIDestroyOptions): void
```

### update (method)

Updates the window for each frame.

**Signature**

```ts
update(): void
```

### move (method)

Sets the x, y, width, and height all at once.

**Signature**

```ts
move(x: number, y: number, width: number, height: number): void
```

### isOpen (method)

Checks whether the window is completely open (openness == 255).

**Signature**

```ts
isOpen(): boolean
```

### isClosed (method)

Checks whether the window is completely closed (openness == 0).

**Signature**

```ts
isClosed(): boolean
```

### setCursorRect (method)

Sets the position of the command cursor.

**Signature**

```ts
setCursorRect(x: number, y: number, width: number, height: number): void
```

### moveCursorBy (method)

Moves the cursor position by the given amount.

**Signature**

```ts
moveCursorBy(x: number, y: number): void
```

### moveInnerChildrenBy (method)

Moves the inner children by the given amount.

**Signature**

```ts
moveInnerChildrenBy(x: number, y: number): void
```

### setTone (method)

Changes the color of the background.

**Signature**

```ts
setTone(r: number, g: number, b: number): void
```

### addChildToBack (method)

Adds a child between the background and contents.

**Signature**

```ts
addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject
```

### addInnerChild (method)

Adds a child to the client area.

**Signature**

```ts
addInnerChild(child: PIXI.DisplayObject): PIXI.DisplayObject
```

### updateTransform (method)

Updates the transform on all children of this container for rendering.

**Signature**

```ts
updateTransform(): void
```

### drawShape (method)

Draws the window shape into PIXI.Graphics object. Used by WindowLayer.

**Signature**

```ts
drawShape(graphics: PIXI.Graphics): void
```

### \_createAllParts (method)

**Signature**

```ts
_createAllParts(): void
```

### \_createContainer (method)

**Signature**

```ts
_createContainer(): void
```

### \_createBackSprite (method)

**Signature**

```ts
_createBackSprite(): void
```

### \_createFrameSprite (method)

**Signature**

```ts
_createFrameSprite(): void
```

### \_createClientArea (method)

**Signature**

```ts
_createClientArea(): void
```

### \_createContentsBackSprite (method)

**Signature**

```ts
_createContentsBackSprite(): void
```

### \_createCursorSprite (method)

**Signature**

```ts
_createCursorSprite(): void
```

### \_createContentsSprite (method)

**Signature**

```ts
_createContentsSprite(): void
```

### \_createArrowSprites (method)

**Signature**

```ts
_createArrowSprites(): void
```

### \_createPauseSignSprites (method)

**Signature**

```ts
_createPauseSignSprites(): void
```

### \_onWindowskinLoad (method)

**Signature**

```ts
_onWindowskinLoad(): void
```

### \_refreshAllParts (method)

**Signature**

```ts
_refreshAllParts(): void
```

### \_refreshBack (method)

**Signature**

```ts
_refreshBack(): void
```

### \_refreshFrame (method)

**Signature**

```ts
_refreshFrame(): void
```

### \_refreshCursor (method)

**Signature**

```ts
_refreshCursor(): void
```

### \_setRectPartsGeometry (method)

**Signature**

```ts
_setRectPartsGeometry(sprite: Sprite<null>, srect: Rectangle, drect: Rectangle, m: number): void
```

### \_refreshArrows (method)

**Signature**

```ts
_refreshArrows(): void
```

### \_refreshPauseSign (method)

**Signature**

```ts
_refreshPauseSign(): void
```

### \_updateClientArea (method)

**Signature**

```ts
_updateClientArea(): void
```

### \_updateFrame (method)

**Signature**

```ts
_updateFrame(): void
```

### \_updateContentsBack (method)

**Signature**

```ts
_updateContentsBack(): void
```

### \_updateCursor (method)

**Signature**

```ts
_updateCursor(): void
```

### \_makeCursorAlpha (method)

**Signature**

```ts
_makeCursorAlpha(): number
```

### \_updateContents (method)

**Signature**

```ts
_updateContents(): void
```

### \_updateArrows (method)

**Signature**

```ts
_updateArrows(): void
```

### \_updatePauseSign (method)

**Signature**

```ts
_updatePauseSign(): void
```

### \_updateFilterArea (method)

**Signature**

```ts
_updateFilterArea(): void
```

### \_isWindow (property)

**Signature**

```ts
_isWindow: boolean
```

### \_windowskin (property)

**Signature**

```ts
_windowskin: Bitmap
```

### \_width (property)

**Signature**

```ts
_width: number
```

### \_height (property)

**Signature**

```ts
_height: number
```

### \_cursorRect (property)

**Signature**

```ts
_cursorRect: Rectangle
```

### \_openness (property)

**Signature**

```ts
_openness: number
```

### \_animationCount (property)

**Signature**

```ts
_animationCount: number
```

### \_padding (property)

**Signature**

```ts
_padding: number
```

### \_margin (property)

**Signature**

```ts
_margin: number
```

### \_colorTone (property)

**Signature**

```ts
_colorTone: Color
```

### \_innerChildren (property)

**Signature**

```ts
_innerChildren: any[]
```

### \_container (property)

**Signature**

```ts
_container: any
```

### \_backSprite (property)

**Signature**

```ts
_backSprite: Sprite<Bitmap>
```

### \_frameSprite (property)

**Signature**

```ts
_frameSprite: Sprite<null>
```

### \_contentsBackSprite (property)

**Signature**

```ts
_contentsBackSprite: Sprite<Bitmap>
```

### \_cursorSprite (property)

**Signature**

```ts
_cursorSprite: Sprite<null>
```

### \_contentsSprite (property)

**Signature**

```ts
_contentsSprite: Sprite<Bitmap>
```

### \_downArrowSprite (property)

**Signature**

```ts
_downArrowSprite: Sprite<Bitmap>
```

### \_upArrowSprite (property)

**Signature**

```ts
_upArrowSprite: Sprite<Bitmap>
```

### \_pauseSignSprite (property)

**Signature**

```ts
_pauseSignSprite: Sprite<Bitmap>
```

### \_clientArea (property)

**Signature**

```ts
_clientArea: Sprite<null>
```

### origin (property)

The origin point of the window for scrolling.

**Signature**

```ts
origin: Point
```

### active (property)

The active state for the window.

**Signature**

```ts
active: boolean
```

### frameVisible (property)

The visibility of the frame.

**Signature**

```ts
frameVisible: boolean
```

### cursorVisible (property)

The visibility of the cursor.

**Signature**

```ts
cursorVisible: boolean
```

### downArrowVisible (property)

The visibility of the down scroll arrow.

**Signature**

```ts
downArrowVisible: boolean
```

### upArrowVisible (property)

The visibility of the up scroll arrow.

**Signature**

```ts
upArrowVisible: boolean
```

### pause (property)

The visibility of the pause sign.

**Signature**

```ts
pause: boolean
```
