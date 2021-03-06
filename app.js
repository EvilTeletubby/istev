var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine','jade');

routes(app);

var server = app.listen(3000,function(){
    console.log('App running on port.',server.address().port);
});