import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  sourcemap: true,
  minify: false,
  target: 'esnext',
  outDir: 'dist',
  platform: 'browser',
  keepNames: true,
  treeshake: {
    preset: 'recommended',
  },
});