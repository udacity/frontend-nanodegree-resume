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
	],
	"display" : function() {
		projects.projects.forEach(function(item) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", item.title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);
			$(".project-entry:last").append(formattedDescription);

			// var formattedImage = HTMLprojectImage.replace("%data%", item.image);
			// $(".project-entry:last").append(formattedImage);
		});
	}
}

var bio = {
	"name" : "Cory Pickrel",
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
			"graduationDate" : "August 2011",
			"location" : "San Marcos"
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

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

function inName() {
	var names = bio.name.trim.split(" ");
	var firstName = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
	var lastName = names[1].toUpperCase();
	return firstName + " " + lastName;
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);

var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(item) {
		var skill = HTMLskills.replace("%data%", item);
		$("#skills").append(skill);
	});
}

function displayWork() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	});	
}
displayWork();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

projects.display();

























