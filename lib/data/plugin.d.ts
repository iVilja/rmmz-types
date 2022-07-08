export interface RmmzPlugin<TParams extends Record<string, unknown> = any> {
    name: string;
    status: boolean;
    description: string;
    parameters: TParams;
}
declare global {
    const $plugins: RmmzPlugin[];
}
