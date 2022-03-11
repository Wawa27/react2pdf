/// <reference types="react" />
/// <reference types="node" />
import { Browser, Page, PaperFormat } from "puppeteer";
import { Readable } from "stream";
declare type RenderToStreamOptions = {
    autoclose: false;
};
export default class React2Pdf {
    browser?: Browser;
    readonly pages: JSX.Element[];
    constructor();
    addPage(div: JSX.Element): void;
    buildDocument(): Promise<Page>;
    clear(): Promise<void>;
    render(path: string, format: PaperFormat): Promise<void>;
    renderToStream(format: PaperFormat, options?: RenderToStreamOptions): Promise<Readable>;
    close(): Promise<void>;
}
export {};
