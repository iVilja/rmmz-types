---
title: windows/Window_DebugRange.d.ts
nav_order: 154
parent: Modules
---

## Window_DebugRange.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_DebugRange (class)](#window_debugrange-class)
    - [maxItems (method)](#maxitems-method)
    - [update (method)](#update-method)
    - [mode (method)](#mode-method)
    - [topId (method)](#topid-method)
    - [isSwitchMode (method)](#isswitchmode-method)
    - [drawItem (method)](#drawitem-method)
    - [isCancelTriggered (method)](#iscanceltriggered-method)
    - [processCancel (method)](#processcancel-method)
    - [setEditWindow (method)](#seteditwindow-method)
    - [\_maxSwitches (property)](#_maxswitches-property)
    - [\_maxVariables (property)](#_maxvariables-property)
    - [\_editWindow (property)](#_editwindow-property)

---

# utils

## Window_DebugRange (class)

Window_DebugRange

The window for selecting a block of switches/variables on the debug screen.

**Signature**

```ts
export declare class Window_DebugRange {
  constructor(rect: Rectangle)
}
```

### maxItems (method)

**Signature**

```ts
maxItems(): number
```

### update (method)

**Signature**

```ts
update(): void
```

### mode (method)

**Signature**

```ts
mode(index?: number): "switch" | "variable"
```

### topId (method)

**Signature**

```ts
topId(index: number): number
```

### isSwitchMode (method)

**Signature**

```ts
isSwitchMode(index?: number): boolean
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### isCancelTriggered (method)

**Signature**

```ts
isCancelTriggered(): boolean
```

### processCancel (method)

**Signature**

```ts
processCancel(): void
```

### setEditWindow (method)

**Signature**

```ts
setEditWindow(editWindow: Window_DebugEdit): void
```

### \_maxSwitches (property)

**Signature**

```ts
_maxSwitches: number
```

### \_maxVariables (property)

**Signature**

```ts
_maxVariables: number
```

### \_editWindow (property)

**Signature**

```ts
_editWindow: Window_DebugEdit | undefined
```
