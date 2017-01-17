/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var awesomeThoughts = "I am Andrea Leardini and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);*/

var name = "Andrea Leardini";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedRole);
$("#header").prepend(formattedName);