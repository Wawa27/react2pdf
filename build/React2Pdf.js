import { jsxs, jsx } from 'react/jsx-runtime';
import puppeteer from 'puppeteer';
import ReactDOMServer from 'react-dom/server';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

var _React2Pdf_instances, _React2Pdf_browser, _React2Pdf_pages, _React2Pdf_buildDocument, _React2Pdf_clear;
class React2Pdf {
    constructor() {
        _React2Pdf_instances.add(this);
        _React2Pdf_browser.set(this, void 0);
        _React2Pdf_pages.set(this, void 0);
        __classPrivateFieldSet(this, _React2Pdf_pages, [], "f");
    }
    addPage(div) {
        __classPrivateFieldGet(this, _React2Pdf_pages, "f").push(jsxs("div", Object.assign({ style: { "pageBreakAfter": "always" } }, { children: [" ", div, " "] }), "page" + __classPrivateFieldGet(this, _React2Pdf_pages, "f").length));
    }
    async render(path, format, renderOptions) {
        const document = await __classPrivateFieldGet(this, _React2Pdf_instances, "m", _React2Pdf_buildDocument).call(this);
        await document.pdf({ path, format, timeout: renderOptions?.timeout });
        await __classPrivateFieldGet(this, _React2Pdf_instances, "m", _React2Pdf_clear).call(this);
    }
    async renderToStream(format, options) {
        const document = await __classPrivateFieldGet(this, _React2Pdf_instances, "m", _React2Pdf_buildDocument).call(this);
        let pdfStream = await document.createPDFStream({ format, timeout: options?.timeout });
        if (options?.autoclose) {
            pdfStream.on("close", () => this.close());
        }
        return pdfStream;
    }
    async close() {
        __classPrivateFieldGet(this, _React2Pdf_browser, "f")?.close();
    }
}
_React2Pdf_browser = new WeakMap(), _React2Pdf_pages = new WeakMap(), _React2Pdf_instances = new WeakSet(), _React2Pdf_buildDocument = async function _React2Pdf_buildDocument() {
    __classPrivateFieldSet(this, _React2Pdf_browser, await puppeteer.launch(), "f");
    const document = await __classPrivateFieldGet(this, _React2Pdf_browser, "f").newPage();
    let html = ReactDOMServer.renderToString(jsx("div", { children: __classPrivateFieldGet(this, _React2Pdf_pages, "f") }, void 0));
    await document.setContent(html);
    return document;
}, _React2Pdf_clear = async function _React2Pdf_clear() {
    // clear pages and close browser
    __classPrivateFieldGet(this, _React2Pdf_pages, "f").length = 0;
    await __classPrivateFieldGet(this, _React2Pdf_browser, "f")?.close();
};

export { React2Pdf as default };
