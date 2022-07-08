---
title: objects/Game_Enemy.d.ts
nav_order: 72
parent: Modules
---

## Game_Enemy.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Enemy (class)](#game_enemy-class)
    - [initMembers (method)](#initmembers-method)
    - [setup (method)](#setup-method)
    - [isEnemy (method)](#isenemy-method)
    - [friendsUnit (method)](#friendsunit-method)
    - [opponentsUnit (method)](#opponentsunit-method)
    - [index (method)](#index-method)
    - [isBattleMember (method)](#isbattlemember-method)
    - [enemyId (method)](#enemyid-method)
    - [enemy (method)](#enemy-method)
    - [traitObjects (method)](#traitobjects-method)
    - [paramBase (method)](#parambase-method)
    - [exp (method)](#exp-method)
    - [gold (method)](#gold-method)
    - [makeDropItems (method)](#makedropitems-method)
    - [dropItemRate (method)](#dropitemrate-method)
    - [itemObject (method)](#itemobject-method)
    - [isSpriteVisible (method)](#isspritevisible-method)
    - [screenX (method)](#screenx-method)
    - [screenY (method)](#screeny-method)
    - [battlerName (method)](#battlername-method)
    - [battlerHue (method)](#battlerhue-method)
    - [originalName (method)](#originalname-method)
    - [name (method)](#name-method)
    - [isLetterEmpty (method)](#isletterempty-method)
    - [setLetter (method)](#setletter-method)
    - [setPlural (method)](#setplural-method)
    - [performActionStart (method)](#performactionstart-method)
    - [performAction (method)](#performaction-method)
    - [performActionEnd (method)](#performactionend-method)
    - [performDamage (method)](#performdamage-method)
    - [performCollapse (method)](#performcollapse-method)
    - [transform (method)](#transform-method)
    - [meetsCondition (method)](#meetscondition-method)
    - [meetsTurnCondition (method)](#meetsturncondition-method)
    - [meetsHpCondition (method)](#meetshpcondition-method)
    - [meetsMpCondition (method)](#meetsmpcondition-method)
    - [meetsStateCondition (method)](#meetsstatecondition-method)
    - [meetsPartyLevelCondition (method)](#meetspartylevelcondition-method)
    - [meetsSwitchCondition (method)](#meetsswitchcondition-method)
    - [isActionValid (method)](#isactionvalid-method)
    - [selectAction (method)](#selectaction-method)
    - [selectAllActions (method)](#selectallactions-method)
    - [makeActions (method)](#makeactions-method)
    - [\_enemyId (property)](#_enemyid-property)
    - [\_letter (property)](#_letter-property)
    - [\_plural (property)](#_plural-property)
    - [\_screenX (property)](#_screenx-property)
    - [\_screenY (property)](#_screeny-property)

---

# utils

## Game_Enemy (class)

Game_Enemy

The game object class for an enemy.

**Signature**

```ts
export declare class Game_Enemy {
  constructor(enemyId: EnemyID, x: number, y: number)
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### setup (method)

**Signature**

```ts
setup(enemyId: EnemyID, x: number, y: number): void;
```

### isEnemy (method)

**Signature**

```ts
isEnemy(): boolean;
```

### friendsUnit (method)

**Signature**

```ts
friendsUnit(): import("./Game_Troop").Game_Troop;
```

### opponentsUnit (method)

**Signature**

```ts
opponentsUnit(): import("./Game_Party").Game_Party;
```

### index (method)

**Signature**

```ts
index(): number;
```

### isBattleMember (method)

**Signature**

```ts
isBattleMember(): boolean;
```

### enemyId (method)

**Signature**

```ts
enemyId(): number;
```

### enemy (method)

**Signature**

```ts
enemy(): import("../data").DataEnemy;
```

### traitObjects (method)

**Signature**

```ts
traitObjects(): {
        traits: import("../data").Trait[];
    }[];
```

### paramBase (method)

**Signature**

```ts
paramBase(paramId: ParamID): number;
```

### exp (method)

**Signature**

```ts
exp(): number;
```

### gold (method)

**Signature**

```ts
gold(): number;
```

### makeDropItems (method)

**Signature**

```ts
makeDropItems(): DataItemBase[];
```

### dropItemRate (method)

**Signature**

```ts
dropItemRate(): 1 | 2;
```

### itemObject (method)

**Signature**

```ts
itemObject(kind: DropItemType, dataId: DataID): import("../data").DataItem | import("../data").DataWeapon | import("../data").DataArmor | null;
```

### isSpriteVisible (method)

**Signature**

```ts
isSpriteVisible(): boolean;
```

### screenX (method)

**Signature**

```ts
screenX(): number;
```

### screenY (method)

**Signature**

```ts
screenY(): number;
```

### battlerName (method)

**Signature**

```ts
battlerName(): string;
```

### battlerHue (method)

**Signature**

```ts
battlerHue(): number;
```

### originalName (method)

**Signature**

```ts
originalName(): string;
```

### name (method)

**Signature**

```ts
name(): string;
```

### isLetterEmpty (method)

**Signature**

```ts
isLetterEmpty(): boolean;
```

### setLetter (method)

**Signature**

```ts
setLetter(letter: string): void;
```

### setPlural (method)

**Signature**

```ts
setPlural(plural: boolean): void;
```

### performActionStart (method)

**Signature**

```ts
performActionStart(action: Game_Action): void;
```

### performAction (method)

**Signature**

```ts
performAction(action: Game_Action): void;
```

### performActionEnd (method)

**Signature**

```ts
performActionEnd(): void;
```

### performDamage (method)

**Signature**

```ts
performDamage(): void;
```

### performCollapse (method)

**Signature**

```ts
performCollapse(): void;
```

### transform (method)

**Signature**

```ts
transform(enemyId: EnemyID): void;
```

### meetsCondition (method)

**Signature**

```ts
meetsCondition(action: EnemyAction): boolean;
```

### meetsTurnCondition (method)

**Signature**

```ts
meetsTurnCondition(param1: number, param2: number): boolean;
```

### meetsHpCondition (method)

**Signature**

```ts
meetsHpCondition(param1: number, param2: number): boolean;
```

### meetsMpCondition (method)

**Signature**

```ts
meetsMpCondition(param1: number, param2: number): boolean;
```

### meetsStateCondition (method)

**Signature**

```ts
meetsStateCondition(param: StateID): boolean;
```

### meetsPartyLevelCondition (method)

**Signature**

```ts
meetsPartyLevelCondition(param: number): boolean;
```

### meetsSwitchCondition (method)

**Signature**

```ts
meetsSwitchCondition(param: SwitchID): boolean;
```

### isActionValid (method)

**Signature**

```ts
isActionValid(action: EnemyAction): boolean;
```

### selectAction (method)

**Signature**

```ts
selectAction(actionList: EnemyAction[], ratingZero: number): EnemyAction | null | undefined;
```

### selectAllActions (method)

**Signature**

```ts
selectAllActions(actionList: EnemyAction[]): void;
```

### makeActions (method)

**Signature**

```ts
makeActions(): void;
```

### \_enemyId (property)

**Signature**

```ts
_enemyId: number
```

### \_letter (property)

**Signature**

```ts
_letter: string
```

### \_plural (property)

**Signature**

```ts
_plural: boolean
```

### \_screenX (property)

**Signature**

```ts
_screenX: number
```

### \_screenY (property)

**Signature**

```ts
_screenY: number
```
