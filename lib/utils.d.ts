export declare type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
