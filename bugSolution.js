const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`Server failed to start: ${error}`);
    process.exit(1); // Exit with an error code
  }
};

const onListening = () => {
  console.log(`Server listening on port ${port}`);
};

const server = http.createServer(requestListener);

server.on('error', onError);
server.on('listening', onListening);

server.listen(port); 