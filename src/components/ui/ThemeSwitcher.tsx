import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ThemeName } from '@/config/colors';

const themes: { name: ThemeName; label: string; icon: string }[] = [
  { name: 'dark', label: 'Dark', icon: '🌙' },
  { name: 'light', label: 'Light', icon: '☀️' },
  { name: 'green-dark', label: 'Green Dark', icon: '🌲' },
  { name: 'ocean', label: 'Ocean', icon: '🌊' },
  { name: 'purple', label: 'Purple', icon: '💜' },
];

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
      <h3 className="text-sm font-medium text-zinc-300 mb-2">Theme</h3>
      <div className="flex flex-wrap gap-2">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`
              px-3 py-2 rounded-md text-sm font-medium transition-all
              ${
                theme === t.name
                  ? 'bg-zinc-700 text-zinc-100 shadow-lg'
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-200'
              }
            `}
          >
            <span className="mr-2">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};
