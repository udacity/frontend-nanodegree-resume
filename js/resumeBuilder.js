//$("#main").append("Daniel");
// [string].replace([old],[new])

//Adding to text to 'main'
//$("#main").append(funThoughts);

//Adding Name & Job title to header
var role = "Quality Engineer, Scrum Master";
var name = "Daniel Gallegos";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Adding Skills to the Skills selection
var skills = ["Agile Development", "Scrum Methodology", "Visual Studio 2015", "JavaScript", "GitHub"];
$("#main").append(skills);
