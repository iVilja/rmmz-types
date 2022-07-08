---
title: objects/Game_Interpreter.d.ts
nav_order: 76
parent: Modules
---

## Game_Interpreter.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Game_Interpreter (class)](#game_interpreter-class)
    - [checkOverflow (method)](#checkoverflow-method)
    - [clear (method)](#clear-method)
    - [setup (method)](#setup-method)
    - [loadImages (method)](#loadimages-method)
    - [eventId (method)](#eventid-method)
    - [isOnCurrentMap (method)](#isoncurrentmap-method)
    - [setupReservedCommonEvent (method)](#setupreservedcommonevent-method)
    - [isRunning (method)](#isrunning-method)
    - [update (method)](#update-method)
    - [updateChild (method)](#updatechild-method)
    - [updateWait (method)](#updatewait-method)
    - [updateWaitCount (method)](#updatewaitcount-method)
    - [updateWaitMode (method)](#updatewaitmode-method)
    - [setWaitMode (method)](#setwaitmode-method)
    - [wait (method)](#wait-method)
    - [fadeSpeed (method)](#fadespeed-method)
    - [executeCommand (method)](#executecommand-method)
    - [checkFreeze (method)](#checkfreeze-method)
    - [terminate (method)](#terminate-method)
    - [skipBranch (method)](#skipbranch-method)
    - [currentCommand (method)](#currentcommand-method)
    - [nextEventCode (method)](#nexteventcode-method)
    - [iterateActorId (method)](#iterateactorid-method)
    - [iterateActorEx (method)](#iterateactorex-method)
    - [iterateActorIndex (method)](#iterateactorindex-method)
    - [iterateEnemyIndex (method)](#iterateenemyindex-method)
    - [iterateBattler (method)](#iteratebattler-method)
    - [character (method)](#character-method)
    - [operateValue (method)](#operatevalue-method)
    - [changeHp (method)](#changehp-method)
    - [command101 (method)](#command101-method)
    - [command102 (method)](#command102-method)
    - [setupChoices (method)](#setupchoices-method)
    - [command402 (method)](#command402-method)
    - [command403 (method)](#command403-method)
    - [command103 (method)](#command103-method)
    - [setupNumInput (method)](#setupnuminput-method)
    - [command104 (method)](#command104-method)
    - [setupItemChoice (method)](#setupitemchoice-method)
    - [command105 (method)](#command105-method)
    - [command108 (method)](#command108-method)
    - [command109 (method)](#command109-method)
    - [command111 (method)](#command111-method)
    - [command411 (method)](#command411-method)
    - [command112 (method)](#command112-method)
    - [command413 (method)](#command413-method)
    - [command113 (method)](#command113-method)
    - [command115 (method)](#command115-method)
    - [command117 (method)](#command117-method)
    - [setupChild (method)](#setupchild-method)
    - [command118 (method)](#command118-method)
    - [command119 (method)](#command119-method)
    - [jumpTo (method)](#jumpto-method)
    - [command121 (method)](#command121-method)
    - [command122 (method)](#command122-method)
    - [gameDataOperand (method)](#gamedataoperand-method)
    - [operateVariable (method)](#operatevariable-method)
    - [command123 (method)](#command123-method)
    - [command124 (method)](#command124-method)
    - [command125 (method)](#command125-method)
    - [command126 (method)](#command126-method)
    - [command127 (method)](#command127-method)
    - [command128 (method)](#command128-method)
    - [command129 (method)](#command129-method)
    - [command132 (method)](#command132-method)
    - [command133 (method)](#command133-method)
    - [command134 (method)](#command134-method)
    - [command135 (method)](#command135-method)
    - [command136 (method)](#command136-method)
    - [command137 (method)](#command137-method)
    - [command138 (method)](#command138-method)
    - [command139 (method)](#command139-method)
    - [command140 (method)](#command140-method)
    - [command201 (method)](#command201-method)
    - [command202 (method)](#command202-method)
    - [command203 (method)](#command203-method)
    - [command204 (method)](#command204-method)
    - [command205 (method)](#command205-method)
    - [command206 (method)](#command206-method)
    - [command211 (method)](#command211-method)
    - [command212 (method)](#command212-method)
    - [command213 (method)](#command213-method)
    - [command214 (method)](#command214-method)
    - [command216 (method)](#command216-method)
    - [command217 (method)](#command217-method)
    - [command221 (method)](#command221-method)
    - [command222 (method)](#command222-method)
    - [command223 (method)](#command223-method)
    - [command224 (method)](#command224-method)
    - [command225 (method)](#command225-method)
    - [command230 (method)](#command230-method)
    - [command231 (method)](#command231-method)
    - [command232 (method)](#command232-method)
    - [picturePoint (method)](#picturepoint-method)
    - [command233 (method)](#command233-method)
    - [command234 (method)](#command234-method)
    - [command235 (method)](#command235-method)
    - [command236 (method)](#command236-method)
    - [command241 (method)](#command241-method)
    - [command242 (method)](#command242-method)
    - [command243 (method)](#command243-method)
    - [command244 (method)](#command244-method)
    - [command245 (method)](#command245-method)
    - [command246 (method)](#command246-method)
    - [command249 (method)](#command249-method)
    - [command250 (method)](#command250-method)
    - [command251 (method)](#command251-method)
    - [command261 (method)](#command261-method)
    - [videoFileExt (method)](#videofileext-method)
    - [command281 (method)](#command281-method)
    - [command282 (method)](#command282-method)
    - [command283 (method)](#command283-method)
    - [command284 (method)](#command284-method)
    - [command285 (method)](#command285-method)
    - [command301 (method)](#command301-method)
    - [command601 (method)](#command601-method)
    - [command602 (method)](#command602-method)
    - [command603 (method)](#command603-method)
    - [command302 (method)](#command302-method)
    - [command303 (method)](#command303-method)
    - [command311 (method)](#command311-method)
    - [command312 (method)](#command312-method)
    - [command326 (method)](#command326-method)
    - [command313 (method)](#command313-method)
    - [command314 (method)](#command314-method)
    - [command315 (method)](#command315-method)
    - [command316 (method)](#command316-method)
    - [command317 (method)](#command317-method)
    - [command318 (method)](#command318-method)
    - [command319 (method)](#command319-method)
    - [command320 (method)](#command320-method)
    - [command321 (method)](#command321-method)
    - [command322 (method)](#command322-method)
    - [command323 (method)](#command323-method)
    - [command324 (method)](#command324-method)
    - [command325 (method)](#command325-method)
    - [command331 (method)](#command331-method)
    - [command332 (method)](#command332-method)
    - [command342 (method)](#command342-method)
    - [command333 (method)](#command333-method)
    - [command334 (method)](#command334-method)
    - [command335 (method)](#command335-method)
    - [command336 (method)](#command336-method)
    - [command337 (method)](#command337-method)
    - [command339 (method)](#command339-method)
    - [command340 (method)](#command340-method)
    - [command351 (method)](#command351-method)
    - [command352 (method)](#command352-method)
    - [command353 (method)](#command353-method)
    - [command354 (method)](#command354-method)
    - [command355 (method)](#command355-method)
    - [command356 (method)](#command356-method)
    - [pluginCommand (method)](#plugincommand-method)
    - [command357 (method)](#command357-method)
    - [\_depth (property)](#_depth-property)
    - [\_branch (property)](#_branch-property)
    - [\_indent (property)](#_indent-property)
    - [\_frameCount (property)](#_framecount-property)
    - [\_freezeChecker (property)](#_freezechecker-property)
    - [\_mapId (property)](#_mapid-property)
    - [\_eventId (property)](#_eventid-property)
    - [\_list (property)](#_list-property)
    - [\_index (property)](#_index-property)
    - [\_waitCount (property)](#_waitcount-property)
    - [\_waitMode (property)](#_waitmode-property)
    - [\_comments (property)](#_comments-property)
    - [\_characterId (property)](#_characterid-property)
    - [\_childInterpreter (property)](#_childinterpreter-property)

---

# utils

## Game_Interpreter (class)

Game_Interpreter

The interpreter for running event commands.

**Signature**

```ts
export declare class Game_Interpreter {
  constructor(depth?: number)
}
```

### checkOverflow (method)

**Signature**

```ts
checkOverflow(): void;
```

### clear (method)

**Signature**

```ts
clear(): void;
```

### setup (method)

**Signature**

```ts
setup(list: DataCommand[], eventId?: EventID): void;
```

### loadImages (method)

**Signature**

```ts
loadImages(): void;
```

### eventId (method)

**Signature**

```ts
eventId(): number;
```

### isOnCurrentMap (method)

**Signature**

```ts
isOnCurrentMap(): boolean;
```

### setupReservedCommonEvent (method)

**Signature**

```ts
setupReservedCommonEvent(): boolean;
```

### isRunning (method)

**Signature**

```ts
isRunning(): boolean;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateChild (method)

**Signature**

```ts
updateChild(): boolean;
```

### updateWait (method)

**Signature**

```ts
updateWait(): boolean | null;
```

### updateWaitCount (method)

**Signature**

```ts
updateWaitCount(): boolean;
```

### updateWaitMode (method)

**Signature**

```ts
updateWaitMode(): boolean | null;
```

### setWaitMode (method)

**Signature**

```ts
setWaitMode(waitMode: WaitMode): void;
```

### wait (method)

**Signature**

```ts
wait(duration: number): void;
```

### fadeSpeed (method)

**Signature**

```ts
fadeSpeed(): number;
```

### executeCommand (method)

**Signature**

```ts
executeCommand(): boolean;
```

### checkFreeze (method)

**Signature**

```ts
checkFreeze(): boolean;
```

### terminate (method)

**Signature**

```ts
terminate(): void;
```

### skipBranch (method)

**Signature**

```ts
skipBranch(): void;
```

### currentCommand (method)

**Signature**

```ts
currentCommand<T extends CommandCode>(): ExtractDataCommand<T>;
```

### nextEventCode (method)

**Signature**

```ts
nextEventCode(): 0 | 1 | 16 | 2 | 3 | 4 | 5 | 113 | 115 | 12 | 15 | 22 | 6 | 7 | 8 | 9 | 10 | 11 | 13 | 14 | 17 | 18 | 19 | 20 | 30 | 128 | 24 | 40 | 32 | 26 | 27 | 33 | 34 | 37 | 38 | 39 | 45 | 102 | 104 | 36 | 21 | 23 | 31 | 35 | 41 | 42 | 43 | 44 | 25 | 28 | 29 | 101 | 401 | 402 | 403 | 103 | 105 | 405 | 108 | 408 | 109 | 111 | 411 | 112 | 413 | 117 | 118 | 119 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 129 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 201 | 202 | 203 | 204 | 205 | 505 | 206 | 211 | 212 | 213 | 214 | 216 | 217 | 221 | 222 | 223 | 224 | 225 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 241 | 242 | 243 | 244 | 245 | 246 | 249 | 250 | 251 | 261 | 281 | 282 | 283 | 284 | 285 | 301 | 601 | 602 | 603 | 302 | 605 | 303 | 311 | 312 | 326 | 313 | 314 | 315 | 316 | 317 | 318 | 319 | 320 | 321 | 322 | 323 | 324 | 325 | 331 | 332 | 342 | 333 | 334 | 335 | 336 | 337 | 339 | 340 | 351 | 352 | 353 | 354 | 355 | 655 | 356 | 357;
```

### iterateActorId (method)

**Signature**

```ts
iterateActorId(param: ActorID, callback: (actor: Game_Actor) => void): void;
```

### iterateActorEx (method)

**Signature**

```ts
iterateActorEx(param1: 0 | 1, param2: ActorID | VariableID, callback: (actor: Game_Actor) => void): void;
```

### iterateActorIndex (method)

**Signature**

```ts
iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void;
```

### iterateEnemyIndex (method)

**Signature**

```ts
iterateEnemyIndex(param: number, callback: (enemy: Game_Enemy) => void): void;
```

### iterateBattler (method)

**Signature**

```ts
iterateBattler(param1: 0 | 1, param2: EnemyID | ActorID, callback: (battler: ActionTarget) => void): void;
```

### character (method)

**Signature**

```ts
character(param: CharacterID): Game_Character | null;
```

### operateValue (method)

**Signature**

```ts
operateValue(operation: ValueOperation, operandType: 0 | 1, operand: number | VariableID): number;
```

### changeHp (method)

**Signature**

```ts
changeHp(target: ActionTarget, value: number, allowDeath: boolean): void;
```

### command101 (method)

**Signature**

```ts
command101(params: CommandParams<101>): boolean;
```

### command102 (method)

**Signature**

```ts
command102(params: CommandParams<102>): boolean;
```

### setupChoices (method)

**Signature**

```ts
setupChoices(params: CommandParams<102>): void;
```

### command402 (method)

**Signature**

```ts
command402(params: CommandParams<402>): boolean;
```

### command403 (method)

**Signature**

```ts
command403(): boolean;
```

### command103 (method)

**Signature**

```ts
command103(params: CommandParams<103>): boolean;
```

### setupNumInput (method)

**Signature**

```ts
setupNumInput(params: CommandParams<103>): void;
```

### command104 (method)

**Signature**

```ts
command104(params: CommandParams<104>): boolean;
```

### setupItemChoice (method)

**Signature**

```ts
setupItemChoice(params: CommandParams<104>): void;
```

### command105 (method)

**Signature**

```ts
command105(params: CommandParams<105>): boolean;
```

### command108 (method)

**Signature**

```ts
command108(params: CommandParams<108>): boolean;
```

### command109 (method)

**Signature**

```ts
command109(): boolean;
```

### command111 (method)

**Signature**

```ts
command111(params: CommandParams<111>): boolean;
```

### command411 (method)

**Signature**

```ts
command411(): boolean;
```

### command112 (method)

**Signature**

```ts
command112(): boolean;
```

### command413 (method)

**Signature**

```ts
command413(): boolean;
```

### command113 (method)

**Signature**

```ts
command113(): boolean;
```

### command115 (method)

**Signature**

```ts
command115(): boolean;
```

### command117 (method)

**Signature**

```ts
command117(params: CommandParams<117>): boolean;
```

### setupChild (method)

**Signature**

```ts
setupChild(list: DataCommand[], eventId: EventID): void;
```

### command118 (method)

**Signature**

```ts
command118(): boolean;
```

### command119 (method)

**Signature**

```ts
command119(params: CommandParams<119>): boolean;
```

### jumpTo (method)

**Signature**

```ts
jumpTo(index: number): void;
```

### command121 (method)

**Signature**

```ts
command121(params: CommandParams<121>): boolean;
```

### command122 (method)

**Signature**

```ts
command122(params: CommandParams<122>): boolean;
```

### gameDataOperand (method)

**Signature**

```ts
gameDataOperand(type: number, param1: number, param2?: number): number;
```

### operateVariable (method)

**Signature**

```ts
operateVariable(variableId: VariableID, operationType: VariableOperationType, value: number): void;
```

### command123 (method)

**Signature**

```ts
command123(params: CommandParams<123>): boolean;
```

### command124 (method)

**Signature**

```ts
command124(params: CommandParams<124>): boolean;
```

### command125 (method)

**Signature**

```ts
command125(params: CommandParams<125>): boolean;
```

### command126 (method)

**Signature**

```ts
command126(params: CommandParams<126>): boolean;
```

### command127 (method)

**Signature**

```ts
command127(params: CommandParams<127>): boolean;
```

### command128 (method)

**Signature**

```ts
command128(params: CommandParams<128>): boolean;
```

### command129 (method)

**Signature**

```ts
command129(params: CommandParams<129>): boolean;
```

### command132 (method)

**Signature**

```ts
command132(params: CommandParams<132>): boolean;
```

### command133 (method)

**Signature**

```ts
command133(params: CommandParams<133>): boolean;
```

### command134 (method)

**Signature**

```ts
command134(params: CommandParams<134>): boolean;
```

### command135 (method)

**Signature**

```ts
command135(params: CommandParams<135>): boolean;
```

### command136 (method)

**Signature**

```ts
command136(params: CommandParams<136>): boolean;
```

### command137 (method)

**Signature**

```ts
command137(params: CommandParams<137>): boolean;
```

### command138 (method)

**Signature**

```ts
command138(params: CommandParams<138>): boolean;
```

### command139 (method)

**Signature**

```ts
command139(params: CommandParams<139>): boolean;
```

### command140 (method)

**Signature**

```ts
command140(params: CommandParams<140>): boolean;
```

### command201 (method)

**Signature**

```ts
command201(params: CommandParams<201>): boolean;
```

### command202 (method)

**Signature**

```ts
command202(params: CommandParams<202>): boolean;
```

### command203 (method)

**Signature**

```ts
command203(params: CommandParams<203>): boolean;
```

### command204 (method)

**Signature**

```ts
command204(params: CommandParams<204>): boolean;
```

### command205 (method)

**Signature**

```ts
command205(params: CommandParams<205>): boolean;
```

### command206 (method)

**Signature**

```ts
command206(): boolean;
```

### command211 (method)

**Signature**

```ts
command211(params: CommandParams<211>): boolean;
```

### command212 (method)

**Signature**

```ts
command212(params: CommandParams<212>): boolean;
```

### command213 (method)

**Signature**

```ts
command213(params: CommandParams<213>): boolean;
```

### command214 (method)

**Signature**

```ts
command214(): boolean;
```

### command216 (method)

**Signature**

```ts
command216(params: CommandParams<216>): boolean;
```

### command217 (method)

**Signature**

```ts
command217(): boolean;
```

### command221 (method)

**Signature**

```ts
command221(): boolean;
```

### command222 (method)

**Signature**

```ts
command222(): boolean;
```

### command223 (method)

**Signature**

```ts
command223(params: CommandParams<223>): boolean;
```

### command224 (method)

**Signature**

```ts
command224(params: CommandParams<224>): boolean;
```

### command225 (method)

**Signature**

```ts
command225(params: CommandParams<225>): boolean;
```

### command230 (method)

**Signature**

```ts
command230(params: CommandParams<230>): boolean;
```

### command231 (method)

**Signature**

```ts
command231(params: CommandParams<231>): boolean;
```

### command232 (method)

**Signature**

```ts
command232(params: CommandParams<232>): boolean;
```

### picturePoint (method)

**Signature**

```ts
picturePoint(params: CommandParams<231 | 232>): Point;
```

### command233 (method)

**Signature**

```ts
command233(params: CommandParams<233>): boolean;
```

### command234 (method)

**Signature**

```ts
command234(params: CommandParams<234>): boolean;
```

### command235 (method)

**Signature**

```ts
command235(params: CommandParams<235>): boolean;
```

### command236 (method)

**Signature**

```ts
command236(params: CommandParams<236>): boolean;
```

### command241 (method)

**Signature**

```ts
command241(params: CommandParams<241>): boolean;
```

### command242 (method)

**Signature**

```ts
command242(params: CommandParams<242>): boolean;
```

### command243 (method)

**Signature**

```ts
command243(): boolean;
```

### command244 (method)

**Signature**

```ts
command244(): boolean;
```

### command245 (method)

**Signature**

```ts
command245(params: CommandParams<245>): boolean;
```

### command246 (method)

**Signature**

```ts
command246(params: CommandParams<246>): boolean;
```

### command249 (method)

**Signature**

```ts
command249(params: CommandParams<249>): boolean;
```

### command250 (method)

**Signature**

```ts
command250(params: CommandParams<250>): boolean;
```

### command251 (method)

**Signature**

```ts
command251(): boolean;
```

### command261 (method)

**Signature**

```ts
command261(params: CommandParams<261>): boolean;
```

### videoFileExt (method)

**Signature**

```ts
videoFileExt(): ".webm" | ".mp4";
```

### command281 (method)

**Signature**

```ts
command281(params: CommandParams<281>): boolean;
```

### command282 (method)

**Signature**

```ts
command282(params: CommandParams<282>): boolean;
```

### command283 (method)

**Signature**

```ts
command283(params: CommandParams<283>): boolean;
```

### command284 (method)

**Signature**

```ts
command284(params: CommandParams<284>): boolean;
```

### command285 (method)

**Signature**

```ts
command285(params: CommandParams<285>): boolean;
```

### command301 (method)

**Signature**

```ts
command301(params: CommandParams<301>): boolean;
```

### command601 (method)

**Signature**

```ts
command601(): boolean;
```

### command602 (method)

**Signature**

```ts
command602(): boolean;
```

### command603 (method)

**Signature**

```ts
command603(): boolean;
```

### command302 (method)

**Signature**

```ts
command302(params: CommandParams<302>): boolean;
```

### command303 (method)

**Signature**

```ts
command303(params: CommandParams<303>): boolean;
```

### command311 (method)

**Signature**

```ts
command311(params: CommandParams<311>): boolean;
```

### command312 (method)

**Signature**

```ts
command312(params: CommandParams<312>): boolean;
```

### command326 (method)

**Signature**

```ts
command326(params: CommandParams<326>): boolean;
```

### command313 (method)

**Signature**

```ts
command313(params: CommandParams<313>): boolean;
```

### command314 (method)

**Signature**

```ts
command314(params: CommandParams<314>): boolean;
```

### command315 (method)

**Signature**

```ts
command315(params: CommandParams<315>): boolean;
```

### command316 (method)

**Signature**

```ts
command316(params: CommandParams<316>): boolean;
```

### command317 (method)

**Signature**

```ts
command317(params: CommandParams<317>): boolean;
```

### command318 (method)

**Signature**

```ts
command318(params: CommandParams<318>): boolean;
```

### command319 (method)

**Signature**

```ts
command319(params: CommandParams<319>): boolean;
```

### command320 (method)

**Signature**

```ts
command320(params: CommandParams<320>): boolean;
```

### command321 (method)

**Signature**

```ts
command321(params: CommandParams<321>): boolean;
```

### command322 (method)

**Signature**

```ts
command322(params: CommandParams<322>): boolean;
```

### command323 (method)

**Signature**

```ts
command323(params: CommandParams<323>): boolean;
```

### command324 (method)

**Signature**

```ts
command324(params: CommandParams<324>): boolean;
```

### command325 (method)

**Signature**

```ts
command325(params: CommandParams<325>): boolean;
```

### command331 (method)

**Signature**

```ts
command331(params: CommandParams<331>): boolean;
```

### command332 (method)

**Signature**

```ts
command332(params: CommandParams<332>): boolean;
```

### command342 (method)

**Signature**

```ts
command342(params: CommandParams<342>): boolean;
```

### command333 (method)

**Signature**

```ts
command333(params: CommandParams<333>): boolean;
```

### command334 (method)

**Signature**

```ts
command334(params: CommandParams<334>): boolean;
```

### command335 (method)

**Signature**

```ts
command335(params: CommandParams<335>): boolean;
```

### command336 (method)

**Signature**

```ts
command336(params: CommandParams<336>): boolean;
```

### command337 (method)

**Signature**

```ts
command337(params: CommandParams<337>): boolean;
```

### command339 (method)

**Signature**

```ts
command339(params: CommandParams<339>): boolean;
```

### command340 (method)

**Signature**

```ts
command340(): boolean;
```

### command351 (method)

**Signature**

```ts
command351(): boolean;
```

### command352 (method)

**Signature**

```ts
command352(): boolean;
```

### command353 (method)

**Signature**

```ts
command353(): boolean;
```

### command354 (method)

**Signature**

```ts
command354(): boolean;
```

### command355 (method)

**Signature**

```ts
command355(): boolean;
```

### command356 (method)

**Signature**

```ts
command356(params: CommandParams<356>): boolean;
```

### pluginCommand (method)

**Signature**

```ts
pluginCommand(_command: string, _args: string[]): void;
```

### command357 (method)

**Signature**

```ts
command357(params: CommandParams<357>): boolean;
```

### \_depth (property)

**Signature**

```ts
_depth: number
```

### \_branch (property)

**Signature**

```ts
_branch: Record<number, number | boolean | null>
```

### \_indent (property)

**Signature**

```ts
_indent: number
```

### \_frameCount (property)

**Signature**

```ts
_frameCount: number
```

### \_freezeChecker (property)

**Signature**

```ts
_freezeChecker: number
```

### \_mapId (property)

**Signature**

```ts
_mapId: number
```

### \_eventId (property)

**Signature**

```ts
_eventId: number
```

### \_list (property)

**Signature**

```ts
_list: DataCommand[] | null
```

### \_index (property)

**Signature**

```ts
_index: number
```

### \_waitCount (property)

**Signature**

```ts
_waitCount: number
```

### \_waitMode (property)

**Signature**

```ts
_waitMode: WaitMode
```

### \_comments (property)

**Signature**

```ts
_comments: string | string[]
```

### \_characterId (property)

**Signature**

```ts
_characterId: number
```

### \_childInterpreter (property)

**Signature**

```ts
_childInterpreter: Game_Interpreter | null
```
