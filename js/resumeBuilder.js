/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append(["Matthew Perkins"])

 // var awesomeThoughts = "I am Matthew and I am AWESOME!";
 // console.log(awesomeThoughts);

 // var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");

 // console.log(funThoughts);

 // $("#main").append(funThoughts);

var skills = ["skiing", "climbing", "coding"]

var bio = {
	name: "Matthew Perkins",
	role: "Entrepreneur bad boy",
	mobile: "07391 449 184",
	email: "mfperkins@gmail.com",
	pictureURL: "http://i.imgur.com/TkwsKIw.jpg",
	welcomeMessage: "Welcome to my incrediballs resume website", 
	skills: skills
}

var work = new Object();
work.start = 2012;
work.position = "Group Product Manager";
work.employer = "The Climate Corp";
work.years = 4;
work.city = "San Francisco";
work.description = "Amazing worthless job"

var education = {
	"schools": [
		{
		"name": "Harvard Business School",
		"years": 2,
		"city": "Boston"
		},
	{
		"name": "University of Durham",
		"years": 4,
		"city": "Durham"
		}
	],
	"onlineCourses": [
	{
		"name": "Udacity",
		"course": "Intro to JavaScript"
	},
	{
		"name": "CodeAcademy",
		"course": "JavaScript for Beginners"
	}
	]
}

var projects = {
	"Climate": [
		{
			"name": "weather forecasting",
			"year": 2014
		},
		{	"name": "overview",
			"year": 2015
		}],
	"Syngenta": [
		{
			"name": "R&D strategy",
			"year": 2010
		},
		{	"name": "ICS Veggies",
			"year": 2011
		}]
	}
	
	
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// $("#header").append(formattedName);

// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// $("#header").append(formattedRole);

// var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
// $("#footerContacts").prepend(formattedMobile);

// var formattedEmail = HTMLemail.replace("%data%", bio.email);
// $("#footerContacts").prepend(formattedEmail);

// // var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL)
// // $("#header").append(formattedPicture);

// var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
// $("#header").append(formattedWelcome);

// var formattedSkills = HTMLskillsStart.replace("%data%", bio.skills)
// $("#education").append(formattedSkills);

// var formattedWorkStart = HTMLworkStart.replace("%data%", work.start);
// var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.position);
// var formattedWorkDates = HTMLworkDates.replace("%data%", work.years);
// var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.city);
// var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.description);

// $("#workExperience").append(formattedWorkEmployer);
// $("#workExperience").append(formattedWorkStart);
// $("#workExperience").append(formattedWorkTitle);
// $("#workExperience").append(formattedWorkDates);
// $("#workExperience").append(formattedWorkLocation);
// $("#workExperience").append(formattedWorkDescription);
	
// var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
// var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.city)

// $("#education").append(formattedSchoolName);
// $("#education").append(formattedSchoolLocation);





