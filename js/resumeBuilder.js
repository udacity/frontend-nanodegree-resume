var bio = {
	"name": "Juan Martin Marco",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "jmmarco@gmail.com",
		"github": "jmmarco",
		"twitter": "@jmmarco",
		"location": "Buenos Aires, ARG"
	},
	"welcomeMessage": "Welcome to my online resume",
	"skills": ["GitHub", "Git", "Python", "HTML/CSS"],
	"biopic": "images/fry.jpg"
}; // Valid JSON!

// Display welcome message!
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedWelcomeMessage);

// Display bio
function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedPicture);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
}
displayBio();






/*
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedPicture);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

}
displayBio();
*/

// Display skills
/*
if (bio.skills.length > 0) {
	$("#header").append("HTMLskillsStart");
	for (var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	}


	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}
*/

/*
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$("#main").append(internationizeButton);
*/

var education = {
	"schools": [
		{
			"name": "Austin Community College",
			"city": "Austin, TX, US",
			"degree": "BA",
			"majors": ["CS"],
			"date": 2003,
			"url": "www.example.com"
		},
		{
			"name": "Stanford University",
			"city": "Stanford, CA, US",
			"degree": "Masters",
			"majors": ["Data Analysis"],
			"date": 2010,
			"url": "www.example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Computer Science 101",
			"school": "Stanford University",
			"date": 2014,
			"url": "class.stanford.edu"
		},
		{
			"title": "Programming Foundations with Python",
			"school": "Udacity",
			"date": 2014,
			"url": "udacity.com"
		}
	]
}; // Valid JSON!

// function for education

function displayEducation() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchool = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
		$(".education-entry:last").append(formattedSchool);
	}
}
displayEducation();

var work = {
	"jobs": [
	{
		"employer": "Udacity",
		"title": "Code Reviewer",
		"location": "Buenos Aires, ARG",
		"date": "2014 - Present",
		"description": "Evaluate and review code for Programming Foundations with Python"
	},
	{
		"employer": "Avaya",
		"title": "Backbone Engineer",
		"location": "Buenos Aires, ARG",
		"date": "2010 - 2013",
		"description": "Break and fix support for Avaya Call Manager"
	},
	{
		"employer": "IBM",
		"title": "Master Trainer",
		"location": "Buenos Aires, ARG",
		"date": "2006 - 2010",
		"description": "Teach and train program fundamentals for new hires and existing staff"
	}
	]
}; // Valid JSON!


var projects = {
	"projects": [
	{
		"title": "Running Plan Generator",
		"date": "Novemeber 2014",
		"description": "Running plan generator for 10, 21 and 42 K with three levels of difficulty"
	},
	{
		"title": "Static Resume Webpage",
		"date": "December 2014",
		"description": "Personal resume designed using a mockup"
	}]
}; // Valid JSON!

function displayWork() {
	for(var job in work.jobs) {
	// create a new div for work experience
	$("#workExperience").append(HTMLworkStart);
	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle  = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

function clicker() {
	$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;

		logClicks(x,y);
	});


}
clicker();


function locationizer(work_obj) {
	var locationArray = [];
	for (var job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}



//var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
//$(".work-entry:last").append(formattedLocation);
/*
var cameron = {};
cameron.job = "course dev";

var makeCourse =  function() {
	// make a course
	console.log("Made a course")
}
var courses = 0;
while(cameron.job === "course dev") {
	makeCourse();
	courses = courses +1;
	if(courses === 10) {
		cameron.job = "learning specialist";
	}
}

console.log(cameron.job)
*/



