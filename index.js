// Hello
console.log("Hello");

const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Keyin World on a sunny / snowy day.");
});

console.log("It is sunny with newist snow today.");
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
