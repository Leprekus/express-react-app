"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const layout_1 = __importDefault(require("../app/layout"));
const app = (0, express_1.default)();
app.get('/*', (req, res) => {
    fileRo;
    const reactApp = (0, server_1.renderToString)(react_1.default.createElement(layout_1.default, null, "First Layout test"));
    return res.send(reactApp);
});
app.listen(3000, () => {
    console.log('server is running');
});
