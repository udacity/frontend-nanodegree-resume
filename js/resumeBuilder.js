var name = "Andy Panasiuk";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["HTML", "CSS", "JavaScript", "jQuery"]

$(main).append(skills.length);





