---
title: windows/Window_Message.d.ts
nav_order: 169
parent: Modules
---

## Window_Message.d overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [MessageEscapeCharacter (type alias)](#messageescapecharacter-type-alias)
  - [Window_Message (class)](#window_message-class)
    - [initMembers (method)](#initmembers-method)
    - [setGoldWindow (method)](#setgoldwindow-method)
    - [setNameBoxWindow (method)](#setnameboxwindow-method)
    - [setChoiceListWindow (method)](#setchoicelistwindow-method)
    - [setNumberInputWindow (method)](#setnumberinputwindow-method)
    - [setEventItemWindow (method)](#seteventitemwindow-method)
    - [clearFlags (method)](#clearflags-method)
    - [update (method)](#update-method)
    - [checkToNotClose (method)](#checktonotclose-method)
    - [synchronizeNameBox (method)](#synchronizenamebox-method)
    - [canStart (method)](#canstart-method)
    - [startMessage (method)](#startmessage-method)
    - [newLineX (method)](#newlinex-method)
    - [updatePlacement (method)](#updateplacement-method)
    - [updateBackground (method)](#updatebackground-method)
    - [terminateMessage (method)](#terminatemessage-method)
    - [updateWait (method)](#updatewait-method)
    - [updateLoading (method)](#updateloading-method)
    - [updateInput (method)](#updateinput-method)
    - [isAnySubWindowActive (method)](#isanysubwindowactive-method)
    - [updateMessage (method)](#updatemessage-method)
    - [shouldBreakHere (method)](#shouldbreakhere-method)
    - [canBreakHere (method)](#canbreakhere-method)
    - [onEndOfText (method)](#onendoftext-method)
    - [startInput (method)](#startinput-method)
    - [isTriggered (method)](#istriggered-method)
    - [doesContinue (method)](#doescontinue-method)
    - [areSettingsChanged (method)](#aresettingschanged-method)
    - [updateShowFast (method)](#updateshowfast-method)
    - [newPage (method)](#newpage-method)
    - [updateSpeakerName (method)](#updatespeakername-method)
    - [loadMessageFace (method)](#loadmessageface-method)
    - [drawMessageFace (method)](#drawmessageface-method)
    - [processControlCharacter (method)](#processcontrolcharacter-method)
    - [processNewLine (method)](#processnewline-method)
    - [processNewPage (method)](#processnewpage-method)
    - [isEndOfText (method)](#isendoftext-method)
    - [needsNewPage (method)](#needsnewpage-method)
    - [processEscapeCharacter (method)](#processescapecharacter-method)
    - [startWait (method)](#startwait-method)
    - [startPause (method)](#startpause-method)
    - [isWaiting (method)](#iswaiting-method)
    - [\_background (property)](#_background-property)
    - [\_positionType (property)](#_positiontype-property)
    - [\_waitCount (property)](#_waitcount-property)
    - [\_faceBitmap (property)](#_facebitmap-property)
    - [\_textState (property)](#_textstate-property)
    - [\_goldWindow (property)](#_goldwindow-property)
    - [\_nameBoxWindow (property)](#_nameboxwindow-property)
    - [\_choiceListWindow (property)](#_choicelistwindow-property)
    - [\_numberInputWindow (property)](#_numberinputwindow-property)
    - [\_eventItemWindow (property)](#_eventitemwindow-property)
    - [\_showFast (property)](#_showfast-property)
    - [\_lineShowFast (property)](#_lineshowfast-property)
    - [\_pauseSkip (property)](#_pauseskip-property)

---

# utils

## MessageEscapeCharacter (type alias)

**Signature**

```ts
export declare type MessageEscapeCharacter = '$' | '.' | '|' | '!' | '>' | '<' | '^'
```

## Window_Message (class)

Window_Message

The window for displaying text messages.

**Signature**

```ts
export declare class Window_Message {
  constructor(rect: Rectangle)
}
```

### initMembers (method)

**Signature**

```ts
initMembers(): void;
```

### setGoldWindow (method)

**Signature**

```ts
setGoldWindow(goldWindow: Window_Gold): void;
```

### setNameBoxWindow (method)

**Signature**

```ts
setNameBoxWindow(nameBoxWindow: Window_NameBox): void;
```

### setChoiceListWindow (method)

**Signature**

```ts
setChoiceListWindow(choiceListWindow: Window_ChoiceList): void;
```

### setNumberInputWindow (method)

**Signature**

```ts
setNumberInputWindow(numberInputWindow: Window_NumberInput): void;
```

### setEventItemWindow (method)

**Signature**

```ts
setEventItemWindow(eventItemWindow: Window_EventItem): void;
```

### clearFlags (method)

**Signature**

```ts
clearFlags(): void;
```

### update (method)

**Signature**

```ts
update(): void;
```

### checkToNotClose (method)

**Signature**

```ts
checkToNotClose(): void;
```

### synchronizeNameBox (method)

**Signature**

```ts
synchronizeNameBox(): void;
```

### canStart (method)

**Signature**

```ts
canStart(): boolean;
```

### startMessage (method)

**Signature**

```ts
startMessage(): void;
```

### newLineX (method)

**Signature**

```ts
newLineX(textState: TextState): number;
```

### updatePlacement (method)

**Signature**

```ts
updatePlacement(): void;
```

### updateBackground (method)

**Signature**

```ts
updateBackground(): void;
```

### terminateMessage (method)

**Signature**

```ts
terminateMessage(): void;
```

### updateWait (method)

**Signature**

```ts
updateWait(): boolean;
```

### updateLoading (method)

**Signature**

```ts
updateLoading(): boolean;
```

### updateInput (method)

**Signature**

```ts
updateInput(): boolean;
```

### isAnySubWindowActive (method)

**Signature**

```ts
isAnySubWindowActive(): boolean;
```

### updateMessage (method)

**Signature**

```ts
updateMessage(): boolean;
```

### shouldBreakHere (method)

**Signature**

```ts
shouldBreakHere(textState: TextState): boolean;
```

### canBreakHere (method)

**Signature**

```ts
canBreakHere(textState: TextState): boolean;
```

### onEndOfText (method)

**Signature**

```ts
onEndOfText(): void;
```

### startInput (method)

**Signature**

```ts
startInput(): boolean;
```

### isTriggered (method)

**Signature**

```ts
isTriggered(): boolean;
```

### doesContinue (method)

**Signature**

```ts
doesContinue(): boolean;
```

### areSettingsChanged (method)

**Signature**

```ts
areSettingsChanged(): boolean;
```

### updateShowFast (method)

**Signature**

```ts
updateShowFast(): void;
```

### newPage (method)

**Signature**

```ts
newPage(textState: TextState): void;
```

### updateSpeakerName (method)

**Signature**

```ts
updateSpeakerName(): void;
```

### loadMessageFace (method)

**Signature**

```ts
loadMessageFace(): void;
```

### drawMessageFace (method)

**Signature**

```ts
drawMessageFace(): void;
```

### processControlCharacter (method)

**Signature**

```ts
processControlCharacter(textState: TextState, c: string): void;
```

### processNewLine (method)

**Signature**

```ts
processNewLine(textState: TextState): void;
```

### processNewPage (method)

**Signature**

```ts
processNewPage(textState: TextState): void;
```

### isEndOfText (method)

**Signature**

```ts
isEndOfText(textState: TextState): boolean;
```

### needsNewPage (method)

**Signature**

```ts
needsNewPage(textState: TextState): boolean;
```

### processEscapeCharacter (method)

**Signature**

```ts
processEscapeCharacter(code: MessageEscapeCharacter | EscapeCharacter, textState: TextState): void;
```

### startWait (method)

**Signature**

```ts
startWait(count: number): void;
```

### startPause (method)

**Signature**

```ts
startPause(): void;
```

### isWaiting (method)

**Signature**

```ts
isWaiting(): boolean;
```

### \_background (property)

**Signature**

```ts
_background: TextWindowBackgroundType
```

### \_positionType (property)

**Signature**

```ts
_positionType: TextWindowBackgroundType
```

### \_waitCount (property)

**Signature**

```ts
_waitCount: number
```

### \_faceBitmap (property)

**Signature**

```ts
_faceBitmap: Bitmap | null
```

### \_textState (property)

**Signature**

```ts
_textState: TextState | null
```

### \_goldWindow (property)

**Signature**

```ts
_goldWindow: Window_Gold | null
```

### \_nameBoxWindow (property)

**Signature**

```ts
_nameBoxWindow: Window_NameBox | null
```

### \_choiceListWindow (property)

**Signature**

```ts
_choiceListWindow: Window_ChoiceList | null
```

### \_numberInputWindow (property)

**Signature**

```ts
_numberInputWindow: Window_NumberInput | null
```

### \_eventItemWindow (property)

**Signature**

```ts
_eventItemWindow: Window_EventItem | null
```

### \_showFast (property)

**Signature**

```ts
_showFast: boolean
```

### \_lineShowFast (property)

**Signature**

```ts
_lineShowFast: boolean
```

### \_pauseSkip (property)

**Signature**

```ts
_pauseSkip: boolean
```
