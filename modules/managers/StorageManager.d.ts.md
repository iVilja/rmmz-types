---
title: managers/StorageManager.d.ts
nav_order: 62
parent: Modules
---

## StorageManager.d overview

StorageManager

The static class that manages storage for saving game data.

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [StorageManager (class)](#storagemanager-class)
    - [isLocalMode (static method)](#islocalmode-static-method)
    - [saveObject (static method)](#saveobject-static-method)
    - [loadObject (static method)](#loadobject-static-method)
    - [objectToJson (static method)](#objecttojson-static-method)
    - [jsonToObject (static method)](#jsontoobject-static-method)
    - [jsonToZip (static method)](#jsontozip-static-method)
    - [zipToJson (static method)](#ziptojson-static-method)
    - [saveZip (static method)](#savezip-static-method)
    - [loadZip (static method)](#loadzip-static-method)
    - [exists (static method)](#exists-static-method)
    - [remove (static method)](#remove-static-method)
    - [saveToLocalFile (static method)](#savetolocalfile-static-method)
    - [loadFromLocalFile (static method)](#loadfromlocalfile-static-method)
    - [localFileExists (static method)](#localfileexists-static-method)
    - [removeLocalFile (static method)](#removelocalfile-static-method)
    - [saveToForage (static method)](#savetoforage-static-method)
    - [loadFromForage (static method)](#loadfromforage-static-method)
    - [forageExists (static method)](#forageexists-static-method)
    - [removeForage (static method)](#removeforage-static-method)
    - [updateForageKeys (static method)](#updateforagekeys-static-method)
    - [forageKeysUpdated (static method)](#foragekeysupdated-static-method)
    - [fsMkdir (static method)](#fsmkdir-static-method)
    - [fsRename (static method)](#fsrename-static-method)
    - [fsUnlink (static method)](#fsunlink-static-method)
    - [fsReadFile (static method)](#fsreadfile-static-method)
    - [fsWriteFile (static method)](#fswritefile-static-method)
    - [fileDirectoryPath (static method)](#filedirectorypath-static-method)
    - [filePath (static method)](#filepath-static-method)
    - [forageKey (static method)](#foragekey-static-method)
    - [forageTestKey (static method)](#foragetestkey-static-method)

---

# utils

## StorageManager (class)

StorageManager

The static class that manages storage for saving game data.

**Signature**

```ts
export declare class StorageManager {
  constructor()
}
```

### isLocalMode (static method)

**Signature**

```ts
static isLocalMode(): boolean
```

### saveObject (static method)

**Signature**

```ts
static saveObject<T>(saveName: string, object: T): Promise<number | void>
```

### loadObject (static method)

**Signature**

```ts
static loadObject<T>(saveName: string): Promise<T>
```

### objectToJson (static method)

**Signature**

```ts
static objectToJson<T>(object: T): Promise<string>
```

### jsonToObject (static method)

**Signature**

```ts
static jsonToObject<T>(json: string): Promise<T>
```

### jsonToZip (static method)

**Signature**

```ts
static jsonToZip(json: string): Promise<string>
```

### zipToJson (static method)

**Signature**

```ts
static zipToJson(zip: string): Promise<string>
```

### saveZip (static method)

**Signature**

```ts
static saveZip(saveName: string, zip: string): Promise<void> | Promise<number>
```

### loadZip (static method)

**Signature**

```ts
static loadZip(saveName: string): Promise<string>
```

### exists (static method)

**Signature**

```ts
static exists(saveName: string): any
```

### remove (static method)

**Signature**

```ts
static remove(saveName: string): void | Promise<number>
```

### saveToLocalFile (static method)

**Signature**

```ts
static saveToLocalFile(saveName: string, zip: string): Promise<void>
```

### loadFromLocalFile (static method)

**Signature**

```ts
static loadFromLocalFile(saveName: string): Promise<string>
```

### localFileExists (static method)

**Signature**

```ts
static localFileExists(saveName: string): any
```

### removeLocalFile (static method)

**Signature**

```ts
static removeLocalFile(saveName: string): void
```

### saveToForage (static method)

**Signature**

```ts
static saveToForage(saveName: string, zip: string): Promise<number>
```

### loadFromForage (static method)

**Signature**

```ts
static loadFromForage(saveName: string): Promise<string>
```

### forageExists (static method)

**Signature**

```ts
static forageExists(saveName: string): boolean
```

### removeForage (static method)

**Signature**

```ts
static removeForage(saveName: string): Promise<number>
```

### updateForageKeys (static method)

**Signature**

```ts
static updateForageKeys(): Promise<number>
```

### forageKeysUpdated (static method)

**Signature**

```ts
static forageKeysUpdated(): boolean
```

### fsMkdir (static method)

**Signature**

```ts
static fsMkdir(path: string): void
```

### fsRename (static method)

**Signature**

```ts
static fsRename(oldPath: string, newPath: string): void
```

### fsUnlink (static method)

**Signature**

```ts
static fsUnlink(path: string): void
```

### fsReadFile (static method)

**Signature**

```ts
static fsReadFile(path: string): string | null
```

### fsWriteFile (static method)

**Signature**

```ts
static fsWriteFile(path: string, data: string): void
```

### fileDirectoryPath (static method)

**Signature**

```ts
static fileDirectoryPath(): any
```

### filePath (static method)

**Signature**

```ts
static filePath(saveName: string): string
```

### forageKey (static method)

**Signature**

```ts
static forageKey(saveName: string): string
```

### forageTestKey (static method)

**Signature**

```ts
static forageTestKey(): string
```
