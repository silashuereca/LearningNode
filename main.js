let http = require('http');
let date = require('./myFirstModule');

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write(req.url);
	res.end();
}).listen(8080);
