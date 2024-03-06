import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.js',
  output: {
    file: 'dist/gamepad-web.js',
    format: 'es', // 修改这里
  },
  plugins: [],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
});
