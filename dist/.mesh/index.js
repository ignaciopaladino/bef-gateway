"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.subscribe = exports.execute = exports.getBuiltMesh = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const cache_localforage_1 = __importDefault(require("@graphql-mesh/cache-localforage"));
const custom_fetch_js_1 = __importDefault(require("../src/utils/custom-fetch.js"));
const graphql_1 = __importDefault(require("@graphql-mesh/graphql"));
const openapi_1 = __importDefault(require("@graphql-mesh/openapi"));
const transform_naming_convention_1 = __importDefault(require("@graphql-mesh/transform-naming-convention"));
const merger_stitching_1 = __importDefault(require("@graphql-mesh/merger-stitching"));
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const importedModule$0 = __importStar(require("./sources/shipping-backoffice-core/jsonSchemaBundle"));
const importedModule$1 = __importStar(require("./sources/rubik-api/jsonSchemaBundle"));
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".mesh/sources/shipping-backoffice-core/jsonSchemaBundle":
            return Promise.resolve(importedModule$0);
        case ".mesh/sources/rubik-api/jsonSchemaBundle":
            return Promise.resolve(importedModule$1);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.mesh', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = { "endpoint": "/api/query", "port": 8443, "cors": { "origin": "*" } };
function getMeshOptions() {
    return __awaiter(this, void 0, void 0, function* () {
        const pubsub = new utils_1.PubSub();
        const sourcesStore = rootStore.child('sources');
        const logger = new utils_2.DefaultLogger("🕸️  Mesh");
        const cache = new cache_localforage_1.default(Object.assign(Object.assign({}, {}), { importFn, store: rootStore.child('cache'), pubsub,
            logger }));
        const sources = [];
        const transforms = [];
        const additionalEnvelopPlugins = [];
        const sauronBackofficeApiTransforms = [];
        const rubikApiTransforms = [];
        const shippingBackofficeCoreTransforms = [];
        const additionalTypeDefs = [];
        const sauronBackofficeApiHandler = new graphql_1.default({
            name: "sauron-backoffice-api",
            config: { "endpoint": "http://internal.mercadolibre.com/internal/sauron-api/prod/query", "source": "./src/graphql/data-sauron-backoffice-api.graphql", "retry": 2, "timeout": 5000, "operationHeaders": { "Content-Type": "application/json", "accept-version": "2" } },
            baseDir,
            cache,
            pubsub,
            store: sourcesStore.child("sauron-backoffice-api"),
            logger: logger.child("sauron-backoffice-api"),
            importFn,
        });
        const rubikApiHandler = new openapi_1.default({
            name: "rubik-api",
            config: { "baseUrl": "https://team-api.furycloud.io", "source": "./src/json/data-rubik-api.json", "retry": 2, "timeout": 5000, "operationHeaders": { "Content-Type": "application/json", "accept-version": "2" } },
            baseDir,
            cache,
            pubsub,
            store: sourcesStore.child("rubik-api"),
            logger: logger.child("rubik-api"),
            importFn,
        });
        const shippingBackofficeCoreHandler = new openapi_1.default({
            name: "shipping-backoffice-core",
            config: { "baseUrl": "https://internal-api.mercadolibre.com", "source": "./src/json/data-shipping-backoffice-core.json", "retry": 2, "timeout": 5000, "operationHeaders": { "Content-Type": "application/json", "accept-version": "2" } },
            baseDir,
            cache,
            pubsub,
            store: sourcesStore.child("shipping-backoffice-core"),
            logger: logger.child("shipping-backoffice-core"),
            importFn,
        });
        sources[0] = {
            name: 'sauron-backoffice-api',
            handler: sauronBackofficeApiHandler,
            transforms: sauronBackofficeApiTransforms
        };
        sources[1] = {
            name: 'rubik-api',
            handler: rubikApiHandler,
            transforms: rubikApiTransforms
        };
        sources[2] = {
            name: 'shipping-backoffice-core',
            handler: shippingBackofficeCoreHandler,
            transforms: shippingBackofficeCoreTransforms
        };
        transforms[0] = new transform_naming_convention_1.default({
            apiName: '',
            config: { "mode": "wrap" },
            baseDir,
            cache,
            pubsub,
            importFn,
            logger,
        });
        const additionalResolvers = [];
        const merger = new merger_stitching_1.default({
            cache,
            pubsub,
            logger: logger.child('stitchingMerger'),
            store: rootStore.child('stitchingMerger')
        });
        return {
            sources,
            transforms,
            additionalTypeDefs,
            additionalResolvers,
            cache,
            pubsub,
            merger,
            logger,
            additionalEnvelopPlugins,
            get documents() {
                return [];
            },
            fetchFn: custom_fetch_js_1.default,
        };
    });
}
exports.getMeshOptions = getMeshOptions;
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltMesh,
        rawServeConfig: { "endpoint": "/api/query", "port": 8443, "cors": { "origin": "*" } },
    });
}
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
let meshInstance$;
function getBuiltMesh() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
exports.getBuiltMesh = getBuiltMesh;
const execute = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
