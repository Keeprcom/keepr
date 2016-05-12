var functions=require('../lib/functions');
var Twitter = require('twitter');
var logger = require('../logger');

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

module.exports ={
	query: function(req,res){
		client.get('search/tweets', {q:req.params.query, from:'breakingnews OR bbcbreaking OR AP+BREAKING OR ReutersLive OR AJELive OR AFP+#BREAKING', result_type:'popular',exclude:'replies OR retweets', count:100}, function(err, data, response) {
   
		if (err) console.log(err);
	  	
		  else {
		  		var ids = {numbers:[]};
		  		// var text = "";
				  
				  for(var i in data.statuses){
			  		var item = data.statuses[i];
			    		ids.numbers.push({
			    		"time":item.created_at,
			    		"text":item.text,
			    		"urls":item.entities.urls
			    		});
		    		// text+=item.text;	   
					}
				// var cleanString = text.replace(/[|$<>\\-\\()+,]/g, " ");
				// var words = []; 
				// var splitted = cleanString.split(" ");
				// var regexForMentions=/(^|[^@\w])@(\w{1,15})\b/g;
				// var urlExpression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
				// var mentions=String(splitted).toLowerCase().match(regexForMentions,String(cleanString));
				// var urls=(String)(splitted).toLowerCase().match(urlExpression);
				// var unique_mentions=functions.uniq(mentions);
				// var unique_urls=functions.uniq(urls);
				
				// for(var i=0; i<splitted.length; i++) {
			 //    	words[splitted[i]] = ( typeof words[splitted[i]] != 'undefined' ) ? words[splitted[i]]+=1 : 1;
				// }

				// var words_counter = 0
					
				// for (key in words) {
			 //  		words_counter++;
			 //  		console.log(key+" : "+words[key]);
				// }
				// console.log(unique_mentions);	
				// console.log(unique_urls);			
				// console.log("number of unique words: " +words_counter+ " total number of words: "+splitted.length) ;
				// console.log("-----------------------------");
				}
		res.json(ids);
		});	
	},

	latest: function(req,res) {
		client.get('search/tweets', {q:'breaking news', from:'breakingnews OR bbcbreaking OR AP+BREAKING OR ReutersLive OR AJELive OR AFP+#BREAKING', result_type:'popular', exclude:'replies OR retweets', count:100}, function(err, data, response) {
   
		if (err) console.log(err);
	  	
		  else {
		  		var ids = {numbers:[]};
		  		var text = "";
				  
				  for(var i in data.statuses){
			  		var item = data.statuses[i];
			    		ids.numbers.push({
			    		"time":item.created_at,
			    		"text":item.text,
			    		"urls":item.entities.urls
			    		});
		    		text+=item.text;	   
					}
				}
		res.json(ids);
		});	 
	}
}
