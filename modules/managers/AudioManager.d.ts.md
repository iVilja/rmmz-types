---
title: managers/AudioManager.d.ts
nav_order: 49
parent: Modules
---

## AudioManager.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AudioManager (class)](#audiomanager-class)
    - [playBgm (static method)](#playbgm-static-method)
    - [replayBgm (static method)](#replaybgm-static-method)
    - [isCurrentBgm (static method)](#iscurrentbgm-static-method)
    - [updateBgmParameters (static method)](#updatebgmparameters-static-method)
    - [updateCurrentBgm (static method)](#updatecurrentbgm-static-method)
    - [stopBgm (static method)](#stopbgm-static-method)
    - [fadeOutBgm (static method)](#fadeoutbgm-static-method)
    - [fadeInBgm (static method)](#fadeinbgm-static-method)
    - [playBgs (static method)](#playbgs-static-method)
    - [replayBgs (static method)](#replaybgs-static-method)
    - [isCurrentBgs (static method)](#iscurrentbgs-static-method)
    - [updateBgsParameters (static method)](#updatebgsparameters-static-method)
    - [updateCurrentBgs (static method)](#updatecurrentbgs-static-method)
    - [stopBgs (static method)](#stopbgs-static-method)
    - [fadeOutBgs (static method)](#fadeoutbgs-static-method)
    - [fadeInBgs (static method)](#fadeinbgs-static-method)
    - [playMe (static method)](#playme-static-method)
    - [updateMeParameters (static method)](#updatemeparameters-static-method)
    - [fadeOutMe (static method)](#fadeoutme-static-method)
    - [stopMe (static method)](#stopme-static-method)
    - [playSe (static method)](#playse-static-method)
    - [updateSeParameters (static method)](#updateseparameters-static-method)
    - [cleanupSe (static method)](#cleanupse-static-method)
    - [stopSe (static method)](#stopse-static-method)
    - [playStaticSe (static method)](#playstaticse-static-method)
    - [loadStaticSe (static method)](#loadstaticse-static-method)
    - [isStaticSe (static method)](#isstaticse-static-method)
    - [stopAll (static method)](#stopall-static-method)
    - [saveBgm (static method)](#savebgm-static-method)
    - [saveBgs (static method)](#savebgs-static-method)
    - [makeEmptyAudioObject (static method)](#makeemptyaudioobject-static-method)
    - [createBuffer (static method)](#createbuffer-static-method)
    - [updateBufferParameters (static method)](#updatebufferparameters-static-method)
    - [audioFileExt (static method)](#audiofileext-static-method)
    - [checkErrors (static method)](#checkerrors-static-method)
    - [throwLoadError (static method)](#throwloaderror-static-method)

---

# utils

## AudioManager (class)

AudioManager

The static class that handles BGM, BGS, ME and SE.

**Signature**

```ts
export declare class AudioManager {
  constructor()
}
```

### playBgm (static method)

**Signature**

```ts
static playBgm(bgm: DataAudio, pos?: number): void;
```

### replayBgm (static method)

**Signature**

```ts
static replayBgm(bgm: DataAudio): void;
```

### isCurrentBgm (static method)

**Signature**

```ts
static isCurrentBgm(bgm: DataAudio): boolean | null;
```

### updateBgmParameters (static method)

**Signature**

```ts
static updateBgmParameters(bgm: DataAudio | null): void;
```

### updateCurrentBgm (static method)

**Signature**

```ts
static updateCurrentBgm(bgm: DataAudio, pos?: number): void;
```

### stopBgm (static method)

**Signature**

```ts
static stopBgm(): void;
```

### fadeOutBgm (static method)

**Signature**

```ts
static fadeOutBgm(duration: number): void;
```

### fadeInBgm (static method)

**Signature**

```ts
static fadeInBgm(duration: number): void;
```

### playBgs (static method)

**Signature**

```ts
static playBgs(bgs: DataAudio, pos?: number): void;
```

### replayBgs (static method)

**Signature**

```ts
static replayBgs(bgs: DataAudio): void;
```

### isCurrentBgs (static method)

**Signature**

```ts
static isCurrentBgs(bgs: DataAudio): boolean | null;
```

### updateBgsParameters (static method)

**Signature**

```ts
static updateBgsParameters(bgs: DataAudio | null): void;
```

### updateCurrentBgs (static method)

**Signature**

```ts
static updateCurrentBgs(bgs: DataAudio, pos?: number): void;
```

### stopBgs (static method)

**Signature**

```ts
static stopBgs(): void;
```

### fadeOutBgs (static method)

**Signature**

```ts
static fadeOutBgs(duration: number): void;
```

### fadeInBgs (static method)

**Signature**

```ts
static fadeInBgs(duration: number): void;
```

### playMe (static method)

**Signature**

```ts
static playMe(me: DataAudio): void;
```

### updateMeParameters (static method)

**Signature**

```ts
static updateMeParameters(me: DataAudio | null): void;
```

### fadeOutMe (static method)

**Signature**

```ts
static fadeOutMe(duration: number): void;
```

### stopMe (static method)

**Signature**

```ts
static stopMe(): void;
```

### playSe (static method)

**Signature**

```ts
static playSe(se: DataAudio): void;
```

### updateSeParameters (static method)

**Signature**

```ts
static updateSeParameters(buffer: WebAudio, se: DataAudio | null): void;
```

### cleanupSe (static method)

**Signature**

```ts
static cleanupSe(): void;
```

### stopSe (static method)

**Signature**

```ts
static stopSe(): void;
```

### playStaticSe (static method)

**Signature**

```ts
static playStaticSe(se: DataAudio): void;
```

### loadStaticSe (static method)

**Signature**

```ts
static loadStaticSe(se: DataAudio): void;
```

### isStaticSe (static method)

**Signature**

```ts
static isStaticSe(se: DataAudio): boolean;
```

### stopAll (static method)

**Signature**

```ts
static stopAll(): void;
```

### saveBgm (static method)

**Signature**

```ts
static saveBgm(): DataAudio;
```

### saveBgs (static method)

**Signature**

```ts
static saveBgs(): DataAudio;
```

### makeEmptyAudioObject (static method)

**Signature**

```ts
static makeEmptyAudioObject(): DataAudio;
```

### createBuffer (static method)

**Signature**

```ts
static createBuffer(folder: string, name: string): WebAudio;
```

### updateBufferParameters (static method)

**Signature**

```ts
static updateBufferParameters(buffer: WebAudio | null, configVolume: number, audio: DataAudio | null): void;
```

### audioFileExt (static method)

**Signature**

```ts
static audioFileExt(): string;
```

### checkErrors (static method)

**Signature**

```ts
static checkErrors(): void;
```

### throwLoadError (static method)

**Signature**

```ts
static throwLoadError(webAudio: WebAudio): void;
```
