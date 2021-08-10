"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _React2Pdf_instances, _React2Pdf_browser, _React2Pdf_pages, _React2Pdf_buildDocument, _React2Pdf_clear;
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const puppeteer_1 = __importDefault(require("puppeteer"));
const server_1 = __importDefault(require("react-dom/server"));
class React2Pdf {
    constructor() {
        _React2Pdf_instances.add(this);
        _React2Pdf_browser.set(this, void 0);
        _React2Pdf_pages.set(this, void 0);
        __classPrivateFieldSet(this, _React2Pdf_pages, [], "f");
    }
    addPage(div) {
        __classPrivateFieldGet(this, _React2Pdf_pages, "f").push(jsx_runtime_1.jsxs("div", Object.assign({ style: { "pageBreakAfter": "always" } }, { children: [" ", div, " "] }), "page" + __classPrivateFieldGet(this, _React2Pdf_pages, "f").length));
    }
    async render(path, format) {
        const document = await __classPrivateFieldGet(this, _React2Pdf_instances, "m", _React2Pdf_buildDocument).call(this);
        await document.pdf({ path, format });
        await __classPrivateFieldGet(this, _React2Pdf_instances, "m", _React2Pdf_clear).call(this);
    }
    async renderToStream(format) {
        const document = await __classPrivateFieldGet(this, _React2Pdf_instances, "m", _React2Pdf_buildDocument).call(this);
        return document.createPDFStream({ format });
    }
}
exports.default = React2Pdf;
_React2Pdf_browser = new WeakMap(), _React2Pdf_pages = new WeakMap(), _React2Pdf_instances = new WeakSet(), _React2Pdf_buildDocument = async function _React2Pdf_buildDocument() {
    __classPrivateFieldSet(this, _React2Pdf_browser, await puppeteer_1.default.launch(), "f");
    const document = await __classPrivateFieldGet(this, _React2Pdf_browser, "f").newPage();
    let html = server_1.default.renderToString(jsx_runtime_1.jsx("div", { children: __classPrivateFieldGet(this, _React2Pdf_pages, "f") }, void 0));
    await document.setContent(html);
    return document;
}, _React2Pdf_clear = async function _React2Pdf_clear() {
    // clear pages and close browser
    __classPrivateFieldGet(this, _React2Pdf_pages, "f").length = 0;
    await __classPrivateFieldGet(this, _React2Pdf_browser, "f")?.close();
};
//# sourceMappingURL=React2Pdf.js.map