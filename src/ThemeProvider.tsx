import React, { useState } from 'react';
import {
  PrimaryTheme,
  SecondaryTheme,
  type ThemeProperties,
  DefaultTheme,
} from './Theme';
import { ThemeContext } from './ThemeContext';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeProperties>(DefaultTheme);

  const setTheme = (changedTheme: string) => {
    switch (changedTheme) {
      case 'PRIMARY':
        setThemeMode(PrimaryTheme);
        break;
      case 'SECONDARY':
        setThemeMode(SecondaryTheme);
        break;
      default:
        setThemeMode(DefaultTheme);
        break;
    }
  };
  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
