"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Setter_1 = __importDefault(require("../cookie/Setter"));
const VanType_1 = __importDefault(require("../enum/VanType"));
const Setter_2 = __importDefault(require("../storage/Setter"));
class SetterFactory {
    static getSetter($vanType) {
        let setter;
        switch ($vanType) {
            case VanType_1.default.cookie:
                setter = new Setter_1.default();
                break;
            case VanType_1.default.sessionStorage:
                setter = new Setter_2.default(window.sessionStorage);
                break;
            case VanType_1.default.localStorage:
            default:
                setter = new Setter_2.default(window.localStorage);
                break;
        }
        return setter;
    }
}
exports.default = SetterFactory;
