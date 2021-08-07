# ⚛️ React 2 PDF 📄

THE SIMPLEST AND THE FASTEST PACKAGE TO RENDER PDF WITH REACT. 


## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i --save react2pdf
```

## Usage 

Import :
```js
import React2Pdf from "react2pdf";

const options = {}
const reactToPdf = new React2Pdf(options);
```
For options check this [section](#options) 

Generate pdf in the file :

```jsx
    // Generate pdf
    const reactToPdf = new React2Pdf();
    reactToPdf.addPage(<h1>HELLO WORLD</h1>)
    const pdfStream = await reactToPdf.render("./examples/pdfExample","a4");
```

Generate pdf with API Express route :

```js
import Router from "express";
import React from "react";
import React2Pdf from "react2pdf";

const router = Router();

router.get("/testPdf", async (req, res) => {
    const reactToPdf = new React2Pdf();
	reactToPdf.addSinglePage(
		<h1 style={{ height: "200px", background: "blue" }}>
			Hello , Nico fdsjhfksdkhf{" "}
		</h1>
	);
	const pdfStream = await reactToPdf.renderToStream("a4");
	res.contentType("application/pdf");
	pdfStream.pipe(res);
	stream.on("end", () => console.log("Done streaming, response sent."));
});
```

## Options

|options name | required | type | default value | description |
|---|---|----|----|----|
| xxx | xxx | xxx | xxx | xxx |



## About
