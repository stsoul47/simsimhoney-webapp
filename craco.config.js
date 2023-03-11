const {CracoAliasPlugin} = require('react-app-alias-ex');

const options = {}

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: options
    },
  ],
  webpack: {
    configure: (config, { env, paths }) => {
      config.module.rules.push({  /* 중요! unshift를 해야함. */
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    }
  } 
}