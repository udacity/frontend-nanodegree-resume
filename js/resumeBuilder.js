formattedName = "Sebastian Farago";
formattedRole = "Front End Web Developer";

HTMLheaderName = HTMLheaderName.replace("%data%",formattedName);
$("#header").append(HTMLheaderName);
HTMLheaderRole = HTMLheaderRole.replace("%data%",formattedRole);
$("#header").append(HTMLheaderRole);