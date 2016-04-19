var express = require ('express');
var app = express();
var logger = require('./logger'); // ./ signifies local module and not NPM module
app.use(logger);

var Twitter = require('twitter');
var client = new Twitter({
<<<<<<< HEAD

=======
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
>>>>>>> 08ba57953cb757d0e68af40bcde94a801af6b348
});

app.set('view engine', 'ejs');

// resonse.json(object here) serializes json to client

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/home/:query',function(req,res){
	client.get('search/tweets', {q: req.params.query}, function(err, data, response) {
	   if (err) throw err;
	  // else res.json(data);
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
<<<<<<< HEAD
});
=======
});
>>>>>>> 08ba57953cb757d0e68af40bcde94a801af6b348
