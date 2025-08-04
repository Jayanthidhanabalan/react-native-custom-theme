import { createContext } from 'react';
import { DefaultTheme, type ThemeProperties } from './Theme';

export interface ThemeContextType {
  theme: ThemeProperties;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: DefaultTheme,
  setTheme: () => {},
});
