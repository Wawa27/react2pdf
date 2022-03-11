"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var puppeteer_1 = __importDefault(require("puppeteer"));
var server_1 = __importDefault(require("react-dom/server"));
var React2Pdf = /** @class */ (function () {
    function React2Pdf() {
        this.pages = [];
    }
    React2Pdf.prototype.addPage = function (div) {
        this.pages.push((0, jsx_runtime_1.jsxs)("div", __assign({ style: { "pageBreakAfter": "always" } }, { children: [" ", div, " "] }), "page" + this.pages.length));
    };
    React2Pdf.prototype.buildDocument = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, document, html;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, puppeteer_1["default"].launch()];
                    case 1:
                        _a.browser = _b.sent();
                        return [4 /*yield*/, this.browser.newPage()];
                    case 2:
                        document = _b.sent();
                        html = server_1["default"].renderToString((0, jsx_runtime_1.jsx)("div", { children: this.pages }, void 0));
                        return [4 /*yield*/, document.setContent(html)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, document];
                }
            });
        });
    };
    React2Pdf.prototype.clear = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // clear pages and close browser
                        this.pages.length = 0;
                        return [4 /*yield*/, ((_a = this.browser) === null || _a === void 0 ? void 0 : _a.close())];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    React2Pdf.prototype.render = function (path, format) {
        return __awaiter(this, void 0, void 0, function () {
            var document;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buildDocument()];
                    case 1:
                        document = _a.sent();
                        return [4 /*yield*/, document.pdf({ path: path, format: format })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.clear()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    React2Pdf.prototype.renderToStream = function (format, options) {
        return __awaiter(this, void 0, void 0, function () {
            var document, pdfStream;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.buildDocument()];
                    case 1:
                        document = _a.sent();
                        return [4 /*yield*/, document.createPDFStream({ format: format })];
                    case 2:
                        pdfStream = _a.sent();
                        if (options === null || options === void 0 ? void 0 : options.autoclose) {
                            pdfStream.on("close", function () { return _this.close(); });
                        }
                        return [2 /*return*/, pdfStream];
                }
            });
        });
    };
    React2Pdf.prototype.close = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                (_a = this.browser) === null || _a === void 0 ? void 0 : _a.close();
                return [2 /*return*/];
            });
        });
    };
    return React2Pdf;
}());
exports["default"] = React2Pdf;
//# sourceMappingURL=React2Pdf.js.map