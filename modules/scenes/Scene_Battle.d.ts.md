---
title: scenes/Scene_Battle.d.ts
nav_order: 96
parent: Modules
---

## Scene_Battle.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Scene_Battle (class)](#scene_battle-class)
    - [create (method)](#create-method)
    - [start (method)](#start-method)
    - [update (method)](#update-method)
    - [updateVisibility (method)](#updatevisibility-method)
    - [updateBattleProcess (method)](#updatebattleprocess-method)
    - [isTimeActive (method)](#istimeactive-method)
    - [isAnyInputWindowActive (method)](#isanyinputwindowactive-method)
    - [changeInputWindow (method)](#changeinputwindow-method)
    - [stop (method)](#stop-method)
    - [terminate (method)](#terminate-method)
    - [shouldAutosave (method)](#shouldautosave-method)
    - [needsSlowFadeOut (method)](#needsslowfadeout-method)
    - [updateLogWindowVisibility (method)](#updatelogwindowvisibility-method)
    - [updateStatusWindowVisibility (method)](#updatestatuswindowvisibility-method)
    - [shouldOpenStatusWindow (method)](#shouldopenstatuswindow-method)
    - [updateStatusWindowPosition (method)](#updatestatuswindowposition-method)
    - [statusWindowX (method)](#statuswindowx-method)
    - [updateInputWindowVisibility (method)](#updateinputwindowvisibility-method)
    - [needsInputWindowChange (method)](#needsinputwindowchange-method)
    - [updateCancelButton (method)](#updatecancelbutton-method)
    - [createDisplayObjects (method)](#createdisplayobjects-method)
    - [createSpriteset (method)](#createspriteset-method)
    - [createAllWindows (method)](#createallwindows-method)
    - [createLogWindow (method)](#createlogwindow-method)
    - [logWindowRect (method)](#logwindowrect-method)
    - [createStatusWindow (method)](#createstatuswindow-method)
    - [statusWindowRect (method)](#statuswindowrect-method)
    - [createPartyCommandWindow (method)](#createpartycommandwindow-method)
    - [partyCommandWindowRect (method)](#partycommandwindowrect-method)
    - [createActorCommandWindow (method)](#createactorcommandwindow-method)
    - [actorCommandWindowRect (method)](#actorcommandwindowrect-method)
    - [createHelpWindow (method)](#createhelpwindow-method)
    - [helpWindowRect (method)](#helpwindowrect-method)
    - [createSkillWindow (method)](#createskillwindow-method)
    - [skillWindowRect (method)](#skillwindowrect-method)
    - [createItemWindow (method)](#createitemwindow-method)
    - [itemWindowRect (method)](#itemwindowrect-method)
    - [createActorWindow (method)](#createactorwindow-method)
    - [actorWindowRect (method)](#actorwindowrect-method)
    - [createEnemyWindow (method)](#createenemywindow-method)
    - [enemyWindowRect (method)](#enemywindowrect-method)
    - [helpAreaTop (method)](#helpareatop-method)
    - [helpAreaBottom (method)](#helpareabottom-method)
    - [helpAreaHeight (method)](#helpareaheight-method)
    - [buttonAreaTop (method)](#buttonareatop-method)
    - [windowAreaHeight (method)](#windowareaheight-method)
    - [createButtons (method)](#createbuttons-method)
    - [createCancelButton (method)](#createcancelbutton-method)
    - [closeCommandWindows (method)](#closecommandwindows-method)
    - [hideSubInputWindows (method)](#hidesubinputwindows-method)
    - [startPartyCommandSelection (method)](#startpartycommandselection-method)
    - [commandFight (method)](#commandfight-method)
    - [commandEscape (method)](#commandescape-method)
    - [startActorCommandSelection (method)](#startactorcommandselection-method)
    - [commandAttack (method)](#commandattack-method)
    - [commandSkill (method)](#commandskill-method)
    - [commandGuard (method)](#commandguard-method)
    - [commandItem (method)](#commanditem-method)
    - [commandCancel (method)](#commandcancel-method)
    - [selectNextCommand (method)](#selectnextcommand-method)
    - [selectPreviousCommand (method)](#selectpreviouscommand-method)
    - [startActorSelection (method)](#startactorselection-method)
    - [onActorOk (method)](#onactorok-method)
    - [onActorCancel (method)](#onactorcancel-method)
    - [startEnemySelection (method)](#startenemyselection-method)
    - [onEnemyOk (method)](#onenemyok-method)
    - [onEnemyCancel (method)](#onenemycancel-method)
    - [onSkillOk (method)](#onskillok-method)
    - [onSkillCancel (method)](#onskillcancel-method)
    - [onItemOk (method)](#onitemok-method)
    - [onItemCancel (method)](#onitemcancel-method)
    - [onSelectAction (method)](#onselectaction-method)
    - [endCommandSelection (method)](#endcommandselection-method)
    - [\_logWindow (property)](#_logwindow-property)
    - [\_statusWindow (property)](#_statuswindow-property)
    - [\_spriteset (property)](#_spriteset-property)
    - [\_partyCommandWindow (property)](#_partycommandwindow-property)
    - [\_actorCommandWindow (property)](#_actorcommandwindow-property)
    - [\_helpWindow (property)](#_helpwindow-property)
    - [\_skillWindow (property)](#_skillwindow-property)
    - [\_itemWindow (property)](#_itemwindow-property)
    - [\_actorWindow (property)](#_actorwindow-property)
    - [\_enemyWindow (property)](#_enemywindow-property)
    - [\_cancelButton (property)](#_cancelbutton-property)

---

# utils

## Scene_Battle (class)

**Signature**

```ts
export declare class Scene_Battle
```

### create (method)

**Signature**

```ts
create(): void;
```

### start (method)

**Signature**

```ts
start(): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### updateVisibility (method)

**Signature**

```ts
updateVisibility(): void;
```

### updateBattleProcess (method)

**Signature**

```ts
updateBattleProcess(): void;
```

### isTimeActive (method)

**Signature**

```ts
isTimeActive(): boolean;
```

### isAnyInputWindowActive (method)

**Signature**

```ts
isAnyInputWindowActive(): boolean;
```

### changeInputWindow (method)

**Signature**

```ts
changeInputWindow(): void;
```

### stop (method)

**Signature**

```ts
stop(): void;
```

### terminate (method)

**Signature**

```ts
terminate(): void;
```

### shouldAutosave (method)

**Signature**

```ts
shouldAutosave(): boolean | null;
```

### needsSlowFadeOut (method)

**Signature**

```ts
needsSlowFadeOut(): boolean | null;
```

### updateLogWindowVisibility (method)

**Signature**

```ts
updateLogWindowVisibility(): void;
```

### updateStatusWindowVisibility (method)

**Signature**

```ts
updateStatusWindowVisibility(): void;
```

### shouldOpenStatusWindow (method)

**Signature**

```ts
shouldOpenStatusWindow(): boolean;
```

### updateStatusWindowPosition (method)

**Signature**

```ts
updateStatusWindowPosition(): void;
```

### statusWindowX (method)

**Signature**

```ts
statusWindowX(): number;
```

### updateInputWindowVisibility (method)

**Signature**

```ts
updateInputWindowVisibility(): void;
```

### needsInputWindowChange (method)

**Signature**

```ts
needsInputWindowChange(): boolean;
```

### updateCancelButton (method)

**Signature**

```ts
updateCancelButton(): void;
```

### createDisplayObjects (method)

**Signature**

```ts
createDisplayObjects(): void;
```

### createSpriteset (method)

**Signature**

```ts
createSpriteset(): void;
```

### createAllWindows (method)

**Signature**

```ts
createAllWindows(): void;
```

### createLogWindow (method)

**Signature**

```ts
createLogWindow(): void;
```

### logWindowRect (method)

**Signature**

```ts
logWindowRect(): Rectangle;
```

### createStatusWindow (method)

**Signature**

```ts
createStatusWindow(): void;
```

### statusWindowRect (method)

**Signature**

```ts
statusWindowRect(): Rectangle;
```

### createPartyCommandWindow (method)

**Signature**

```ts
createPartyCommandWindow(): void;
```

### partyCommandWindowRect (method)

**Signature**

```ts
partyCommandWindowRect(): Rectangle;
```

### createActorCommandWindow (method)

**Signature**

```ts
createActorCommandWindow(): void;
```

### actorCommandWindowRect (method)

**Signature**

```ts
actorCommandWindowRect(): Rectangle;
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

### createSkillWindow (method)

**Signature**

```ts
createSkillWindow(): void;
```

### skillWindowRect (method)

**Signature**

```ts
skillWindowRect(): Rectangle;
```

### createItemWindow (method)

**Signature**

```ts
createItemWindow(): void;
```

### itemWindowRect (method)

**Signature**

```ts
itemWindowRect(): Rectangle;
```

### createActorWindow (method)

**Signature**

```ts
createActorWindow(): void;
```

### actorWindowRect (method)

**Signature**

```ts
actorWindowRect(): Rectangle;
```

### createEnemyWindow (method)

**Signature**

```ts
createEnemyWindow(): void;
```

### enemyWindowRect (method)

**Signature**

```ts
enemyWindowRect(): Rectangle;
```

### helpAreaTop (method)

**Signature**

```ts
helpAreaTop(): number;
```

### helpAreaBottom (method)

**Signature**

```ts
helpAreaBottom(): number;
```

### helpAreaHeight (method)

**Signature**

```ts
helpAreaHeight(): number;
```

### buttonAreaTop (method)

**Signature**

```ts
buttonAreaTop(): number;
```

### windowAreaHeight (method)

**Signature**

```ts
windowAreaHeight(): number;
```

### createButtons (method)

**Signature**

```ts
createButtons(): void;
```

### createCancelButton (method)

**Signature**

```ts
createCancelButton(): void;
```

### closeCommandWindows (method)

**Signature**

```ts
closeCommandWindows(): void;
```

### hideSubInputWindows (method)

**Signature**

```ts
hideSubInputWindows(): void;
```

### startPartyCommandSelection (method)

**Signature**

```ts
startPartyCommandSelection(): void;
```

### commandFight (method)

**Signature**

```ts
commandFight(): void;
```

### commandEscape (method)

**Signature**

```ts
commandEscape(): void;
```

### startActorCommandSelection (method)

**Signature**

```ts
startActorCommandSelection(): void;
```

### commandAttack (method)

**Signature**

```ts
commandAttack(): void;
```

### commandSkill (method)

**Signature**

```ts
commandSkill(): void;
```

### commandGuard (method)

**Signature**

```ts
commandGuard(): void;
```

### commandItem (method)

**Signature**

```ts
commandItem(): void;
```

### commandCancel (method)

**Signature**

```ts
commandCancel(): void;
```

### selectNextCommand (method)

**Signature**

```ts
selectNextCommand(): void;
```

### selectPreviousCommand (method)

**Signature**

```ts
selectPreviousCommand(): void;
```

### startActorSelection (method)

**Signature**

```ts
startActorSelection(): void;
```

### onActorOk (method)

**Signature**

```ts
onActorOk(): void;
```

### onActorCancel (method)

**Signature**

```ts
onActorCancel(): void;
```

### startEnemySelection (method)

**Signature**

```ts
startEnemySelection(): void;
```

### onEnemyOk (method)

**Signature**

```ts
onEnemyOk(): void;
```

### onEnemyCancel (method)

**Signature**

```ts
onEnemyCancel(): void;
```

### onSkillOk (method)

**Signature**

```ts
onSkillOk(): void;
```

### onSkillCancel (method)

**Signature**

```ts
onSkillCancel(): void;
```

### onItemOk (method)

**Signature**

```ts
onItemOk(): void;
```

### onItemCancel (method)

**Signature**

```ts
onItemCancel(): void;
```

### onSelectAction (method)

**Signature**

```ts
onSelectAction(): void;
```

### endCommandSelection (method)

**Signature**

```ts
endCommandSelection(): void;
```

### \_logWindow (property)

**Signature**

```ts
_logWindow: Window_BattleLog
```

### \_statusWindow (property)

**Signature**

```ts
_statusWindow: Window_BattleStatus
```

### \_spriteset (property)

**Signature**

```ts
_spriteset: Spriteset_Battle
```

### \_partyCommandWindow (property)

**Signature**

```ts
_partyCommandWindow: Window_PartyCommand
```

### \_actorCommandWindow (property)

**Signature**

```ts
_actorCommandWindow: Window_ActorCommand
```

### \_helpWindow (property)

**Signature**

```ts
_helpWindow: Window_Help
```

### \_skillWindow (property)

**Signature**

```ts
_skillWindow: Window_BattleSkill
```

### \_itemWindow (property)

**Signature**

```ts
_itemWindow: Window_BattleItem
```

### \_actorWindow (property)

**Signature**

```ts
_actorWindow: Window_BattleActor
```

### \_enemyWindow (property)

**Signature**

```ts
_enemyWindow: Window_BattleEnemy
```

### \_cancelButton (property)

**Signature**

```ts
_cancelButton: Sprite_Button
```
