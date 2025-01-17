const { getDefaultConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig({
  ...defaultConfig,
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs'],
  },
});
