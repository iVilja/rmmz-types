import { Bitmap } from "../core";
import { Scene_Base } from "../scenes/Scene_Base";
export declare type SceneConstructor = new () => Scene_Base;
/**
 * SceneManager
 *
 * The static class that manages scene transitions.
 */
export declare class SceneManager {
    constructor();
    static _scene: Scene_Base | null;
    static _nextScene: Scene_Base | null;
    static _stack: SceneConstructor[];
    static _exiting: boolean;
    static _previousScene: Scene_Base | null;
    static _previousClass: SceneConstructor | null;
    static _backgroundBitmap: Bitmap | null;
    static _smoothDeltaTime: number;
    static _elapsedTime: number;
    static run(sceneClass: SceneConstructor): void;
    static initialize(): void;
    static checkBrowser(): void;
    static checkPluginErrors(): void;
    static initGraphics(): void;
    static initAudio(): void;
    static initVideo(): void;
    static initInput(): void;
    static setupEventHandlers(): void;
    static update(deltaTime: number): void;
    static determineRepeatNumber(deltaTime: number): number;
    static terminate(): void;
    static onError(event: ErrorEvent): void;
    static onReject(event: PromiseRejectionEvent): void;
    static onUnload(): void;
    static onKeyDown(event: KeyboardEvent): void;
    static reloadGame(): void;
    static showDevTools(): void;
    static catchException(e: unknown): void;
    static catchNormalError(e: Error): void;
    static catchLoadError(e: ["LoadError", string, () => void]): void;
    static catchUnknownError(e: unknown): void;
    static updateMain(): void;
    static updateFrameCount(): void;
    static updateInputData(): void;
    static updateEffekseer(): void;
    static changeScene(): void;
    static updateScene(): void;
    static isGameActive(): boolean;
    static onSceneTerminate(): void;
    static onSceneCreate(): void;
    static onBeforeSceneStart(): void;
    static onSceneStart(): void;
    static isSceneChanging(): boolean;
    static isCurrentSceneBusy(): boolean | null;
    static isNextScene(sceneClass: SceneConstructor): boolean | null;
    static isPreviousScene(sceneClass: SceneConstructor): boolean;
    static goto(sceneClass: SceneConstructor | null): void;
    static push(sceneClass: SceneConstructor): void;
    static pop(): void;
    static exit(): void;
    static clearStack(): void;
    static stop(): void;
    static prepareNextScene<T extends Scene_Base & {
        prepare: (...args: any[]) => void;
    }>(...args: Parameters<T["prepare"]>): void;
    static snap(): Bitmap;
    static snapForBackground(): void;
    static backgroundBitmap(): Bitmap | null;
    static resume(): void;
}
