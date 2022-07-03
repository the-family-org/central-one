import type { ThemeNamesType } from '$types';
import { writable } from 'svelte/store';
import { getThemeFromClient } from '$utils';
import { ThemeKey } from '$config';

const themeName: ThemeNamesType =
  (getThemeFromClient() as ThemeNamesType) || ThemeKey.DEFAULT_THEME;

export const currentTheme = writable(themeName);
