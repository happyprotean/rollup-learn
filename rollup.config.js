import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'

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
      },
    ],
    external: ['dayjs'],
    plugins: [
      json(),
      resolve(),
      alias({
        entries: [{ find: 'utils', replacement: 'src/util.js' }],
      }),
    ],
  },
]
