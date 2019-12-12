import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'connect',
  outputTargets: [
    {
      type: 'dist',
      dir: 'component-dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      baseUrl: '/webview',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,jpg,jpeg}'
        ],
      }
    }
  ],
  plugins: [
    sass(),
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.scss'
};
