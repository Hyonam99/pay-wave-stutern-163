import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import browserslistToEsbuild from 'browserslist-to-esbuild'
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	// depending on your application, base can also be "/"
	base: "",
	build: {
		// --> ["chrome79", "edge92", "firefox91", "safari13.1"]
		target: browserslistToEsbuild([
			'>0.2%',
			'not dead',
			'not op_mini all'
		]), 
	},
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			babel: {
				plugins: ["@emotion/babel-plugin"],
			},
		}),
		viteTsconfigPaths(),
	],
	server: {
		// this ensures that the browser opens upon server start
		open: true,
		// this sets a default port to 3163
		port: 3163,
	},
});
