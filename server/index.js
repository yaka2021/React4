import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../src/App";
import express from "express";

const app = express();

app.use(express.static("../dist"));

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const html = `
  <!DOCTYPE html>
      <html>
        <head>
          <title>ssr</title>
          <link rel="stylesheet" type="text/css" href="main.css"">
        </head>
        <body>
        ${app}
        </body>
      </html>
`;

  res.send(html);
});

app.listen(9000, () => {
  console.log("Server listening on port 9000");
});
