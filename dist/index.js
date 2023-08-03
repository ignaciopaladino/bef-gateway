"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const apollo_server_express_1 = require("apollo-server-express");
const fs_1 = __importDefault(require("fs"));
const _mesh_1 = require("./.mesh");
const reload_config_1 = require("./src/utils/reload-config");
const metrics_1 = require("./src/utils/metrics");
const generate_definitions_1 = require("./src/utils/generate-definitions");
const meshHTTP = (0, _mesh_1.createBuiltMeshHTTPHandler)();
const port = 8080;
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use(router);
router.use((0, body_parser_1.json)());
router.get("/ping", (req, res) => {
    return res.status(200).send("pong");
});
router.get("/reload-config", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, reload_config_1.reloadConfigMesh)();
    return res.status(200).send("ok!");
}));
router.get("/api/query", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield meshHTTP(req, res);
    return res.send(response);
}));
router.post("/api/query", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, metrics_1.saveMetric)(req);
    const response = yield meshHTTP(req, res);
    return res.send(response);
}));
router.get("/schema", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = fs_1.default.readFileSync('./.mesh/schema.graphql');
    const { definitions } = (0, apollo_server_express_1.gql) `${schema}`;
    const parsedSchema = (0, generate_definitions_1.generateInfoFromSchema)(definitions);
    return res.status(200).send(Object.assign({}, parsedSchema));
}));
router.all("*", (req, res) => {
    return res.status(404).send("404 - Not found!");
});
app.listen(port, () => {
    console.log(fs_1.default.readFileSync('./terminal-log.txt').toString());
    console.log(`🚀 Server start in port: ${port}!`);
});
