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
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1',
        permanent: false,
      },
    ]
  },
};
