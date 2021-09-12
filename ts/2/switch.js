const prompts = require("prompts");
/**
 * Exercise 1
 * Enter a name: 
 * If name is "shital" - print "this is my mumma"
 * If name is "surya" - print "this is my dad"
 * if name is "ayush" - print "this is me"
 * if name is anything else print "I don't recognize this person"
 * 
 * * Exercise 2
 * * Enter a character: 
 * If character is "+" - print "you want add"
 * If character is "-" - print "you want subtract"
 * if character is "*" - print "you want multiply"
 * if character is anything else print "I don't know what you want"
 * 
 * * Exercise 3
 * Store two variables with values of 40 and 10
 * 
 * * Ask the user to "Enter a character": 
 * If character is "+" - print result of adding the two variables
 * If character is "-" - print result of subtract the two variables
 * if character is "*" - print result of multiplying the two variables
 * if character is "/" - print result of dividing the two variables
 * if character is anything else print "I don't know what you want"
 
 * * Excersise 4
 * Ask the user what two numbers they want (num1, num2)
 * Add, subtract, multiply or divide them based on what the user wants

 * * Excersise 5
 * Look at book for what to do 
 * loops-with-break.js had the general concept of what needs to be applied here
 */

async function start() {
let result = await prompts( { 
    type: 'number',
    name: 'num1',
    message: ' Enter a character: '
})

console.log(result.num1);

    let rslt = await prompts( { 
        type: 'text',
        name: 'operend',
        message: ' Enter a operend: '
    })

    console.log(rslt.operend);

    let result2 = await prompts( { 
        type: 'number',
        name: 'num2',
        message: ' Enter another character: '
    })

    console.log(result2.num2);
    
// 

    switch (rslt.operend) {
        
        case '+':
            console.log("You want addition.");
            let add = result.num1 + result2.num2
            console.log(result.num1 + ' + ' + result2.num2 + ' = ' + add)
            let resulto = await prompts( { 
                type: 'text',
                name: 'operend2',
                message: ' Enter another operend: '
            })
            console.log(resulto.operend2);
            switch (result.operend2) {
                case '+':
                    console.log("You want addition.")
                    let add2 = result.num1 + result2.num2 + result3.num3
                    console.log(result.num1 + ' + ' + result2.num2 + ' + ' + result3.num3 + ' = ' + add2)
                    break;
                
                case '-':
                    console.log("You want subtraction.")
                    let subtract2 = result.num1 - result2.num2 - result3.num3
                    console.log(result.num1 + ' - ' + result2.num2 + ' - ' + result3.num3 + ' = ' + subtract2)
                    break;

                case '*':
                    console.log("You want multiplication.")
                    let multiply2 = result.num1 * result2.num2 * result3.num3
                    console.log(result.num1 + ' * ' + result2.num2 + ' * ' + result3.num3 + ' = ' + multiply2)
                    break;

                case '/':
                    console.log("You want division.")
                    let divide2 = result.num1 / result2.num2 / result3.num3
                    console.log(result.num1 + ' / ' + result2.num2 + ' / ' + result3.num3 + ' = ' + divide2)
                    break;

                case '=':
                    console.log("You want an answer.")
                    console.log(result2.num2 + ' = ' + result2.num2)
                    break;
            }
            break;

        case '-':
            console.log("You want subtraction.");
            let subtract = result.num1 - result2.num2
            console.log(result.num1 + ' ' + '-' + ' ' + result2.num2 + ' = ' + subtract)
            break;
    
        case '*':
            console.log("You want multiplication.");
            let multiply = result.num1 * result2.num2
            console.log(result.num1 + ' ' + '*' + ' ' + result2.num2 + ' = ' + multiply)
            break;

        case '/':
            console.log("You want division.")
            let divide = result.num1 / result2.num2
            console.log(result.num1 + ' ' + '/' + ' ' + result2.num2 + ' = ' + divide)
            break;
        case '=':
            console.log("You want an answer.")
            let equal = 0
            console.log(result.num1 + ' = ' + result.num1)
            break;

        default:
            console.log("I don't know what you want.");
            break;
        }
    }
start();