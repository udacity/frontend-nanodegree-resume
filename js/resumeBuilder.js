var work = {
	"jobs": [{
		"employer": "Trader Joe's",
		"title": "Crew Member",
		"location": "Marietta, Georgia",
		"dates": "September 2012 - Present",
		"description": "Responsible for creating effective signage and artwork \
			for the store, and for ordering product in different sections. Maintained \
			the company's high standards for customer service and interaction while \
			performing all tasks quickly and efficiently."
		}, {
		"employer": "The Clubhouse at Hackers",
		"title": "Line Cook, Cake Decorator",
		"location": "Statesboro, Georgia",
		"dates": "August 2011 - May 2012",
		"description": "Baked and decorated birthday cakes for on-site parties. \
			Cooperated with team-mates to run the line and prepare ingredients for \
			upcoming shifts."
		}, {
		"employer": "The Foolish Frog",
		"title": "Line Cook",
		"location": "Beaufort, South Carolina",
		"dates": "November 2009 - June 2011",
		"description": "Became an expert in preparing salads, desserts and \
			griddle-cooked items. Defined new standards for the salad station and \
			administered training to fellow employees on said standards."
	}]
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",
			work.jobs[job].employer) + HTMLworkTitle.replace("%data%",
			work.jobs[job].title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",
			work.jobs[job].dates));
		$(".main-right:last").append(HTMLworkLocation.replace("%data%",
			work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",
			work.jobs[job].description));
	}
};

var projects = {
	"projects": [{
		"title": "Place Holder",
		"dates": "February 2016",
		"description": "Lorem ipsum dolor sit amet.",
		"images": [
			"http://lorempixel.com/300/200",
			"http://lorempixel.com/300/200/cats",
			"http://lorempixel.com/300/200/animals"]
		}, {
		"title": "Place Holder",
		"dates": "February 2016",
		"description": "Lorem ipsum dolor sit amet.",
		"images": [
			"http://lorempixel.com/300/200/cats",
			"http://lorempixel.com/300/200/animals",
			"http://lorempixel.com/300/200"]
		}, {
		"title": "Place Holder",
		"dates": "February 2016",
		"description": "Lorem ipsum dolor sit amet.",
		"images": [
			"http://lorempixel.com/300/200/animals",
			"http://lorempixel.com/300/200",
			"http://lorempixel.com/300/200/cats"]
	}]
};

projects.display = function() {
	if (projects !== false) {
		for (var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			for (var image in projects.projects[project].images) {
				$(".main-left:last").append(HTMLprojectImage.replace("%data%",
				projects.projects[project].images[image]));
			}
			$(".main-right:last").append(HTMLprojectTitle.replace("%data%",
				projects.projects[project].title));
			$(".main-right:last").append(HTMLprojectDates.replace("%data%",
				projects.projects[project].dates));
			$(".main-right:last").append(HTMLprojectDescription.replace("%data%",
				projects.projects[project].description));
			$(".project-image").click(function() {
				if ($(this).is(":last-child")) {
					$(this).fadeOut("slow", function() {
						$(".project-image:first-child").fadeIn();
					});
				} else {
					$(this).fadeOut("slow", function (){
						$(this).next().fadeIn();
					});
				}
			});
		}
	}
};

var bio = {
	"name": "Tiffany Stallings",
	"role": "Front End Web Developer",
	"welcomeMessage": "Lorem ipsum dolor sit amet.",
	"skills": [
		"HTML & CSS",
		"JavaScript",
		"Python"],
	"contacts": {
		"mobile": "843-592-6095",
		"email": "tiffany.c.stallings@gmail.com",
		"github": "tiffanystallings",
		"twitter": "@ZameenaRaqs",
		"linkedin": "Tiffany Stallings",
		"blog": "https://tiffanystallings.wordpress.com/",
		"location": "Marietta, GA"
	},
	"biopic": "./images/my_picture.jpg"
};

bio.display = function () {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$(".title").prepend(HTMLheaderName.replace("%data%", bio.name));

	if (bio.contacts !== false) {
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

		$("#topContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
		$("#footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));

		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	}

	$(".first").prepend(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	if (bio.skills !== false) {
	$(".first").append(HTMLskillsStart);

		for (var skill in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
};


var education = {
	"schools": [{
		"name": "Pennsylvania Culinary Institute (Closed 2012)",
		"location": "Pittsburgh, Pennsylvania",
		"degree": "Associate of Specialized Technology",
		"major": "Culinary Arts",
		"dates": "July 2007 - October 2008",
		"url": "https://en.wikipedia.org/wiki/Le_Cordon_Bleu_Institute_of_Culinary_Arts_in_Pittsburgh"
	}],

	"onlineCourses": [{
		"title": "Front End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "February 2016 - In Progress",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}, {
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "February 2016",
		"url": "https://www.udacity.com/courses/ud304"
		}, {
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": "February 2016",
		"url": "https://www.udacity.com/courses/ud804"
		}, {
		"title": "HTML, CSS, JavaScript, and Python",
		"school": "CodeCademy",
		"dates": "January 2015 - April 2015",
		"url": "https://www.codecademy.com/nysari"
	}]
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%",
			education.schools[school].name).replace("#",
			education.schools[school].url));
		$(".main-left:last").append(HTMLschoolDegree.replace("%data%",
			education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",
			education.schools[school].dates));
		$(".main-right:last").append(HTMLschoolMajor.replace("%data%",
			education.schools[school].major));
		$(".main-right:last").append(HTMLschoolLocation.replace("%data%",
			education.schools[school].location));
	}
	$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",
			education.onlineCourses[course].title));
		$(".main-left:last").append(HTMLonlineSchool.replace("%data%",
			education.onlineCourses[course].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",
			education.onlineCourses[course].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",
			education.onlineCourses[course].url));
	}
};

/* TODO: Plug function inName to internationalizeButton if desired.

$("#main").append(internationalizeButton);
function inName(name) {
	var nameArray = name.trim().split(" ");
	var lastName = nameArray[1].toUpperCase();
	var firstName = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase();
	var newName = firstName + " " + lastName;
	return newName;
}
*/

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);