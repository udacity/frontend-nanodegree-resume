// work data object
var work = {
	"jobs": [{
		"employer": "Mercer Consulting",
		"title": "Implementation Services Team Leader",
		"location": "Philadelphia, PA",
		"dates": "2014 - Present",
		"description": "team lead for pension software implementation"
	}, {
		"employer": "Towers Watson",
		"title": "Calculation Developer",
		"location": "Philadelphia, PA",
		"dates": "2011 - 2014",
		"description": "Implemented pension software code"
	}]
};

work.display = function() {
	work.jobs.forEach( function(job) {
		// Append work entry
		$("#workExperience").append(HTMLworkStart);

		// Append employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%",
			job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",
			job.title);
		// Employer and title are part of same element, concatenate
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		// Append location, formatted dates, job description
		var formattedLocation = HTMLworkLocation.replace("%data%",
			job.location)
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%",
			job.dates)
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",
			job.description)
		$(".work-entry:last").append(formattedDescription);
	})
}

// projects data object
var projects = {
	"projects": [{
		"title": "title 1",
		"dates": "2016 - 2016",
		"description": "description 1",
		"images": [
			"images/fry.jpg", "images/fry.jpg"
		]
	}, {
		"title": "title 2",
		"dates": "2016 - 2016",
		"description": "description 2",
		"images": [
			"images/fry.jpg", "images/fry.jpg"
		]
	}]
};

projects.display = function() {
	projects.projects.forEach( function(project){

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",
			project.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",
			project.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",
			project.description);
		$(".project-entry:last").append(formattedDescription);

		// loop through image array, if images present
		if (project.images.length > 0) {
			project.images.forEach(function(entry) {
				var formattedImage = HTMLprojectImage.replace("%data%", entry);
				$(".project-entry:last").append(formattedImage);
			})
		}
	})
}

// Create bio object to contain biographical info.
var bio = {
	"name": "Josef Mirante",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(360) 540 0952",
		"email": "josef.mirante@gmail.com",
		"github": "josef.mirante",
		"twitter": "nobody",
		"location": "Philadelphia"
	},
	"welcomeMessage": "Great news everybody!",
	"skills": ["red hair", "rapier-like wit", "humbleness"],
	"biopic": "images/fry.jpg"
};

bio.display = function() {
	// Prepend name and role
	formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	// Append contact info
	formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	// Append pic and welcome message
	formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);
	formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	// Append skills title and skills
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach( function(skill) {
    	formattedSkill = HTMLskills.replace("%data%", skill);
    	$("#skills").append(formattedSkill);
	});
}

// Create education object.
var education = {
	"schools": [{
		"name": "University of Washington",
		"location": "Seattle, WA",
		"degree": "BS",
		"majors": ["Mathematics"],
		"dates": "2006 - 2008",
		"url": "https://www.washington.edu"
	}, {
		"name": "Everett Community College",
		"location": "Everett, WA",
		"degree": "AA",
		"majors": ["Math and Science Emphasis"],
		"dates": "2004 - 2006",
		"url": "https://www.everettcc.edu/"
	}],
	"onlineCourses": [{
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"dates": "April 2016 - June 2016",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "July 2016 - Present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
};

education.display = function() {
	education.schools.forEach( function(school) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedNameDegree = formattedName + formattedDegree;
		var formattedNameDegree = formattedNameDegree.replace("#", school.url);
		$(".education-entry:last").append(formattedNameDegree);

		formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedDates);

		formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedLocation);

		school.majors.forEach( function(major) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", major);
			$(".education-entry:last").append(formattedMajor);
		})
	})

	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach( function(course) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		var formattedTitleSchool = formattedTitleSchool.replace("#", course.url);
		$(".education-entry:last").append(formattedTitleSchool);

		formattedDates = HTMLonlineDates.replace("%data%", course.dates);
		$(".education-entry:last").append(formattedDates);

		formattedURL = HTMLonlineURL.replace("%data%", course.url);
		$(".education-entry:last").append(formattedURL);
	})
}



// run display functions
bio.display();
work.display();
projects.display();
education.display();

// add a map to page
$("#mapDiv").append(googleMap);