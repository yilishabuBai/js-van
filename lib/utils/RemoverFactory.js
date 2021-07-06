"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Remover_1 = __importDefault(require("../cookie/Remover"));
const enum_1 = require("../enum");
const Remover_2 = __importDefault(require("../storage/Remover"));
class RemoverFactory {
    static getRemover($vanType) {
        let remover;
        switch ($vanType) {
            case enum_1.VanType.cookie:
                remover = new Remover_1.default();
                break;
            case enum_1.VanType.sessionStorage:
                remover = new Remover_2.default(window.sessionStorage);
                break;
            case enum_1.VanType.localStorage:
            default:
                remover = new Remover_2.default(window.localStorage);
                break;
        }
        return remover;
    }
}
exports.default = RemoverFactory;
