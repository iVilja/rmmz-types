import { Rectangle } from "../core"
import { DataItemBase } from "../data"
import { Sprite_Button } from "../sprites"
import { Window_ItemList } from "./Window_ItemList"
import { Window_Message } from "./Window_Message"
/**
 * Window_EventItem
 *
 * The window used for the event command [Select Item].
 */
export declare class Window_EventItem extends Window_ItemList {
  _messageWindow: Window_Message
  _cancelButton?: Sprite_Button
  constructor(rect: Rectangle)
  setMessageWindow(messageWindow: Window_Message): void
  createCancelButton(): void
  start(): void
  update(): void
  updateCancelButton(): void
  updatePlacement(): void
  placeCancelButton(): void
  includes(item: DataItemBase): boolean
  needsNumber(): boolean
  isEnabled(): boolean
  onOk(): void
  onCancel(): void
}
