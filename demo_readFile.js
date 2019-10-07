let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
	fs.readFile('demoFile.html', (err, data) => {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		res.end();
	});
}).listen(8080);
