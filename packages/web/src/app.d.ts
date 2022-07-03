/// <reference types="@sveltejs/kit" />

type Locales = import('./shared/i18n/i18n-types').Locales;

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}

  interface Session {
    // isLogged: boolean;
    locale?: Locales;
  }

  // interface Stuff {}
}
