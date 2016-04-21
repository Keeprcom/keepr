var express = require ('express');
var app = express();
var logger = require('./logger');
app.use(logger);

var routes=require('./routes/twitter');

app.get('/ping', function(req, res) {
  res.send('SUCCESS');
});
app.get('/:query', routes.query);

app.listen(3000, function (){
console.log('listening on port 3000');
});
