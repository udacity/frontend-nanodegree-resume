// work data object
var work = {
	"jobs": [{
		"employer": "Mercer Consulting",
		"title": "Implementation Services Team Leader",
		"location": "Philadelphia, PA",
		"dates": "2014 - 2016",
		"description": "team lead for pension software implementation"
	}, {
		"employer": "Towers Watson",
		"title": "Calculation Developer",
		"location": "Philadelphia, PA",
		"dates": "2011 - 2014",
		"description": "Implemented pension software code"
	}]
};

// projects data object
var projects = {
	"projects": [{
		"title": "title 1",
		"dates": "dates 1",
		"description": "description 1",
		"images": [
			"image url 1", "image url 2"
		]
	}, {
		"title": "title 2",
		"dates": "dates 2",
		"description": "description 2",
		"images": [
			"image url 3", "image url 4"
		]
	}]
};

// Create bio object to contain biographical info.
var bio = {
	"name": "Josef Mirante",
	"role": "Web Developer",
	"welcomeMessage": "Great news everybody!",
	"bioPic": "images/fry.jpg",
	"contacts": {
		"mobile": "(360) 540 0952",
		"email": "josef.mirante@gmail.com",
		"github": "josef.mirante",
		"twitter": "nobody",
		"location": "Philadelphia"
	},
	"skills": ["red hair", "rapier-like wit", "humbleness"]
};



// Create education object.
var education = {
	"schools": [{
		"name": "University of Washington",
		"location": "Seattle, WA",
		"degree": "BS",
		"dates": "2006 - 2008",
		"majors": ["Mathematics"]
	}, {
		"name": "Everett Community College",
		"location": "Everett, WA",
		"degree": "AA",
		"dates": "2004 - 2006",
		"majors": ["Math and Science Emphasis"]
	}]
};

// below is prior work for displaying data in webpage, commenting out
// for now.

// // Append name and roll information to header.
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// // Append contact information to top contacts
// var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
// var formattedEmail = HTMLemail.replace("%data%", bio.email);
// var formattedGithub = HTMLgithub.replace("%data%", bio.github);
// var formattedLocation = HTMLlocation.replace("%data%", bio.location);

// $("#topContacts").append(formattedMobile);
// $("#topContacts").append(formattedEmail);
// $("#topContacts").append(formattedGithub);
// $("#topContacts").append(formattedLocation);

// // Append bio image.
// var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);

// $("#header").append(formattedPictureURL);

// // Append welcome message.
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

// $("#header").append(formattedWelcomeMsg);

// // Append skills title.
// $("#header").append(HTMLskillsStart);

// // Append skills.
// var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
// $("#skills").append(formattedSkill);
// var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
// $("#skills").append(formattedSkill);
// var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
// $("#skills").append(formattedSkill);

// // Append work history
// var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title);
// var formattedWorkDates = HTMLworkDates.replace("%data%", work.dates);
// var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
// $("#workExperience").append(HTMLworkStart);
// $(".work-entry").append(formattedEmployer);
// $(".work-entry").append(formattedWorkTitle);
// $(".work-entry").append(formattedWorkDates);
// $(".work-entry").append(formattedWorkLocation);

// // Append education history
// var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
// var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].city);
// $("#education").append(HTMLschoolStart);
// $(".education-entry").append(formattedSchoolName);
// $(".education-entry").append(formattedSchoolLocation);
