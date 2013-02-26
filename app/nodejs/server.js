
const PATH = require("path");
const CONNECT = require("connect");
const PINF_IT = require("pinf-it");

var app = CONNECT()
    .use(CONNECT.bodyParser())
	.use(PINF_IT.SERVER.for(module).connect())
    .listen(8080);
