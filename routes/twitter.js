var functions=require('../lib/functions');
var Twitter = require('twitter');
var client = new Twitter({
  // consumer_key: '',
  // consumer_secret: '',
  // access_token_key: '',
  // access_token_secret: ''    
});

module.exports ={
	query: function(req,res){
		client.get('search/tweets', {q: req.params.query, count:100}, function(err, data, response) {
	   if (err) throw err;
	  else {
	  		
	  		var ids = {numbers:[]};
	  		var text = "";
			  
			  for(var i in data.statuses){
		  		var item = data.statuses[i];
		    		ids.numbers.push({
		    		"status_id":item.user.id,
		    		"text":item.text
		    		});
	    		text+=item.text;	   
			}
			var cleanString = text.replace(/[|$<>\\-\\()+,]/g, " ");
			var words = []; 
			var splitted = cleanString.split(" ");
			var regexForMentions=/(^|[^@\w])@(\w{1,15})\b/g;
			var urlExpression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
			var mentions=String(splitted).toLowerCase().match(regexForMentions,String(cleanString));
			var urls=(String)(splitted).toLowerCase().match(urlExpression);
			var unique_mentions=functions.uniq(mentions);
			var unique_urls=functions.uniq(urls);
				for(var i=0; i<splitted.length; i++) {
			    	words[splitted[i]] = ( typeof words[splitted[i]] != 'undefined' ) ? words[splitted[i]]+=1 : 1;
				}

			var words_counter = 0
				
				for (key in words) {
			  		words_counter++;
			  		console.log(key+" : "+words[key]);
				}
		console.log(unique_mentions);	
		console.log(unique_urls);			
		console.log("number of unique words: " +words_counter+ " total number of words: "+splitted.length) ;
		console.log("-----------------------------")
		}

		res.json(ids);
	});	
} }