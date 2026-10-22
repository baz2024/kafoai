import en from './en';
import ar from './ar';

export type Lang = 'en' | 'ar';

const dict: Record<Lang, Record<string, string>> = { en, ar };

export function t(key: string, lang: Lang): string {
  return dict[lang]?.[key] ?? dict['en'][key] ?? key;
}

export function isValidLang(lang: string): lang is Lang {
  return lang === 'en' || lang === 'ar';
}

export function altLang(lang: Lang): Lang {
  return lang === 'en' ? 'ar' : 'en';
}

export function dir(lang: Lang): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}
