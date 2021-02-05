const app = require('./app')(__dirname)
const server = require('http').Server(app)
server.listen(6200);
