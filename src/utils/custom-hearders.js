// eslint-disable-next-line no-unused-vars
// const { MeshContext } = require('@graphql-mesh/runtime');
// const { fetch } = require('@whatwg-node/fetch');
const { buildContext } = require('frontend-restclient');
const YAML = require('yaml');

// eslint-disable-next-line no-unused-vars
module.exports = (config) => {
  console.log(config);
  const { context } = config;
  const { req } = context;
  const headers = { 'Content-Type': 'application/json' };
  const conxtetBuild = buildContext(req);
  // const conxtetBuild = buildFlowStarterContext();
  Object.entries(conxtetBuild).map(arg => {
    const key = arg[0]; const value = arg[1];
    headers[key] = value;
  });
  // console.log(JSON.stringify(headers));
  const headersToYAML = YAML.stringify(headers).trimEnd();
  console.log(headersToYAML);
  return headersToYAML;
  /* Object.entries(conxtetBuild).map(arg => {
    const key = arg[0]; const value = arg[1];
    init.headers[key] = value;
  });
  console.log('paso! ----> ', init);
  return fetch(url, init); */ 
};
