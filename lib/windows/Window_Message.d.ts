import { Bitmap, Rectangle } from "../core";
import { TextWindowBackgroundType, TextWindowPositionType } from "../data";
import { EscapeCharacter, TextState, Window_Base } from "./Window_Base";
import { Window_ChoiceList } from "./Window_ChoiceList";
import { Window_EventItem } from "./Window_EventItem";
import { Window_Gold } from "./Window_Gold";
import { Window_NameBox } from "./Window_NameBox";
import { Window_NumberInput } from "./Window_NumberInput";
export declare type MessageEscapeCharacter = "$" | "." | "|" | "!" | ">" | "<" | "^";
/**
 * Window_Message
 *
 * The window for displaying text messages.
 */
export declare class Window_Message extends Window_Base {
    _background: TextWindowBackgroundType;
    _positionType: TextWindowPositionType;
    _waitCount: number;
    _faceBitmap: Bitmap | null;
    _textState: TextState | null;
    _goldWindow: Window_Gold | null;
    _nameBoxWindow: Window_NameBox | null;
    _choiceListWindow: Window_ChoiceList | null;
    _numberInputWindow: Window_NumberInput | null;
    _eventItemWindow: Window_EventItem | null;
    _showFast: boolean;
    _lineShowFast: boolean;
    _pauseSkip: boolean;
    constructor(rect: Rectangle);
    initMembers(): void;
    setGoldWindow(goldWindow: Window_Gold): void;
    setNameBoxWindow(nameBoxWindow: Window_NameBox): void;
    setChoiceListWindow(choiceListWindow: Window_ChoiceList): void;
    setNumberInputWindow(numberInputWindow: Window_NumberInput): void;
    setEventItemWindow(eventItemWindow: Window_EventItem): void;
    clearFlags(): void;
    update(): void;
    checkToNotClose(): void;
    synchronizeNameBox(): void;
    canStart(): boolean;
    startMessage(): void;
    newLineX(textState: TextState): number;
    updatePlacement(): void;
    updateBackground(): void;
    terminateMessage(): void;
    updateWait(): boolean;
    updateLoading(): boolean;
    updateInput(): boolean;
    isAnySubWindowActive(): boolean;
    updateMessage(): boolean;
    shouldBreakHere(textState: TextState): boolean;
    canBreakHere(textState: TextState): boolean;
    onEndOfText(): void;
    startInput(): boolean;
    isTriggered(): boolean;
    doesContinue(): boolean;
    areSettingsChanged(): boolean;
    updateShowFast(): void;
    newPage(textState: TextState): void;
    updateSpeakerName(): void;
    loadMessageFace(): void;
    drawMessageFace(): void;
    processControlCharacter(textState: TextState, c: string): void;
    processNewLine(textState: TextState): void;
    processNewPage(textState: TextState): void;
    isEndOfText(textState: TextState): boolean;
    needsNewPage(textState: TextState): boolean;
    processEscapeCharacter(code: MessageEscapeCharacter | EscapeCharacter, textState: TextState): void;
    startWait(count: number): void;
    startPause(): void;
    isWaiting(): boolean;
}
