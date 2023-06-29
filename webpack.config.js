const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
const srcPath = (...filePath) => path.resolve('lib', ...filePath)

module.exports = {
  entry: './lib/index.js',
  mode: 'development',
  output: {
    filename: './bundle.js',
    library: 'kqed-common',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    path: path.resolve(__dirname, "dist")
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              import: true,
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[path]__[name]__[local]',
                localIdentContext: srcPath('styles')
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  srcPath('styles')
                ]
              }
            }
          },

        ]
      },
    ]
  },
  resolve: {
    symlinks: false,
    alias: {
      lib: srcPath(),
      styles: srcPath('styles'),
    },
    extensions: ['.*', '.js', '.jsx', '.json']
  }
}