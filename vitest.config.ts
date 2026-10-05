import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';
import type { CompileOptions } from 'svelte/compiler';
import { defineConfig } from 'vitest/config';

const compilerOptions: CompileOptions = {
	hmr: !process.env.VITEST
};

const plugins = [svelte({ compilerOptions })];

export default defineConfig({
	test: {
		environment: 'jsdom',
		setupFiles: ['src/setup-tests.ts'],
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	plugins,
	resolve: {
		conditions: ['browser'],
		alias: {
			$: resolve(import.meta.dirname, './src'),
			$lib: resolve(import.meta.dirname, './src/lib')
		}
	}
});
