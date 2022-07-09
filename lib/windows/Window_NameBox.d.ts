import { Window_Base } from "./Window_Base"
import { Window_Message } from "./Window_Message"
/**
 * Window_NameBox
 *
 * The window for displaying a speaker name above the message window.
 */
export declare class Window_NameBox extends Window_Base {
  _name: string
  _messageWindow: Window_Message
  constructor()
  setMessageWindow(messageWindow: Window_Message): void
  setName(name: string): void
  clear(): void
  start(): void
  updatePlacement(): void
  updateBackground(): void
  windowWidth(): number
  windowHeight(): number
  refresh(): void
}
