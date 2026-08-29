'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import * as enPortfolio from '@/data/portfolioData';
import * as arPortfolio from '@/data/portfolioData.ar';
import { uiEn } from '@/data/ui.en';
import type { UITranslations } from '@/data/ui.types';
import { uiAr } from '@/data/ui.ar';

export type Language = 'en' | 'ar';

const STORAGE_KEY = 'portfolio-language';

type PortfolioData = typeof enPortfolio;

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  ui: UITranslations;
  portfolio: PortfolioData;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') return stored;
  } catch {
    // ignore
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLanguageState(readStoredLanguage());
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  }, [language, setLanguage]);

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language, mounted]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      ui: language === 'ar' ? uiAr : uiEn,
      portfolio: (language === 'ar' ? arPortfolio : enPortfolio) as PortfolioData,
      dir,
    }),
    [language, setLanguage, toggleLanguage, dir],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
