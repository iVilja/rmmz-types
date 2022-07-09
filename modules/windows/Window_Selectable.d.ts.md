---
title: windows/Window_Selectable.d.ts
nav_order: 180
parent: Modules
---

## Window_Selectable.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_Selectable (class)](#window_selectable-class)
    - [index (method)](#index-method)
    - [cursorFixed (method)](#cursorfixed-method)
    - [setCursorFixed (method)](#setcursorfixed-method)
    - [cursorAll (method)](#cursorall-method)
    - [setCursorAll (method)](#setcursorall-method)
    - [maxCols (method)](#maxcols-method)
    - [maxItems (method)](#maxitems-method)
    - [colSpacing (method)](#colspacing-method)
    - [rowSpacing (method)](#rowspacing-method)
    - [itemWidth (method)](#itemwidth-method)
    - [itemHeight (method)](#itemheight-method)
    - [contentsHeight (method)](#contentsheight-method)
    - [maxRows (method)](#maxrows-method)
    - [overallHeight (method)](#overallheight-method)
    - [activate (method)](#activate-method)
    - [deactivate (method)](#deactivate-method)
    - [select (method)](#select-method)
    - [forceSelect (method)](#forceselect-method)
    - [smoothSelect (method)](#smoothselect-method)
    - [deselect (method)](#deselect-method)
    - [reselect (method)](#reselect-method)
    - [row (method)](#row-method)
    - [topRow (method)](#toprow-method)
    - [maxTopRow (method)](#maxtoprow-method)
    - [setTopRow (method)](#settoprow-method)
    - [maxPageRows (method)](#maxpagerows-method)
    - [maxPageItems (method)](#maxpageitems-method)
    - [maxVisibleItems (method)](#maxvisibleitems-method)
    - [isHorizontal (method)](#ishorizontal-method)
    - [topIndex (method)](#topindex-method)
    - [itemRect (method)](#itemrect-method)
    - [itemRectWithPadding (method)](#itemrectwithpadding-method)
    - [itemLineRect (method)](#itemlinerect-method)
    - [setHelpWindow (method)](#sethelpwindow-method)
    - [showHelpWindow (method)](#showhelpwindow-method)
    - [hideHelpWindow (method)](#hidehelpwindow-method)
    - [setHandler (method)](#sethandler-method)
    - [isHandled (method)](#ishandled-method)
    - [callHandler (method)](#callhandler-method)
    - [isOpenAndActive (method)](#isopenandactive-method)
    - [isCursorMovable (method)](#iscursormovable-method)
    - [cursorDown (method)](#cursordown-method)
    - [cursorUp (method)](#cursorup-method)
    - [cursorRight (method)](#cursorright-method)
    - [cursorLeft (method)](#cursorleft-method)
    - [cursorPagedown (method)](#cursorpagedown-method)
    - [cursorPageup (method)](#cursorpageup-method)
    - [isScrollEnabled (method)](#isscrollenabled-method)
    - [update (method)](#update-method)
    - [processCursorMove (method)](#processcursormove-method)
    - [processHandling (method)](#processhandling-method)
    - [processTouch (method)](#processtouch-method)
    - [isHoverEnabled (method)](#ishoverenabled-method)
    - [onTouchSelect (method)](#ontouchselect-method)
    - [onTouchOk (method)](#ontouchok-method)
    - [onTouchCancel (method)](#ontouchcancel-method)
    - [hitIndex (method)](#hitindex-method)
    - [hitTest (method)](#hittest-method)
    - [isTouchOkEnabled (method)](#istouchokenabled-method)
    - [isOkEnabled (method)](#isokenabled-method)
    - [isCancelEnabled (method)](#iscancelenabled-method)
    - [isOkTriggered (method)](#isoktriggered-method)
    - [isCancelTriggered (method)](#iscanceltriggered-method)
    - [processOk (method)](#processok-method)
    - [callOkHandler (method)](#callokhandler-method)
    - [processCancel (method)](#processcancel-method)
    - [callCancelHandler (method)](#callcancelhandler-method)
    - [processPageup (method)](#processpageup-method)
    - [processPagedown (method)](#processpagedown-method)
    - [updateInputData (method)](#updateinputdata-method)
    - [ensureCursorVisible (method)](#ensurecursorvisible-method)
    - [callUpdateHelp (method)](#callupdatehelp-method)
    - [updateHelp (method)](#updatehelp-method)
    - [setHelpWindowItem (method)](#sethelpwindowitem-method)
    - [isCurrentItemEnabled (method)](#iscurrentitemenabled-method)
    - [drawAllItems (method)](#drawallitems-method)
    - [drawItem (method)](#drawitem-method)
    - [clearItem (method)](#clearitem-method)
    - [drawItemBackground (method)](#drawitembackground-method)
    - [drawBackgroundRect (method)](#drawbackgroundrect-method)
    - [redrawItem (method)](#redrawitem-method)
    - [redrawCurrentItem (method)](#redrawcurrentitem-method)
    - [refresh (method)](#refresh-method)
    - [paint (method)](#paint-method)
    - [refreshCursor (method)](#refreshcursor-method)
    - [refreshCursorForAll (method)](#refreshcursorforall-method)
    - [\_index (property)](#_index-property)
    - [\_cursorFixed (property)](#_cursorfixed-property)
    - [\_cursorAll (property)](#_cursorall-property)
    - [\_helpWindow (property)](#_helpwindow-property)
    - [\_handlers (property)](#_handlers-property)
    - [\_doubleTouch (property)](#_doubletouch-property)
    - [\_canRepeat (property)](#_canrepeat-property)

---

# utils

## Window_Selectable (class)

Window_Selectable

The window class with cursor movement functions.

**Signature**

```ts
export declare class Window_Selectable {
  constructor(rect: Rectangle)
}
```

### index (method)

**Signature**

```ts
index(): number
```

### cursorFixed (method)

**Signature**

```ts
cursorFixed(): boolean
```

### setCursorFixed (method)

**Signature**

```ts
setCursorFixed(cursorFixed: boolean): void
```

### cursorAll (method)

**Signature**

```ts
cursorAll(): boolean
```

### setCursorAll (method)

**Signature**

```ts
setCursorAll(cursorAll: boolean): void
```

### maxCols (method)

**Signature**

```ts
maxCols(): number
```

### maxItems (method)

**Signature**

```ts
maxItems(): number
```

### colSpacing (method)

**Signature**

```ts
colSpacing(): number
```

### rowSpacing (method)

**Signature**

```ts
rowSpacing(): number
```

### itemWidth (method)

**Signature**

```ts
itemWidth(): number
```

### itemHeight (method)

**Signature**

```ts
itemHeight(): number
```

### contentsHeight (method)

**Signature**

```ts
contentsHeight(): number
```

### maxRows (method)

**Signature**

```ts
maxRows(): number
```

### overallHeight (method)

**Signature**

```ts
overallHeight(): number
```

### activate (method)

**Signature**

```ts
activate(): void
```

### deactivate (method)

**Signature**

```ts
deactivate(): void
```

### select (method)

**Signature**

```ts
select(index: number): void
```

### forceSelect (method)

**Signature**

```ts
forceSelect(index: number): void
```

### smoothSelect (method)

**Signature**

```ts
smoothSelect(index: number): void
```

### deselect (method)

**Signature**

```ts
deselect(): void
```

### reselect (method)

**Signature**

```ts
reselect(): void
```

### row (method)

**Signature**

```ts
row(): number
```

### topRow (method)

**Signature**

```ts
topRow(): number
```

### maxTopRow (method)

**Signature**

```ts
maxTopRow(): number
```

### setTopRow (method)

**Signature**

```ts
setTopRow(row: number): void
```

### maxPageRows (method)

**Signature**

```ts
maxPageRows(): number
```

### maxPageItems (method)

**Signature**

```ts
maxPageItems(): number
```

### maxVisibleItems (method)

**Signature**

```ts
maxVisibleItems(): number
```

### isHorizontal (method)

**Signature**

```ts
isHorizontal(): boolean
```

### topIndex (method)

**Signature**

```ts
topIndex(): number
```

### itemRect (method)

**Signature**

```ts
itemRect(index: number): Rectangle
```

### itemRectWithPadding (method)

**Signature**

```ts
itemRectWithPadding(index: number): Rectangle
```

### itemLineRect (method)

**Signature**

```ts
itemLineRect(index: number): Rectangle
```

### setHelpWindow (method)

**Signature**

```ts
setHelpWindow(helpWindow: Window_Help): void
```

### showHelpWindow (method)

**Signature**

```ts
showHelpWindow(): void
```

### hideHelpWindow (method)

**Signature**

```ts
hideHelpWindow(): void
```

### setHandler (method)

**Signature**

```ts
setHandler(symbol: string, method: () => void): void
```

### isHandled (method)

**Signature**

```ts
isHandled(symbol: string): boolean
```

### callHandler (method)

**Signature**

```ts
callHandler(symbol: string): void
```

### isOpenAndActive (method)

**Signature**

```ts
isOpenAndActive(): boolean
```

### isCursorMovable (method)

**Signature**

```ts
isCursorMovable(): boolean
```

### cursorDown (method)

**Signature**

```ts
cursorDown(wrap: boolean): void
```

### cursorUp (method)

**Signature**

```ts
cursorUp(wrap: boolean): void
```

### cursorRight (method)

**Signature**

```ts
cursorRight(wrap: boolean): void
```

### cursorLeft (method)

**Signature**

```ts
cursorLeft(wrap: boolean): void
```

### cursorPagedown (method)

**Signature**

```ts
cursorPagedown(): void
```

### cursorPageup (method)

**Signature**

```ts
cursorPageup(): void
```

### isScrollEnabled (method)

**Signature**

```ts
isScrollEnabled(): boolean
```

### update (method)

**Signature**

```ts
update(): void
```

### processCursorMove (method)

**Signature**

```ts
processCursorMove(): void
```

### processHandling (method)

**Signature**

```ts
processHandling(): void
```

### processTouch (method)

**Signature**

```ts
processTouch(): void
```

### isHoverEnabled (method)

**Signature**

```ts
isHoverEnabled(): boolean
```

### onTouchSelect (method)

**Signature**

```ts
onTouchSelect(trigger: boolean): void
```

### onTouchOk (method)

**Signature**

```ts
onTouchOk(): void
```

### onTouchCancel (method)

**Signature**

```ts
onTouchCancel(): void
```

### hitIndex (method)

**Signature**

```ts
hitIndex(): number
```

### hitTest (method)

**Signature**

```ts
hitTest(x: number, y: number): number
```

### isTouchOkEnabled (method)

**Signature**

```ts
isTouchOkEnabled(): boolean
```

### isOkEnabled (method)

**Signature**

```ts
isOkEnabled(): boolean
```

### isCancelEnabled (method)

**Signature**

```ts
isCancelEnabled(): boolean
```

### isOkTriggered (method)

**Signature**

```ts
isOkTriggered(): boolean
```

### isCancelTriggered (method)

**Signature**

```ts
isCancelTriggered(): boolean
```

### processOk (method)

**Signature**

```ts
processOk(): void
```

### callOkHandler (method)

**Signature**

```ts
callOkHandler(): void
```

### processCancel (method)

**Signature**

```ts
processCancel(): void
```

### callCancelHandler (method)

**Signature**

```ts
callCancelHandler(): void
```

### processPageup (method)

**Signature**

```ts
processPageup(): void
```

### processPagedown (method)

**Signature**

```ts
processPagedown(): void
```

### updateInputData (method)

**Signature**

```ts
updateInputData(): void
```

### ensureCursorVisible (method)

**Signature**

```ts
ensureCursorVisible(smooth: boolean): void
```

### callUpdateHelp (method)

**Signature**

```ts
callUpdateHelp(): void
```

### updateHelp (method)

**Signature**

```ts
updateHelp(): void
```

### setHelpWindowItem (method)

**Signature**

```ts
setHelpWindowItem(item: DataItemBase | null): void
```

### isCurrentItemEnabled (method)

**Signature**

```ts
isCurrentItemEnabled(): boolean
```

### drawAllItems (method)

**Signature**

```ts
drawAllItems(): void
```

### drawItem (method)

**Signature**

```ts
drawItem(..._args: unknown[]): void
```

### clearItem (method)

**Signature**

```ts
clearItem(index: number): void
```

### drawItemBackground (method)

**Signature**

```ts
drawItemBackground(index: number): void
```

### drawBackgroundRect (method)

**Signature**

```ts
drawBackgroundRect(rect: Rectangle): void
```

### redrawItem (method)

**Signature**

```ts
redrawItem(index: number): void
```

### redrawCurrentItem (method)

**Signature**

```ts
redrawCurrentItem(): void
```

### refresh (method)

**Signature**

```ts
refresh(): void
```

### paint (method)

**Signature**

```ts
paint(): void
```

### refreshCursor (method)

**Signature**

```ts
refreshCursor(): void
```

### refreshCursorForAll (method)

**Signature**

```ts
refreshCursorForAll(): void
```

### \_index (property)

**Signature**

```ts
_index: number
```

### \_cursorFixed (property)

**Signature**

```ts
_cursorFixed: boolean
```

### \_cursorAll (property)

**Signature**

```ts
_cursorAll: boolean
```

### \_helpWindow (property)

**Signature**

```ts
_helpWindow: Window_Help | null
```

### \_handlers (property)

**Signature**

```ts
_handlers: Record<string, () => void>
```

### \_doubleTouch (property)

**Signature**

```ts
_doubleTouch: boolean
```

### \_canRepeat (property)

**Signature**

```ts
_canRepeat: boolean
```
