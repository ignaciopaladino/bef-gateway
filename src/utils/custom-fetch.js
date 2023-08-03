// eslint-disable-next-line no-undef
const env = process.env.NODE_ENV || "development";
const { fetch } = require('@whatwg-node/fetch');
const { buildFlowStarterContext } = require('frontend-restclient');

module.exports = (url, init) => {
  let fetchURL = url;
  if(env === 'development' && url.indexOf('internal.mercadolibre.com') !== -1) {
    fetchURL = url.replace('http://internal.mercadolibre.com/', 'https://internal-api.mercadolibre.com/');
  }
  const conxtetBuild = buildFlowStarterContext();
  Object.entries(conxtetBuild).map(arg => {
    const key = arg[0]; const value = arg[1];
    init.headers[key] = value;
  });
  return fetch(fetchURL, init);
};
