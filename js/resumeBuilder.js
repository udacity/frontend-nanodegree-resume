/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ['javascript', "css", "HTML", "PHP", "drupal"];

// javascript object
var bio = {
"name" :  "Alexander Brown",
"role" : "Web Developer",
"email" : "test@test.com",
"github" :   "datadev23",
"picture" : "images.jpg",
"welcome" : "Hello how are you",
"skills" : skills
};


var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';

var formattedName =HTMLheaderName.replace("%data%", bio.name) ;
var formattedRole =HTMLheaderRole.replace("%data%", bio.role) ;
var formatedEmail= HTMLemail.replace("%data%",bio.email);
var formatedGithub = HTMLgithub.replace('%data%', bio.github);
var formattedskills = HTMLskillsStart.replace('%data%', bio.skills);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formatedEmail);
$('#header').append(formatedGithub);
$("#header").append(formattedskills);