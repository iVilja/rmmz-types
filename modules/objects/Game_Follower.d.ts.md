---
title: objects/Game_Follower.d.ts
nav_order: 74
parent: Modules
---

## Game_Follower.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Follower (class)](#game_follower-class)
    - [refresh (method)](#refresh-method)
    - [actor (method)](#actor-method)
    - [isVisible (method)](#isvisible-method)
    - [isGathered (method)](#isgathered-method)
    - [update (method)](#update-method)
    - [chaseCharacter (method)](#chasecharacter-method)
    - [\_memberIndex (property)](#_memberindex-property)

---

# utils

## Game_Follower (class)

Game_Follower

The game object class for a follower. A follower is an allied character,
// other than the front character, displayed in the party.

**Signature**

```ts
export declare class Game_Follower {
  constructor(memberIndex: number)
}
```

### refresh (method)

**Signature**

```ts
refresh(): void;
```

### actor (method)

**Signature**

```ts
actor(): import("./Game_Actor").Game_Actor;
```

### isVisible (method)

**Signature**

```ts
isVisible(): boolean;
```

### isGathered (method)

**Signature**

```ts
isGathered(): boolean;
```

### update (method)

**Signature**

```ts
update(): void;
```

### chaseCharacter (method)

**Signature**

```ts
chaseCharacter(character: Game_Character): void;
```

### \_memberIndex (property)

**Signature**

```ts
_memberIndex: number
```
