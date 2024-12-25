import json from '@rollup/plugin-json'

// ---cut-start---
/** @type {import('rollup').RollupOptions[]} */
// ---cut-end---
export default [
	{
		input: 'src/main.js',
		output: [
			{
				file: 'out/iife-bundle.js',
				format: 'iife'
			},
			{
				file: 'out/cjs-bundle.js',
				format: 'cjs'
			},
      {
				file: 'out/umd-bundle.js',
				format: 'umd'
      },
      {
				file: 'out/es-bundle.js',
				format: 'es'
      }
		],
		plugins: [json()]
	}
];