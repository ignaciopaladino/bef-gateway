require('supertest');
const fs = require('fs-extra');

const { generateSources } = require('../src/utils/generate-sources');

describe('generateSources test', async () => {
    it('should return the expected object and create file configuration', async () => {
        const sources = [
            {
                name: 'data1',
                type: 'openapi',
                path: 'https://example.com/openapi',
                definitions: `{
                    "openapi": "3.0.0",
                    "info": {
                        "version": "1.0.0",
                        "title": "Simple API"
                    },
                    "paths": {}
                }`
            },
            {
                name: 'data2',
                type: 'graphql',
                path: 'https://example.com/query',
                definitions: `type ShippingCosts {
                    buyerCosts: UserCosts
                    sellerCosts: UserCosts
                    currencyID: String!
                }`
            },
            {
                name: 'data3',
                type: 'rest',
                path: 'https://example.com/rest'
            }
        ];
        const expected = [
            {
                name: 'data1',
                handler: {
                    openapi: {
                        baseUrl: 'https://example.com/openapi',
                        source: './src/json/data-data1.json',
                        retry: 2,
                        timeout: 5000,
                        operationHeaders: { "Content-Type": "application/json", "accept-version": "2" }
                    }
                }
            },
            {
                name: 'data2',
                handler: {
                    graphql: {
                        endpoint: 'https://example.com/query',
                        source: './src/graphql/data-data2.graphql',
                        retry: 2,
                        timeout: 5000,
                        operationHeaders: { "Content-Type": "application/json", "accept-version": "2" },
                    },
                },
            },
            {
                name: 'data3',
                handler: {
                    rest: {
                        baseUrl: 'https://example.com/rest',
                        retry: 2,
                        timeout: 5000,
                        operationHeaders: { "Content-Type": "application/json", "accept-version": "2" },
                    },
                },
            }
        ];
        const result = generateSources(sources);
        expect(result).toEqual(expected);
        const pathFile = './src/json/data-data1.json';
        const content = await fs.readFile(pathFile, 'utf-8');
        expect(content).toEqual(sources[0].definitions);
    });
});
