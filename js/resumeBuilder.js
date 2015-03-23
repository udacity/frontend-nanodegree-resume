var formattedName =
    HTMLheaderName.replace("%data%","Jason Goldfarb");

var formattedRole =
    HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedName).append(formattedRole);
