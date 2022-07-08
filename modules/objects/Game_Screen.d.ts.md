---
title: objects/Game_Screen.d.ts
nav_order: 83
parent: Modules
---

## Game_Screen.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Screen (class)](#game_screen-class)
    - [clear (method)](#clear-method)
    - [onBattleStart (method)](#onbattlestart-method)
    - [brightness (method)](#brightness-method)
    - [tone (method)](#tone-method)
    - [flashColor (method)](#flashcolor-method)
    - [shake (method)](#shake-method)
    - [zoomX (method)](#zoomx-method)
    - [zoomY (method)](#zoomy-method)
    - [zoomScale (method)](#zoomscale-method)
    - [weatherType (method)](#weathertype-method)
    - [weatherPower (method)](#weatherpower-method)
    - [picture (method)](#picture-method)
    - [realPictureId (method)](#realpictureid-method)
    - [clearFade (method)](#clearfade-method)
    - [clearTone (method)](#cleartone-method)
    - [clearFlash (method)](#clearflash-method)
    - [clearShake (method)](#clearshake-method)
    - [clearZoom (method)](#clearzoom-method)
    - [clearWeather (method)](#clearweather-method)
    - [clearPictures (method)](#clearpictures-method)
    - [eraseBattlePictures (method)](#erasebattlepictures-method)
    - [maxPictures (method)](#maxpictures-method)
    - [startFadeOut (method)](#startfadeout-method)
    - [startFadeIn (method)](#startfadein-method)
    - [startTint (method)](#starttint-method)
    - [startFlash (method)](#startflash-method)
    - [startShake (method)](#startshake-method)
    - [startZoom (method)](#startzoom-method)
    - [setZoom (method)](#setzoom-method)
    - [changeWeather (method)](#changeweather-method)
    - [update (method)](#update-method)
    - [updateFadeOut (method)](#updatefadeout-method)
    - [updateFadeIn (method)](#updatefadein-method)
    - [updateTone (method)](#updatetone-method)
    - [updateFlash (method)](#updateflash-method)
    - [updateShake (method)](#updateshake-method)
    - [updateZoom (method)](#updatezoom-method)
    - [updateWeather (method)](#updateweather-method)
    - [updatePictures (method)](#updatepictures-method)
    - [startFlashForDamage (method)](#startflashfordamage-method)
    - [showPicture (method)](#showpicture-method)
    - [movePicture (method)](#movepicture-method)
    - [rotatePicture (method)](#rotatepicture-method)
    - [tintPicture (method)](#tintpicture-method)
    - [erasePicture (method)](#erasepicture-method)
    - [\_brightness (property)](#_brightness-property)
    - [\_fadeOutDuration (property)](#_fadeoutduration-property)
    - [\_fadeInDuration (property)](#_fadeinduration-property)
    - [\_tone (property)](#_tone-property)
    - [\_toneTarget (property)](#_tonetarget-property)
    - [\_toneDuration (property)](#_toneduration-property)
    - [\_flashColor (property)](#_flashcolor-property)
    - [\_flashDuration (property)](#_flashduration-property)
    - [\_shakePower (property)](#_shakepower-property)
    - [\_shakeSpeed (property)](#_shakespeed-property)
    - [\_shakeDuration (property)](#_shakeduration-property)
    - [\_shakeDirection (property)](#_shakedirection-property)
    - [\_shake (property)](#_shake-property)
    - [\_zoomX (property)](#_zoomx-property)
    - [\_zoomY (property)](#_zoomy-property)
    - [\_zoomScale (property)](#_zoomscale-property)
    - [\_zoomScaleTarget (property)](#_zoomscaletarget-property)
    - [\_zoomDuration (property)](#_zoomduration-property)
    - [\_weatherType (property)](#_weathertype-property)
    - [\_weatherPower (property)](#_weatherpower-property)
    - [\_weatherPowerTarget (property)](#_weatherpowertarget-property)
    - [\_weatherDuration (property)](#_weatherduration-property)
    - [\_pictures (property)](#_pictures-property)

---

# utils

## Game_Screen (class)

Game_Screen

The game object class for screen effect data, such as changes in color tone
// and flashes.

**Signature**

```ts
export declare class Game_Screen
```

### clear (method)

**Signature**

```ts
clear(): void;
```

### onBattleStart (method)

**Signature**

```ts
onBattleStart(): void;
```

### brightness (method)

**Signature**

```ts
brightness(): number;
```

### tone (method)

**Signature**

```ts
tone(): [number, number, number, number];
```

### flashColor (method)

**Signature**

```ts
flashColor(): [number, number, number, number];
```

### shake (method)

**Signature**

```ts
shake(): number;
```

### zoomX (method)

**Signature**

```ts
zoomX(): number;
```

### zoomY (method)

**Signature**

```ts
zoomY(): number;
```

### zoomScale (method)

**Signature**

```ts
zoomScale(): number;
```

### weatherType (method)

**Signature**

```ts
weatherType(): WeatherType;
```

### weatherPower (method)

**Signature**

```ts
weatherPower(): number;
```

### picture (method)

**Signature**

```ts
picture(pictureId: PictureID): Game_Picture | null;
```

### realPictureId (method)

**Signature**

```ts
realPictureId(pictureId: PictureID): number;
```

### clearFade (method)

**Signature**

```ts
clearFade(): void;
```

### clearTone (method)

**Signature**

```ts
clearTone(): void;
```

### clearFlash (method)

**Signature**

```ts
clearFlash(): void;
```

### clearShake (method)

**Signature**

```ts
clearShake(): void;
```

### clearZoom (method)

**Signature**

```ts
clearZoom(): void;
```

### clearWeather (method)

**Signature**

```ts
clearWeather(): void;
```

### clearPictures (method)

**Signature**

```ts
clearPictures(): void;
```

### eraseBattlePictures (method)

**Signature**

```ts
eraseBattlePictures(): void;
```

### maxPictures (method)

**Signature**

```ts
maxPictures(): number;
```

### startFadeOut (method)

**Signature**

```ts
startFadeOut(duration: number): void;
```

### startFadeIn (method)

**Signature**

```ts
startFadeIn(duration: number): void;
```

### startTint (method)

**Signature**

```ts
startTint(tone: Color, duration: number): void;
```

### startFlash (method)

**Signature**

```ts
startFlash(color: Color, duration: number): void;
```

### startShake (method)

**Signature**

```ts
startShake(power: number, speed: number, duration: number): void;
```

### startZoom (method)

**Signature**

```ts
startZoom(x: number, y: number, scale: number, duration: number): void;
```

### setZoom (method)

**Signature**

```ts
setZoom(x: number, y: number, scale: number): void;
```

### changeWeather (method)

**Signature**

```ts
changeWeather(type: WeatherType, power: number, duration: number): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateFadeOut (method)

**Signature**

```ts
updateFadeOut(): void;
```

### updateFadeIn (method)

**Signature**

```ts
updateFadeIn(): void;
```

### updateTone (method)

**Signature**

```ts
updateTone(): void;
```

### updateFlash (method)

**Signature**

```ts
updateFlash(): void;
```

### updateShake (method)

**Signature**

```ts
updateShake(): void;
```

### updateZoom (method)

**Signature**

```ts
updateZoom(): void;
```

### updateWeather (method)

**Signature**

```ts
updateWeather(): void;
```

### updatePictures (method)

**Signature**

```ts
updatePictures(): void;
```

### startFlashForDamage (method)

**Signature**

```ts
startFlashForDamage(): void;
```

### showPicture (method)

**Signature**

```ts
showPicture(pictureId: PictureID, name: string, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: PIXI.BLEND_MODES): void;
```

### movePicture (method)

**Signature**

```ts
movePicture(pictureId: PictureID, origin: number, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: PIXI.BLEND_MODES, duration: number, easingType: PictureEasingType): void;
```

### rotatePicture (method)

**Signature**

```ts
rotatePicture(pictureId: PictureID, speed: number): void;
```

### tintPicture (method)

**Signature**

```ts
tintPicture(pictureId: PictureID, tone: Color, duration: number): void;
```

### erasePicture (method)

**Signature**

```ts
erasePicture(pictureId: PictureID): void;
```

### \_brightness (property)

**Signature**

```ts
_brightness: number
```

### \_fadeOutDuration (property)

**Signature**

```ts
_fadeOutDuration: number
```

### \_fadeInDuration (property)

**Signature**

```ts
_fadeInDuration: number
```

### \_tone (property)

**Signature**

```ts
_tone: [number, number, number, number]
```

### \_toneTarget (property)

**Signature**

```ts
_toneTarget: Color
```

### \_toneDuration (property)

**Signature**

```ts
_toneDuration: number
```

### \_flashColor (property)

**Signature**

```ts
_flashColor: [number, number, number, number]
```

### \_flashDuration (property)

**Signature**

```ts
_flashDuration: number
```

### \_shakePower (property)

**Signature**

```ts
_shakePower: number
```

### \_shakeSpeed (property)

**Signature**

```ts
_shakeSpeed: number
```

### \_shakeDuration (property)

**Signature**

```ts
_shakeDuration: number
```

### \_shakeDirection (property)

**Signature**

```ts
_shakeDirection: number
```

### \_shake (property)

**Signature**

```ts
_shake: number
```

### \_zoomX (property)

**Signature**

```ts
_zoomX: number
```

### \_zoomY (property)

**Signature**

```ts
_zoomY: number
```

### \_zoomScale (property)

**Signature**

```ts
_zoomScale: number
```

### \_zoomScaleTarget (property)

**Signature**

```ts
_zoomScaleTarget: number
```

### \_zoomDuration (property)

**Signature**

```ts
_zoomDuration: number
```

### \_weatherType (property)

**Signature**

```ts
_weatherType: WeatherType
```

### \_weatherPower (property)

**Signature**

```ts
_weatherPower: number
```

### \_weatherPowerTarget (property)

**Signature**

```ts
_weatherPowerTarget: number
```

### \_weatherDuration (property)

**Signature**

```ts
_weatherDuration: number
```

### \_pictures (property)

**Signature**

```ts
_pictures: (Game_Picture | null)[]
```
