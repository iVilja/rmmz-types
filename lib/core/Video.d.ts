/**
 * The static class that handles video playback.
 *
 * @namespace
 */
export declare class Video {
  constructor()
  static _loading: boolean
  static _volume: number
  static _element: HTMLVideoElement
  /**
   * Initializes the video system.
   *
   * @param {number} width - The width of the video.
   * @param {number} height - The height of the video.
   */
  static initialize(width: number, height: number): void
  /**
   * Changes the display size of the video.
   *
   * @param {number} width - The width of the video.
   * @param {number} height - The height of the video.
   */
  static resize(width: number, height: number): void
  /**
   * Starts playback of a video.
   *
   * @param {string} src - The url of the video.
   */
  static play(src: string): void
  /**
   * Checks whether the video is playing.
   *
   * @returns {boolean} True if the video is playing.
   */
  static isPlaying(): boolean
  /**
   * Sets the volume for videos.
   *
   * @param {number} volume - The volume for videos (0 to 1).
   */
  static setVolume(volume: number): void
  static _createElement(): void
  static _onLoad(): void
  static _onError(): void
  static _onEnd(): void
  static _updateVisibility(videoVisible: boolean): void
  static _isVisible(): boolean
  static _setupEventHandlers(): void
  static _onUserGesture(): void
}
