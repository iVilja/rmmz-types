---
title: windows/Window_Scrollable.d.ts
nav_order: 177
parent: Modules
---

## Window_Scrollable.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_Scrollable (class)](#window_scrollable-class)
    - [clearScrollStatus (method)](#clearscrollstatus-method)
    - [scrollX (method)](#scrollx-method)
    - [scrollY (method)](#scrolly-method)
    - [scrollBaseX (method)](#scrollbasex-method)
    - [scrollBaseY (method)](#scrollbasey-method)
    - [scrollTo (method)](#scrollto-method)
    - [scrollBy (method)](#scrollby-method)
    - [smoothScrollTo (method)](#smoothscrollto-method)
    - [smoothScrollBy (method)](#smoothscrollby-method)
    - [setScrollAccel (method)](#setscrollaccel-method)
    - [overallWidth (method)](#overallwidth-method)
    - [overallHeight (method)](#overallheight-method)
    - [maxScrollX (method)](#maxscrollx-method)
    - [maxScrollY (method)](#maxscrolly-method)
    - [scrollBlockWidth (method)](#scrollblockwidth-method)
    - [scrollBlockHeight (method)](#scrollblockheight-method)
    - [smoothScrollDown (method)](#smoothscrolldown-method)
    - [smoothScrollUp (method)](#smoothscrollup-method)
    - [update (method)](#update-method)
    - [processWheelScroll (method)](#processwheelscroll-method)
    - [processTouchScroll (method)](#processtouchscroll-method)
    - [isWheelScrollEnabled (method)](#iswheelscrollenabled-method)
    - [isTouchScrollEnabled (method)](#istouchscrollenabled-method)
    - [isScrollEnabled (method)](#isscrollenabled-method)
    - [isTouchedInsideFrame (method)](#istouchedinsideframe-method)
    - [onTouchScrollStart (method)](#ontouchscrollstart-method)
    - [onTouchScroll (method)](#ontouchscroll-method)
    - [onTouchScrollEnd (method)](#ontouchscrollend-method)
    - [updateSmoothScroll (method)](#updatesmoothscroll-method)
    - [updateScrollAccel (method)](#updatescrollaccel-method)
    - [updateArrows (method)](#updatearrows-method)
    - [updateOrigin (method)](#updateorigin-method)
    - [updateScrollBase (method)](#updatescrollbase-method)
    - [paint (method)](#paint-method)
    - [\_scrollX (property)](#_scrollx-property)
    - [\_scrollY (property)](#_scrolly-property)
    - [\_scrollBaseX (property)](#_scrollbasex-property)
    - [\_scrollBaseY (property)](#_scrollbasey-property)
    - [\_scrollTargetX (property)](#_scrolltargetx-property)
    - [\_scrollTargetY (property)](#_scrolltargety-property)
    - [\_scrollDuration (property)](#_scrollduration-property)
    - [\_scrollAccelX (property)](#_scrollaccelx-property)
    - [\_scrollAccelY (property)](#_scrollaccely-property)
    - [\_scrollTouching (property)](#_scrolltouching-property)
    - [\_scrollLastTouchX (property)](#_scrolllasttouchx-property)
    - [\_scrollLastTouchY (property)](#_scrolllasttouchy-property)
    - [\_scrollLastCursorVisible (property)](#_scrolllastcursorvisible-property)

---

# utils

## Window_Scrollable (class)

Window_Scrollable

The window class with scroll functions.

**Signature**

```ts
export declare class Window_Scrollable {
  constructor(rect: Rectangle)
}
```

### clearScrollStatus (method)

**Signature**

```ts
clearScrollStatus(): void;
```

### scrollX (method)

**Signature**

```ts
scrollX(): number;
```

### scrollY (method)

**Signature**

```ts
scrollY(): number;
```

### scrollBaseX (method)

**Signature**

```ts
scrollBaseX(): number;
```

### scrollBaseY (method)

**Signature**

```ts
scrollBaseY(): number;
```

### scrollTo (method)

**Signature**

```ts
scrollTo(x: number, y: number): void;
```

### scrollBy (method)

**Signature**

```ts
scrollBy(x: number, y: number): void;
```

### smoothScrollTo (method)

**Signature**

```ts
smoothScrollTo(x: number, y: number): void;
```

### smoothScrollBy (method)

**Signature**

```ts
smoothScrollBy(x: number, y: number): void;
```

### setScrollAccel (method)

**Signature**

```ts
setScrollAccel(x: number, y: number): void;
```

### overallWidth (method)

**Signature**

```ts
overallWidth(): number;
```

### overallHeight (method)

**Signature**

```ts
overallHeight(): number;
```

### maxScrollX (method)

**Signature**

```ts
maxScrollX(): number;
```

### maxScrollY (method)

**Signature**

```ts
maxScrollY(): number;
```

### scrollBlockWidth (method)

**Signature**

```ts
scrollBlockWidth(): number;
```

### scrollBlockHeight (method)

**Signature**

```ts
scrollBlockHeight(): number;
```

### smoothScrollDown (method)

**Signature**

```ts
smoothScrollDown(n: number): void;
```

### smoothScrollUp (method)

**Signature**

```ts
smoothScrollUp(n: number): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### processWheelScroll (method)

**Signature**

```ts
processWheelScroll(): void;
```

### processTouchScroll (method)

**Signature**

```ts
processTouchScroll(): void;
```

### isWheelScrollEnabled (method)

**Signature**

```ts
isWheelScrollEnabled(): boolean;
```

### isTouchScrollEnabled (method)

**Signature**

```ts
isTouchScrollEnabled(): boolean;
```

### isScrollEnabled (method)

**Signature**

```ts
isScrollEnabled(): boolean;
```

### isTouchedInsideFrame (method)

**Signature**

```ts
isTouchedInsideFrame(): boolean;
```

### onTouchScrollStart (method)

**Signature**

```ts
onTouchScrollStart(): void;
```

### onTouchScroll (method)

**Signature**

```ts
onTouchScroll(): void;
```

### onTouchScrollEnd (method)

**Signature**

```ts
onTouchScrollEnd(): void;
```

### updateSmoothScroll (method)

**Signature**

```ts
updateSmoothScroll(): void;
```

### updateScrollAccel (method)

**Signature**

```ts
updateScrollAccel(): void;
```

### updateArrows (method)

**Signature**

```ts
updateArrows(): void;
```

### updateOrigin (method)

**Signature**

```ts
updateOrigin(): void;
```

### updateScrollBase (method)

**Signature**

```ts
updateScrollBase(baseX: number, baseY: number): void;
```

### paint (method)

**Signature**

```ts
paint(): void;
```

### \_scrollX (property)

**Signature**

```ts
_scrollX: number
```

### \_scrollY (property)

**Signature**

```ts
_scrollY: number
```

### \_scrollBaseX (property)

**Signature**

```ts
_scrollBaseX: number
```

### \_scrollBaseY (property)

**Signature**

```ts
_scrollBaseY: number
```

### \_scrollTargetX (property)

**Signature**

```ts
_scrollTargetX: number
```

### \_scrollTargetY (property)

**Signature**

```ts
_scrollTargetY: number
```

### \_scrollDuration (property)

**Signature**

```ts
_scrollDuration: number
```

### \_scrollAccelX (property)

**Signature**

```ts
_scrollAccelX: number
```

### \_scrollAccelY (property)

**Signature**

```ts
_scrollAccelY: number
```

### \_scrollTouching (property)

**Signature**

```ts
_scrollTouching: boolean
```

### \_scrollLastTouchX (property)

**Signature**

```ts
_scrollLastTouchX: number
```

### \_scrollLastTouchY (property)

**Signature**

```ts
_scrollLastTouchY: number
```

### \_scrollLastCursorVisible (property)

**Signature**

```ts
_scrollLastCursorVisible: boolean
```
