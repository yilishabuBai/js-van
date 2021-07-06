"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageEnabled = exports.cookieEnabled = void 0;
exports.cookieEnabled = navigator.cookieEnabled;
exports.storageEnabled = (function () {
    try {
        return !!window.localStorage;
    }
    catch (error) {
        return false;
    }
})();
