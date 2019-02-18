const path = require('path');

module.exports = (env, argv) => {
  const is_dev = argv.mode === 'development';
  return {
    devtool: is_dev ? 'source-map' : 'none',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './public/js' + (is_dev ? '-dev' : ''))
    }
  };
};
