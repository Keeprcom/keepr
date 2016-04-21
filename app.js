var express = require ('express');
var app = express();
var logger = require('./logger');
app.use(logger);

app.set('port', (process.env.PORT || 3000));

var routes=require('./routes/twitter');

app.get('/:query', routes.query);

app.listen(app.get('port'), function (){
console.log('listening on port ' + app.get('port'));
});
