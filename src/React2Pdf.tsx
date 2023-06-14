import puppeteer, {
  Browser,
  Page,
  PaperFormat,
  PDFOptions,
  Product,
} from "puppeteer";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { Readable } from "stream";

type RenderOptions = PDFOptions;

type RenderToStreamOptions = RenderOptions & {
  autoclose: false;
};

type React2PdfOptions = {
  product: Product;
};

export default class React2Pdf {
  #browser?: Browser;
  readonly #pages: JSX.Element[];
  readonly #options: React2PdfOptions;

  constructor(options?: React2PdfOptions) {
    this.#pages = [];
    this.#options = options ?? { product: "chrome" };
  }

  addPage(div: JSX.Element): void {
    this.#pages.push(
      <div
        style={{ pageBreakAfter: "always" }}
        key={"page" + this.#pages.length}
      >
        {" "}
        {div}{" "}
      </div>
    );
  }

  async #buildDocument(): Promise<Page> {
    this.#browser = await puppeteer.launch({
      product: this.#options.product,
    });
    const document = await this.#browser.newPage();

    let html = ReactDOMServer.renderToString(<div>{this.#pages}</div>);
    await document.setContent(html);
    return document;
  }

  async #clear(): Promise<void> {
    // clear pages and close browser
    this.#pages.length = 0;
    await this.#browser?.close();
  }

  async render(
    path: string,
    format: PaperFormat,
    renderOptions?: RenderOptions
  ): Promise<void> {
    const document = await this.#buildDocument();
    await document.pdf({ path, format, ...renderOptions });
    await this.#clear();
  }

  async renderToStream(
    format: PaperFormat,
    options?: RenderToStreamOptions
  ): Promise<Readable> {
    const document = await this.#buildDocument();
    let pdfStream = await document.createPDFStream({
      format,
      timeout: options?.timeout,
    });
    if (options?.autoclose) {
      pdfStream.on("close", () => this.close());
    }
    return pdfStream;
  }

  async close(): Promise<void> {
    this.#browser?.close();
  }
}
