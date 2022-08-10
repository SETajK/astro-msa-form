import { defineConfig } from "astro/config";
import turbolinks from "@astrojs/turbolinks";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import { astroImageTools } from "astro-imagetools";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    integrations: [turbolinks(), tailwind(), svelte(), astroImageTools, vue()],
    vite: {
        build: {
            emptyOutDir: true,
        },
        server: {
            open: false,
        },
        ssr: {
            noExternal: ["vue-multiselect"],
        },
    },
});
