const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

const watchOptions = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es', // 修改这里
  },
  plugins: [resolve(), commonjs()],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
};

const watcher = rollup.watch(watchOptions);

watcher.on('event', (event) => {
  if (event.code === 'START') {
    console.log('Rebuilding...');
  } else if (event.code === 'END') {
    console.log('Rebuild completed.');
  } else if (event.code === 'ERROR') {
    console.error('Error during rebuild:', event.error);
  }
});
