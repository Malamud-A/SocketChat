require('@babel/register');
const Koa = require('koa');
const cors = require('@koa/cors');
const http = require('http');
const io = require('socket.io');

const PORT = 8000;

const app = new Koa();
app.use(cors());
const httpServer = http.createServer(app.callback());
const socket = io(httpServer);

require('./socket')(socket);

const server = httpServer.listen(PORT , () => {
  console.log(`server is running on port: ${PORT}`);
});

module.exports = server;
