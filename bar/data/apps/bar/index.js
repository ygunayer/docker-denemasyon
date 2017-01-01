const app = require('express')();

const randomId = ('' + Math.random()).substring(2);
const serverName = 'bar-' + randomId;

app.get('/', function(req, res) {
    res.status(200).send({ from: serverName });
});

app.listen(4000);

console.log('Server', serverName, 'now running on port 4000');
