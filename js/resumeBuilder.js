/*
work object
*/
var work = [
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
];

/*
projects object
*/
var projects = {
	"projects" : [
		{
			"title" : "This Works For Now",
			"dates" : 2012,
			"description" : "Graphic prints and instalation shown att Grafiska Sälskapet.",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title" : "Something",
			"dates" : 2012,
			"description" : "Graphic prints for live event.",
			"images" : ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
		}
	]
};

/*
bio object
*/
var bio = {
	"name" : "Chris Clemons",
	"role" : "Visual Designer and Web Developer",
	"contact" : {
		"email" : "info@phonofidelic.com",
		"mobile" : "555-555-5555"
	},
	"welcomeMessage" : "Hello bla bla bla",
	"skills" : ["design", "printing", "art"]
};

/*
education object
*/
var education = {
	"schools" : [
		{
			"name" : "Stockholms Universitet",
			"location" : "Stockholm, Sweden",
			"area" : "Philosophy and linguistics",
			"years" : "2011-2013"
		},
		{
			"name" : "Grafikskolan",
			"location" : "Stockholm, Sweden",
			"area" : "Print making",
			"years" : "2009-2011"
		}
	],
	"onlineCourses" : [
		{
			"name" : "Udacity",
			"title" : "Front-end web development",
			"dates" : "2014-2015",
			"URL" : '<a href="https://www.udacity.com", target="blank">Website</a>'
		}
	]
};

/*
name start
*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

/*
role start
*/
var formattedRole = HTMLheaderRole.replace("%data%", "Design & Printing");
$("#header").append(formattedRole);

/*
biopic start
*/
var formattedBioPic = HTMLbioPic.replace("%data%", "images/me.jpg");
$("#header").append(formattedBioPic);

/*
contact start
*/
var formattedContact = HTMLemail.replace("%data%", bio.contact.email);
$("#header").append(formattedContact);

var formattedContact = HTMLmobile.replace("%data%", bio.contact.mobile);
$("#header").append(formattedContact);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skillsH3").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skillsH3").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skillsH3").append(formattedSkill);
}

/*
work experience start
*/
function displayWork() {
	for (job in work) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		var formattedWorkDates = HTMLworkDates.replace("%data%", work[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[job].description);

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
// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;

// 	logClicks(x,y);
// });

/*
international name changer (!NOT WORKING!)
*/
// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase(); + name[0].slice(1).toLowercase();

// 	return name[0] + " " + name[1];
// }
// $("#main").append(internationalizeButton);

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

$("#projects").append(projects.display);

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

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
		$(".online-entry").append(formattedOnlineURL);
	}
}

$("#education").append(education.display);

/*
map start
*/
$("#mapDiv").append(googleMap);