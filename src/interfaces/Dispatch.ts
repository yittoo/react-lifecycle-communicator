// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Dispatch<T = any> {
  (eventName?: string, params?: T): void;
}
