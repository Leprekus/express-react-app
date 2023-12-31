"use strict";
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
const express_1 = __importDefault(require("express"));
const fileRouter_1 = __importDefault(require("./fileRouter"));
const path_1 = __importDefault(require("path"));
const process_1 = require("process");
const app = (0, express_1.default)();
const publicDir = path_1.default.join((0, process_1.cwd)(), 'public');
app.use(express_1.default.static(publicDir));
app.get('/*', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, fileRouter_1.default)(req, res, next);
}));
app.listen(3000, () => {
    console.log('server is running');
});
