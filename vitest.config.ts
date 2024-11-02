import type { CompileOptions } from "svelte/compiler";
import type { PluginOption } from "vite";
import { resolve } from "path";
import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const compilerOptions: CompileOptions = {
	hmr: !process.env.VITEST
};

const plugins: PluginOption[] = [svelte({ compilerOptions })];

export default defineConfig({
	test: {
		environment: "jsdom",
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	plugins,
	resolve: {
		conditions: ["browser"],
		alias: {
			"$": resolve(__dirname, "./src"),
			"$lib": resolve(__dirname, "./src/lib")
		}
	}
});
