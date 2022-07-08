import { Game_Actor } from "../objects";
import { Window_StatusBase } from "./Window_StatusBase";
/**
 * Window_StatusParams
 *
 * The window for displaying parameters on the status screen.
 */
export declare class Window_StatusParams extends Window_StatusBase {
    _actor: Game_Actor | null;
    setActor(actor: Game_Actor): void;
    maxItems(): number;
    itemHeight(): number;
    drawItem(index: number): void;
    drawItemBackground(_index: number): void;
}
