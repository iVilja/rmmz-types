import { DataItemBase } from "../data";
import { Window_Selectable } from "./Window_Selectable";
/**
 * Window_ItemList
 *
 * The window for selecting an item on the item screen.
 */
export declare class Window_ItemList<T extends DataItemBase = DataItemBase> extends Window_Selectable {
    _category: string | null;
    _data: (T | null)[];
    setCategory(category: string | null): void;
    maxCols(): number;
    colSpacing(): number;
    maxItems(): number;
    item(): T | null;
    itemAt(index: number): T | null;
    isCurrentItemEnabled(): boolean;
    includes(item: DataItemBase | null): boolean;
    needsNumber(): boolean;
    isEnabled(item: DataItemBase | null): boolean;
    makeItemList(): void;
    selectLast(): void;
    drawItem(index: number): void;
    numberWidth(): number;
    drawItemNumber(item: T, x: number, y: number, width: number): void;
    updateHelp(): void;
    refresh(): void;
}
