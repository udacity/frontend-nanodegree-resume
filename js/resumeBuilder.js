/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs" : [
		{
			"employer" : "Amy's Ice Creams",
			"title" : "Assistant Manager",
			"location" : "Austin, TX",
			"dates" : "2003 - 2009",
			"description" : "Making people happy!"
		},
		{
			"employer" : "Texas State University",
			"title" : "Tutor",
			"location" : "San Marcos, TX",
			"dates" : "2009 - 2011",
			"description" : "Tutoring Computer Science Students"
		},
		{
			"employer" : "USAA",
			"title" : "Software Developer",
			"location" : "San Antonio, TX",
			"dates" : "2011 - Present",
			"description" : "Software Engineering and Integration"
		},
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Self-Serve Teller Check",
			"dates" : "2012",
			"description" : "Allow members to create and print their own official (cashier) checks at a kiosk",
			"images" : []
		},
		{
			"title" : "USAA Biometrics",
			"dates" : "2013",
			"description" : "Allow members to authenticate to USAA using biometrics (face, voice, fingerprint)",
			"images" : []
		}
	]
}

var bio = {
	"name" : "Cory",
	"role" : "Software Developer",
	"skills" : ["Java", "iOS", "Web Development"],
	"contacts" : {
		"mobile" : "512-787-8871",
		"email" : "cpickrel4@gmail.com",
		"github" : "ceepick",
		"location" : "Austin, TX"
	},
	"bioPic" : "images/biopic.png",
	"welcomeMessage" : "Hey there, Steam."
}

var education = {
	"schools" : [
		{
			"name" : "Texas State University",
			"type" : "University",
			"majors" : ["Computer Science"],
			"minors" : ["Mathematics"],
			"graduationDate" : "August 2011"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "http://www.udacity.com"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);




