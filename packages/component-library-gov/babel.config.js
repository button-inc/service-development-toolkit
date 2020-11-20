const getConfig = require('../../scripts/babel.config');

module.exports = api => {
  const config = getConfig(api);
  return config;
};
