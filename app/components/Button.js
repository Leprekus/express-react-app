"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Button() {
    return (react_1.default.createElement("button", { className: 'text-red-500' }, "Button"));
}
exports.default = Button;
