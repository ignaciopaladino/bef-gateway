 module.exports = {
  transforms: [
    {
      namingConvention: {
          mode: "wrap",
          //typeNames: "camelCase",
          // enumValues: "upperCase",
          // fieldNames: "camelCase",
          //fieldArgumentNames: "camelCase"
      }
    }
  ],
  serve: {
    // hostname: "https://test.bef-gateway.melioffice.com",
    endpoint: "/api/query",
    port: 8443,
    cors: {
      origin: "*",
    }
  },
  customFetch: "./src/utils/custom-fetch.js",
 }