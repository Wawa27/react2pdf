import React2Pdf from "../build/React2Pdf";

type HelloWorldProps = {
    name: string;
}

function HelloWorld(props: HelloWorldProps): JSX.Element {
    return (<h1>Hello , {props.name} </h1>);
}

const reactToPdf = new React2Pdf();
reactToPdf.addPage(<HelloWorld name={"Wawa#2003"}/>)
await reactToPdf.render("./hello_world.pdf", "a4");
