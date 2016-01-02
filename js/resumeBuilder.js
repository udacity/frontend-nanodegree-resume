/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name" : "Matthew Magee", 
	"role" : "Software Developer",
	"contacts" : {
	"phone" : "907-414-3717",
	"email" : "matthewmagee05@gmail.com",
	"github" : "https://github.com/matthewmagee05",
	"twitter" : "@matthewmagee05",
	"location" : "San Diego"
},
	"welcomeMessage" : "This is a welcome message",
	"skills" : ["java", " html", " css", " javascript", " unity"],
	"bioPic" : "http://www.alimits.com/login/repository/Puzzle/03.png"
};

var work = {
	"position" : "Wheeled Vehicle Mechanic",
	"employer" : "United States Army",
	"years" : "2005-2014",
	"city" : "Fort Hood, Texas"
}


// JSON Example
var education = {
	"schools": [
		{
			"name" : "Coleman University",
			"location" : "San Diego, CA",
			"degree" : "Bachelors of Science",
			"majors" : ["CIS"],
			"dates" : "2015 to present"
		}
		
	],
	"onlineCourses": [
		{
			"title" : "Front-End Developer Nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com"
		}
	]
}

var projects = {
	"projects": [
		{
			"title" : "Sample Project 1",
			"dates" : "2015 to present",
			"description" : "description will go here",
			"images" : "http://www.alimits.com/login/repository/Puzzle/03.png"
		}
		
	]
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkillsStart = HTMLskillsStart.replace("%data%", "Heres mah skills");
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);
$("#header").append([formattedPhone]);
$("#header").append([formattedEmail]);
$("#header").append([formattedTwitter]);
$("#header").append([formattedGithub]);
$("#header").append([formattedLocation]);
$("#header").prepend([formattedPicture]);
$("#header").append([formattedWelcomeMessage]);
$("#header").append([HTMLskillsStart]);
$("#header").append([formattedSkills]);

$("#header").append(work["position"]);
$("#header").append(education.name);