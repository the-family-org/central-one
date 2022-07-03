import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    vite: {
      // server: {
      //   https: {
      //     key: readFileSync(join(__dirname, 'secrets', 'private-key.pem')),
      //     cert: readFileSync(
      //       join(__dirname, 'secrets', 'public-certificate.pem'),
      //     ),
      //   },
      // },
      resolve: {
        alias: {
          $modules: join(__dirname, 'src', 'modules'),
          $shared: join(__dirname, 'src', 'shared'),
          $utils: join(__dirname, 'src', 'shared', 'utils'),
          $components: join(__dirname, 'src', 'shared', 'components'),
          $icons: join(__dirname, 'src', 'shared', 'icons'),
          $lang: join(__dirname, 'src', 'shared', 'i18n'),
          $config: join(__dirname, 'src', 'shared', 'config'),
          $stores: join(__dirname, 'src', 'shared', 'stores'),
          $types: join(__dirname, 'src', 'shared', 'types'),
        },
      },
    },
  },
};

export default config;
