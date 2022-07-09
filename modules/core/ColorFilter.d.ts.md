---
title: core/ColorFilter.d.ts
nav_order: 2
parent: Modules
---

## ColorFilter.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ColorFilter (class)](#colorfilter-class)
    - [setHue (method)](#sethue-method)
    - [setColorTone (method)](#setcolortone-method)
    - [setBlendColor (method)](#setblendcolor-method)
    - [setBrightness (method)](#setbrightness-method)
    - [\_fragmentSrc (method)](#_fragmentsrc-method)

---

# utils

## ColorFilter (class)

The color filter for WebGL.

**Signature**

```ts
export declare class ColorFilter {
  constructor()
}
```

### setHue (method)

Sets the hue rotation value.

**Signature**

```ts
setHue(hue: number): void
```

### setColorTone (method)

Sets the color tone.

**Signature**

```ts
setColorTone(tone: Color): void
```

### setBlendColor (method)

Sets the blend color.

**Signature**

```ts
setBlendColor(color: Color): void
```

### setBrightness (method)

Sets the brightness.

**Signature**

```ts
setBrightness(brightness: number): void
```

### \_fragmentSrc (method)

**Signature**

```ts
_fragmentSrc(): string
```
