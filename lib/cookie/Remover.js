"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Setter_1 = __importDefault(require("./Setter"));
class CookieRemover extends Setter_1.default {
    remove($key) {
        this.set($key, '', { expires: 0, domain: '' });
    }
}
exports.default = CookieRemover;
