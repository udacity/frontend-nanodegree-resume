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
	for (job in work.jobs) {
		if (work.jobs.hasOwnProperty(job)) {
			// add new div for work info
			$("#workExperience").append(HTMLworkStart);

			// Format and append various work info items
			var formattedEmployer = HTMLworkEmployer.replace("%data%",
				work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",
				work.jobs[job].title);
			// employer and title are part of same element, concatenate
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%",
				work.jobs[job].location)
			$(".work-entry:last").append(formattedLocation);

			var formattedDates = HTMLworkDates.replace("%data%",
				work.jobs[job].dates)
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%",
				work.jobs[job].description)
			$(".work-entry:last").append(formattedDescription);
		}
	}
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

projects.dislpay = function() {
	for (project in projects.projects) {
		if (projects.projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%",
				projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%",
				projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%",
				projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			// loop through image array, if images present
			if (projects.projects[project].images.length > 0) {
				projects.projects[project].images.forEach(function(entry) {
					console.log(entry);
					var formattedImage = HTMLprojectImage.replace("%data%", entry);
					$(".project-entry:last").append(formattedImage);
				})
			}
		}
	}
}

projects.dislpay = function() {

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

}

// Create education object.
var education = {
	"schools": [{
		"name": "University of Washington",
		"location": "Seattle, WA",
		"degree": "BS",
		"majors": ["Mathematics"],
		"dates": "2006 - 2008",
		"url": "www.washington.edu"
	}, {
		"name": "Everett Community College",
		"location": "Everett, WA",
		"degree": "AA",
		"majors": ["Math and Science Emphasis"],
		"dates": "2004 - 2006",
		"url": "http://www.everettcc.edu/"
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

}

// Append data to html
// Append skills
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedHeaderName);

if (bio.skills.length > 0) {

	// Add skills element
	$("#header").append(HTMLskillsStart);

	// Format and append skills
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

}

// run display functions
bio.dislpay();
work.display();
projects.display();
education.display();

// add a map to page
$("#mapDiv").append(googleMap);