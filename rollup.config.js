// // rollup.config.js
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';
import packageJson from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    {
      react: 'react',
      'react-dom': 'react-dom',
      classnames: 'classnames',
    },
  ],
  plugins: [
    cleaner({
      targets: ['./lib'],
    }),
    peerDepsExternal(),
    url(),
    terser(),
    // resolve(),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    typescript({
      exclude: ['**/*.story.tsx', '**/*.spec.tsx'],
      clean: true,
      rollupCommonJSResolveHack: true,
    }),
    babel({
      babelrc: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: /\**node_modules\**/,
    }),
    commonjs({
      include: /\**node_modules\**/,
    }),
    postcss({
      extensions: ['.css', '.scss', '.less'],
      use: ['sass', ['less', { javascriptEnabled: true }]],
    }),
  ],
};
