// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'production') {
    /* istanbul ignore next */
    require('newrelic');
}
const { reloadConfigMesh } = require('./utils/reload-config');
reloadConfigMesh();
