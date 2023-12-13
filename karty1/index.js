const jsonServer = require("json-server");//es5 // importing json-server library
// import jsonServer from "json-server"
const server = jsonServer.create(); // created 
const router = jsonServer.router("kartyyy.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3005; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router); 
server.listen(port);