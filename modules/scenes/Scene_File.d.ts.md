---
title: scenes/Scene_File.d.ts
nav_order: 100
parent: Modules
---

## Scene_File.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Scene_File (class)](#scene_file-class)
    - [create (method)](#create-method)
    - [helpAreaHeight (method)](#helpareaheight-method)
    - [start (method)](#start-method)
    - [savefileId (method)](#savefileid-method)
    - [isSavefileEnabled (method)](#issavefileenabled-method)
    - [createHelpWindow (method)](#createhelpwindow-method)
    - [helpWindowRect (method)](#helpwindowrect-method)
    - [createListWindow (method)](#createlistwindow-method)
    - [listWindowRect (method)](#listwindowrect-method)
    - [mode (method)](#mode-method)
    - [needsAutosave (method)](#needsautosave-method)
    - [activateListWindow (method)](#activatelistwindow-method)
    - [helpWindowText (method)](#helpwindowtext-method)
    - [firstSavefileId (method)](#firstsavefileid-method)
    - [onSavefileOk (method)](#onsavefileok-method)
    - [\_listWindow (property)](#_listwindow-property)

---

# utils

## Scene_File (class)

**Signature**

```ts
export declare class Scene_File
```

### create (method)

**Signature**

```ts
create(): void;
```

### helpAreaHeight (method)

**Signature**

```ts
helpAreaHeight(): number;
```

### start (method)

**Signature**

```ts
start(): void;
```

### savefileId (method)

**Signature**

```ts
savefileId(): number;
```

### isSavefileEnabled (method)

**Signature**

```ts
isSavefileEnabled(savefileId: number): boolean;
```

### createHelpWindow (method)

**Signature**

```ts
createHelpWindow(): void;
```

### helpWindowRect (method)

**Signature**

```ts
helpWindowRect(): Rectangle;
```

### createListWindow (method)

**Signature**

```ts
createListWindow(): void;
```

### listWindowRect (method)

**Signature**

```ts
listWindowRect(): Rectangle;
```

### mode (method)

**Signature**

```ts
mode(): SavefileMode;
```

### needsAutosave (method)

**Signature**

```ts
needsAutosave(): boolean;
```

### activateListWindow (method)

**Signature**

```ts
activateListWindow(): void;
```

### helpWindowText (method)

**Signature**

```ts
helpWindowText(): string;
```

### firstSavefileId (method)

**Signature**

```ts
firstSavefileId(): number;
```

### onSavefileOk (method)

**Signature**

```ts
onSavefileOk(): void;
```

### \_listWindow (property)

**Signature**

```ts
_listWindow: Window_SavefileList
```
