/// <reference types="node" />
import { PaperFormat, PDFOptions } from 'puppeteer';
import { Readable } from "stream";
type RenderOptions = PDFOptions;
type RenderToStreamOptions = RenderOptions & {
    autoclose: false;
};
export default class React2Pdf {
    #private;
    constructor();
    addPage(div: JSX.Element): void;
    render(path: string, format: PaperFormat, renderOptions?: RenderOptions): Promise<void>;
    renderToStream(format: PaperFormat, options?: RenderToStreamOptions): Promise<Readable>;
    close(): Promise<void>;
}
export {};
