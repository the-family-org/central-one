import type { RequestEvent } from '@sveltejs/kit';

/**
 * ### It is to get the headers from the Svelte hooks event.
 *
 * **Example**
 * ```ts
 * // hooks.ts
 * import type { GetSession } from '@sveltejs/kit';
 * import { getHeadersFromHooksEvent } from '$utils';
 *
 * export const getSession: GetSession = (event) => {
 *  const headers = getHeadersFromHooksEvent(event);
 *  // ...
 * };
 *```
 *
 * @param event The request event.
 * @returns The headers.
 */
export const getHeadersFromHooksEvent = (event: RequestEvent) => {
  const headers: Record<string, string> = {};

  event.request.headers.forEach((value, key) => (headers[key] = value));

  return headers;
};
