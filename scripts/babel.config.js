module.exports = api => {
  const env = api.env();

  let dev = false;
  let modules;

  switch (env) {
    case 'docs':
    case 'test':
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
    ],
    plugins: [env === 'test' && 'istanbul'].filter(Boolean),
  };
};
