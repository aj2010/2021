/**
Template for basic prompt program
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
   