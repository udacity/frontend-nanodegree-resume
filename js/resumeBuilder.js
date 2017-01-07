/*  example

$("#main").append(["Paul Allen"]);

var awesomeThoughts = "I am Paul and I am awesome!";

var funThoughts = awesomeThoughts.replace("awesome","fun");

console.log(awesomeThoughts);
console.log(funThoughts);*/

var formattedName = "Paul Allen";
var formattedRole = "Front-End Developer"

var bio = {
            name : "Paul Allen",
            role : "Front-End Developer",
            contactInfo : "paul@webrookdesign.com",
            contactBy : "email",
            picture : "images/social.jpg"
          }


var HTMLheaderName = HTMLheaderName.replace("%data%", bio["name"]);
var HTMLheaderRole = HTMLheaderRole.replace("%data%", bio["role"]);
var HTMLcontactGeneric = HTMLcontactGeneric.replace("%data%", bio["contactInfo"]);
var HTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%",bio["contactBy"]);
var HTMLbioPic = HTMLbioPic.replace("%data%",bio["picture"]);

$("#topContacts").prepend([HTMLcontactGeneric]);
$("#header").prepend([HTMLbioPic]);
$("#header").prepend([HTMLheaderRole]);
$("#header").prepend([HTMLheaderName]);


