var reader = require("./index.js");
	
	console.log("# Enter your Project path (exp: c:\\path\\to\\your\\project) ");
	reader.read(" > ", (answer) => {
        console.log("You have enter = "+answer+"  length = "+answer.length+"  last = "+(answer[answer.length-1] == '\n'));
    });
