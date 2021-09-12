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
/**
 * Take one number as input. Print if number 1 is greater than 100 or less than 100
 * Take two numbers as input. Print if number 1/2 is greater or less than the other
 * Take two numbers as input. Ask if user wants addition, subtraction, multiplication, division. 
 * 
 * 
 * 
 * 
 * ask the user num1
 * ask the user num2
 * ask the user if they want addition, subtraction, multiplication, division
 * 
 * 
 * ask the user if for num1 they want 0 
 * ask the user if for num1 they want 1
  * ask the user if for num1 they want 2
 * ask the user num2
 * ask the user if they want addition
 * ask the user if they want subtraction
 * ask the user if they want multiplication
 * ask the user if they want division
 * 
 * Print num1 +, -, *, / num2.
 */
prompt.get(['num1', 'num2', 'addition', 'subtraction', 'multiplication', 'division'], function (err, result)  {
  if (result.addition == "yes")  {
    var num3 = Number.parseInt(result.num1) + Number.parseInt(result.num2);
    console.log(result.num1 + ' + ' + result.num2 + ' = ' + num3);
  } else if (result.subtraction == "yes")  {
    var num4 = Number.parseInt(result.num1) - Number.parseInt(result.num2);
    console.log(result.num1 + ' - ' + result.num2 + ' = ' + num4);
  } else if (result.multiplication == "yes")  {
    var num5 = Number.parseInt(result.num1) * Number.parseInt(result.num2);
    console.log(result.num1 + ' * ' + result.num2 + ' = ' + num5);
  } else if (result.division == "yes")  {
    var num6 = Number.parseInt(result.num1) / Number.parseInt(result.num2);
    console.log(result.num1 + ' / ' + result.num2 + ' = ' + num6);
  }
}); 