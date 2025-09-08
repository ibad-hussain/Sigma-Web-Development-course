// Importing and using http module using ESM system

import http from "http";

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// Exporting named exports 

export const a = 1;     // named export
export const b = 2;     // named export
export const c = 3;     // named export
export const d = 4;     // named export



// Exporting default exports

const obj = {
    x: 1,
    y: 2
}
export default obj;