module.exports=function(req,res,next){
var start = +new Date(); // + converts date obj to milliseconds
var stream = process.stdout;
var url = req.url;
var method = req.method;

res.on('finish', function(){
	var duration = +new Date() - start;
	var message = method + ' to ' + url + '\ntook ' + duration + ' ms \n\n ';
	stream.write(message); //writes log message
});
next();
}