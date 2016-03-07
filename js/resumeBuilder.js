
//generic variables here
var contact = "Here is how to reach me :p";
var name = "Daniel Gallegos";
var picture = "images/fry.jpg";
var role = "Quality Engineer & Scrum Master";
var skills = ["Agile Development", "Scrum Methodology", "Visual Studio 2015", "JavaScript", "GitHub"];
var welcome = "Hey!  Thanks for checking out my Resume!  This is actually the first project I've taken on, it is written in JavaScript, using jQuery and of course HTML and CSS.  Thanks for checking it out!";

//formatted variables go here
var formattedContact = HTMLcontactGeneric.replace("%data%", contact);
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedPicture = HTMLbioPic.replace("%data%", picture);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedSkills = HTMLskills.replace("%data%", skills.join(", "));
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", welcome);


// Object Literal Notion below for 'bio'

var bio = {
  "name": name,
  "role": role,
  "contactinfo": {
    "mobile": "716-514-3622",
    "email": "gallegos20@gmail.com",
    "github": "gallegos20",
    "twitter": "djg35",
    "locatation": "Buffalo, NY"
  },
  "picture": picture,
  "welcome": welcome,
  "skills": skills
};
//
// $("#main").append(bio.name);

bio.city = "Buffalo";
// bio["email"] = "gallegos20@gmail.com";
var work = {};
work["title"] = "Quality Engineer";
work["dates"] = "February 2015 - Current";
work["city"] = "Buffalo";

var education = {};
education.name = "Univeristy at Buffalo";
education.dates = "September 2006 - May 2010";
education.city = "Buffalo";



$("#main").append(bio.city);
$("#main").append(work["title"]);
$("#main").append(education.name);
//Adding Name & Job title to header
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);



//Adding to main
//$("#main").prepend(bio);

// $("#main").append(skills[0]);
// $("#main").append(skills.length);
