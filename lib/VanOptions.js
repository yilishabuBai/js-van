"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VanOptions {
    constructor($type, $expires = '', $domain = '') {
        this.type = $type;
        this.expires = $expires;
        this.domain = $domain;
    }
}
exports.default = VanOptions;
