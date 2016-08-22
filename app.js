var express 	= require ('express');
var app			= express();
var logger 		= require('morgan');
var bodyParser = require('body-parser');
var routes		= require('./routes/twitter');
var weather_routes = require('./routes/weather');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 3000));

app.get('/ask/:query', routes.query);
app.get('/latest', routes.latest);
app.post('/forecast', weather_routes.query);
app.get('*', function(req, res){
  res.status(404).send('Not found. You are somewhere you should not be...');
});


app.listen(app.get('port'), function (){
console.log('listening on port ' + app.get('port'));
});
