const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'game',
          filename: 'remoteEntry.js',
          remotes: {
            commands: 'commands@http://localhost:3001/remoteEntry.js',
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
