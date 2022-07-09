---
title: core/TouchInput.d.ts
nav_order: 15
parent: Modules
---

## TouchInput.d overview

The static class that handles input data from the mouse and touchscreen.

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [TouchInput (class)](#touchinput-class)
    - [initialize (static method)](#initialize-static-method)
    - [clear (static method)](#clear-static-method)
    - [update (static method)](#update-static-method)
    - [isClicked (static method)](#isclicked-static-method)
    - [isPressed (static method)](#ispressed-static-method)
    - [isTriggered (static method)](#istriggered-static-method)
    - [isRepeated (static method)](#isrepeated-static-method)
    - [isLongPressed (static method)](#islongpressed-static-method)
    - [isCancelled (static method)](#iscancelled-static-method)
    - [isMoved (static method)](#ismoved-static-method)
    - [isHovered (static method)](#ishovered-static-method)
    - [isReleased (static method)](#isreleased-static-method)
    - [\_createNewState (static method)](#_createnewstate-static-method)
    - [\_setupEventHandlers (static method)](#_setupeventhandlers-static-method)
    - [\_onMouseDown (static method)](#_onmousedown-static-method)
    - [\_onLeftButtonDown (static method)](#_onleftbuttondown-static-method)
    - [\_onMiddleButtonDown (static method)](#_onmiddlebuttondown-static-method)
    - [\_onRightButtonDown (static method)](#_onrightbuttondown-static-method)
    - [\_onMouseMove (static method)](#_onmousemove-static-method)
    - [\_onMouseUp (static method)](#_onmouseup-static-method)
    - [\_onWheel (static method)](#_onwheel-static-method)
    - [\_onTouchStart (static method)](#_ontouchstart-static-method)
    - [\_onTouchMove (static method)](#_ontouchmove-static-method)
    - [\_onTouchEnd (static method)](#_ontouchend-static-method)
    - [\_onTouchCancel (static method)](#_ontouchcancel-static-method)
    - [\_onLostFocus (static method)](#_onlostfocus-static-method)
    - [\_onTrigger (static method)](#_ontrigger-static-method)
    - [\_onCancel (static method)](#_oncancel-static-method)
    - [\_onMove (static method)](#_onmove-static-method)
    - [\_onHover (static method)](#_onhover-static-method)
    - [\_onRelease (static method)](#_onrelease-static-method)

---

# utils

## TouchInput (class)

The static class that handles input data from the mouse and touchscreen.

**Signature**

```ts
export declare class TouchInput {
  constructor()
}
```

### initialize (static method)

Initializes the touch system.

**Signature**

```ts
static initialize(): void
```

### clear (static method)

Clears all the touch data.

**Signature**

```ts
static clear(): void
```

### update (static method)

Updates the touch data.

**Signature**

```ts
static update(): void
```

### isClicked (static method)

Checks whether the mouse button or touchscreen has been pressed and
released at the same position.

**Signature**

```ts
static isClicked(): boolean
```

### isPressed (static method)

Checks whether the mouse button or touchscreen is currently pressed down.

**Signature**

```ts
static isPressed(): boolean
```

### isTriggered (static method)

Checks whether the left mouse button or touchscreen is just pressed.

**Signature**

```ts
static isTriggered(): boolean
```

### isRepeated (static method)

Checks whether the left mouse button or touchscreen is just pressed
or a pseudo key repeat occurred.

**Signature**

```ts
static isRepeated(): boolean
```

### isLongPressed (static method)

Checks whether the left mouse button or touchscreen is kept depressed.

**Signature**

```ts
static isLongPressed(): boolean
```

### isCancelled (static method)

Checks whether the right mouse button is just pressed.

**Signature**

```ts
static isCancelled(): boolean
```

### isMoved (static method)

Checks whether the mouse or a finger on the touchscreen is moved.

**Signature**

```ts
static isMoved(): boolean
```

### isHovered (static method)

Checks whether the mouse is moved without pressing a button.

**Signature**

```ts
static isHovered(): boolean
```

### isReleased (static method)

Checks whether the left mouse button or touchscreen is released.

**Signature**

```ts
static isReleased(): boolean
```

### \_createNewState (static method)

**Signature**

```ts
static _createNewState(): {
    triggered: boolean
    cancelled: boolean
    moved: boolean
    hovered: boolean
    released: boolean
    wheelX: number
    wheelY: number
  }
```

### \_setupEventHandlers (static method)

**Signature**

```ts
static _setupEventHandlers(): void
```

### \_onMouseDown (static method)

**Signature**

```ts
static _onMouseDown(event: MouseEvent): void
```

### \_onLeftButtonDown (static method)

**Signature**

```ts
static _onLeftButtonDown(event: MouseEvent): void
```

### \_onMiddleButtonDown (static method)

**Signature**

```ts
static _onMiddleButtonDown(_event?: MouseEvent): void
```

### \_onRightButtonDown (static method)

**Signature**

```ts
static _onRightButtonDown(event: MouseEvent): void
```

### \_onMouseMove (static method)

**Signature**

```ts
static _onMouseMove(event: MouseEvent): void
```

### \_onMouseUp (static method)

**Signature**

```ts
static _onMouseUp(event: MouseEvent): void
```

### \_onWheel (static method)

**Signature**

```ts
static _onWheel(event: WheelEvent): void
```

### \_onTouchStart (static method)

**Signature**

```ts
static _onTouchStart(event: TouchEvent): void
```

### \_onTouchMove (static method)

**Signature**

```ts
static _onTouchMove(event: TouchEvent): void
```

### \_onTouchEnd (static method)

**Signature**

```ts
static _onTouchEnd(event: TouchEvent): void
```

### \_onTouchCancel (static method)

**Signature**

```ts
static _onTouchCancel(_event?: TouchEvent): void
```

### \_onLostFocus (static method)

**Signature**

```ts
static _onLostFocus(): void
```

### \_onTrigger (static method)

**Signature**

```ts
static _onTrigger(x: number, y: number): void
```

### \_onCancel (static method)

**Signature**

```ts
static _onCancel(x: number, y: number): void
```

### \_onMove (static method)

**Signature**

```ts
static _onMove(x: number, y: number): void
```

### \_onHover (static method)

**Signature**

```ts
static _onHover(x: number, y: number): void
```

### \_onRelease (static method)

**Signature**

```ts
static _onRelease(x: number, y: number): void
```
