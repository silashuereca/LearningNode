let http = require('http');
let url = require('url');

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	let q = url.parse(req.url, true).query;
	let text = q.year + ' ' + q.month;
	res.end(text);
}).listen(8080);
