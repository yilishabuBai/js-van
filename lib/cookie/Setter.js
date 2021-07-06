"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookieSetter {
    set($key, $value, $options = { expires: '', domain: '' }) {
        const value = JSON.stringify($value);
        let cookie = `${$key}=${value};`;
        const expires = parseInt($options.expires.toString());
        if (!isNaN(expires)) {
            const newExpires = new Date(Date.now() + expires);
            cookie += `expires=${newExpires.toUTCString()};`;
        }
        if ($options.domain) {
            cookie += `domain=${$options.domain};path=/;`;
        }
        document.cookie = cookie;
    }
}
exports.default = CookieSetter;
