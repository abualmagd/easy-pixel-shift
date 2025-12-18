// app/[lang]/dictionaries.ts
import "server-only";

// Define your dictionary structure
const dictionaries = {
  ar: () =>
    import("@/app/[lang]/dictioneries/ar.json").then(
      (module) => module.default
    ),
  fr: () =>
    import("@/app/[lang]/dictioneries/fr.json").then(
      (module) => module.default
    ),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) => {
  const getter = dictionaries[locale];
  return getter();
};
