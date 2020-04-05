const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;

  if (pathName === "/products" || pathName === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("This is the Products page");
  } else if (pathName === "/laptops" && id < laptopData.length) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`This is the Laptop page for laptop ${id}!`);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("URL was not found on server");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening");
});
