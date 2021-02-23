module.exports = {
  webpack: (config, { isServer }) => {
    const newConfig = { ...config };
    if (!isServer) {
      newConfig.node = {
        fs: 'empty',
      };
    }
    return newConfig;
  },
};
