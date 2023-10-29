import NodeCache from 'node-cache';

const cache = new NodeCache();

class Cache {
    get(key: string): any {
        return cache.get(key);
    }

    set(key: string, value: any, ttlSeconds: number): void {
        cache.set(key, value, ttlSeconds);
    }

    del(key: string): void {
        cache.del(key);
    }
}

export default new Cache();
