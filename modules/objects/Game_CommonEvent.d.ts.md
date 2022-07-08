---
title: objects/Game_CommonEvent.d.ts
nav_order: 71
parent: Modules
---

## Game_CommonEvent.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_CommonEvent (class)](#game_commonevent-class)
    - [event (method)](#event-method)
    - [list (method)](#list-method)
    - [refresh (method)](#refresh-method)
    - [isActive (method)](#isactive-method)
    - [update (method)](#update-method)
    - [\_commonEventId (property)](#_commoneventid-property)
    - [\_interpreter (property)](#_interpreter-property)

---

# utils

## Game_CommonEvent (class)

Game_CommonEvent

The game object class for a common event. It contains functionality for
// running parallel process events.

**Signature**

```ts
export declare class Game_CommonEvent {
  constructor(commonEventId: CommonEventID)
}
```

### event (method)

**Signature**

```ts
event(): import("../data").DataCommonEvent;
```

### list (method)

**Signature**

```ts
list(): import("../data").DataCommand[];
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### isActive (method)

**Signature**

```ts
isActive(): boolean;
```

### update (method)

**Signature**

```ts
update(): void;
```

### \_commonEventId (property)

**Signature**

```ts
_commonEventId: number
```

### \_interpreter (property)

**Signature**

```ts
_interpreter: Game_Interpreter | null
```
