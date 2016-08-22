var Forecast = require('forecast.io');

var options = {
  APIKey: process.env.FORECAST_API_KEY
},
forecast = new Forecast(options);

module.exports.query = function(req,res){
		
		var latitude =String(req.body.lat);
		var longitude=String(req.body.long);
		
		forecast.get(latitude, longitude, function (err, response, data) {
		  if (err) throw err;
		  var temp = "Currently " + data.currently.summary + " " +data.currently.temperature + " Farenheit. " + data.hourly.summary;
		  res.send(temp);
		});

		
	};