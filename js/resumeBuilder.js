/*
bio object
*/
var bio = {
	"name" : "Chris Clemons",
	"role" : "Visual Designer and Web Developer",
	"contacts" : {
		"email" : "info@phonofidelic.com",
		"mobile" : "555-555-5555",
		"location" : "Ft. Lauderdale",
		"twitter" : "@ phonofidelic",
		"github" : "github.com/phonofidelic",
		"blog" : '<a href="http://www.phonofidelic.tumblr.com", target="blank">phonofidelic.tumblr</a>'
	},
	"welcomeMessage" : "Hello bla bla bla bla bla bla bla bla bla bla bla bla",
	"skills" : ["design", "printing", "art", "web development"],
	"bioPic" : "images/me.jpg"
}

/*
education object
*/
var education = {
	"schools" : [
		{
			"name" : '<a href="http://www.philosophy.su.se/english", target="blank">Stockholm University</a>',
			"location" : "Stockholm, Sweden",
			"area" : "Philosophy and linguistics",
			"years" : "2011-2013",
			"url" : ""
		},
		{
			"name" : '<a href="http://www.grafikskolan.se/article.asp?kat=13&id=48", target="blank">College of Printmaking Arts</a>',
			"location" : "Stockholm, Sweden",
			"area" : "Print making",
			"years" : "2009-2011",
			"url" : ""
		}
	],
	"onlineCourses" : [
		{
			"name" : "Udacity",
			"title" : "Front-end web development",
			"dates" : "2014-2015",
			"url" : '<a href="https://www.udacity.com", target="blank">Website</a>'
		}
	]
}

/*
work object
*/
var work = {
	"jobs" : [
		{
			"employer" : "Phonofidelic",
			"title" : "Graphic designer",
			"location" : "Stockholm, Sweden & Ft Lauderdale, FL",
			"dates" : "2006-2015",
			"description" : "describe"
		},
		{
			"employer" : "Imperial Recordings",
			"title" : "Graphic artist, printer",
			"location" : "Stockholm, Sweden",
			"dates" : "2012",
			"description" : "describe"
		}
	]
}

/*
projects object
*/
var projects = {
	"projects" : [
		{
			"title" : "This Works For Now",
			"dates" : 2012,
			"description" : "Graphic prints and instalation shown att Grafiska Sälskapet.",
			"images" : ["images/proj1_1.jpg", "images/proj1_2.jpg"]
		},
		{
			"title" : "Something",
			"dates" : 2012,
			"description" : "Graphic prints for live event.",
			"images" : ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
		}
	]
}


/*
name, role start
*/
var formattedNameRole = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", "Design & Printing");
$("#header").prepend(formattedNameRole);

/*
biopic start
*/
var formattedBioPic = HTMLbioPic.replace("%data%", "images/me.jpg");
$("#header").append(formattedBioPic);

/*
welcomeMsg start
*/
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

/*
contact start
*/
bio.contacts.display = function() {

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts, #footerContacts").append(formattedEmail);
	$("#topContacts, #footerContacts").append(formattedMobile);
	$("#topContacts, #footerContacts").append(formattedTwitter);
	$("#topContacts, #footerContacts").append(formattedBlog);
	$("#topContacts, #footerContacts").append(formattedGithub);
	$("#topContacts, #footerContacts").append(formattedLocation);
}
bio.contacts.display();

/*
skills start
*/
bio.skills.display = function() {
	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkill);

		//formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		//$("#header").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#header").append(formattedSkill);
	}
}
bio.skills.display();

/*
work experience start
*/
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

displayWork();

/*
click tracker
*/
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

/*
international name changer
*/
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

/* 
projects start 
*/
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

/*
education start
*/
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolArea = HTMLschoolDegree.replace("%data%", education.schools[school].area);
		$(".education-entry:last").append(formattedSchoolArea);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		$(".education-entry:last").append(formattedSchoolDates);
	}
	for (course in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLonlineStart);

		var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".online-entry").append(formattedOnlineName);

		var formattedOnlineName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
		$(".online-entry").append(formattedOnlineName);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".online-entry").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".online-entry").append(formattedOnlineURL);
	}
}

education.display();

/*
map start
*/
$("#mapDiv").append(googleMap);