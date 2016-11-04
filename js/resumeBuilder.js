/*
This is empty on purpose! Your code to build the resume will go here.
 */


var skills = ["oracle","pl/sql","c#","java"];
//Objects - example
var bio = {};
bio = {name : "Mario"
, lastname : "Vivas"
, age : 44
, role : "Software Engineer"
, phone : "555-555-555"
, skill : skills
};

var name = "Mario Vivas";
//var formattedName = HTMLheaderName.replace("%data%", name);
var formattedName = HTMLheaderName.replace("%data%", bio.name + " " + bio.lastname);

var role = "Senior Software Engineer";
var formatterRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formatterRole);

var firstArray = ["UNO","DOS","TRES"];

console.log(firstArray.length);

var numArray = [1,2,3];

console.log(numArray[numArray.length-1]+1);
