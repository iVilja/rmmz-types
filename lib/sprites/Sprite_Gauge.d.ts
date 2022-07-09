import { Sprite } from "../core"
import { ActionTarget, Color } from "../data"
import { PIXIDestroyOptions } from "../external-types"
export declare type GaugeStatusType = "time" | "hp" | "mp" | "tp"
/**
// Sprite_Gauge
//
// The sprite for displaying a status gauge.
*/
export declare class Sprite_Gauge extends Sprite {
  _battler: ActionTarget | null
  _statusType: string
  _value: number
  _maxValue: number
  _targetValue: number
  _targetMaxValue: number
  _duration: number
  _flashingCount: number
  constructor()
  initMembers(): void
  destroy(options?: PIXIDestroyOptions): void
  createBitmap(): void
  bitmapWidth(): number
  bitmapHeight(): number
  textHeight(): number
  gaugeHeight(): number
  gaugeX(): number
  labelY(): number
  labelFontFace(): string
  labelFontSize(): number
  valueFontFace(): string
  valueFontSize(): number
  setup(battler: ActionTarget, statusType: GaugeStatusType): void
  update(): void
  updateBitmap(): void
  updateTargetValue(value: number, maxValue: number): void
  smoothness(): 20 | 5
  updateGaugeAnimation(): void
  updateFlashing(): void
  flashingColor1(): Color
  flashingColor2(): Color
  isValid(): boolean
  currentValue(): number
  currentMaxValue(): number
  label(): string
  gaugeBackColor(): string
  gaugeColor1(): string
  gaugeColor2(): string
  labelColor(): string
  labelOutlineColor(): string
  labelOutlineWidth(): number
  valueColor(): string
  valueOutlineColor(): string
  valueOutlineWidth(): number
  redraw(): void
  drawGauge(): void
  drawGaugeRect(x: number, y: number, width: number, height: number): void
  gaugeRate(): number
  drawLabel(): void
  setupLabelFont(): void
  measureLabelWidth(): number
  labelOpacity(): 255 | 160
  drawValue(): void
  setupValueFont(): void
}
