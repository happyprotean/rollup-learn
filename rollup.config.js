import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

// ---cut-start---
/** @type {import('rollup').RollupOptions[]} */
// ---cut-end---
export default [
	{
		input: 'src/main.js',
		output: [
      {
				dir: 'dist',
				format: 'es'
      }
		],
		plugins: [json()]
	}
];