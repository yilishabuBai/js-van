"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VanType;
(function (VanType) {
    VanType[VanType["localStorage"] = 1] = "localStorage";
    VanType[VanType["sessionStorage"] = 2] = "sessionStorage";
    VanType[VanType["cookie"] = 4] = "cookie";
})(VanType || (VanType = {}));
exports.default = VanType;
