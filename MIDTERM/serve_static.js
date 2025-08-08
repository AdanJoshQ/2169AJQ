var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('You have successfully created second app!');
})

var sever = app.listen(8081, function (){
    var host = sever.address().address
    var port = sever.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})