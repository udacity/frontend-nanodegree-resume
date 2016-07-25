var name = "Jeff Routledge";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role); 


$("#header").append(formattedName);
$("#header").append(formattedRole);
