---
title: core/Weather.d.ts
nav_order: 18
parent: Modules
---

## Weather.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Weather (class)](#weather-class)
    - [destroy (method)](#destroy-method)
    - [update (method)](#update-method)
    - [\_createBitmaps (method)](#_createbitmaps-method)
    - [\_createDimmer (method)](#_createdimmer-method)
    - [\_updateDimmer (method)](#_updatedimmer-method)
    - [\_updateAllSprites (method)](#_updateallsprites-method)
    - [\_addSprite (method)](#_addsprite-method)
    - [\_removeSprite (method)](#_removesprite-method)
    - [\_updateSprite (method)](#_updatesprite-method)
    - [\_updateRainSprite (method)](#_updaterainsprite-method)
    - [\_updateStormSprite (method)](#_updatestormsprite-method)
    - [\_updateSnowSprite (method)](#_updatesnowsprite-method)
    - [\_rebornSprite (method)](#_rebornsprite-method)
    - [\_width (property)](#_width-property)
    - [\_height (property)](#_height-property)
    - [\_sprites (property)](#_sprites-property)
    - [viewport (property)](#viewport-property)
    - [type (property)](#type-property)
    - [power (property)](#power-property)
    - [origin (property)](#origin-property)
    - [\_rainBitmap (property)](#_rainbitmap-property)
    - [\_stormBitmap (property)](#_stormbitmap-property)
    - [\_snowBitmap (property)](#_snowbitmap-property)
    - [\_dimmerSprite (property)](#_dimmersprite-property)
  - [WeatherType (type alias)](#weathertype-type-alias)

---

# utils

## Weather (class)

The weather effect which displays rain, storm, or snow.

**Signature**

```ts
export declare class Weather {
  constructor()
}
```

### destroy (method)

Destroys the weather.

**Signature**

```ts
destroy(): void
```

### update (method)

Updates the weather for each frame.

**Signature**

```ts
update(): void
```

### \_createBitmaps (method)

**Signature**

```ts
_createBitmaps(): void
```

### \_createDimmer (method)

**Signature**

```ts
_createDimmer(): void
```

### \_updateDimmer (method)

**Signature**

```ts
_updateDimmer(): void
```

### \_updateAllSprites (method)

**Signature**

```ts
_updateAllSprites(): void
```

### \_addSprite (method)

**Signature**

```ts
_addSprite(): void
```

### \_removeSprite (method)

**Signature**

```ts
_removeSprite(): void
```

### \_updateSprite (method)

**Signature**

```ts
_updateSprite(sprite: WeatherSprite): void
```

### \_updateRainSprite (method)

**Signature**

```ts
_updateRainSprite(sprite: WeatherSprite): void
```

### \_updateStormSprite (method)

**Signature**

```ts
_updateStormSprite(sprite: WeatherSprite): void
```

### \_updateSnowSprite (method)

**Signature**

```ts
_updateSnowSprite(sprite: WeatherSprite): void
```

### \_rebornSprite (method)

**Signature**

```ts
_rebornSprite(sprite: WeatherSprite): void
```

### \_width (property)

**Signature**

```ts
_width: number
```

### \_height (property)

**Signature**

```ts
_height: number
```

### \_sprites (property)

**Signature**

```ts
_sprites: WeatherSprite[]
```

### viewport (property)

**Signature**

```ts
viewport: Bitmap
```

### type (property)

The type of the weather in ["none", "rain", "storm", "snow"].

**Signature**

```ts
type: WeatherType
```

### power (property)

The power of the weather in the range (0, 9).

**Signature**

```ts
power: number
```

### origin (property)

The origin point of the weather for scrolling.

**Signature**

```ts
origin: Point
```

### \_rainBitmap (property)

**Signature**

```ts
_rainBitmap: Bitmap
```

### \_stormBitmap (property)

**Signature**

```ts
_stormBitmap: Bitmap
```

### \_snowBitmap (property)

**Signature**

```ts
_snowBitmap: Bitmap
```

### \_dimmerSprite (property)

**Signature**

```ts
_dimmerSprite: ScreenSprite
```

## WeatherType (type alias)

**Signature**

```ts
export declare type WeatherType = 'none' | 'rain' | 'storm' | 'snow'
```
