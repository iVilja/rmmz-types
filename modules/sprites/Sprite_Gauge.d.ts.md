---
title: sprites/Sprite_Gauge.d.ts
nav_order: 130
parent: Modules
---

## Sprite_Gauge.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [GaugeStatusType (type alias)](#gaugestatustype-type-alias)
  - [Sprite_Gauge (class)](#sprite_gauge-class)
    - [initMembers (method)](#initmembers-method)
    - [destroy (method)](#destroy-method)
    - [createBitmap (method)](#createbitmap-method)
    - [bitmapWidth (method)](#bitmapwidth-method)
    - [bitmapHeight (method)](#bitmapheight-method)
    - [textHeight (method)](#textheight-method)
    - [gaugeHeight (method)](#gaugeheight-method)
    - [gaugeX (method)](#gaugex-method)
    - [labelY (method)](#labely-method)
    - [labelFontFace (method)](#labelfontface-method)
    - [labelFontSize (method)](#labelfontsize-method)
    - [valueFontFace (method)](#valuefontface-method)
    - [valueFontSize (method)](#valuefontsize-method)
    - [setup (method)](#setup-method)
    - [update (method)](#update-method)
    - [updateBitmap (method)](#updatebitmap-method)
    - [updateTargetValue (method)](#updatetargetvalue-method)
    - [smoothness (method)](#smoothness-method)
    - [updateGaugeAnimation (method)](#updategaugeanimation-method)
    - [updateFlashing (method)](#updateflashing-method)
    - [flashingColor1 (method)](#flashingcolor1-method)
    - [flashingColor2 (method)](#flashingcolor2-method)
    - [isValid (method)](#isvalid-method)
    - [currentValue (method)](#currentvalue-method)
    - [currentMaxValue (method)](#currentmaxvalue-method)
    - [label (method)](#label-method)
    - [gaugeBackColor (method)](#gaugebackcolor-method)
    - [gaugeColor1 (method)](#gaugecolor1-method)
    - [gaugeColor2 (method)](#gaugecolor2-method)
    - [labelColor (method)](#labelcolor-method)
    - [labelOutlineColor (method)](#labeloutlinecolor-method)
    - [labelOutlineWidth (method)](#labeloutlinewidth-method)
    - [valueColor (method)](#valuecolor-method)
    - [valueOutlineColor (method)](#valueoutlinecolor-method)
    - [valueOutlineWidth (method)](#valueoutlinewidth-method)
    - [redraw (method)](#redraw-method)
    - [drawGauge (method)](#drawgauge-method)
    - [drawGaugeRect (method)](#drawgaugerect-method)
    - [gaugeRate (method)](#gaugerate-method)
    - [drawLabel (method)](#drawlabel-method)
    - [setupLabelFont (method)](#setuplabelfont-method)
    - [measureLabelWidth (method)](#measurelabelwidth-method)
    - [labelOpacity (method)](#labelopacity-method)
    - [drawValue (method)](#drawvalue-method)
    - [setupValueFont (method)](#setupvaluefont-method)
    - [\_battler (property)](#_battler-property)
    - [\_statusType (property)](#_statustype-property)
    - [\_value (property)](#_value-property)
    - [\_maxValue (property)](#_maxvalue-property)
    - [\_targetValue (property)](#_targetvalue-property)
    - [\_targetMaxValue (property)](#_targetmaxvalue-property)
    - [\_duration (property)](#_duration-property)
    - [\_flashingCount (property)](#_flashingcount-property)

---

# utils

## GaugeStatusType (type alias)

**Signature**

```ts
export declare type GaugeStatusType = 'time' | 'hp' | 'mp' | 'tp'
```

## Sprite_Gauge (class)

// Sprite_Gauge
//
// The sprite for displaying a status gauge.

**Signature**

```ts
export declare class Sprite_Gauge {
  constructor()
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### destroy (method)

**Signature**

```ts
destroy(options?: PIXI.IDestroyOptions | boolean): void;
```

### createBitmap (method)

**Signature**

```ts
createBitmap(): void;
```

### bitmapWidth (method)

**Signature**

```ts
bitmapWidth(): number;
```

### bitmapHeight (method)

**Signature**

```ts
bitmapHeight(): number;
```

### textHeight (method)

**Signature**

```ts
textHeight(): number;
```

### gaugeHeight (method)

**Signature**

```ts
gaugeHeight(): number;
```

### gaugeX (method)

**Signature**

```ts
gaugeX(): number;
```

### labelY (method)

**Signature**

```ts
labelY(): number;
```

### labelFontFace (method)

**Signature**

```ts
labelFontFace(): string;
```

### labelFontSize (method)

**Signature**

```ts
labelFontSize(): number;
```

### valueFontFace (method)

**Signature**

```ts
valueFontFace(): string;
```

### valueFontSize (method)

**Signature**

```ts
valueFontSize(): number;
```

### setup (method)

**Signature**

```ts
setup(battler: ActionTarget, statusType: GaugeStatusType): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateBitmap (method)

**Signature**

```ts
updateBitmap(): void;
```

### updateTargetValue (method)

**Signature**

```ts
updateTargetValue(value: number, maxValue: number): void;
```

### smoothness (method)

**Signature**

```ts
smoothness(): 5 | 20;
```

### updateGaugeAnimation (method)

**Signature**

```ts
updateGaugeAnimation(): void;
```

### updateFlashing (method)

**Signature**

```ts
updateFlashing(): void;
```

### flashingColor1 (method)

**Signature**

```ts
flashingColor1(): Color;
```

### flashingColor2 (method)

**Signature**

```ts
flashingColor2(): Color;
```

### isValid (method)

**Signature**

```ts
isValid(): boolean;
```

### currentValue (method)

**Signature**

```ts
currentValue(): number;
```

### currentMaxValue (method)

**Signature**

```ts
currentMaxValue(): number;
```

### label (method)

**Signature**

```ts
label(): string;
```

### gaugeBackColor (method)

**Signature**

```ts
gaugeBackColor(): string;
```

### gaugeColor1 (method)

**Signature**

```ts
gaugeColor1(): string;
```

### gaugeColor2 (method)

**Signature**

```ts
gaugeColor2(): string;
```

### labelColor (method)

**Signature**

```ts
labelColor(): string;
```

### labelOutlineColor (method)

**Signature**

```ts
labelOutlineColor(): string;
```

### labelOutlineWidth (method)

**Signature**

```ts
labelOutlineWidth(): number;
```

### valueColor (method)

**Signature**

```ts
valueColor(): string;
```

### valueOutlineColor (method)

**Signature**

```ts
valueOutlineColor(): string;
```

### valueOutlineWidth (method)

**Signature**

```ts
valueOutlineWidth(): number;
```

### redraw (method)

**Signature**

```ts
redraw(): void;
```

### drawGauge (method)

**Signature**

```ts
drawGauge(): void;
```

### drawGaugeRect (method)

**Signature**

```ts
drawGaugeRect(x: number, y: number, width: number, height: number): void;
```

### gaugeRate (method)

**Signature**

```ts
gaugeRate(): number;
```

### drawLabel (method)

**Signature**

```ts
drawLabel(): void;
```

### setupLabelFont (method)

**Signature**

```ts
setupLabelFont(): void;
```

### measureLabelWidth (method)

**Signature**

```ts
measureLabelWidth(): number;
```

### labelOpacity (method)

**Signature**

```ts
labelOpacity(): 255 | 160;
```

### drawValue (method)

**Signature**

```ts
drawValue(): void;
```

### setupValueFont (method)

**Signature**

```ts
setupValueFont(): void;
```

### \_battler (property)

**Signature**

```ts
_battler: Game_Actor | Game_Enemy | null
```

### \_statusType (property)

**Signature**

```ts
_statusType: string
```

### \_value (property)

**Signature**

```ts
_value: number
```

### \_maxValue (property)

**Signature**

```ts
_maxValue: number
```

### \_targetValue (property)

**Signature**

```ts
_targetValue: number
```

### \_targetMaxValue (property)

**Signature**

```ts
_targetMaxValue: number
```

### \_duration (property)

**Signature**

```ts
_duration: number
```

### \_flashingCount (property)

**Signature**

```ts
_flashingCount: number
```
