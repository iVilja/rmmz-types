---
title: windows/Window_ShopNumber.d.ts
nav_order: 182
parent: Modules
---

## Window_ShopNumber.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Window_ShopNumber (class)](#window_shopnumber-class)
    - [isScrollEnabled (method)](#isscrollenabled-method)
    - [number (method)](#number-method)
    - [setup (method)](#setup-method)
    - [setCurrencyUnit (method)](#setcurrencyunit-method)
    - [createButtons (method)](#createbuttons-method)
    - [placeButtons (method)](#placebuttons-method)
    - [totalButtonWidth (method)](#totalbuttonwidth-method)
    - [buttonSpacing (method)](#buttonspacing-method)
    - [refresh (method)](#refresh-method)
    - [drawCurrentItemName (method)](#drawcurrentitemname-method)
    - [drawMultiplicationSign (method)](#drawmultiplicationsign-method)
    - [multiplicationSign (method)](#multiplicationsign-method)
    - [multiplicationSignX (method)](#multiplicationsignx-method)
    - [drawNumber (method)](#drawnumber-method)
    - [drawHorzLine (method)](#drawhorzline-method)
    - [drawTotalPrice (method)](#drawtotalprice-method)
    - [itemNameY (method)](#itemnamey-method)
    - [totalPriceY (method)](#totalpricey-method)
    - [buttonY (method)](#buttony-method)
    - [cursorWidth (method)](#cursorwidth-method)
    - [cursorX (method)](#cursorx-method)
    - [maxDigits (method)](#maxdigits-method)
    - [update (method)](#update-method)
    - [playOkSound (method)](#playoksound-method)
    - [processNumberChange (method)](#processnumberchange-method)
    - [changeNumber (method)](#changenumber-method)
    - [itemRect (method)](#itemrect-method)
    - [isTouchOkEnabled (method)](#istouchokenabled-method)
    - [onButtonUp (method)](#onbuttonup-method)
    - [onButtonUp2 (method)](#onbuttonup2-method)
    - [onButtonDown (method)](#onbuttondown-method)
    - [onButtonDown2 (method)](#onbuttondown2-method)
    - [onButtonOk (method)](#onbuttonok-method)
    - [\_item (property)](#_item-property)
    - [\_max (property)](#_max-property)
    - [\_price (property)](#_price-property)
    - [\_number (property)](#_number-property)
    - [\_currencyUnit (property)](#_currencyunit-property)
    - [\_canRepeat (property)](#_canrepeat-property)
    - [\_buttons (property)](#_buttons-property)

---

# utils

## Window_ShopNumber (class)

Window_ShopNumber

The window for inputting quantity of items to buy or sell on the shop
// screen.

**Signature**

```ts
export declare class Window_ShopNumber {
  constructor(rect: Rectangle)
}
```

### isScrollEnabled (method)

**Signature**

```ts
isScrollEnabled(): boolean;
```

### number (method)

**Signature**

```ts
number(): number;
```

### setup (method)

**Signature**

```ts
setup(item: DataPricedItemBase | null, max: number, price: number): void;
```

### setCurrencyUnit (method)

**Signature**

```ts
setCurrencyUnit(currencyUnit: string): void;
```

### createButtons (method)

**Signature**

```ts
createButtons(): void;
```

### placeButtons (method)

**Signature**

```ts
placeButtons(): void;
```

### totalButtonWidth (method)

**Signature**

```ts
totalButtonWidth(): number;
```

### buttonSpacing (method)

**Signature**

```ts
buttonSpacing(): number;
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### drawCurrentItemName (method)

**Signature**

```ts
drawCurrentItemName(): void;
```

### drawMultiplicationSign (method)

**Signature**

```ts
drawMultiplicationSign(): void;
```

### multiplicationSign (method)

**Signature**

```ts
multiplicationSign(): string;
```

### multiplicationSignX (method)

**Signature**

```ts
multiplicationSignX(): number;
```

### drawNumber (method)

**Signature**

```ts
drawNumber(): void;
```

### drawHorzLine (method)

**Signature**

```ts
drawHorzLine(): void;
```

### drawTotalPrice (method)

**Signature**

```ts
drawTotalPrice(): void;
```

### itemNameY (method)

**Signature**

```ts
itemNameY(): number;
```

### totalPriceY (method)

**Signature**

```ts
totalPriceY(): number;
```

### buttonY (method)

**Signature**

```ts
buttonY(): number;
```

### cursorWidth (method)

**Signature**

```ts
cursorWidth(): number;
```

### cursorX (method)

**Signature**

```ts
cursorX(): number;
```

### maxDigits (method)

**Signature**

```ts
maxDigits(): number;
```

### update (method)

**Signature**

```ts
update(): void;
```

### playOkSound (method)

**Signature**

```ts
playOkSound(): void;
```

### processNumberChange (method)

**Signature**

```ts
processNumberChange(): void;
```

### changeNumber (method)

**Signature**

```ts
changeNumber(amount: number): void;
```

### itemRect (method)

**Signature**

```ts
itemRect(): Rectangle;
```

### isTouchOkEnabled (method)

**Signature**

```ts
isTouchOkEnabled(): boolean;
```

### onButtonUp (method)

**Signature**

```ts
onButtonUp(): void;
```

### onButtonUp2 (method)

**Signature**

```ts
onButtonUp2(): void;
```

### onButtonDown (method)

**Signature**

```ts
onButtonDown(): void;
```

### onButtonDown2 (method)

**Signature**

```ts
onButtonDown2(): void;
```

### onButtonOk (method)

**Signature**

```ts
onButtonOk(): void;
```

### \_item (property)

**Signature**

```ts
_item: DataPricedItemBase | null
```

### \_max (property)

**Signature**

```ts
_max: number
```

### \_price (property)

**Signature**

```ts
_price: number
```

### \_number (property)

**Signature**

```ts
_number: number
```

### \_currencyUnit (property)

**Signature**

```ts
_currencyUnit: string
```

### \_canRepeat (property)

**Signature**

```ts
_canRepeat: boolean
```

### \_buttons (property)

**Signature**

```ts
_buttons: Sprite_Button[]
```
