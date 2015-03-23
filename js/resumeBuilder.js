var name = "Jason Goldfarb";

var role = "Web Developer";

var formattedName =
    HTMLheaderName.replace("%data%", name);

var formattedRole =
    HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
