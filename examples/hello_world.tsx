import React2Pdf from "../build/React2Pdf";
import * as fs from "fs";

type HelloWorldProps = {
    name: string;
}

function HelloWorld(props: HelloWorldProps): JSX.Element {
    return (<h1>Hello , {props.name} </h1>);
}

const reactToPdf = new React2Pdf();
reactToPdf.addPage(<HelloWorld name={"Wawa#2003"}/>)
// await reactToPdf.render("./hello_world.pdf", "a4");
const pdfStream = await reactToPdf.renderToStream("a4");
const writeStream = fs.createWriteStream('testStream.pdf');
pdfStream.pipe(writeStream);