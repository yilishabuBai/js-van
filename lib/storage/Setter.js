"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageSetter {
    constructor($storage) {
        this.storage = null;
        this.storage = $storage;
    }
    set($key, $value, $options = { expires: '', domain: '' }) {
        const expires = parseInt($options.expires.toString());
        const data = JSON.stringify({
            value: $value,
            expires: !isNaN(expires)
                ? new Date(Date.now() + parseInt($options.expires.toString())).toUTCString()
                : ''
        });
        if (this.storage) {
            this.storage.setItem($key, data);
        }
    }
}
exports.default = StorageSetter;
