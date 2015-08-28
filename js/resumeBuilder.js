/*
This is empty on purpose! Your code to build the resume will go here.
*/

var formattedName = HTMLheaderName.replace("%data%", "Daniel Burdick");
var formattedRole = HTMLheaderRole.replace("%data%", "Web-Dev");




$("#header").prepend(formattedName, formattedRole);
