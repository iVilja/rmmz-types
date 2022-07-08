import { Rectangle } from "../core";
import { Window_Base } from "./Window_Base";
/**
 * Window_ScrollText
*
* The window for displaying scrolling text. No frame is displayed, but it
// is handled as a window for convenience.
*/
export declare class Window_ScrollText extends Window_Base {
    _text: string | null;
    _allTextHeight: number;
    _reservedRect: Rectangle;
    constructor(rect: Rectangle);
    update(): void;
    startMessage(): void;
    refresh(): void;
    updatePlacement(): void;
    contentsHeight(): number;
    updateMessage(): void;
    scrollSpeed(): number;
    isFastForward(): boolean;
    fastForwardRate(): number;
    terminateMessage(): void;
}
