var bio = {
	"name" : "Kevin Palencia",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "(609)742-6772)",
		"email" : "kepalencia@gmail.com",
		"github" : "super-kebin",
		"twitter" : "@supakeebin",
		"location" : "Galloway, NJ, US"
	},
	"picture" : "images/biopic.jpg",
	"welcomeMessage" : "Hello, Welcome to my resume!",
	"skills" : ["Programming", "JS", "HTML", "CSS"]
}

var work = {
	"jobs": [{
		"employer": "ExxonMobil",
		"title": "Gasoline Sales/Safety",
		"location": "Absecon, NJ, US",
		"dates": "2003-2004",
		"description": "Providing service beyond the norm of 'pumping gas' and ensuring that the customers leave the station with upmost satisfaction."
	}, {
		"employer": "Modern Fighting Concepts",
		"title": "Assistant Martial Arts Instructor",
		"location": "Absecon, NJ, US",
		"dates": "2004-2011",
		"description": "Full assistance to instructor throughout lessons, helping and attuning students to achieve safe, proper, efficient techniques, and encouraging students to be strong leaders through the arts of discipline, dedication, and hard work."
	}, {
		"employer": "Bacharach Institute for Rehabilitation",
		"title": "Volunteer/PT Observation",
		"location": "Mays Landing, NJ, US",
		"dates": "2013",
		"description": "Providing assistance for the physical therapist (Cleaning equipments, filing patient reports, small projects)."
	}, {
		"employer": "Bally's Atlantic City",
		"title": "Valet Attendant",
		"location": "Atlantic City, NJ, US",
		"dates": "2013",
		"description": "Welcoming guests upon their entranance to the hotel and ensuring a secure and well-organized service of guest vehicles."
	}]
}

var projects = {
	"projects": [{
		"title": "Build a Portfolio Site",
		"dates": "2015",
		"description": "Replicating a design mockup in HTML and CSS. Making sure the website is responsive for all devices.",
		"images": ["images/compressed/images/website_sample-small.png", "images/compressed/images/website_sample2-small.png"]
	}]
}

var education = {
	"schools": [{
		"name": "Atlantic Cape Community College",
		"location": "Mays Landing, NJ, US",
		"degree": "AS",
		"major": ["Biology"],
		"years": "2004-2012",
		"url": "http://www.atlantic.edu/"
	}, {
		"name": "Richard Stockton University",
		"location": "Pomona, NJ, US",
		"degree": "In Progress",
		"major": ["Biology"],
		"years": "2012-present",
		"url": "http://intraweb.stockton.edu/"
	}],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "2015-present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
}

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

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

	var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#header").append(formattedSkill);
		
	}
}

bio.display();

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedWork = formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription;

		$(".work-entry:last").append(formattedWork);
	}
}

displayWork();

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").prepend(internationalizeButton);

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

$("#mapDiv").append(googleMap);

education.display = function() {
	for (learn in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[learn].name).replace("#", education.schools[learn].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[learn].degree);
		var formattedNameDegree = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[learn].years);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[learn].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[learn].major);
		$(".education-entry:last").append(formattedMajor);
	}


	for (online in education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
}

education.display();