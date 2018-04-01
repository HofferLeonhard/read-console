var app = {
	read : function(message, callback){
        var result = "";
		// console.log (message);
		process.stdout.write(message);
		process.stdin.resume();
		process.stdin.setEncoding('utf8');
		process.stdin.once('data', function (readMessage) {
			process.stdin.pause();
			result = readMessage;

			if(typeof callback == "function") 
        	callback(result);
		});
    }
}

module.exports = app;