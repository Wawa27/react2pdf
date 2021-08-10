/// <reference types="react" />
/// <reference types="node" />
import { PaperFormat } from "puppeteer";
import { Readable } from "stream";
export default class React2Pdf {
    #private;
    constructor();
    addPage(div: JSX.Element): void;
    render(path: string, format: PaperFormat): Promise<void>;
    renderToStream(format: PaperFormat): Promise<Readable>;
}
