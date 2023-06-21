/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path')
const libPath = (...filePath) => path.resolve('lib', ...filePath)

const config = {
  stories: [
    '../lib/**/*.stories.mdx',
    '../lib/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // might need to integrate postCSS?
  ],
  // use static dirs for setting path to any assets
  // staticDirs:[srcPath('assets')],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { 'runtime': 'automatic' }]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
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
              importLoaders: 2, 
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, 
              sassOptions: {
                includePaths: [
                  libPath('styles')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      }
    )
    config.resolve = {
      alias: {
        lib: path.resolve(__dirname, '../lib'),
      },
      extensions: ['.*', '.js', '.jsx', '.json']
    }
    return config
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
