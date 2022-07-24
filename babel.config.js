module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@components': './src/presentation/components',
        '@pages': './src/presentation/pages',
        '@theme-global': './src/presentation/theme',
        '@routes': './src/mainlayer/routes/',
        '@providers': './src/presentation/provider',
        components: './src/presentation/components',
        src: './src',
      },
    }],
    'react-native-reanimated/plugin',
  ],
};
