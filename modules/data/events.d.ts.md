---
title: data/events.d.ts
nav_order: 31
parent: Modules
---

## events.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [CommonEventTrigger (type alias)](#commoneventtrigger-type-alias)
  - [DataCommonEvent (interface)](#datacommonevent-interface)
  - [DataEvent (interface)](#dataevent-interface)
  - [DataEventPage (interface)](#dataeventpage-interface)
  - [EventImage (interface)](#eventimage-interface)
  - [EventPageConditions (interface)](#eventpageconditions-interface)
  - [EventTrigger (type alias)](#eventtrigger-type-alias)
  - [MoveFrequency (type alias)](#movefrequency-type-alias)
  - [MoveSpeed (type alias)](#movespeed-type-alias)
  - [MoveType (type alias)](#movetype-type-alias)
  - [PriorityType (type alias)](#prioritytype-type-alias)
  - [SelfSwitchCharacter (type alias)](#selfswitchcharacter-type-alias)

---

# utils

## CommonEventTrigger (type alias)

**Signature**

```ts
export declare type CommonEventTrigger = 0 | 1 | 2
```

## DataCommonEvent (interface)

**Signature**

```ts
export interface DataCommonEvent extends DataBaseBase {
  trigger: CommonEventTrigger
  switchId: SwitchID
  list: DataCommand[]
}
```

## DataEvent (interface)

**Signature**

```ts
export interface DataEvent extends DataBase {
  pages: DataEventPage[]
  x: number
  y: number
}
```

## DataEventPage (interface)

**Signature**

```ts
export interface DataEventPage {
  conditions: Partial<EventPageConditions>
  image: EventImage
  moveType: number
  moveRoute: MoveRoute
  moveSpeed: MoveSpeed
  moveFrequency: MoveFrequency
  walkAnime: boolean
  stepAnime: boolean
  directionFix: boolean
  through: boolean
  priorityType: PriorityType
  trigger: EventTrigger
  list: DataCommand[]
}
```

## EventImage (interface)

**Signature**

```ts
export interface EventImage {
  tileId: TilesetID
  characterName: string
  direction: Direction
  pattern: number
  characterIndex: number
}
```

## EventPageConditions (interface)

**Signature**

```ts
export interface EventPageConditions {
  switch1Valid: boolean
  switch1Id: SwitchID
  switch2Valid: boolean
  switch2Id: SwitchID
  variableValid: boolean
  variableId: VariableID
  variableValue: number
  selfSwitchCh: SelfSwitchCharacter
  selfSwitchValid: boolean
  itemValid: boolean
  itemId: ItemID
  actorValid: boolean
  actorId: ActorID
}
```

## EventTrigger (type alias)

**Signature**

```ts
export declare type EventTrigger = 0 | 1 | 2 | 3 | 4
```

## MoveFrequency (type alias)

**Signature**

```ts
export declare type MoveFrequency = 1 | 2 | 3 | 4 | 5
```

## MoveSpeed (type alias)

**Signature**

```ts
export declare type MoveSpeed = 1 | 2 | 3 | 4 | 5 | 6
```

## MoveType (type alias)

**Signature**

```ts
export declare type MoveType = 0 | 1 | 2 | 3
```

## PriorityType (type alias)

**Signature**

```ts
export declare type PriorityType = 0 | 1 | 2
```

## SelfSwitchCharacter (type alias)

**Signature**

```ts
export declare type SelfSwitchCharacter = 'A' | 'B' | 'C' | 'D'
```
