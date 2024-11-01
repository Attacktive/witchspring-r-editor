import type { CompileOptions } from "svelte/compiler";
import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const compilerOptions: CompileOptions = {
	hmr: !process.env.VITEST
};

export default defineConfig({
	test: {
		environment: "jsdom",
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	plugins: [svelte({ compilerOptions })],
	resolve: {
		conditions: ["browser"]
	}
});
