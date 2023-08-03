const { RestClient, buildFlowStarterContext } = require('frontend-restclient');

const { config } = require('../../config');
const { MONITOR_HOST } = config;

const request = RestClient({
    'baseURL': MONITOR_HOST,
    'timeout': 5000,
});

const saveMetricsConsume = (metric) => request
  .post("/charlie/metric", {
    data: metric,
    context: buildFlowStarterContext(),
  })
  .then((response) => response)
  .catch((err) => err);

module.exports = { saveMetricsConsume };