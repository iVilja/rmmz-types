import { TextWindowBackgroundType } from "../data";
import { Sprite_Button } from "../sprites";
import { Window_Command } from "./Window_Command";
import { Window_Message } from "./Window_Message";
/**
 * Window_ChoiceList
 *
 * The window used for the event command [Show Choices].
 */
export declare class Window_ChoiceList extends Window_Command {
    _background: TextWindowBackgroundType;
    _canRepeat: boolean;
    _messageWindow: Window_Message;
    _cancelButton?: Sprite_Button;
    constructor();
    setMessageWindow(messageWindow: Window_Message): void;
    createCancelButton(): void;
    start(): void;
    update(): void;
    updateCancelButton(): void;
    selectDefault(): void;
    updatePlacement(): void;
    updateBackground(): void;
    placeCancelButton(): void;
    windowX(): number;
    windowY(): number;
    windowWidth(): number;
    windowHeight(): number;
    numVisibleRows(): number;
    maxLines(): 4 | 8;
    maxChoiceWidth(): number;
    makeCommandList(): void;
    drawItem(index: number): void;
    isCancelEnabled(): boolean;
    needsCancelButton(): boolean;
    callOkHandler(): void;
    callCancelHandler(): void;
}
