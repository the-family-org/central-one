import { goto } from '$app/navigation';

interface NavProps {
  locale: string;
  path: string;
  replaceState?: boolean;
  noScroll?: boolean;
  keepFocus?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state?: any;
}

/**
 * ### A custom SvelteKit `goto` navigation handler
 *
 * **Example**
 * ```ts
 * nav({ locale: 'en', path: '/home' })
 * ```
 *
 * @param locale — Where to navigate to
 * @param path — Where to navigate to
 * @param replaceState — If true, will replace the current history entry rather than creating a new one with pushState
 * @param noScroll — If true, the browser will maintain its scroll position rather than scrolling to the top of the page after navigation
 * @param keepFocus — If true, the currently focused element will retain focus after navigation. Otherwise, focus will be reset to the body
 * @param state — The state of the new/updated history entry
 */
export const nav = ({
  locale,
  path,
  replaceState = false,
  noScroll,
  keepFocus,
  state,
}: NavProps) => {
  if (Array.from(path)[0] !== '/') {
    path = '/' + path;
  }

  goto(`/${locale + path}`, {
    replaceState,
    noscroll: noScroll,
    keepfocus: keepFocus,
    state,
  });
};
