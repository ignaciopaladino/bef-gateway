// eslint-disable-next-line no-unused-vars
// const { MeshContext } = require('@graphql-mesh/runtime');
// const { fetch } = require('@whatwg-node/fetch');
const { buildFlowStarterContext } = require('frontend-restclient');
// eslint-disable-next-line no-unused-vars
module.exports = (url, init, context) => {
    const conxtetBuild = buildFlowStarterContext();
    console.log(Object.assign({}, conxtetBuild));
    return Object.assign({}, conxtetBuild);
    /* Object.entries(conxtetBuild).map(arg => {
      const key = arg[0]; const value = arg[1];
      init.headers[key] = value;
    });
    console.log('paso! ----> ', init);
    return fetch(url, init); */
};
