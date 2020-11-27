module.exports = api => {
  const env = api.env();

  let dev = false;
  let modules;

  switch (env) {
    case 'docs':
    case 'test':
      return {
          presets: [
            '@babel/react',
            '@babel/preset-typescript',
            ['@babel/preset-env', {targets: {node: 'current'}}],
          ]
      }
    case 'umd-dev':
      dev = true;
      modules = false;
      break;
    case 'umd-prod':
    case 'esm':
      modules = false;
      break;
    case 'cjs':
    default:
      modules = 'commonjs';
  }

  return {
    presets: [
      [
        '@react-bootstrap',
        {
          dev,
          modules,
          removePropTypes: !dev,
        },
      ],
      '@babel/preset-typescript',
      ['@babel/preset-env', {targets: {node: 'current'}}],
    ],
    plugins: [env === 'test' && 'istanbul'].filter(Boolean),
  };
};
