/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = [
    ["creative"],
    ["bilingual"],
    ["experienced"]
  ];
var bio = {
  "name": "Jose ",
  "role": "Front-End ",
  "contact" : {
    "email": "sanchez@gmail.com ",
    "mobile": 0750432321,
    "git" : "https://github.com/0750kosse"
  },
  "message" : "Hello and welcome to my website ",
  "skills" : skills
};
bio.city = "London";
bio.twitter = "@GaryLineker";
bio.image  = "images/me.jpg";


var formattedName = HTMLheaderName.replace("%data%", "Jose C. Sanchez");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGit = HTMLgithub.replace("%data%", bio.contact.git);
var formattedCity = HTMLlocation.replace("%data%", bio.city);

var formattedPic = HTMLbioPic.replace("%data%", "images/me.jpg");
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);

var formattedSkills = HTMLskillsStart;
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGit);
$("#topContacts").append(formattedCity);
$("#topContacts").append(formattedMessage);



