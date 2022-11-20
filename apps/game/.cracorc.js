const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = ({ env }) => ({
  webpack: {
    configure: (webpackConfig) => {
      const pathDomain =
        env === 'development' ? 'http://localhost:3000/' : 'https://turborepo-game-of-life.vercel.app/';
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
          name: 'game',
          filename: 'remoteEntry.js',
          remotes: {
            commands: `commands@${
              env === 'development' ? 'http://localhost:3001/' : 'https://turborepo-game-of-life-commands.vercel.app/'
            }remoteEntry.js`,
          },
          shared: {
            ...deps,
            board: {
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
      ],
    },
  },
});
