import { Rectangle, Sprite, Window } from "../core";
import { ActorID, DataItemBase, TextWindowBackgroundType } from "../data";
import { PIXI } from "../externals";
export declare type EscapeCharacter = "C" | "I" | "PX" | "PY" | "FS" | "{" | "}";
export declare type TextState = {
    text: string;
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
    startX: number;
    startY: number;
    rtl: boolean;
    buffer: string;
    drawing: boolean;
    outputWidth: number;
    outputHeight: number;
};
/**
 * Window_Base
 *
 * The superclass of all windows within the game.
 */
export declare class Window_Base extends Window {
    _opening: boolean;
    _closing: boolean;
    _dimmerSprite: Sprite | null;
    constructor(rect: Rectangle);
    destroy(options?: PIXI.IDestroyOptions | boolean): void;
    checkRectObject(rect: Rectangle): void;
    lineHeight(): number;
    itemWidth(): number;
    itemHeight(): number;
    itemPadding(): number;
    baseTextRect(): Rectangle;
    loadWindowskin(): void;
    updatePadding(): void;
    updateBackOpacity(): void;
    fittingHeight(numLines: number): number;
    updateTone(): void;
    createContents(): void;
    destroyContents(): void;
    contentsWidth(): number;
    contentsHeight(): number;
    resetFontSettings(): void;
    resetTextColor(): void;
    update(): void;
    updateOpen(): void;
    updateClose(): void;
    open(): void;
    close(): void;
    isOpening(): boolean;
    isClosing(): boolean;
    show(): void;
    hide(): void;
    activate(): void;
    deactivate(): void;
    systemColor(): string;
    translucentOpacity(): number;
    changeTextColor(color: string): void;
    changeOutlineColor(color: string): void;
    changePaintOpacity(enabled: boolean | number): void;
    drawRect(x: number, y: number, width: number, height: number): void;
    drawText(text: string | number, x: number, y: number, maxWidth?: number, align?: CanvasTextAlign): void;
    textWidth(text: string): number;
    drawTextEx(text: string, x: number, y: number, width: number): number;
    textSizeEx(text: string): {
        width: number;
        height: number;
    };
    createTextState(text: string, x: number, y: number, width: number): TextState;
    processAllText(textState: TextState): void;
    flushTextState(textState: TextState): void;
    createTextBuffer(rtl: boolean): "" | "‫";
    convertEscapeCharacters(text: string): string;
    actorName(n: ActorID): string;
    partyMemberName(n: number): string;
    processCharacter(textState: TextState): void;
    processControlCharacter(textState: TextState, c: string): void;
    processNewLine(textState: TextState): void;
    obtainEscapeCode(textState: TextState): string;
    obtainEscapeParam(textState: TextState): number;
    processEscapeCharacter(code: EscapeCharacter, textState: TextState): void;
    processColorChange(colorIndex: number): void;
    processDrawIcon(iconIndex: number, textState: TextState): void;
    makeFontBigger(): void;
    makeFontSmaller(): void;
    calcTextHeight(textState: Partial<TextState> & {
        text: string;
    }): number;
    maxFontSizeInLine(line: string): number;
    drawIcon(iconIndex: number, x: number, y: number): void;
    drawFace(faceName: string, faceIndex: number, x: number, y: number, width?: number, height?: number): void;
    drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;
    drawItemName(item: DataItemBase | null, x: number, y: number, width: number): void;
    drawCurrencyValue(value: number, unit: string, x: number, y: number, width: number): void;
    setBackgroundType(type: TextWindowBackgroundType): void;
    showBackgroundDimmer(): void;
    createDimmerSprite(): void;
    hideBackgroundDimmer(): void;
    updateBackgroundDimmer(): void;
    refreshDimmerBitmap(): void;
    playCursorSound(): void;
    playOkSound(): void;
    playBuzzerSound(): void;
}
