import { uiEn } from './ui.en';

type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepString<U>[]
    : T extends object
      ? { [K in keyof T]: DeepString<T[K]> }
      : string;

export type UITranslations = DeepString<typeof uiEn>;
