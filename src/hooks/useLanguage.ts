import { useState, useEffect } from 'react';
import { Language } from '../types/language';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('yodev-language');
    if (saved === 'es' || saved === 'pt') {
      return saved;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) {
      return 'pt';
    }
    
    // Default to Spanish for Latin America
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('yodev-language', language);
  }, [language]);

  return { language, setLanguage };
}