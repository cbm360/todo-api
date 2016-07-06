var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db.js');

var routesTodo = require('./routes/todo');
var routesIndex = require('./routes/index');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/', routesIndex);
app.use('/api', routesTodo);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('Express listening on ' + PORT);
    });
});