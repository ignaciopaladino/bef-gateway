const writeYamlFile = require('write-yaml-file');
const { getSchemasFromBEF } = require('../services/storage');
const { generateSources } = require('./generate-sources');
const { transforms, serve, customFetch } = require('../configs');
const reloadConfigMesh = () => {
    try {
        getSchemasFromBEF().then((response) => {
            const sources = generateSources(response);
            writeYamlFile('.meshrc.yaml', { serve, sources, customFetch, transforms }).then(() => {
                console.log('Config file ready!');
            });
        })
            .catch(err => {
            throw new Error(`Request error: ${JSON.stringify(err)}`);
        });
    }
    catch (err) {
        throw new Error(`Execution error: ${JSON.stringify(err)}`);
    }
};
module.exports = {
    reloadConfigMesh,
};
