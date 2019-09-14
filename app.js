var express = require('express');
var app = express();
const port = process.env.port || 3000;

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(port,() =>{
    console.log ('Servidor online na porta ${port}')
});