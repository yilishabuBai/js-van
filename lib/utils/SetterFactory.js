"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Setter_1 = __importDefault(require("../cookie/Setter"));
const enum_1 = require("../enum");
const Setter_2 = __importDefault(require("../storage/Setter"));
class SetterFactory {
    static getSetter($vanType) {
        let setter;
        switch ($vanType) {
            case enum_1.VanType.cookie:
                setter = new Setter_1.default();
                break;
            case enum_1.VanType.sessionStorage:
                setter = new Setter_2.default(window.sessionStorage);
                break;
            case enum_1.VanType.localStorage:
            default:
                setter = new Setter_2.default(window.localStorage);
                break;
        }
        return setter;
    }
}
exports.default = SetterFactory;
