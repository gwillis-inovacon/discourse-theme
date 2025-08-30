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
      <div className="flex items-center space-x-2 bg-gray-100 border border-gray-300 rounded-full px-3 py-1">
        <Globe size={14} className="text-gray-600" />
        <select
          value={language}
          onChange={(e) => onLanguageChange(e.target.value as Language)}
          className="bg-transparent text-gray-700 font-medium text-sm focus:outline-none cursor-pointer"
        >
          <option value="es" className="bg-white text-gray-700">ES</option>
          <option value="pt" className="bg-white text-gray-700">PT</option>
          <option value="en" className="bg-white text-gray-700">EN</option>
        </select>
      </div>
    </div>
  );
}