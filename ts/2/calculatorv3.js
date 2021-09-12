/**
 * Write a calculator program that can take user inputs for a number and if the user 
 * wants more numbers keeping adding them and provide the sum
 */
/**
 * Before you can use a library, you have to install it for node to import it. To install a library, you have to know the name
 * Once you know the name you can say 
 * npm install <library name>
 * for eg you can type the following in terminal: npm install prompt
 */
// use the installed library called prompt
var prompts = require('prompts');

/**
 * () - parenthesis - this is used to pass parameters to a function
 * [] - square brackets - this usually denotes an array. An array is a set of things
 * {} - curly braces - start and end of a function or an object
 * ; - semi colon - this usually denotes end of a line
 * . - period - this denotes a function. It also denotes a property of an object. If it is a function it will have parenthesis, otherwise it is a property of an object
 * 
 * , - comma - it is a separator or a delimiter of things
 */
/**
 * Take two numbers as input. Ask if user wants addition, subtraction, multiplication, division. Print num1 +, -, *, / num2.
 * Ask if user wants addition, subtraction, multiplication or division. Ask as many numbers until the user wants no more.
 * Remember what is constant and what is the counter
 */

async function run() {
  var rslt = await getNumberFromPrompt('Ayush, Papa, or Mama give me num 1');
  var y = rslt.val
  var s = "+"
  while (s != "=") {
    rslt = await getOperandFromPrompt('+,-,*,/,=');
    s = rslt.val
    rslt = await getNumberFromPrompt('Ayush, Papa, or Mama dont forget this is Num 2 not num 1');
    var u = rslt.val
  
    switch(s) {
      case '+':
      y = Number.parseInt(y) + Number.parseInt(u)
        break;
      case '-':
      y = Number.parseInt(y) - Number.parseInt(u)
        break;
      case '*':
      y = Number.parseInt(y) * Number.parseInt(u)
        break;
      case '/':
      y = Number.parseInt(y) / Number.parseInt(u)
        break;
      case '=':
      console.log(y)
        break;
    } 
  }
}
run();


async function getNumberFromPrompt(mesg) {
  return await prompts({
    type: 'number',
    name: 'val',
    message: mesg
  });
}

async function getOperandFromPrompt(mesg) {
  return await prompts({ 
  type: 'text',
  name: 'val',
  message: mesg
 });
}
