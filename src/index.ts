import * as Hapi from 'hapi';

const server: Hapi.Server = Hapi.Server({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request: Hapi.Request, reply: Hapi.IReply) => {
    return 'Hello World';
  }
});

async function start() {
  try {
    await server.start();
    console.log('Server is running on port: ', server.info.uri);
  } catch (err) {
    console.log(err);
    // process.exit(1);
  }
}

start();
