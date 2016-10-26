/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Mario Vivas";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Senior Software Engineer";
var formatterRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formatterRole);

var firstArray = ["UNO","DOS","TRES"];

console.log(firstArray.length);

var numArray = [1,2,3];

console.log(numArray[numArray.length-1]+1);
