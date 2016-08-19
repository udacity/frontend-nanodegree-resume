/*
Add name and role to header
*/
name = "Josef Mirante"
role = "Web Developer"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
Create skills list and append an element to the #main div
*/
var skills = ["red hair", "rapier-like wit", "humbleness"];
$("#main").append(skills[1]);