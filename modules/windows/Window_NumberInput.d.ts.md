---
title: windows/Window_NumberInput.d.ts
nav_order: 174
parent: Modules
---

## Window_NumberInput.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_NumberInput (class)](#window_numberinput-class)
    - [setMessageWindow (method)](#setmessagewindow-method)
    - [start (method)](#start-method)
    - [updatePlacement (method)](#updateplacement-method)
    - [windowWidth (method)](#windowwidth-method)
    - [windowHeight (method)](#windowheight-method)
    - [maxCols (method)](#maxcols-method)
    - [maxItems (method)](#maxitems-method)
    - [itemWidth (method)](#itemwidth-method)
    - [itemRect (method)](#itemrect-method)
    - [isScrollEnabled (method)](#isscrollenabled-method)
    - [isHoverEnabled (method)](#ishoverenabled-method)
    - [createButtons (method)](#createbuttons-method)
    - [placeButtons (method)](#placebuttons-method)
    - [totalButtonWidth (method)](#totalbuttonwidth-method)
    - [buttonSpacing (method)](#buttonspacing-method)
    - [buttonY (method)](#buttony-method)
    - [update (method)](#update-method)
    - [processDigitChange (method)](#processdigitchange-method)
    - [changeDigit (method)](#changedigit-method)
    - [isTouchOkEnabled (method)](#istouchokenabled-method)
    - [isOkEnabled (method)](#isokenabled-method)
    - [isCancelEnabled (method)](#iscancelenabled-method)
    - [processOk (method)](#processok-method)
    - [drawItem (method)](#drawitem-method)
    - [onButtonUp (method)](#onbuttonup-method)
    - [onButtonDown (method)](#onbuttondown-method)
    - [onButtonOk (method)](#onbuttonok-method)
    - [\_number (property)](#_number-property)
    - [\_maxDigits (property)](#_maxdigits-property)
    - [\_canRepeat (property)](#_canrepeat-property)
    - [\_messageWindow (property)](#_messagewindow-property)
    - [\_buttons (property)](#_buttons-property)

---

# utils

## Window_NumberInput (class)

Window_NumberInput

The window used for the event command [Input Number].

**Signature**

```ts
export declare class Window_NumberInput {
  constructor()
}
```

### setMessageWindow (method)

**Signature**

```ts
setMessageWindow(messageWindow: Window_Message): void
```

### start (method)

**Signature**

```ts
start(): void
```

### updatePlacement (method)

**Signature**

```ts
updatePlacement(): void
```

### windowWidth (method)

**Signature**

```ts
windowWidth(): number
```

### windowHeight (method)

**Signature**

```ts
windowHeight(): number
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

### itemWidth (method)

**Signature**

```ts
itemWidth(): number
```

### itemRect (method)

**Signature**

```ts
itemRect(index: number): Rectangle
```

### isScrollEnabled (method)

**Signature**

```ts
isScrollEnabled(): boolean
```

### isHoverEnabled (method)

**Signature**

```ts
isHoverEnabled(): boolean
```

### createButtons (method)

**Signature**

```ts
createButtons(): void
```

### placeButtons (method)

**Signature**

```ts
placeButtons(): void
```

### totalButtonWidth (method)

**Signature**

```ts
totalButtonWidth(): number
```

### buttonSpacing (method)

**Signature**

```ts
buttonSpacing(): number
```

### buttonY (method)

**Signature**

```ts
buttonY(): number
```

### update (method)

**Signature**

```ts
update(): void
```

### processDigitChange (method)

**Signature**

```ts
processDigitChange(): void
```

### changeDigit (method)

**Signature**

```ts
changeDigit(up: boolean): void
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

### processOk (method)

**Signature**

```ts
processOk(): void
```

### drawItem (method)

**Signature**

```ts
drawItem(index: number): void
```

### onButtonUp (method)

**Signature**

```ts
onButtonUp(): void
```

### onButtonDown (method)

**Signature**

```ts
onButtonDown(): void
```

### onButtonOk (method)

**Signature**

```ts
onButtonOk(): void
```

### \_number (property)

**Signature**

```ts
_number: number
```

### \_maxDigits (property)

**Signature**

```ts
_maxDigits: number
```

### \_canRepeat (property)

**Signature**

```ts
_canRepeat: boolean
```

### \_messageWindow (property)

**Signature**

```ts
_messageWindow: Window_Message
```

### \_buttons (property)

**Signature**

```ts
_buttons: Sprite_Button[]
```
