---
title: data/terms.d.ts
nav_order: 41
parent: Modules
---

## terms.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Messages (interface)](#messages-interface)
  - [Terms (interface)](#terms-interface)

---

# utils

## Messages (interface)

**Signature**

```ts
export interface Messages {
  alwaysDash: string
  commandRemember: string
  touchUI: string
  bgmVolume: string
  bgsVolume: string
  meVolume: string
  seVolume: string
  possession: string
  expTotal: string
  expNext: string
  saveMessage: string
  loadMessage: string
  file: string
  autosave: string
  partyName: string
  emerge: string
  preemptive: string
  surprise: string
  escapeStart: string
  escapeFailure: string
  victory: string
  defeat: string
  obtainExp: string
  obtainGold: string
  obtainItem: string
  levelUp: string
  obtainSkill: string
  useItem: string
  criticalToEnemy: string
  criticalToActor: string
  actorDamage: string
  actorRecovery: string
  actorGain: string
  actorLoss: string
  actorDrain: string
  actorNoDamage: string
  actorNoHit: string
  enemyDamage: string
  enemyRecovery: string
  enemyGain: string
  enemyLoss: string
  enemyDrain: string
  enemyNoDamage: string
  enemyNoHit: string
  evasion: string
  magicEvasion: string
  magicReflection: string
  counterAttack: string
  substitute: string
  buffAdd: string
  debuffAdd: string
  buffRemove: string
  actionFailure: string
}
```

## Terms (interface)

**Signature**

```ts
export interface Terms {
  basic: [string, string, string, string, string, string, string, string, string, string]
  params: [string, string, string, string, string, string, string, string, string, string]
  commands: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    null,
    string,
    string,
    null,
    string,
    string
  ]
  messages: Messages
}
```
