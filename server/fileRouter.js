"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const layout_1 = __importDefault(require("../app/layout"));
const path_1 = __importDefault(require("path"));
const server_1 = require("react-dom/server");
const fs_1 = __importDefault(require("fs"));
const process_1 = require("process");
function fileRouter(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const CWD = (0, process_1.cwd)();
        const pathname = req.path;
        const childrenPath = path_1.default.join(CWD, 'app', pathname, 'page.js').toString();
        const dirExists = fs_1.default.existsSync(childrenPath);
        if (!dirExists) {
            const App = (0, server_1.renderToPipeableStream)(react_1.default.createElement(layout_1.default, null, "404 not found"));
            return App.pipe(res);
        }
        try {
            const Children = yield Promise.resolve(`${childrenPath}`).then(s => __importStar(require(s)));
            const App = (0, server_1.renderToPipeableStream)(react_1.default.createElement(layout_1.default, null, react_1.default.createElement((_a = Children.default) !== null && _a !== void 0 ? _a : Children.page)));
            App.pipe(res);
        }
        catch (error) {
            const App = (0, server_1.renderToPipeableStream)(react_1.default.createElement(layout_1.default, null,
                "500 internal server error ",
                error.message));
            App.pipe(res);
        }
        finally {
            next();
        }
    });
}
exports.default = fileRouter;
