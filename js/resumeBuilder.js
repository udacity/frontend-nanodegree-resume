/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
var awesomeThoughts = "I am Anthony and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);

$("#main").append(funThoughts);
*/
var name = "Anthony Chen";
var role = "Javascript-resume-learning";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(role);
$("#header").prepend(formattedName);
var skills = ["awesomeness", "programming", "teaching", "JS"];

var bio = {
    "name" : "Anthony",
    "age" : 29,
    "skills" : skills
};

$("#main").append(bio.name);