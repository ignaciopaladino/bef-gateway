const fs = require('fs');
const writeFile = (pathFile, jsonStr) => fs.writeFile(pathFile, jsonStr, 'utf-8', () => {
    const distPathFile = pathFile.replace('./src', './dist/src');
    fs.writeFile(distPathFile, jsonStr, 'utf-8', () => { });
});
const handlerService = (type, name, definitions, path) => {
    const isGraphQL = type === 'graphql';
    // const defsParsed = isGraphQL ? definitions : JSON.parse(definitions);
    // console.log(defsParsed);
    const pathFile = isGraphQL ? `./src/graphql/data-${name}.graphql` : `./src/json/data-${name}.json`;
    const urlType = isGraphQL ? 'endpoint' : 'baseUrl';
    writeFile(pathFile, definitions);
    return {
        [urlType]: path,
        source: pathFile,
    };
};
const generateSources = (sources) => sources.map(source => {
    const { name, type, path, definitions } = source;
    const operationHeaders = {
        "Content-Type": "application/json",
        "accept-version": "2",
    };
    let handler = {};
    if (type === 'openapi' || type === 'graphql') {
        handler[type] = handlerService(type, name, definitions, path);
    }
    else {
        handler[type] = { baseUrl: path };
    }
    handler[type] = Object.assign(Object.assign({}, handler[type]), { retry: 2, timeout: 5000, operationHeaders });
    return {
        name,
        handler
    };
});
module.exports = {
    generateSources
};
