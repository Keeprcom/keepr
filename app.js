var express 	= require ('express');
var app			= express();
var logger		= require('./logger');
var routes		= require('./routes/twitter');
var User     	= require('./models/User');
var mongoose 	= require('mongoose');

app.use(logger);
app.set('port', (process.env.PORT || 3000));


//mongoose.connect('mongodb://localhost/keepr');


app.get('/ask/:query', routes.query);
app.get('/latest', routes.latest);

app.listen(app.get('port'), function (){
console.log('listening on port ' + app.get('port'));
});
