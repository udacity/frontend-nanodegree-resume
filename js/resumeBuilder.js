var bio = {
	"name" : "Mark Weigel",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "267-603-2621",
		"email" : "mark@weigel.site",
		"twitter" : "https://twitter.com/markweig",
		"github" : "https://github.com/mrkjesus2",
		"blog" : "http://weigel.site",
		"location" : "Philadelphia, PA"
	},
	"pictureUrl" : "images/Profile.jpg",
	"welcomeMessage" : "This is a test message",
	"skills" : [
		"linux", "logical thought", "javascript soon"
	]
};

var projects = {
	"projects": [
		{
			"title": "Project #",
			"dates": "Fill-YEAR",
			"description": "A cute little description",
			"images": ["url1", "url2"]
		},{
			"title": "Project #",
			"dates": "Fill-YEAR",
			"description": "A cute little description",
			"images": ["url1", "url2"]
		},{
			"title": "Project #",
			"dates": "Fill-YEAR",
			"description": "A cute little description",
			"images": ["url1", "url2"]
		}]

};

var work = {
	"jobs": [
		{
			"employer": "Amis Trattoria",
			"title": "Server",
			"location": "Philadelphia, PA",
			"dates": "July 2012 - Present",
			"description": "You're going to have to be clever here."
		},{
			"employer": "South Philadelphia Tap Room",
			"title": "",
			"location": "Philadelphia, PA",
			"dates": "",
			"description": ""
		},{
			"employer": "Caribou Cafe",
			"title": "",
			"location": "Philadelphia, PA",
			"dates": "",
			"description": ""
		},{
			"employer": "Comedy Cellar",
			"title": "",
			"location": "New York, NY",
			"dates": "",
			"description": ""
		},{
			"employer": "Timberlodge Steakhouse",
			"title": "",
			"location": "Roseville, MN",
			"dates": "",
			"description": ""
		},{
			"employer": "Cub Foods",
			"title": "",
			"location": "Edina, MN",
			"dates": "",
			"description": ""
		}]
	// 	,   TODO:  This will be added later
	// "extracurricular": [
	// 	{
	// 		"name": "Vestals",
	// 		"description": ""
	// 	},{
	// 		"name": "Rattle Clack Entertainment",
	// 		"description": ""
	// 	}]
};

var education = {
	"schools": [
		{
			"name" : "Normandale Community College",
			"location" : "Bloomington, MN",
			"majors" : ["Engineering Prereqs"],
			"graduation" : "Nope",
			"dates" : "Fillin",
			"courseInfo" : "Put your course info here"
		},{
			"name" : "University of Minnesota",
			"location" : "Minneapolis,MN",
			"majors" : ["Liberal Arts"],
			"dates": "Fillin",
			"graduation" : "nope",
			"courseInfo" : "Put your course info here"
		},{
			"name" : "Cooper High School",
			"location" : "Plymouth, MN",
			"majors" : ["College Prep"],
			"dates": "Fillin",
			"graduation" : 1998,
			"courseInfo" : "Put your course info here"
		}
	],
	"onlineCourses": [
		{
			"title" : "Front-End Nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com/"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLtwitter.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPic);
$("#header").append(formattedMessage);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		$("#skills").append(HTMLskills.replace("%data%", skill));
	});
}

function displayWork() {
	for (var job in work.jobs) {
		var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var title =    HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		// Apparently location is a word that can cause problems
		var formlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(employer + title);
		$(".work-entry:last").append(dates);
		$(".work-entry:last").append(formlocation);
		$(".work-entry:last").append(description);
	}
}

displayWork();

projects.display = function() {
	projects.projects.forEach(function(project) {
		var projTitle = HTMLprojectTitle.replace("%data%", project.title);
		var projDates = HTMLprojectDates.replace("%data%", project.dates);
		var projDescription = HTMLprojectDescription.replace("%data%", project.description);
		console.log(projTitle);
		$("#projects").append(HTMLprojectStart);
		$("#projects").append(projTitle);
		$("#projects").append(projDates);
		$("#projects").append(projDescription);
		project.images.forEach(function(image){
			var projImage = HTMLprojectImage.replace("%data%", project.images);
			$("#projects").append(projImage);
		});
	});
};

projects.display();

$("#main").append(internationalizeButton);
$('#mapDiv').append(googleMap);

function inName() {
	var nameArray = bio.name.split(" ");
	firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	lastName = nameArray[1].toUpperCase();
	return firstName + " " + lastName;
}

// I had a perfectly formatted header and they're making me ditch this code




// // These should be replaced with a couple of for loops?
// var formattedSkillsOne = HTMLskills.replace("%data%", bio.skills[0]);
// var formattedSkillsTwo = HTMLskills.replace("%data%", bio.skills[1]);
// var formattedSkillsThree = HTMLskills.replace("%data%", bio.skills[2]);



// $("#header").append(HTMLskillsStart);

// $("#skills").append(formattedSkillsOne);
// $("#skills").append(formattedSkillsTwo);
// $("#skills").append(formattedSkillsThree);
