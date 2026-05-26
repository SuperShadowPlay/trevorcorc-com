// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://trevorcorc.com',
    integrations: [mdx(), sitemap(), icon()],
    fonts: [
        {
            provider: fontProviders.google(),
            name: 'Faustina',
            cssVariable: '--font-heading',
            fallbacks: ['Georgia', 'serif'],
        },
        {
            provider: fontProviders.google(),
            name: 'Vazirmatn',
            cssVariable: '--font-body',
            fallbacks: ['system-ui', 'sans-serif'],
        },
        {
            provider: fontProviders.google(),
            name: 'IBM Plex Mono',
            cssVariable: '--font-mono',
            fallbacks: ['Courier New', 'monospace'],
        },
    ],
});
