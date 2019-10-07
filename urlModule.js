let url = require('url');
let address = 'http://localhost:8080/default.htm?year=2019&month=february';
let q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let data = q.query;
console.log(data.month);
