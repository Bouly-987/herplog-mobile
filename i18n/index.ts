import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import en from "./en";
import fr from "./fr";
import type { Translations } from "./en";
import React from "react";

export type Locale = "en" | "fr";

const translations: Record<Locale, Translations> = { en, fr };

function getDeviceLocale(): Locale {
  const deviceLang = Localization.getLocales?.()?.[0]?.languageCode ?? "en";
  return deviceLang === "fr" ? "fr" : "en";
}

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getDeviceLocale());

  // Load saved locale on mount
  React.useEffect(() => {
    AsyncStorage.getItem("herplog-locale").then((saved) => {
      if (saved === "fr" || saved === "en") {
        setLocaleState(saved);
      }
    });
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    AsyncStorage.setItem("herplog-locale", newLocale);
  }, []);

  const t = translations[locale];

  return React.createElement(
    I18nContext.Provider,
    { value: { locale, t, setLocale } },
    children
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export { en, fr };
export type { Translations };
