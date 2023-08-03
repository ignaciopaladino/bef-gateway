var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { CacheClient, CacheConfiguration } = require('node-melitk-cache');
const cacheName = 'registry';
const ttl = 120;
const getCacheKey = (key) => __awaiter(this, void 0, void 0, function* () {
    try {
        const cacheClientInstance = new CacheClient(new CacheConfiguration({
            cacheName,
        }));
        console.log(cacheName);
        const cacheResponse = yield cacheClientInstance.get(key);
        return cacheResponse;
    }
    catch (e) {
        return e;
    }
});
const setCacheKey = (key, value) => __awaiter(this, void 0, void 0, function* () {
    try {
        const cacheClientInstance = new CacheClient(new CacheConfiguration({
            cacheName,
            ttlSeconds: ttl || null
        }));
        // You can use ttl in CacheClient constructor or in set's operation
        const cacheResponse = yield cacheClientInstance.set(key, value);
        return cacheResponse;
    }
    catch (e) {
        return e;
    }
});
const deleteCacheKey = (key) => __awaiter(this, void 0, void 0, function* () {
    try {
        const cacheClientInstance = new CacheClient(new CacheConfiguration({
            cacheName,
        }));
        const cacheResponse = yield cacheClientInstance.delete(key);
        return cacheResponse;
    }
    catch (e) {
        return e;
    }
});
module.exports = {
    getCacheKey,
    setCacheKey,
    deleteCacheKey
};
