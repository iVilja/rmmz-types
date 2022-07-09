import PIXI from "pixi.js"
import nw from "nw.gui"
import localforage from "localforage"
import pako from "pako"
import effekseer from "effekseer"

declare global {
  export class VorbisDecoder {
    constructor(
      context: AudioContext,
      onDecode: (buffer: AudioBuffer) => void,
      onError: (error: Error) => void
    )
    send(data: ArrayBuffer, isLoaded: boolean): void
    destroy(): void
  }
}
export { PIXI, nw, localforage, pako, effekseer }
