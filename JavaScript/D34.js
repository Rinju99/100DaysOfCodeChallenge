// Node.js HTTP moduel example...
const { createServer } = require("http");
const { request } = require("http");
let requestStream = request(
  {
    hostname: "github.com",
    path: "/20_node.html",
    method: "GET",
    headers: { Accept: "text/html" },
  },
  (response) => {
    console.log("Server response code:", response.statusCode);
  }
);
requestStream.end();
// Outpu: Server response code: 301
