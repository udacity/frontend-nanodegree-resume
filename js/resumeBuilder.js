// End of Javascript Lesson 1 Code Assignment


var bio = {
	"name": "George Fischer",
	"role": "Web Developer",
	"welcomeMessage": "Welcome to My Resume",
	"contacts":
		{
			"mobile": "801-555-5555",
			"email": "geosynchronous@mac.com",
			"github": "https://Geosynchronous.github.io",
			"twitter": "geo-twitter",
			"location": "Salt Lake City"
		},
	"skills":[
			"Front-End Web",
			"Courseware",
			"Physics",
			"Electronics",
			"Instrumentation"
	],
	"bioPic": "images/me.jpg"
}


// Examples of how to print in browser window.
// Remove later.

// $("#main").append(bio["name"]);
// $("#main").append(bio.role);


var education = {
	"schools": [
		{
			"name": "University of Utah",
			"location": "Salt Lake City, UT, US",
			"degree": "BS",
			"majors": ["Biology"],
			"dates": 1977,
			"url": "http://www.utah.edu/"
		},
		{
			"name": "University of Utah",
			"city": "Salt Lake City, UT, US",
			"degree": "MS",
			"majors": ["Physics"],
			"dates": 1980,
			"url": "http://www.utah.edu/"
		},
		{
			"name": "University of Utah",
			"city": "Salt Lake City, UT, US",
			"degree": "Education Certification",
			"majors": ["Secondary School Instructor"],
			"dates": 1984,
			"url": "http://www.utah.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/courses/all"
		}
	]
}

// Remove later.
// $("#main").append(education.schools[0].major);


var work = {
	"jobs":[
		{
			"employer": "City Academy Charter School",
			"title": "Engineering Teacher",
			"location": "Salt Lake City, UT",
			"dates": "2013 - 2014",
			"description": "Taught Digital Electronics Course & Engineering Design Courses with AutodDesk Inventor 3D-CAD."
		},
		{
			"employer": "Home",
			"title": "Domestic Engineer",
			"location": "Salem, UT",
			"dates": "1995 - 2013",
			"description": "Did the Mr. Mom thing in a semi-rural location.  Supplemented public education with additional home schooling."
		},
		{
			"employer": "Math Department, University of Utah",
			"title": "LAN Coordinator",
			"location": "Salt Lake City, UT",
			"dates": "1993 - 1995",
			"description": "Assisted Network Administrator serving departmental users & maintaining netowrk infrastructure."
		},
		{
			"employer": "Wasatch Educations Systems",
			"title": "Courseware Developer",
			"location": "Salt Lake City, UT",
			"dates": "1986 - 1993",
			"description": "Developed interactive mastery physics and adult education courseware. Developed simulations and teacher guides."
		},
		{
			"employer": "Park City High School",
			"title": "Physics & Biology Teacher",
			"location": "Park City, UT",
			"dates": "1985 - 1986",
			"description": "Taught Physics and Biology, with an emphasis on labwork."
		},
		{
			"employer": "Wasatch Education Systems",
			"title": "Programmer",
			"location": "Salt Lake City, UT",
			"dates": "1984 - 1985",
			"description": "Programmed biology courseware and simulations."
		},
		{
			"employer": "National Solar Observatory",
			"title": "Physics Intern",
			"location": "Sunspot, NM",
			"dates": "Summer 1984",
			"description": "Designed and tested rugged stand-alone solar tracking data loggers for worldwide remote mountain-top surveys."
		},
		{
			"employer": "Quartex",
			"title": "Research Engineer",
			"location": "Salt Lake City, UT",
			"dates": "1983",
			"description": "R&D for crystal oscillator technologies, used in lab weighing scales. Eliminated reproducibility production problems."
		},
		{
			"employer": "Eaton Kenway",
			"title": "Electrical Engineer",
			"location": "Salt Lake City, UT",
			"dates": "1982",
			"description": "Storage-retrieval robot development and configuration."
		},
		{
			"employer": "Physics, University of Utah",
			"title": "Electrical Engineer",
			"location": "Salt Lake City, UT",
			"dates": "1981",
			"description": "Finished Cosmic Ray Research work on Fly's Eye Project. A data acquisition array of 80 large UV telescopes."
		},
		{
			"employer": "Physics, University of Utah",
			"title": "Teaching Assistant",
			"location": "Salt Lake City, UT",
			"dates": "1978 - 1981",
			"description": "Taught graduate level analog & digital electronics, and computer interfacing labs."
		},
		{
			"employer": "University of Utah",
			"title": "Research Assistant",
			"location": "Salt Lake City, UT",
			"dates": "1974 - 1980",
			"description": "As a student, worked in chemistry, molecular biology, biochemistry and physics labs."
		}
	]
}

var projects = {
	"projects":[
		{
			"title": "Portfolio",
			"dates": "Oct-Nov 2015",
			"description": "Udacity Nanodegree Front-End Web Design project to create a website portfolio.",
			"images":[
				"images/me.jpg"
			]
		},
		{
			"title": "Healtcare Website",
			"dates": "Jan-March 2009",
			"description": "Created a set of interactive webpages for Full Circle Care, and Naturopathic Clinic.",
			"images":[
				"images/me.jpg"
			]
		},
		{
			"title": "Physics Courseware",
			"dates": "1989-2000",
			"description": "Designed and developed an interactive physics course on sound, with real-world simulations and a simulated lab with measurirng instruments.",
			"images":[
				"images/me.jpg"
			]
		}
	]
}

// This code added from beginning of Lesson 2 and still needs work

$("#header").append(HTMLheaderName);

if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
}


// Display Work Experience Category and Attributes

function displayWork() {



	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

	 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length>0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

projects.display();


// Logs user mouse click positions.

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

  	logClicks(x,y);

});
