/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Lars Feste";
var role = "Consultant";

var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedRole);
