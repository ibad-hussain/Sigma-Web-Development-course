// Importing and using http module using CJS system

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// Exporting a constant

const c = 5;
module.exports = c;



// Exporting an object

module.exports = {
    a: 1,
    b: 2
}