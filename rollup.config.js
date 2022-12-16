import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";

export default {
	external: ["react", "react-dom"],
	input: "src/index.ts",
	output: {
		dir: 'build',
		format: 'esm',
		sourcemap: true,
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript({
			tsconfig: "./tsconfig.json",
		}),
		scss({
			output: './build/bundle.css',
			outputStyle: 'compressed',
		}),
	],
};