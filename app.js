var express = require ('express');
var app = express();
var logger = require('./logger');
var routes=require('./routes/twitter');

app.use(logger);
app.set('port', (process.env.PORT || 3000));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/keepr_users');
var User     = require('./models/User');

app.get('/ask/:query', routes.query);
app.get('/latest', routes.latest);

app.listen(app.get('port'), function (){
console.log('listening on port ' + app.get('port'));
});
