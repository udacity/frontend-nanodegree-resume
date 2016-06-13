/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append(["Matthew Perkins"])

 // var awesomeThoughts = "I am Matthew and I am AWESOME!";
 // console.log(awesomeThoughts);

 // var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

 // console.log(funThoughts);

 // $("#main").append(funThoughts);

var name = "Matthew Perkins";
var role = "Entrepreneur Bad Ass Dingy"

var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedRole);

var skills = ["awesomeness", "programming", "teaching", "JS"]

console.log(skills.length);
