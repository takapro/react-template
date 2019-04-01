const path = require('path');

module.exports = (env, argv) => {
  const is_dev = argv.mode !== 'production';
  return {
    mode: is_dev ? 'development' : 'production',
    devtool: is_dev ? 'inline-source-map' : 'none',
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './public'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }] }
      ]
    }
  };
};
