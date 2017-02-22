var firstName = "Stephani";
var fullName = "Stephani McGrath";
var jobTitle = " Web Developer";
var fullName = HTMLheaderName.replace("%data%", fullName);
$("#header").append(fullName);
var role = HTMLheaderRole.replace("%data%", jobTitle);
$("#header").append (jobTitle);
