var bio = {
	"name": "Philip J. Fry",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "fry@planetexpress.com",
		"github": "fry",
		"twitter": "@fry",
		"location": "New York, NY"
	},
	"welcomeMessage": "Shut up and take my money..",
	"skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
	"biopic": "images/futurama-money.png"
}; // Valid JSON! Verfied @ jsonlint.com


// Display items of the bio object
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedName + formattedRole);
	$("#header").append(formattedPicture + formattedWelcomeMessage);


	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var contactInfo = formattedMobile + formattedEmail + formattedTwitter + formattedLocation;
	$(contactInfo).appendTo("#topContacts, #footerContacts");

	$("#header").append(HTMLskillsStart);
	for (var skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
};
bio.display(); // Call the bio.display function



var education = {
	"schools": [
		{
			"name": "Austin Community College",
			"location": "Austin, TX",
			"degree": "BA",
			"majors": ["Computer Science", "Business Administration"],
			"dates": 2003,
			"url": "www.example.com"
		},
		{
			"name": "Stanford University",
			"location": "Stanford, CA",
			"degree": "Masters",
			"majors": ["Data Analysis", "Rocket Shuttles"],
			"dates": 2010,
			"url": "www.example.com"
		}
	],
	"onlineClases": [
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
			"url": "udacity.com/ud036"
		}
	]
}; // Valid JSON! Verfied @ jsonlint.com

// Display items of the education object
education.display = function() {
	for (var school in education.schools) {
		$("#education-entry").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchool = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
		$(".education-entry:last").append(formattedSchool);
	}
	if (education.onlineClases.length > 0) {
		$("#education-entry").append(HTMLonlineClasses);
		for (var item in education.onlineClases) {
			$("#education").append(HTMLschoolStart);
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClases[item].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClases[item].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineClases[item].date);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineClases[item].url);
			var formattedonline = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
			$(".education-entry:last").append(formattedonline);
		}

	}
};
education.display(); // Call the education.display function

var work = {
	"jobs": [
	{
		"employer": "Udacity",
		"title": "Rocket Scientist",
		"location": "Mountain View, CA",
		"dates": "2014 - Present",
		"description": "Evaluate and review code for new Udacious rocket"
	},
	{
		"employer": "PayPal",
		"title": "Software Architect",
		"location": "Palo Alto, CA",
		"dates": "2010 - 2013",
		"description": "Design high tech payment software"
	},
	{
		"employer": "Ritual Coffee Roast",
		"title": "Master Barista",
		"location": "San Francisco, CA",
		"dates": "2006 - 2010",
		"description": "Brew exquisite coffee"
	}
	]
}; // Valid JSON! Verfied @ jsonlint.com

// Display items of the work object
work.display = function() {
	for(var job in work.jobs) {
	// create a new div for work experience
	$("#workExperience").append(HTMLworkStart);
	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle  = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
};
work.display(); // Call the work.display function

var projects = {
	"projects": [
	{
		"title": "Running Plan Generator",
		"date": "Novemeber 2014",
		"description": "Running plan generator for 10, 21 and 42 K with three levels of difficulty",
		"images": ["images/run.png"]
	},
	{
		"title": "Static Resume Webpage",
		"date": "December 2014",
		"description": "Personal resume designed using a mockup",
		"images": ["images/mockwebsite.png"]
	}]
}; // Valid JSON! Verfied @ jsonlint.com

// Display items of the projects object
projects.display = function() {
	for (var item in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].date);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[item].images.length > 0) {
			for (var image in projects.projects[item].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display(); // Call the projects.display function



function inName(name) {
  bio.name = bio.name.trim().split(" ");
  console.log(name);
  bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();
  bio.name[2] = bio.name[2].toUpperCase();

  return bio.name[0] + " " + bio.name[1] + " " + bio.name[2];
}

// Append the "internationalize" button to the footer
$("#footerContacts").append(internationalizeButton);


// Make Google maps appear!
$("#mapDiv").append(googleMap);