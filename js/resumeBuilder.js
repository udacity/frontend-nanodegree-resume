/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#header").append();
 // $("#main").append("Jon Collins");

// variables the below should set a var called awesomethoughts and sets it to the value below
// adding console.log prints out the value of it straight away in the console on refresh.
 // var awesomeThoughts = "I am Jon and I am AWESOME!";
 // console.log(awesomeThoughts);

// to replace something in a pattern
// [string].replace([old],[new])

// var funthoughts = awesomeThoughts.replace("AWESOME", "FUN");

// this checks in the console the old value is replaced by the new value
// console.log(awesomeThoughts);
// console.log(funthoughts);

// I can then append this to somewher in the page
// $("#main").append(funthoughts);

// the below replaces placeholders in the helper.js that have already been called by index.html with actual data
var formattedName = HTMLheaderName.replace("%data%", "Jon Collins");
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Web Developer");
// the below prepends and appends the newly replaced data to the header and results in a formatted name and title.
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var skills = ["HTML5", "CSS3","JS","BootStrap","Agile","Prince II"]
console.log(skills.length)

var bioImage = '<img src="images/jon.jpg">';

var bio = {
    "name" : "Jon", "role" : "Front End Web Developer", "contact" : "jon.collins71@gmail.com", "image" : bioImage, "welcome message" : "Welcome to my online resume", "skills" : skills
};



