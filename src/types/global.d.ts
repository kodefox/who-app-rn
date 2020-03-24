declare global {
  export type ObjectOf<T> = { [key: string]: T };

  // TODO: We should be able to infer this type by importing the
  // real implementation, but I can't get that to work.
  export type TranslatorFunction = {
    (input: string, params?: { [key: string]: unknown }): string;
    frag: (
      input: string,
      params: {
        [key: string]:
          | null
          | undefined
          | number
          | string
          | boolean
          | ((s: string) => unknown);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => any;
  };
  export const t: TranslatorFunction;

  export const global: typeof globalThis;
}

export {};
