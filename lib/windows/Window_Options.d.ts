import { ConfigManager } from "../managers";
import { Window_Command } from "./Window_Command";
export declare type VolumeOptionSymbol = "bgmVolume" | "bgsVolume" | "meVolume" | "seVolume";
export declare type OptionSymbol = "alwaysDash" | "commandRemember" | "touchUI" | VolumeOptionSymbol;
/**
 * Window_Options
 *
 * The window for changing various settings on the options screen.
 */
export declare class Window_Options extends Window_Command {
    makeCommandList(): void;
    addGeneralOptions(): void;
    addVolumeOptions(): void;
    drawItem(index: number): void;
    statusWidth(): number;
    statusText(index: number): string;
    isVolumeSymbol(symbol: OptionSymbol): symbol is VolumeOptionSymbol;
    booleanStatusText(value: boolean): "ON" | "OFF";
    volumeStatusText(value: number): string;
    processOk(): void;
    cursorRight(): void;
    cursorLeft(): void;
    changeVolume<T extends VolumeOptionSymbol>(symbol: T, forward: boolean, wrap: boolean): void;
    volumeOffset(): number;
    changeValue(symbol: OptionSymbol, value: boolean | number): void;
    getConfigValue<T extends OptionSymbol>(symbol: T): (typeof ConfigManager)[T];
    setConfigValue<T extends OptionSymbol>(symbol: T, volume: typeof ConfigManager[T]): void;
}
