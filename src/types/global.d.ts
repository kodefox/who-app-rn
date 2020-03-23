declare global {
  export type ObjectOf<T> = { [key: string]: T };
  export { t } from '../helpers/translate';
  export const global: typeof globalThis;
}

export {};
