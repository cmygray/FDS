const modules = require('./modules');

/*http.createServer((request, response) => {
  response.statusCode = 400;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');*/

const result = modules.hello.hello() + modules.world.world();
console.log(result);