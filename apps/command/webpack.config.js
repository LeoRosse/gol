const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = (_, argv) => {
  const pathDomain =
    argv.mode === 'development' ? 'http://localhost:3002/' : 'https://turborepo-game-of-life-commands.vercel.app/';
  return {
    output: {
      publicPath: pathDomain,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
      port: 3002,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'commands',
        filename: 'remoteEntry.js',
        exposes: {
          './Commands': './src/App',
        },
        shared: {
          ...deps,
          models: {
            singleton: true,
          },
          'business-logic': {
            singleton: true,
          },
          store: {
            singleton: true,
          },
          tsconfig: {
            singleton: true,
          },
          ui: {
            singleton: true,
          },
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
    ],
  };
};
