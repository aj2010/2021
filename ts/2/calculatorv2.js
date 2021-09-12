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
 * 
 * () - parenthesis - this is used to pass parameters to a function
 * [] - square brackets - this usually denotes an array. An array is a set of things
 * {} - curly braces - start and end of a function or an object
 * ; - semi colon - this usually denotes end of a line
 * . - period - this denotes a function. It also denotes a property of an object. If it is a function it will have parenthesis, otherwise it is a property of an object
 * , - comma - it is a separator or a delimiter of things
 */
/**
 * Take two numbers as input. Ask if user wants addition, subtraction, multiplication, division. Print num1 +, -, *, / num2.
 * Ask if user wants addition, subtraction, multiplication or division. Ask as many numbers until the user wants no more.
 * Remember what is constant and what is the counter
 */

/**
async function start() {
  let result = await step1();
  console.log(result.num1);
  await step2(result.num1);
}

async function step1() {
  return await prompts({
    type: 'number',
    name: 'num1',
    message: 'Enter the first number: '
  });
}

async function step2(num1) {
  let result = await prompts({ 
    type: 'text',
    name: 'operand',
    message: ' +, -, *, /, = '
  });

  console.log(result.operand);
  let result2 = await prompts({ 
    type: 'number',
    name: 'num2',
    message: ' Enter the next number: '
});
console.log(result2.num2);

if (result.operand == "+") {
  var add = num1 + result2.num2 
  console.log(num1 + ' ' + result.operand + ' ' + result2.num2 + ' = ' + add)
} else if (result.operand == "-") {
  var subtract = num1 - result2.num2 
  console.log(num1 + ' ' + result.operand + ' ' + result2.num2 + ' = ' + subtract)
} else if (result.operand == "*") {
  var multiply = num1 * result2.num2 
  console.log(num1 + ' ' + result.operand + ' ' + result2.num2 + ' = ' + multiply)
} else if (result.operand == "/") {
  var divide = num1 / result2.num2 
  console.log(num1 + ' ' + result.operand + ' ' + result2.num2 + ' = ' + divide)
} else if (result.operand == "=") {
  console.log(num1 + ' = ' + num1)
}
}

start();
*/



 /**
async function start() {
 let result = await step1();
 console.log(result.num1);
 await step2(result.num1);
 }

 async function step1() {
 return await prompts({
 type: 'number',
 name: 'num1',
 message: 'Enter the first number: '
 });
 }
 
 var s = "+"
 while (s != "=") {
 async function step2(num1) {
 let result = await prompts({ 
 type: 'text',
 name: 'operand',
 message: ' +, -, *, /, = '
});
var y = num1
console.log(result.operand); 

var s = result.operand

let result2 = await prompts({ 
type: 'number',
name: 'num2',
message: ' Enter the next number: '
});
 
console.log(result2.num2);

var u = result2.num2

if (s == "+") {
s = y + u
console.log(y + " + " + u + " = " + s)  
}

if (s == "-") {
s = y - u
console.log(y + " - " + u + " = " + s)  
}

if (s == "*") {
s = y * u
console.log(y + " * " + u + " = " + s)  
}

if (s == "/") {
s = y / u
console.log(y + " / " + u + " = " + s)  
}

if (s == "=") {
s = y = y
console.log(y + " = " + y)  
}
}
}
start();
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
  
    if (s == "+") {
        y = Number.parseInt(y) + Number.parseInt(u)
     } 
      if (s == "-") {
        y = Number.parseInt(y) - Number.parseInt(u)
     }
      if (s == "*") {
        y = Number.parseInt(y) * Number.parseInt(u)
     }
      if (s == "/") {
        y = Number.parseInt(y) / Number.parseInt(u)
     }
      if (s == "=") {
        console.log(y)
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
  message: '+, -, *, /, = '
 });
}