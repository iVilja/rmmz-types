/**
 * StorageManager
 *
 * The static class that manages storage for saving game data.
 */
export declare class StorageManager {
    constructor();
    static _forageKeys: string[];
    static _forageKeysUpdated: boolean;
    static isLocalMode(): boolean;
    static saveObject<T>(saveName: string, object: T): Promise<number | void>;
    static loadObject<T>(saveName: string): Promise<T>;
    static objectToJson<T>(object: T): Promise<string>;
    static jsonToObject<T>(json: string): Promise<T>;
    static jsonToZip(json: string): Promise<string>;
    static zipToJson(zip: string): Promise<string>;
    static saveZip(saveName: string, zip: string): Promise<void> | Promise<number>;
    static loadZip(saveName: string): Promise<string>;
    static exists(saveName: string): any;
    static remove(saveName: string): void | Promise<number>;
    static saveToLocalFile(saveName: string, zip: string): Promise<void>;
    static loadFromLocalFile(saveName: string): Promise<string>;
    static localFileExists(saveName: string): any;
    static removeLocalFile(saveName: string): void;
    static saveToForage(saveName: string, zip: string): Promise<number>;
    static loadFromForage(saveName: string): Promise<string>;
    static forageExists(saveName: string): boolean;
    static removeForage(saveName: string): Promise<number>;
    static updateForageKeys(): Promise<number>;
    static forageKeysUpdated(): boolean;
    static fsMkdir(path: string): void;
    static fsRename(oldPath: string, newPath: string): void;
    static fsUnlink(path: string): void;
    static fsReadFile(path: string): string | null;
    static fsWriteFile(path: string, data: string): void;
    static fileDirectoryPath(): any;
    static filePath(saveName: string): string;
    static forageKey(saveName: string): string;
    static forageTestKey(): string;
}
