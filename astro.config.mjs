import { defineConfig } from 'astro/config';
import turbolinks from '@astrojs/turbolinks';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
    integrations: [turbolinks(), tailwind(), svelte(), astroImageTools],
    vite: {
        build: {
            emptyOutDir: true,
        },
    },
});
