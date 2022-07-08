---
title: core/Video.d.ts
nav_order: 17
parent: Modules
---

## Video.d overview

The static class that handles video playback.

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Video (class)](#video-class)
    - [initialize (static method)](#initialize-static-method)
    - [resize (static method)](#resize-static-method)
    - [play (static method)](#play-static-method)
    - [isPlaying (static method)](#isplaying-static-method)
    - [setVolume (static method)](#setvolume-static-method)
    - [\_createElement (static method)](#_createelement-static-method)
    - [\_onLoad (static method)](#_onload-static-method)
    - [\_onError (static method)](#_onerror-static-method)
    - [\_onEnd (static method)](#_onend-static-method)
    - [\_updateVisibility (static method)](#_updatevisibility-static-method)
    - [\_isVisible (static method)](#_isvisible-static-method)
    - [\_setupEventHandlers (static method)](#_setupeventhandlers-static-method)
    - [\_onUserGesture (static method)](#_onusergesture-static-method)

---

# utils

## Video (class)

The static class that handles video playback.

**Signature**

```ts
export declare class Video {
  constructor()
}
```

### initialize (static method)

Initializes the video system.

**Signature**

```ts
static initialize(width: number, height: number): void;
```

### resize (static method)

Changes the display size of the video.

**Signature**

```ts
static resize(width: number, height: number): void;
```

### play (static method)

Starts playback of a video.

**Signature**

```ts
static play(src: string): void;
```

### isPlaying (static method)

Checks whether the video is playing.

**Signature**

```ts
static isPlaying(): boolean;
```

### setVolume (static method)

Sets the volume for videos.

**Signature**

```ts
static setVolume(volume: number): void;
```

### \_createElement (static method)

**Signature**

```ts
static _createElement(): void;
```

### \_onLoad (static method)

**Signature**

```ts
static _onLoad(): void;
```

### \_onError (static method)

**Signature**

```ts
static _onError(): void;
```

### \_onEnd (static method)

**Signature**

```ts
static _onEnd(): void;
```

### \_updateVisibility (static method)

**Signature**

```ts
static _updateVisibility(videoVisible: boolean): void;
```

### \_isVisible (static method)

**Signature**

```ts
static _isVisible(): boolean;
```

### \_setupEventHandlers (static method)

**Signature**

```ts
static _setupEventHandlers(): void;
```

### \_onUserGesture (static method)

**Signature**

```ts
static _onUserGesture(): void;
```
