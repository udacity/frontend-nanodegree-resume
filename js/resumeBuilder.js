var name = "Jason Goldfarb";
var formattedName =
    HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole =
    HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
