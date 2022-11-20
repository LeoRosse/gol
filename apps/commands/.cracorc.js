const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = ({ env }) => ({
  webpack: {
    configure: (webpackConfig) => {
      const pathDomain =
        env === 'development' ? 'http://localhost:3001/' : 'https://turborepo-game-of-life-commands.vercel.app/';
      return {
        ...webpackConfig,
        output: {
          ...webpackConfig.output,
          publicPath: pathDomain,
        },
      };
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'commands',
          filename: 'remoteEntry.js',
          exposes: {
            './Commands': './src/App',
          },
          shared: {
            ...deps,
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
      ],
    },
  },
});
