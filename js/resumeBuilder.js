$("#main").append(["Michael Isaacs"]);
var awesomeThoughts= "I am Mike and I am awesome";
console.log(awesomeThoughts);
var funThoughts= awesomeThoughts.replace("awesome","fun");
console.log(funThoughts);
console.log(nameChanger("eLlo therRE"))
$("#main").append(funThoughts);

var name= "Michael Isaacs";
var role= "Programmer";

var formattedName= HTMLheaderName.replace("%data%",name);
var formattedRole= HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

