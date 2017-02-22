// $("#main").append(["Lisa"]);

var name = "Lisa Bronwyn";
var age = 42;

var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append([formattedName]);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").append([formattedRole]);
