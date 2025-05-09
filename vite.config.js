import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/',

    build: {
        emptyOutDir: true,
        target: 'esnext',
        
        outDir: 'docs',

        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                onboarding: resolve(__dirname, 'onboarding/index.html'),
                archive: resolve(__dirname, 'archive/index.html'),
            },
        },
    },
})