// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Date objects represent a single moment in time. 
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

let d = new Date(); // returns a new date object which is the current time

// get year from the date;
console.log("Year is: " + d.getFullYear());
// get day from the date;
console.log("Day is: " + d.getDay());
// get month from the date;
console.log("Month is: " + d.getMonth());
console.log("Milliseconds is: " )
d.setFullYear(2021)
// date time as a string
console.log("Date as string: " + d.toString())

// date time as a date string 
console.log("Date as date string: " + d.toDateString())


// Time measured since begining of time also called epoch time
// console.log(d.now());

