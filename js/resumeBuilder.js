var formattedName = HTMLheaderName.replace("%data%", "Chavah Jacobs");

var role = "Front-End Developer";
var formattedRole = HTMLheaderRole.replace ("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
