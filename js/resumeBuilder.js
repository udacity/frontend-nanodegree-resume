/*var name = "Jason Goldfarb";
var formattedName =
    HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole =
    HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

var skills =
  ["awesomeness", "programming", "teaching", "JS" ];

//$("#main").append(skills.length);

var bio = {
  "name": "Jason",
  "role": "Web Developer",
  "contacts": {
     "mobile": "(917) 207-1982",
     "email": "jason.r.goldfarb@gmail.com",
     "gitHub": "jgoldfarb",
   },
  "welcomeMessage": "This is my online resume",
  "skills": ["awesomeness", "programming", "teaching", "JS"],
  "bioPic": "images/headshot.jpg"
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.mobile);
$("#main").append(bio.contacts.email);
$("#main").append(bio.contacts.gitHub);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
$("#main").append(bio.bioPic);
