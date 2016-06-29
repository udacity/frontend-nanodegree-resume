//setting up the data to use
var name = "Kevin Davis";
var resumeName = HTMLheaderName.replace("%data%", name);
var role = "Software Developer";
var resumeRole = HTMLheaderRole.replace("%data%",role);

//adding it to page
$("#header").prepend(resumeRole);
$("#header").prepend(resumeName);
