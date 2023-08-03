import express from "express";
import { json } from "body-parser";
import { gql } from "apollo-server-express";
import fs from "fs";

import { createBuiltMeshHTTPHandler } from './.mesh';
import { reloadConfigMesh } from './src/utils/reload-config';
import { saveMetric } from './src/utils/metrics';
import { generateInfoFromSchema } from './src/utils/generate-definitions';

const meshHTTP = createBuiltMeshHTTPHandler();

const port = 8080;
const app = express();
const router = express.Router();

app.use(router);
router.use(json());
  
router.get("/ping", (req, res) => {
    return res.status(200).send("pong");
});

router.get("/reload-config", async (req, res) => {
    await reloadConfigMesh();
    return res.status(200).send("ok!");
});

router.get("/api/query", async (req: any , res: any) => {
    const response = await meshHTTP(req, res);
    return res.send(response);
});

router.post("/api/query", async (req: any, res: any) => {
    saveMetric(req);
    const response = await meshHTTP(req, res);
    return res.send(response);
});

router.get("/schema", async (req, res) => {
    const schema = fs.readFileSync('./.mesh/schema.graphql');
    const { definitions } = gql`${schema}`;
    const parsedSchema = generateInfoFromSchema(definitions);
    return res.status(200).send({ ...parsedSchema });
});

router.all("*", (req, res) => {
    return res.status(404).send("404 - Not found!");
});

app.listen(port, () => {
    console.log(fs.readFileSync('./terminal-log.txt').toString());
    console.log(`🚀 Server start in port: ${port}!`);
});
