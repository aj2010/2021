for(var i = 0; i < 10; i = i+4) {

    console.log("current value of i: " + i);
}
/**
 * i = 0
 * 0 < 10 = true
 * print i = 0
 * i = i+4 = 4
 * i = 4
 * 4 < 10 = true
 * print i = 4
 * i = i+4 = 8
 * i = 8
 * 8 < 10 = true
 * print i = 8
 * i = i+4 + 12
 * i = 12
 * 12 < 10 = false
 * end curly braces
 * 
 * i++ => i = i + 1
 * i-- => i = i - 1
 */

 /**
 * ask the user how many times they want to run the while loop, then run the while loop that many times
 */
var i = 2;

if(i = 4){
console.log(`num1 value from inside is ` + i);   
};
console.log(`num1 value from outside is ` + i);
// // num1++;
//  i = i + 1
// i+1;
// console.log(`num1 value is ` + i);
// i = i + 4;
// console.log(`num1 value is ` + i);

// var num1 = 0;
//  while(num1 < 13) { 
//      num1 = num1 + 2;
//      console.log('num1 ' + num1);
// }; 
/**
 * = = assign
 * == = comparison
 * Number.pa
 */
/*a = 0;
while(a < 10) {
a++;
console.log('number ' + a);   
};*/
var prompt = require('prompt');
prompt.start();
prompt.get(['s'], function(err, result)  {
var s = Number.parseInt(result.s);
var u = 0;
while(true) { 
    if (u >= s) {
        break;
    }

    u++;
    console.log('number ' + u);
 };
});
// var prompt = require('prompt');
// prompt.start();
// prompt.get(['whileloop'], function(err, result) {
// var whileloop = Number.parseInt(result.whileloop);
// while(whileloop == Number.parseInt(result.whileloop)) { 
//     whileloop--
//     console.log('whileloop = ' + whileloop);
// };
// });
