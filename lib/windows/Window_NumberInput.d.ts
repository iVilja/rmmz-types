import { Rectangle } from "../core";
import { Sprite_Button } from "../sprites";
import { Window_Message } from "./Window_Message";
import { Window_Selectable } from "./Window_Selectable";
/**
 * Window_NumberInput
 *
 * The window used for the event command [Input Number].
 */
export declare class Window_NumberInput extends Window_Selectable {
    _number: number;
    _maxDigits: number;
    _canRepeat: boolean;
    _messageWindow: Window_Message;
    _buttons: Sprite_Button[];
    constructor();
    setMessageWindow(messageWindow: Window_Message): void;
    start(): void;
    updatePlacement(): void;
    windowWidth(): number;
    windowHeight(): number;
    maxCols(): number;
    maxItems(): number;
    itemWidth(): number;
    itemRect(index: number): Rectangle;
    isScrollEnabled(): boolean;
    isHoverEnabled(): boolean;
    createButtons(): void;
    placeButtons(): void;
    totalButtonWidth(): number;
    buttonSpacing(): number;
    buttonY(): number;
    update(): void;
    processDigitChange(): void;
    changeDigit(up: boolean): void;
    isTouchOkEnabled(): boolean;
    isOkEnabled(): boolean;
    isCancelEnabled(): boolean;
    processOk(): void;
    drawItem(index: number): void;
    onButtonUp(): void;
    onButtonDown(): void;
    onButtonOk(): void;
}
