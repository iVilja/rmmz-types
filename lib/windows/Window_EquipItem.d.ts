import { DataEquipment, DataItemBase, EquipmentSlotID } from "../data";
import { Game_Actor } from "../objects";
import { Window_EquipStatus } from "./Window_EquipStatus";
import { Window_ItemList } from "./Window_ItemList";
/**
 * Window_EquipItem
 *
 * The window for selecting an equipment item on the equipment screen.
 */
export declare class Window_EquipItem extends Window_ItemList<DataEquipment> {
    _actor: Game_Actor | null;
    _slotId: EquipmentSlotID;
    _statusWindow?: Window_EquipStatus;
    maxCols(): number;
    colSpacing(): number;
    setActor(actor: Game_Actor): void;
    setSlotId(slotId: EquipmentSlotID): void;
    includes(item: DataItemBase | null): boolean;
    etypeId(): number;
    isEnabled(): boolean;
    selectLast(): void;
    setStatusWindow(statusWindow: Window_EquipStatus): void;
    updateHelp(): void;
    playOkSound(): void;
}
