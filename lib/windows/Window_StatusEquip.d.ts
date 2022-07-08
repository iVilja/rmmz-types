import { Game_Actor } from "../objects";
import { Window_StatusBase } from "./Window_StatusBase";
/**
 * Window_StatusEquip
 *
 * The window for displaying equipment items on the status screen.
 */
export declare class Window_StatusEquip extends Window_StatusBase {
    _actor: Game_Actor | null;
    setActor(actor: Game_Actor): void;
    maxItems(): number;
    itemHeight(): number;
    drawItem(index: number): void;
    drawItemBackground(): void;
}
