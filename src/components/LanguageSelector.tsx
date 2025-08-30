import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types/language';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="relative">
      <div className="flex items-center space-x-2 bg-black border-2 border-yellow-400 px-3 py-2">
        <Globe size={16} className="text-yellow-400" />
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value as Language)}
          className="bg-transparent text-yellow-400 font-bold text-sm focus:outline-none cursor-pointer"
        >
          <option value="es" className="bg-black text-yellow-400">ES</option>
          <option value="pt" className="bg-black text-yellow-400">PT</option>
        </select>
      </div>
    </div>
  );
}