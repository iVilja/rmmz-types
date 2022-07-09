declare module "effekseer" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace effekseer {
    export function initRuntime(path: string, onload: () => void, onerror: () => void): void

    export function createContext(): EffekseerContext

    // prettier-ignore
    type MatrixArray = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
  ]

    export class EffekseerContext {
      init(webglContext: WebGLRenderingContext, settings?: object): void
      beginDraw(): void
      endDraw(): void
      drawHandle(handle: EffekseerHandle): void
      setProjectionMatrix(matrixArray: MatrixArray): void
      setCameraMatrix(matrixArray: MatrixArray): void
      setRestorationOfStatesFlag(flag: boolean): void

      loadEffect(
        path: string,
        scale?: number,
        onload?: () => void,
        onerror?: (reason: string, path: string) => void,
        redirect?: (path: string) => string
      ): EffekseerEffect
      releaseEffect(effect: EffekseerEffect): void

      update(): void
      play(effect: EffekseerEffect, x?: number, y?: number, z?: number): EffekseerHandle
      stopAll(): void
    }

    export class EffekseerEffect {
      constructor()
      isLoaded: boolean
    }

    export class EffekseerHandle {
      stop(): void
      readonly exists: boolean

      setLocation(x: number, y: number, z: number): void
      setRotation(x: number, y: number, z: number): void
      setScale(x: number, y: number, z: number): void
      setSpeed(speed: number): void
    }
  }

  export = effekseer
}
