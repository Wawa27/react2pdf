/// <reference types="react" />
/// <reference types="node" />
import { PaperFormat } from "puppeteer";
import { Readable } from "stream";
declare type RenderToStreamOptions = {
    autoclose: false;
};
export default class React2Pdf {
    #private;
    constructor();
    addPage(div: JSX.Element): void;
    render(path: string, format: PaperFormat): Promise<void>;
    renderToStream(format: PaperFormat, options?: RenderToStreamOptions): Promise<Readable>;
    close(): Promise<void>;
}
export {};
