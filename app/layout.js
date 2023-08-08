"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Layout({ children }) {
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("link", { rel: "stylesheet", href: "global.css" }),
        react_1.default.createElement("link", { rel: "stylesheet", href: "output.css" }),
        react_1.default.createElement("meta", { charSet: "UTF-8" }),
        react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        react_1.default.createElement("title", null, "My Social Media Clone"),
        react_1.default.createElement("body", null,
            react_1.default.createElement("h1", { className: 'text-red-500' }, "Test"),
            children)));
}
exports.default = Layout;
