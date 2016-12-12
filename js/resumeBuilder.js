/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Michael");

// var awesomeThoughts = "I am Michael and I am awesome!";

// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// console.log(awesomeThoughts);
// console.log(funThoughts);

// $("#main").append(funThoughts);

var name = "Michael";

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Student";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);