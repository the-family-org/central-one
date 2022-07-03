import type { GetSession, Handle } from '@sveltejs/kit';
import { localeFromHooksHeaders } from '$lang/hooks-util';
import { parseCookie, getHeadersFromHooksEvent } from '$utils';

export const handle: Handle = async ({ event, resolve }) => {
  const [, lang] = event.url.pathname.split('/');
  const cookies = event.request.headers.get('cookie') || '';
  const theme = parseCookie(cookies, 'theme') || 'default';

  return resolve(event, {
    transformPage: ({ html }: { html: string }) =>
      html.replace(
        'lang="en" data-theme="default"',
        `lang="${lang}" data-theme="${theme}"`,
      ),
  });
};

export const getSession: GetSession = (event) => {
  const headers = getHeadersFromHooksEvent(event);
  const locale = localeFromHooksHeaders(headers);

  return {
    locale,
  };
};
