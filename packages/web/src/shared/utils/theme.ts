import { setCookieFromClient } from './cookie';

export const setHtmlThemeParm = (theme: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  document.documentElement.setAttribute('data-theme', theme);
};

export const setThemeFromClient = (theme: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  setCookieFromClient('theme', theme);
  setHtmlThemeParm(theme);
};

export const getThemeFromClient = () => {
  if (typeof document === 'undefined') {
    return null;
  }

  const theme = document.documentElement.getAttribute('data-theme');

  return theme;
};
