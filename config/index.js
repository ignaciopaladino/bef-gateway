/* eslint-disable no-undef */
const env = process.env.NODE_ENV || "development";
const furyTestScope = process.env.FURY_IS_TEST_SCOPE || "false";
const scope = process.env.SCOPE || "test";

const config = (furyTestScope === "true") ? require("./cfg-" + scope) : require("./cfg-" + env);

module.exports = {
  config,
};
