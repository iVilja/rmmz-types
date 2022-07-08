---
title: managers/ImageManager.d.ts
nav_order: 56
parent: Modules
---

## ImageManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ImageManager (class)](#imagemanager-class)
    - [loadAnimation (static method)](#loadanimation-static-method)
    - [loadBattleback1 (static method)](#loadbattleback1-static-method)
    - [loadBattleback2 (static method)](#loadbattleback2-static-method)
    - [loadEnemy (static method)](#loadenemy-static-method)
    - [loadCharacter (static method)](#loadcharacter-static-method)
    - [loadFace (static method)](#loadface-static-method)
    - [loadParallax (static method)](#loadparallax-static-method)
    - [loadPicture (static method)](#loadpicture-static-method)
    - [loadSvActor (static method)](#loadsvactor-static-method)
    - [loadSvEnemy (static method)](#loadsvenemy-static-method)
    - [loadSystem (static method)](#loadsystem-static-method)
    - [loadTileset (static method)](#loadtileset-static-method)
    - [loadTitle1 (static method)](#loadtitle1-static-method)
    - [loadTitle2 (static method)](#loadtitle2-static-method)
    - [loadBitmap (static method)](#loadbitmap-static-method)
    - [loadBitmapFromUrl (static method)](#loadbitmapfromurl-static-method)
    - [clear (static method)](#clear-static-method)
    - [isReady (static method)](#isready-static-method)
    - [throwLoadError (static method)](#throwloaderror-static-method)
    - [isObjectCharacter (static method)](#isobjectcharacter-static-method)
    - [isBigCharacter (static method)](#isbigcharacter-static-method)
    - [isZeroParallax (static method)](#iszeroparallax-static-method)

---

# utils

## ImageManager (class)

ImageManager

The static class that loads images, creates bitmap objects and retains them.

**Signature**

```ts
export declare class ImageManager {
  constructor()
}
```

### loadAnimation (static method)

**Signature**

```ts
static loadAnimation(filename: string): Bitmap;
```

### loadBattleback1 (static method)

**Signature**

```ts
static loadBattleback1(filename: string): Bitmap;
```

### loadBattleback2 (static method)

**Signature**

```ts
static loadBattleback2(filename: string): Bitmap;
```

### loadEnemy (static method)

**Signature**

```ts
static loadEnemy(filename: string): Bitmap;
```

### loadCharacter (static method)

**Signature**

```ts
static loadCharacter(filename: string): Bitmap;
```

### loadFace (static method)

**Signature**

```ts
static loadFace(filename: string): Bitmap;
```

### loadParallax (static method)

**Signature**

```ts
static loadParallax(filename: string): Bitmap;
```

### loadPicture (static method)

**Signature**

```ts
static loadPicture(filename: string): Bitmap;
```

### loadSvActor (static method)

**Signature**

```ts
static loadSvActor(filename: string): Bitmap;
```

### loadSvEnemy (static method)

**Signature**

```ts
static loadSvEnemy(filename: string): Bitmap;
```

### loadSystem (static method)

**Signature**

```ts
static loadSystem(filename: string): Bitmap;
```

### loadTileset (static method)

**Signature**

```ts
static loadTileset(filename: string): Bitmap;
```

### loadTitle1 (static method)

**Signature**

```ts
static loadTitle1(filename: string): Bitmap;
```

### loadTitle2 (static method)

**Signature**

```ts
static loadTitle2(filename: string): Bitmap;
```

### loadBitmap (static method)

**Signature**

```ts
static loadBitmap(folder: string, filename: string): Bitmap;
```

### loadBitmapFromUrl (static method)

**Signature**

```ts
static loadBitmapFromUrl(url: string): Bitmap;
```

### clear (static method)

**Signature**

```ts
static clear(): void;
```

### isReady (static method)

**Signature**

```ts
static isReady(): boolean;
```

### throwLoadError (static method)

**Signature**

```ts
static throwLoadError(bitmap: Bitmap): void;
```

### isObjectCharacter (static method)

**Signature**

```ts
static isObjectCharacter(filename: string): boolean;
```

### isBigCharacter (static method)

**Signature**

```ts
static isBigCharacter(filename: string): boolean;
```

### isZeroParallax (static method)

**Signature**

```ts
static isZeroParallax(filename: string): boolean;
```
