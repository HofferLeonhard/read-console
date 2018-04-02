var app = {
	read : function(message, callback){
		$this = this;
        var result = "";
		process.stdout.write(message);
		process.stdin.resume();
		process.stdin.setEncoding('utf8');
		process.stdin.once('data', function (readMessage) {
			result = readMessage;
			result = result.replace(/\r?\n|\r/g, "");
			
			$this.support(callback, result);
		});
    },

    support : function(callback,message){
    	callback(message);
    }
}

module.exports = app;