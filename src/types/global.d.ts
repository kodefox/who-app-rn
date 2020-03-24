import { t as translate } from '../helpers/translate';

declare global {
  export type ObjectOf<T> = { [key: string]: T };

  export const t: typeof translate;

  export const global: typeof globalThis;
}

export {};
