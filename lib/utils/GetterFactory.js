"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Getter_1 = __importDefault(require("../cookie/Getter"));
const VanType_1 = __importDefault(require("../enum/VanType"));
const Getter_2 = __importDefault(require("../storage/Getter"));
class GetterFactory {
    static getGetter($vanType) {
        let getter;
        switch ($vanType) {
            case VanType_1.default.cookie:
                getter = new Getter_1.default();
                break;
            case VanType_1.default.sessionStorage:
                getter = new Getter_2.default(window.sessionStorage);
                break;
            case VanType_1.default.localStorage:
            default:
                getter = new Getter_2.default(window.localStorage);
                break;
        }
        return getter;
    }
}
exports.default = GetterFactory;
