---
title: data/saves.d.ts
nav_order: 36
parent: Modules
---

## saves.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataGlobalInfo (type alias)](#dataglobalinfo-type-alias)
  - [DataSaveInfo (interface)](#datasaveinfo-interface)
  - [SaveContents (interface)](#savecontents-interface)

---

# utils

## DataGlobalInfo (type alias)

**Signature**

```ts
export declare type DataGlobalInfo = (DataSaveInfo | undefined)[]
```

## DataSaveInfo (interface)

**Signature**

```ts
export interface DataSaveInfo {
  title: string
  characters: [string, number][]
  faces: [string, number][]
  playtime: string
  timestamp: number
}
```

## SaveContents (interface)

**Signature**

```ts
export interface SaveContents {
  system: Game_System
  screen: Game_Screen
  timer: Game_Timer
  switches: Game_Switches
  variables: Game_Variables
  selfSwitches: Game_SelfSwitches
  actors: Game_Actors
  party: Game_Party
  map: Game_Map
  player: Game_Player
}
```
