import * as Hapi from 'hapi';
import {EntryPoint} from './EntryPoint';

const server: Hapi.Server = Hapi.Server({
  host: 'localhost',
  port: 3000
});

const entryPoint: EntryPoint = new EntryPoint();

server.route({
  method: 'POST',
  path: '/stack',
  handler: (request: Hapi.Request, reply: Hapi.IReply) => {
    try {
      return entryPoint.handleInput(request.payload);
    } catch (err) {
      console.log(err);
      return 'Error: ' + err.message;
    }
  }
});

server.route({
  method: 'GET',
  path: '/stack',
  handler: (request: Hapi.Request, reply: Hapi.IReply) => {
    return entryPoint.getStack();
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
