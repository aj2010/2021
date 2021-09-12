/**
 * Before you can use a library, you have to install it for node to import it. To install a library, you have to know the name
 * Once you know the name you can say 
 * npm install <library name>
 * for eg you can type the following in terminal: npm install prompt
 */
// use the installed library called prompt
var prompt = require('prompt');

/**
 * 
 * () - parenthesis - this is used to pass parameters to a function
 * [] - square brackets - this usually denotes an array. An array is a set of things
 * {} - curly braces - start and end of a function or an object
 * ; - semi colon - this usually denotes end of a line
 * . - period - this denotes a function. It also denotes a property of an object. If it is a function it will have parenthesis, otherwise it is a property of an object
 * , - comma - it is a separator or a delimiter of things
 */
prompt.start();

prompt.get(['number1', 'num2', 'a1ors2'], function (err, result)  {   
if (Number.parseInt(result.a1)) {
   var sum = Number.parseInt(result.num) + Number.parseInt(result.num2);
   console.log('num1' + ' + num2 = ' + sum);
 } else  {Number.parseInt(result.s2)
    var difference = Number.parseInt(result.num1) - Number.parseInt(result.num2);
   console.log('num1' + ' - num2 = ' + difference);
 }

    


});