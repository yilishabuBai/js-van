"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.get = exports.set = void 0;
const VanOptions_1 = __importDefault(require("./VanOptions"));
const enum_1 = require("./enum");
const SetterFactory_1 = __importDefault(require("./utils/SetterFactory"));
const GetterFactory_1 = __importDefault(require("./utils/GetterFactory"));
const RemoverFactory_1 = __importDefault(require("./utils/RemoverFactory"));
function set($key, $value, $options) {
    const options = Object.assign(new VanOptions_1.default(enum_1.VanType.localStorage), $options);
    for (const key in enum_1.VanType) {
        if (isNaN(parseInt(key))) {
            const type = enum_1.VanType[key];
            if (type && options.type) {
                const setter = SetterFactory_1.default.getSetter(type);
                setter.set($key, $value, { expires: options.expires, domain: options.domain });
            }
        }
    }
}
exports.set = set;
function get($key, $options) {
    const options = Object.assign(new VanOptions_1.default(enum_1.VanType.localStorage), $options);
    for (const key in enum_1.VanType) {
        if (isNaN(parseInt(key))) {
            const type = enum_1.VanType[key];
            if (type && options.type) {
                const getter = GetterFactory_1.default.getGetter(type);
                return getter.get($key);
            }
        }
    }
}
exports.get = get;
function remove($key, $options) {
    const options = Object.assign(new VanOptions_1.default(enum_1.VanType.localStorage), $options);
    for (const key in enum_1.VanType) {
        if (isNaN(parseInt(key))) {
            const type = enum_1.VanType[key];
            if (type && options.type) {
                const getter = RemoverFactory_1.default.getRemover(type);
                getter.remove($key);
            }
        }
    }
}
exports.remove = remove;
