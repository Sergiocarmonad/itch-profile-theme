// Renders tools/banner.html to banner.png.
// Run: node tools/render-banner.js, open http://localhost:4174 in a browser,
// and the page draws the banner and posts the PNG back here.
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/save") {
    const chunks = [];
    req.on("data", c => chunks.push(c));
    req.on("end", () => {
      fs.writeFileSync(path.join(root, "banner.png"), Buffer.concat(chunks));
      console.log("saved banner.png");
      res.end("ok");
    });
    return;
  }
  fs.readFile(path.join(__dirname, "banner.html"), (err, data) => {
    res.writeHead(err ? 404 : 200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(err ? "not found" : data);
  });
}).listen(4174, () => console.log("open http://localhost:4174"));
