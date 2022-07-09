---
title: core/Utils.d.ts
nav_order: 16
parent: Modules
---

## Utils.d overview

The static class that defines utility methods.

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Utils (class)](#utils-class)
    - [checkRMVersion (static method)](#checkrmversion-static-method)
    - [isOptionValid (static method)](#isoptionvalid-static-method)
    - [isNwjs (static method)](#isnwjs-static-method)
    - [isMobileDevice (static method)](#ismobiledevice-static-method)
    - [isMobileSafari (static method)](#ismobilesafari-static-method)
    - [isAndroidChrome (static method)](#isandroidchrome-static-method)
    - [isLocal (static method)](#islocal-static-method)
    - [canUseWebGL (static method)](#canusewebgl-static-method)
    - [canUseWebAudioAPI (static method)](#canusewebaudioapi-static-method)
    - [canUseCssFontLoading (static method)](#canusecssfontloading-static-method)
    - [canUseIndexedDB (static method)](#canuseindexeddb-static-method)
    - [canPlayOgg (static method)](#canplayogg-static-method)
    - [canPlayWebm (static method)](#canplaywebm-static-method)
    - [encodeURI (static method)](#encodeuri-static-method)
    - [extractFileName (static method)](#extractfilename-static-method)
    - [escapeHtml (static method)](#escapehtml-static-method)
    - [containsArabic (static method)](#containsarabic-static-method)
    - [setEncryptionInfo (static method)](#setencryptioninfo-static-method)
    - [hasEncryptedImages (static method)](#hasencryptedimages-static-method)
    - [hasEncryptedAudio (static method)](#hasencryptedaudio-static-method)
    - [decryptArrayBuffer (static method)](#decryptarraybuffer-static-method)

---

# utils

## Utils (class)

The static class that defines utility methods.

**Signature**

```ts
export declare class Utils {
  constructor()
}
```

### checkRMVersion (static method)

Checks whether the current RPG Maker version is greater than or equal to
the given version.

**Signature**

```ts
static checkRMVersion(version: string): boolean
```

### isOptionValid (static method)

Checks whether the option is in the query string.

**Signature**

```ts
static isOptionValid(name: string): boolean
```

### isNwjs (static method)

Checks whether the platform is NW.js.

**Signature**

```ts
static isNwjs(): boolean
```

### isMobileDevice (static method)

Checks whether the platform is a mobile device.

**Signature**

```ts
static isMobileDevice(): boolean
```

### isMobileSafari (static method)

Checks whether the browser is Mobile Safari.

**Signature**

```ts
static isMobileSafari(): boolean
```

### isAndroidChrome (static method)

Checks whether the browser is Android Chrome.

**Signature**

```ts
static isAndroidChrome(): boolean
```

### isLocal (static method)

Checks whether the browser is accessing local files.

**Signature**

```ts
static isLocal(): boolean
```

### canUseWebGL (static method)

Checks whether the browser supports WebGL.

**Signature**

```ts
static canUseWebGL(): boolean
```

### canUseWebAudioAPI (static method)

Checks whether the browser supports Web Audio API.

**Signature**

```ts
static canUseWebAudioAPI(): boolean
```

### canUseCssFontLoading (static method)

Checks whether the browser supports CSS Font Loading.

**Signature**

```ts
static canUseCssFontLoading(): boolean
```

### canUseIndexedDB (static method)

Checks whether the browser supports IndexedDB.

**Signature**

```ts
static canUseIndexedDB(): boolean
```

### canPlayOgg (static method)

Checks whether the browser can play ogg files.

**Signature**

```ts
static canPlayOgg(): boolean
```

### canPlayWebm (static method)

Checks whether the browser can play webm files.

**Signature**

```ts
static canPlayWebm(): boolean
```

### encodeURI (static method)

Encodes a URI component without escaping slash characters.

**Signature**

```ts
static encodeURI(str: string): string
```

### extractFileName (static method)

Gets the filename that does not include subfolders.

**Signature**

```ts
static extractFileName(filename: string): string
```

### escapeHtml (static method)

Escapes special characters for HTML.

**Signature**

```ts
static escapeHtml(str: string): string
```

### containsArabic (static method)

Checks whether the string contains any Arabic characters.

**Signature**

```ts
static containsArabic(str: string): boolean
```

### setEncryptionInfo (static method)

Sets information related to encryption.

**Signature**

```ts
static setEncryptionInfo(hasImages: boolean, hasAudio: boolean, key: string): void
```

### hasEncryptedImages (static method)

Checks whether the image files in the game are encrypted.

**Signature**

```ts
static hasEncryptedImages(): boolean
```

### hasEncryptedAudio (static method)

Checks whether the audio files in the game are encrypted.

**Signature**

```ts
static hasEncryptedAudio(): boolean
```

### decryptArrayBuffer (static method)

Decrypts encrypted data.

**Signature**

```ts
static decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer
```
