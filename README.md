[![npm version](https://img.shields.io/npm/v/react2pdf)](https://www.npmjs.com/package/react)
[![npm version](https://img.shields.io/npm/dm/react2pdf)](https://www.npmjs.com/package/react)

# ⚛️ React2Pdf 📄

React2Pdf is a library that allows you to generate pdf from React components in NodeJS.

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

Generate a pdf and save it to a file :

```jsx
    // Generate pdf
    const reactToPdf = new React2Pdf();
    reactToPdf.addPage(<h1>Hello world</h1>)
    const pdfStream = await reactToPdf.render("./examples/pdfExample", "a4");
```

Generate a pdf with express :

```js
import Router from "express";
import React from "react";
import React2Pdf from "react2pdf";

const router = Router();

router.get("/pdf", async (req, res) => {
    const reactToPdf = new React2Pdf();
	reactToPdf.addPage(
		<h1 style={{ height: "200px", background: "blue" }}>
			Hello world !
		</h1>
	);
	const pdfStream = await reactToPdf.renderToStream("a4");
	res.contentType("application/pdf");
	pdfStream.pipe(res);
	stream.on("end", () => console.log("Done streaming, response sent."));
});
```
