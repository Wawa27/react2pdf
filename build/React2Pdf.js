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
var _React2Pdf_browser, _React2Pdf_pages;
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";
export default class React2Pdf {
    constructor() {
        _React2Pdf_browser.set(this, void 0);
        _React2Pdf_pages.set(this, void 0);
        __classPrivateFieldSet(this, _React2Pdf_pages, [], "f");
    }
    addPage(div) {
        __classPrivateFieldGet(this, _React2Pdf_pages, "f").push(_jsxs("div", Object.assign({ style: { "pageBreakAfter": "always" } }, { children: [" ", div, " "] }), "page" + __classPrivateFieldGet(this, _React2Pdf_pages, "f").length));
    }
    async render(path, format) {
        __classPrivateFieldSet(this, _React2Pdf_browser, await puppeteer.launch(), "f");
        const page = await __classPrivateFieldGet(this, _React2Pdf_browser, "f").newPage();
        let html = await ReactDOMServer.renderToString(_jsx("div", { children: __classPrivateFieldGet(this, _React2Pdf_pages, "f") }, void 0));
        await page.setContent(html);
        await page.pdf({ path, format });
        // clear pages and close browser
        __classPrivateFieldGet(this, _React2Pdf_pages, "f").length = 0;
        await __classPrivateFieldGet(this, _React2Pdf_browser, "f").close();
    }
    async renderToStream(format) {
        __classPrivateFieldSet(this, _React2Pdf_browser, await puppeteer.launch(), "f");
        const page = await __classPrivateFieldGet(this, _React2Pdf_browser, "f").newPage();
        let html = await ReactDOMServer.renderToString(_jsx("div", { children: __classPrivateFieldGet(this, _React2Pdf_pages, "f") }, void 0));
        await page.setContent(html);
        const pdf = await page.createPDFStream({ format });
        // clear pages and close browser
        // this.#pages.length = 0;
        // await this.#browser.close();
        return pdf;
    }
}
_React2Pdf_browser = new WeakMap(), _React2Pdf_pages = new WeakMap();
//# sourceMappingURL=React2Pdf.js.map