"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnabledChecker_1 = require("./EnabledChecker");
let localStorage = {};
let sessionStorage = {};
function init() {
    Object.defineProperty(window, 'localStorage', {
        value: {
            setItem($key, $value) {
                localStorage[$key] = $value;
            },
            getItem($key) {
                return localStorage[$key];
            },
            removeItem($key) {
                delete localStorage[$key];
            },
            clear() {
                localStorage = {};
            }
        }
    });
    Object.defineProperty(window, 'sessionStorage', {
        value: {
            setItem($key, $value) {
                sessionStorage[$key] = $value;
            },
            getItem($key) {
                return sessionStorage[$key];
            },
            removeItem($key) {
                delete sessionStorage[$key];
            },
            clear() {
                sessionStorage = {};
            }
        }
    });
}
if (!EnabledChecker_1.storageEnabled) {
    init();
}
