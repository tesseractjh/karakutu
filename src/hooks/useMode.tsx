import { ThemeContext } from '@src/contexts/ThemeProvider';
import { useContext } from 'react';

const useMode = (): [ThemeName, () => void] => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('Invalid Theme Mode');
  }
  const { mode, handleClick } = themeContext;
  return [mode, handleClick];
};

export default useMode;
