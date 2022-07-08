import { Rectangle, Sprite, WindowLayer } from "../core";
import { Window_TitleCommand } from "../windows/Window_TitleCommand";
import { Scene_Base } from "./Scene_Base";
export declare class Scene_Title extends Scene_Base {
    _backSprite1: Sprite;
    _backSprite2: Sprite;
    _gameTitleSprite: Sprite;
    _windowLayer: WindowLayer;
    _commandWindow: Window_TitleCommand;
    create(): void;
    start(): void;
    update(): void;
    isBusy(): boolean;
    terminate(): void;
    createBackground(): void;
    createForeground(): void;
    drawGameTitle(): void;
    adjustBackground(): void;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    commandNewGame(): void;
    commandContinue(): void;
    commandOptions(): void;
    playTitleMusic(): void;
}
