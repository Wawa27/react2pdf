import puppeteer, {Browser, PaperFormat} from "puppeteer";
import ReactDOMServer from "react-dom/server";
import React from "react";

export default class React2Pdf {
    #browser?: Browser;
    readonly #pages: JSX.Element[];

    constructor() {
        this.#pages = [];
    }

    addPage(div: JSX.Element): void {
        this.#pages.push(<div style={{"pageBreakAfter": "always"}} key={"page" + this.#pages.length}> {div} </div>);
    }

    async render(path: string, format: PaperFormat) {
        this.#browser = await puppeteer.launch();
        const page = await this.#browser.newPage();

        let html = await ReactDOMServer.renderToString(
            <div>
                {this.#pages}
            </div>
        );
        await page.setContent(html);
        await page.pdf({path, format});

        // clear pages and close browser
        this.#pages.length = 0;
        await this.#browser.close();
    }
}
