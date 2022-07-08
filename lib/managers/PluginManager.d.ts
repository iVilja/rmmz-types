import { RmmzPlugin } from "../data/plugin";
/**
 * PluginManager
 *
 * The static class that manages the plugins.
 */
export declare class PluginManager {
    constructor();
    static _scripts: string[];
    static _errorUrls: string[];
    static _parameters: Record<string, Record<string, unknown>>;
    static _commands: Record<string, (...args: unknown[]) => void>;
    static setup(plugins: RmmzPlugin[]): void;
    static parameters(name: string): Record<string, unknown>;
    static setParameters(name: string, parameters: Record<string, unknown>): void;
    static loadScript(filename: string): void;
    static onError(e: Event | string): void;
    static makeUrl(filename: string): string;
    static checkErrors(): void;
    static throwLoadError(url: string): void;
    static registerCommand(pluginName: string, commandName: string, func: () => void): void;
    static callCommand(self: unknown, pluginName: string, commandName: string, args: unknown[]): void;
}
