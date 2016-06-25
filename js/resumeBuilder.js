/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#header").append();
 // $("#main").append("Jon Collins");

// variables the below should set a var called awesomethoughts and sets it to the value below
// adding console.log prints out the value of it straight away in the console on refresh.
 var awesomeThoughts = "I am Jon and I am AWESOME!";
 console.log(awesomeThoughts);

// to replace something in a pattern
// [string].replace([old],[new])

var funthoughts = awesomeThoughts.replace("AWESOME", "FUN");

// this checks in the console the old value is replaced by the new value
console.log(awesomeThoughts);
console.log(funthoughts);

// I can then append this to somewher in the page
$("#main").append(funthoughts);

var formattedName = HTMLheaderName.replace("%data%", "Jon Collins");
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Web Developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);


