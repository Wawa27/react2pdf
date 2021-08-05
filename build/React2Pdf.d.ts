/// <reference types="react" />
import { PaperFormat } from "puppeteer";
export default class React2Pdf {
    #private;
    constructor();
    addPage(div: JSX.Element): void;
    render(path: string, format: PaperFormat): Promise<void>;
}
