import { Window_HorzCommand } from "./Window_HorzCommand";
/**
 * Window_ShopCommand
 *
 * The window for selecting buy/sell on the shop screen.
 */
export declare class Window_ShopCommand extends Window_HorzCommand {
    _purchaseOnly: boolean;
    setPurchaseOnly(purchaseOnly: boolean): void;
    maxCols(): number;
    makeCommandList(): void;
}
