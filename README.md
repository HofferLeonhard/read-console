# read-console
Request and retrieve a simple entry in the console

[![NPM version](https://img.shields.io/npm/v/read-console.svg)](https://www.npmjs.com/package/read-console)

#### Install 

First install read-console in your project as npm dependence by doing :

	npm install read-console


#### Use it

When you have completely install the package in your project, you can access to it by a simple require.

	var reader = require("read-console");

Now, you can call a read function to read something you want. His prototype is the following :
	
	function(message, callback)

they are two parameters here :

	- The message parameter : it is a message to show before waiting for an input, in the same line like the typing zone
	- The callback function, in which we can retreive the return input value

### Complete example

	
	var reader = require("read-console");

	reader.read("Enter something : ", (answer) => {
        console.log("You have enter = "+answer);
    });


## License

[MIT](LICENSE)


Enjoy it !
