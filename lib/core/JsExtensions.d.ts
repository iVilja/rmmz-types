/**
 * This section contains some methods that will be added to the standard
 * Javascript objects.
 *
 * @namespace JsExtensions
 */
declare global {
  interface Array<T> {
    clone(): this
    contains(element: T): boolean
    equals<T2>(array: T2[]): boolean
    remove(element: T): T[]
  }
  interface ReadonlyArray<T> {
    clone(): {
      -readonly [P in keyof this]: this[P]
    }
    contains(element: T): boolean
    equals<T2>(array: T2[]): boolean
  }
  interface Math {
    randomInt(max: number): number
  }
  interface Number {
    clamp(min: number, max: number): number
    mod(n: number): number
    padZero(length: number): string
  }
  interface String {
    padZero(length: number): string
    contains(string: string): boolean
    format(...args: unknown[]): string
  }
}
export {}
