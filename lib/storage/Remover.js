"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageRemover {
    constructor($storage) {
        this.storage = null;
        this.storage = $storage;
    }
    remove($key) {
        var _a;
        (_a = this.storage) === null || _a === void 0 ? void 0 : _a.removeItem($key);
    }
}
exports.default = StorageRemover;
