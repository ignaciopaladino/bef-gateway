const { RestClient, buildFlowStarterContext } = require('frontend-restclient');

const { config } = require('../../config');
const { BEF_SR_HOST } = config;

const request = RestClient({
    'baseURL': BEF_SR_HOST,
    'timeout': 10000,
});

const getSchemasFromBEF = () => request.get('/gateway/nodes', {
        context: buildFlowStarterContext(),
      })
        .then((response) => response.data)
        .catch(err => err);

module.exports = {
  getSchemasFromBEF
}
