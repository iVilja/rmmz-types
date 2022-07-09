---
title: sprites/Spriteset_Map.d.ts
nav_order: 140
parent: Modules
---

## Spriteset_Map.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Spriteset_Map (class)](#spriteset_map-class)
    - [destroy (method)](#destroy-method)
    - [loadSystemImages (method)](#loadsystemimages-method)
    - [createLowerLayer (method)](#createlowerlayer-method)
    - [update (method)](#update-method)
    - [hideCharacters (method)](#hidecharacters-method)
    - [createParallax (method)](#createparallax-method)
    - [createTilemap (method)](#createtilemap-method)
    - [loadTileset (method)](#loadtileset-method)
    - [createCharacters (method)](#createcharacters-method)
    - [createShadow (method)](#createshadow-method)
    - [createDestination (method)](#createdestination-method)
    - [createWeather (method)](#createweather-method)
    - [updateTileset (method)](#updatetileset-method)
    - [updateParallax (method)](#updateparallax-method)
    - [updateTilemap (method)](#updatetilemap-method)
    - [updateShadow (method)](#updateshadow-method)
    - [updateWeather (method)](#updateweather-method)
    - [updateBalloons (method)](#updateballoons-method)
    - [processBalloonRequests (method)](#processballoonrequests-method)
    - [createBalloon (method)](#createballoon-method)
    - [removeBalloon (method)](#removeballoon-method)
    - [removeAllBalloons (method)](#removeallballoons-method)
    - [findTargetSprite (method)](#findtargetsprite-method)
    - [animationBaseDelay (method)](#animationbasedelay-method)
    - [\_balloonSprites (property)](#_balloonsprites-property)
    - [\_characterSprites (property)](#_charactersprites-property)
    - [\_parallax (property)](#_parallax-property)
    - [\_tilemap (property)](#_tilemap-property)
    - [\_tileset (property)](#_tileset-property)
    - [\_shadowSprite (property)](#_shadowsprite-property)
    - [\_destinationSprite (property)](#_destinationsprite-property)
    - [\_weather (property)](#_weather-property)
    - [\_parallaxName (property)](#_parallaxname-property)

---

# utils

## Spriteset_Map (class)

// Spriteset_Map
//
// The set of sprites on the map screen.

**Signature**

```ts
export declare class Spriteset_Map
```

### destroy (method)

**Signature**

```ts
destroy(options?: PIXIDestroyOptions): void
```

### loadSystemImages (method)

**Signature**

```ts
loadSystemImages(): void
```

### createLowerLayer (method)

**Signature**

```ts
createLowerLayer(): void
```

### update (method)

**Signature**

```ts
update(): void
```

### hideCharacters (method)

**Signature**

```ts
hideCharacters(): void
```

### createParallax (method)

**Signature**

```ts
createParallax(): void
```

### createTilemap (method)

**Signature**

```ts
createTilemap(): void
```

### loadTileset (method)

**Signature**

```ts
loadTileset(): void
```

### createCharacters (method)

**Signature**

```ts
createCharacters(): void
```

### createShadow (method)

**Signature**

```ts
createShadow(): void
```

### createDestination (method)

**Signature**

```ts
createDestination(): void
```

### createWeather (method)

**Signature**

```ts
createWeather(): void
```

### updateTileset (method)

**Signature**

```ts
updateTileset(): void
```

### updateParallax (method)

**Signature**

```ts
updateParallax(): void
```

### updateTilemap (method)

**Signature**

```ts
updateTilemap(): void
```

### updateShadow (method)

**Signature**

```ts
updateShadow(): void
```

### updateWeather (method)

**Signature**

```ts
updateWeather(): void
```

### updateBalloons (method)

**Signature**

```ts
updateBalloons(): void
```

### processBalloonRequests (method)

**Signature**

```ts
processBalloonRequests(): void
```

### createBalloon (method)

**Signature**

```ts
createBalloon(request: BalloonRequest): void
```

### removeBalloon (method)

**Signature**

```ts
removeBalloon(sprite: Sprite_Balloon): void
```

### removeAllBalloons (method)

**Signature**

```ts
removeAllBalloons(): void
```

### findTargetSprite (method)

**Signature**

```ts
findTargetSprite(target: Game_Character): Sprite_Character | undefined
```

### animationBaseDelay (method)

**Signature**

```ts
animationBaseDelay(): number
```

### \_balloonSprites (property)

**Signature**

```ts
_balloonSprites: Sprite_Balloon[]
```

### \_characterSprites (property)

**Signature**

```ts
_characterSprites: Sprite_Character[]
```

### \_parallax (property)

**Signature**

```ts
_parallax: TilingSprite
```

### \_tilemap (property)

**Signature**

```ts
_tilemap: Tilemap
```

### \_tileset (property)

**Signature**

```ts
_tileset: DataTileset
```

### \_shadowSprite (property)

**Signature**

```ts
_shadowSprite: Sprite<Bitmap>
```

### \_destinationSprite (property)

**Signature**

```ts
_destinationSprite: Sprite_Destination
```

### \_weather (property)

**Signature**

```ts
_weather: Weather
```

### \_parallaxName (property)

**Signature**

```ts
_parallaxName: string
```
