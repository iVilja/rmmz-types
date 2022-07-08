---
title: managers/ColorManager.d.ts
nav_order: 51
parent: Modules
---

## ColorManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ColorManager (class)](#colormanager-class)
    - [loadWindowskin (static method)](#loadwindowskin-static-method)
    - [textColor (static method)](#textcolor-static-method)
    - [normalColor (static method)](#normalcolor-static-method)
    - [systemColor (static method)](#systemcolor-static-method)
    - [crisisColor (static method)](#crisiscolor-static-method)
    - [deathColor (static method)](#deathcolor-static-method)
    - [gaugeBackColor (static method)](#gaugebackcolor-static-method)
    - [hpGaugeColor1 (static method)](#hpgaugecolor1-static-method)
    - [hpGaugeColor2 (static method)](#hpgaugecolor2-static-method)
    - [mpGaugeColor1 (static method)](#mpgaugecolor1-static-method)
    - [mpGaugeColor2 (static method)](#mpgaugecolor2-static-method)
    - [mpCostColor (static method)](#mpcostcolor-static-method)
    - [powerUpColor (static method)](#powerupcolor-static-method)
    - [powerDownColor (static method)](#powerdowncolor-static-method)
    - [ctGaugeColor1 (static method)](#ctgaugecolor1-static-method)
    - [ctGaugeColor2 (static method)](#ctgaugecolor2-static-method)
    - [tpGaugeColor1 (static method)](#tpgaugecolor1-static-method)
    - [tpGaugeColor2 (static method)](#tpgaugecolor2-static-method)
    - [tpCostColor (static method)](#tpcostcolor-static-method)
    - [pendingColor (static method)](#pendingcolor-static-method)
    - [hpColor (static method)](#hpcolor-static-method)
    - [mpColor (static method)](#mpcolor-static-method)
    - [tpColor (static method)](#tpcolor-static-method)
    - [paramchangeTextColor (static method)](#paramchangetextcolor-static-method)
    - [damageColor (static method)](#damagecolor-static-method)
    - [outlineColor (static method)](#outlinecolor-static-method)
    - [dimColor1 (static method)](#dimcolor1-static-method)
    - [dimColor2 (static method)](#dimcolor2-static-method)
    - [itemBackColor1 (static method)](#itembackcolor1-static-method)
    - [itemBackColor2 (static method)](#itembackcolor2-static-method)

---

# utils

## ColorManager (class)

ColorManager

The static class that handles the window colors.

**Signature**

```ts
export declare class ColorManager {
  constructor()
}
```

### loadWindowskin (static method)

**Signature**

```ts
static loadWindowskin(): void;
```

### textColor (static method)

**Signature**

```ts
static textColor(n: number): string;
```

### normalColor (static method)

**Signature**

```ts
static normalColor(): string;
```

### systemColor (static method)

**Signature**

```ts
static systemColor(): string;
```

### crisisColor (static method)

**Signature**

```ts
static crisisColor(): string;
```

### deathColor (static method)

**Signature**

```ts
static deathColor(): string;
```

### gaugeBackColor (static method)

**Signature**

```ts
static gaugeBackColor(): string;
```

### hpGaugeColor1 (static method)

**Signature**

```ts
static hpGaugeColor1(): string;
```

### hpGaugeColor2 (static method)

**Signature**

```ts
static hpGaugeColor2(): string;
```

### mpGaugeColor1 (static method)

**Signature**

```ts
static mpGaugeColor1(): string;
```

### mpGaugeColor2 (static method)

**Signature**

```ts
static mpGaugeColor2(): string;
```

### mpCostColor (static method)

**Signature**

```ts
static mpCostColor(): string;
```

### powerUpColor (static method)

**Signature**

```ts
static powerUpColor(): string;
```

### powerDownColor (static method)

**Signature**

```ts
static powerDownColor(): string;
```

### ctGaugeColor1 (static method)

**Signature**

```ts
static ctGaugeColor1(): string;
```

### ctGaugeColor2 (static method)

**Signature**

```ts
static ctGaugeColor2(): string;
```

### tpGaugeColor1 (static method)

**Signature**

```ts
static tpGaugeColor1(): string;
```

### tpGaugeColor2 (static method)

**Signature**

```ts
static tpGaugeColor2(): string;
```

### tpCostColor (static method)

**Signature**

```ts
static tpCostColor(): string;
```

### pendingColor (static method)

**Signature**

```ts
static pendingColor(): string;
```

### hpColor (static method)

**Signature**

```ts
static hpColor(actor: Game_BattlerBase | null): string;
```

### mpColor (static method)

**Signature**

```ts
static mpColor(_actor?: Game_BattlerBase | null): string;
```

### tpColor (static method)

**Signature**

```ts
static tpColor(_actor?: Game_BattlerBase | null): string;
```

### paramchangeTextColor (static method)

**Signature**

```ts
static paramchangeTextColor(change: number): string;
```

### damageColor (static method)

**Signature**

```ts
static damageColor(colorType: number): "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080";
```

### outlineColor (static method)

**Signature**

```ts
static outlineColor(): string;
```

### dimColor1 (static method)

**Signature**

```ts
static dimColor1(): string;
```

### dimColor2 (static method)

**Signature**

```ts
static dimColor2(): string;
```

### itemBackColor1 (static method)

**Signature**

```ts
static itemBackColor1(): string;
```

### itemBackColor2 (static method)

**Signature**

```ts
static itemBackColor2(): string;
```
