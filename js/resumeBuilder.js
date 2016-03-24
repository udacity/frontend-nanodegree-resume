/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var formattedName = HTMLheaderName.replace("%data%", "Aubrey Mills");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedName);
$("#header").append(formattedRole);