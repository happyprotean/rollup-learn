import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'

// ---cut-start---
/** @type {import('rollup').RollupOptions[]} */
// ---cut-end---
export default [
	{
		input: 'src/main.js',
		output: [
      {
				dir: 'dist',
				format: 'es',
      }
		],
		plugins: [json(), resolve()]
	}
];