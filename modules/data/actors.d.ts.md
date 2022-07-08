---
title: data/actors.d.ts
nav_order: 23
parent: Modules
---

## actors.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [DataActor (interface)](#dataactor-interface)

---

# utils

## DataActor (interface)

**Signature**

```ts
export interface DataActor extends DataBase {
  nickname: string
  classId: ClassID
  initialLevel: number
  maxLevel: number
  profile: string
  faceIndex: number
  faceName: string
  characterIndex: number
  characterName: string
  battlerName: string
  equips: number[]
  traits: Trait[]
}
```
