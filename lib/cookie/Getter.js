"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookieGetter {
    get($key) {
        if (!document.cookie.length || document.cookie.indexOf(`${$key}=`) < 0) {
            return null;
        }
        let start = document.cookie.indexOf(`${$key}=`);
        start = start + $key.length + 1;
        let end = document.cookie.indexOf(';', start);
        if (end === -1) {
            end = document.cookie.length;
        }
        let result = document.cookie.substring(start, end);
        try {
            result = JSON.parse(result);
        }
        catch (error) {
            console.error(`js-van: 获取数据异常！\nkey: ${$key}, type: cookie\n${error}`);
            return null;
        }
        return result;
    }
}
exports.default = CookieGetter;
