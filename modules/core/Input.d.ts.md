---
title: core/Input.d.ts
nav_order: 5
parent: Modules
---

## Input.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [GamepadButtonIndex (type alias)](#gamepadbuttonindex-type-alias)
  - [Input (class)](#input-class)
    - [initialize (static method)](#initialize-static-method)
    - [clear (static method)](#clear-static-method)
    - [update (static method)](#update-static-method)
    - [isPressed (static method)](#ispressed-static-method)
    - [isTriggered (static method)](#istriggered-static-method)
    - [isRepeated (static method)](#isrepeated-static-method)
    - [isLongPressed (static method)](#islongpressed-static-method)
    - [date (static method)](#date-static-method)
    - [virtualClick (static method)](#virtualclick-static-method)
    - [\_setupEventHandlers (static method)](#_setupeventhandlers-static-method)
    - [\_onKeyDown (static method)](#_onkeydown-static-method)
    - [\_shouldPreventDefault (static method)](#_shouldpreventdefault-static-method)
    - [\_onKeyUp (static method)](#_onkeyup-static-method)
    - [\_onLostFocus (static method)](#_onlostfocus-static-method)
    - [\_pollGamepads (static method)](#_pollgamepads-static-method)
    - [\_updateGamepadState (static method)](#_updategamepadstate-static-method)
    - [\_updateDirection (static method)](#_updatedirection-static-method)
    - [\_signX (static method)](#_signx-static-method)
    - [\_signY (static method)](#_signy-static-method)
    - [\_makeNumpadDirection (static method)](#_makenumpaddirection-static-method)
    - [\_isEscapeCompatible (static method)](#_isescapecompatible-static-method)
  - [KeyboardButtonIndex (type alias)](#keyboardbuttonindex-type-alias)

---

# utils

## GamepadButtonIndex (type alias)

**Signature**

```ts
export declare type GamepadButtonIndex = keyof typeof Input.gamepadMapper
```

## Input (class)

The static class that handles input data from the keyboard and gamepads.

**Signature**

```ts
export declare class Input {
  constructor()
}
```

### initialize (static method)

Initializes the input system.

**Signature**

```ts
static initialize(): void
```

### clear (static method)

Clears all the input data.

**Signature**

```ts
static clear(): void
```

### update (static method)

Updates the input data.

**Signature**

```ts
static update(): void
```

### isPressed (static method)

Checks whether a key is currently pressed down.

**Signature**

```ts
static isPressed(keyName: string): boolean
```

### isTriggered (static method)

Checks whether a key is just pressed.

**Signature**

```ts
static isTriggered(keyName: string): boolean
```

### isRepeated (static method)

Checks whether a key is just pressed or a key repeat occurred.

**Signature**

```ts
static isRepeated(keyName: string): boolean
```

### isLongPressed (static method)

Checks whether a key is kept depressed.

**Signature**

```ts
static isLongPressed(keyName: string): boolean
```

### date (static method)

The time of the last input in milliseconds.

**Signature**

```ts
static date(): number
```

### virtualClick (static method)

**Signature**

```ts
static virtualClick(buttonName: string): void
```

### \_setupEventHandlers (static method)

**Signature**

```ts
static _setupEventHandlers(): void
```

### \_onKeyDown (static method)

**Signature**

```ts
static _onKeyDown(event: KeyboardEvent): void
```

### \_shouldPreventDefault (static method)

**Signature**

```ts
static _shouldPreventDefault(keyCode: number): boolean
```

### \_onKeyUp (static method)

**Signature**

```ts
static _onKeyUp(event: KeyboardEvent): void
```

### \_onLostFocus (static method)

**Signature**

```ts
static _onLostFocus(): void
```

### \_pollGamepads (static method)

**Signature**

```ts
static _pollGamepads(): void
```

### \_updateGamepadState (static method)

**Signature**

```ts
static _updateGamepadState(gamepad: Gamepad): void
```

### \_updateDirection (static method)

**Signature**

```ts
static _updateDirection(): void
```

### \_signX (static method)

**Signature**

```ts
static _signX(): number
```

### \_signY (static method)

**Signature**

```ts
static _signY(): number
```

### \_makeNumpadDirection (static method)

**Signature**

```ts
static _makeNumpadDirection(x: number, y: number): number
```

### \_isEscapeCompatible (static method)

**Signature**

```ts
static _isEscapeCompatible(keyName: string): boolean
```

## KeyboardButtonIndex (type alias)

**Signature**

```ts
export declare type KeyboardButtonIndex = keyof typeof Input.keyMapper
```
