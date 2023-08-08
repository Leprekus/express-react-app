"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function NotFound() {
    const divStyle = {
        minWidth: '100vw',
        minHeight: '100vh',
        background: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("link", { rel: "stylesheet", href: "global.css" }),
        react_1.default.createElement("link", { rel: "stylesheet", href: "output.css" }),
        react_1.default.createElement("body", { style: divStyle },
            react_1.default.createElement("h2", { style: { fontSize: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontFamily: 'sans-serif' } },
                "404 | ",
                react_1.default.createElement("span", { style: { fontSize: '1rem' } }, "Not found")))));
}
exports.default = NotFound;
