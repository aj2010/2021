/**
 * Taking input from the user
 */
var prompt = require('prompts');

async function start() {
    let result = await userInput();
    console.log("You entered: " + result.text1);
}
  
async function userInput() {
    return await prompt({ 
        type: 'text',
        name: 'text1',
        message: 'Enter anything: '
    });
}

start();