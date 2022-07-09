export type PluginParameters = Record<string, unknown>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface RmmzPlugin<TParams extends Record<string, unknown> = any> {
  name: string
  status: boolean
  description: string
  parameters: TParams
}

declare global {
  const $plugins: RmmzPlugin[]
}
