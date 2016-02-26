//$("#main").append("Daniel");
// [string].replace([old],[new])
//Declaring variables at the top
var role = "Quality Engineer, Scrum Master";
var name = "Daniel Gallegos";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

//Adding to text to 'main'
//$("#main").append(funThoughts);

//Adding Name & Job title to header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
