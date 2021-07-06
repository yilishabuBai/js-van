"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookieGetter {
    constructor($storage) {
        this.storage = null;
        this.storage = $storage;
    }
    get($key) {
        if (!this.storage || !this.storage.getItem) {
            return null;
        }
        let result = this.storage.getItem($key);
        if (!result) {
            return null;
        }
        try {
            result = JSON.parse(result);
        }
        catch (error) {
            console.error(`js-van: 获取数据异常！\nkey: ${$key}\n${error}`);
            return null;
        }
        const time = result.expires ? new Date(result.expires) : Infinity;
        if (time <= Date.now()) {
            this.storage.removeItem($key);
            return null;
        }
        return result.value;
    }
}
exports.default = CookieGetter;
