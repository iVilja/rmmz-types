import { Rectangle } from "../core";
import { DataPricedItemBase } from "../data";
import { Sprite_Button } from "../sprites";
import { Window_Selectable } from "./Window_Selectable";
/**
 * Window_ShopNumber
*
* The window for inputting quantity of items to buy or sell on the shop
// screen.
*/
export declare class Window_ShopNumber extends Window_Selectable {
    _item: DataPricedItemBase | null;
    _max: number;
    _price: number;
    _number: number;
    _currencyUnit: string;
    _canRepeat: boolean;
    _buttons: Sprite_Button[];
    constructor(rect: Rectangle);
    isScrollEnabled(): boolean;
    number(): number;
    setup(item: DataPricedItemBase | null, max: number, price: number): void;
    setCurrencyUnit(currencyUnit: string): void;
    createButtons(): void;
    placeButtons(): void;
    totalButtonWidth(): number;
    buttonSpacing(): number;
    refresh(): void;
    drawCurrentItemName(): void;
    drawMultiplicationSign(): void;
    multiplicationSign(): string;
    multiplicationSignX(): number;
    drawNumber(): void;
    drawHorzLine(): void;
    drawTotalPrice(): void;
    itemNameY(): number;
    totalPriceY(): number;
    buttonY(): number;
    cursorWidth(): number;
    cursorX(): number;
    maxDigits(): number;
    update(): void;
    playOkSound(): void;
    processNumberChange(): void;
    changeNumber(amount: number): void;
    itemRect(): Rectangle;
    isTouchOkEnabled(): boolean;
    onButtonUp(): void;
    onButtonUp2(): void;
    onButtonDown(): void;
    onButtonDown2(): void;
    onButtonOk(): void;
}
