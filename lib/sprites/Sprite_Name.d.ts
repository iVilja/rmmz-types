import { Sprite } from "../core"
import { ActionTarget } from "../data"
import { PIXIDestroyOptions } from "../external-types"
/**
// Sprite_Name
//
// The sprite for displaying a status gauge.
*/
export declare class Sprite_Name extends Sprite {
  _battler: ActionTarget | null
  _name: string
  _textColor: string
  constructor()
  initMembers(): void
  destroy(options?: PIXIDestroyOptions): void
  createBitmap(): void
  bitmapWidth(): number
  bitmapHeight(): number
  fontFace(): string
  fontSize(): number
  setup(battler: ActionTarget): void
  update(): void
  updateBitmap(): void
  name(): string
  textColor(): string
  outlineColor(): string
  outlineWidth(): number
  redraw(): void
  setupFont(): void
}
