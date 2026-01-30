import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
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
      declaration: true,
      declarationDir: './dist',
      declarationMap: false,
      rootDir: './src',
    }),
  ],
};
