var express = require ('express');
var app = express();
var logger = require('./logger');
app.use(logger);

var Twitter = require('twitter');
var client = new Twitter({
  // consumer_key: '',
  // consumer_secret: '',
  // access_token_key: '',
  // access_token_secret: ''
});

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/home/:query',function(req,res){
	client.get('search/tweets', {q: req.params.query}, function(err, data, response) {
	   if (err) throw err;
	  
	  else {
	  		var ids = {numbers:[]};
	  		var text = "";
			  for(var i in data.statuses){
			  		var item = data.statuses[i];
			    		ids.numbers.push({
			    		"status_id":item.user.id
			    		});
		    		text+=item.text;
		    		var cleanString = text.replace(/[#.|&;:$%@"<>\/-=?()+,]/g, " ");   
				}
			}
	res.json(cleanString);
	});	
});

app.listen(3000, function (){
console.log('listening on port 3000');
});
