import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const jsConfig = {
  input: 'src/core/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'DOMToPDF',
      globals: {
        jspdf: 'jspdf',
        'dom-to-svg': 'domToSvg',
        'svg2pdf.js': 'svg2pdf',
      },
    },
  ],
  external: ['jspdf', 'dom-to-svg', 'svg2pdf.js'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      rootDir: './src/core',
    }),
  ],
};

const dtsConfig = {
  input: 'src/core/index.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  external: ['jspdf', 'dom-to-svg', 'svg2pdf.js'],
  plugins: [dts({ tsconfig: './tsconfig.json' })],
};

export default [jsConfig, dtsConfig];
