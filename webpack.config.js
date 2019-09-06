const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('lib'),
    filename: 'react-avataaars.js',
    libraryTarget: 'umd',
    library: 'ReactAvataaars',
    globalObject: `typeof self !== 'undefined' ? self : this`,
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  externals: {
    react: {
      root: 'React',
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  optimization: {
    minimize: true
  }
};
