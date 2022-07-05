/// <reference types="react" />
/// <reference types="node" />
import { PaperFormat } from "puppeteer";
import { Readable } from "stream";
declare type RenderOptions = {
    timeout?: number;
};
declare type RenderToStreamOptions = RenderOptions & {
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
