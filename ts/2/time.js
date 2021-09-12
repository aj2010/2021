/**
 * a. Ask the user day, hour, min, second
 * b. Ask how many?
 * Then tell them the new time
 * 
 * So if current time is Mar 27th 2021 5:10 PM
 * If user says hour for (a) and 1 for (b) then new time is 
 * Mar 27th 2021 6:10 PM
 */
var prompts = require('prompts');

async function run() {

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