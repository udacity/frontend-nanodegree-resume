var formattedName = HTMLheaderName.replace("%data%", "Chuiwen Ma");

var role = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);