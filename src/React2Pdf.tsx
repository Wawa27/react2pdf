import puppeteer, {Browser, Page, PaperFormat} from "puppeteer";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { Readable } from "stream";

export default class React2Pdf {
    #browser?: Browser;
    readonly #pages: JSX.Element[];

    constructor() {
        this.#pages = [];
    }

    addPage(div: JSX.Element): void {
        this.#pages.push(<div style={{"pageBreakAfter": "always"}} key={"page" + this.#pages.length}> {div} </div>);
    }

    async #buildDocument () : Promise<Page> {
        this.#browser = await puppeteer.launch();
        const document = await this.#browser.newPage();

        let html = await ReactDOMServer.renderToString(
            <div>
                {this.#pages}
            </div>
        );
        await document.setContent(html);
        return document
    }

    async #clear () : Promise<void> {
        // clear pages and close browser
        this.#pages.length = 0;
        await this.#browser?.close();
    }

    async render(path: string, format: PaperFormat) {
        const document = await this.#buildDocument();
        await document.pdf({path, format});
        await this.#clear();
    }

    async renderToStream(format: PaperFormat) : Promise<Readable> {
        const document = await this.#buildDocument();
        return document.createPDFStream({format});
    }
}
