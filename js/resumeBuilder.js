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
}

var projects = {
	"projects": [{
		"title": "Place Holder",
		"dates": "February 2016",
		"description": "Lorem ipsum dolor sit amet.",
		"images": [
			"http://placehold.it/300x200",
			"http://placehold.it/300x200",
			"http://placehold.it/300x200"]
		}, {
		"title": "Place Holder",
		"dates": "February 2016",
		"description": "Lorem ipsum dolor sit amet.",
		"images": [
			"http://placehold.it/300x200",
			"http://placehold.it/300x200",
			"http://placehold.it/300x200"]
		}, {
		"title": "Place Holder",
		"dates": "February 2016",
		"description": "Lorem ipsum dolor sit amet.",
		"images": [
			"http://placehold.it/300x200",
			"http://placehold.it/300x200",
			"http://placehold.it/300x200"]
	}]
}

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
		"location": "Marietta, GA"
	}
}

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

}
function displaySkills() {
	if (bio.skills !== false) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",
			work.jobs[job].employer) + HTMLworkTitle.replace("%data%",
			work.jobs[job].title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",
			work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",
			work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",
			work.jobs[job].description));
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart)
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",
			projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",
			projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",
			projects.projects[project].description));

		for (image in projects.projects[project].images) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%",
				projects.projects[project].images[image]));
		}
	}
}

$("#main").append(internationalizeButton);
function inName(name) {
	var nameArray = name.trim().split(" ");
	var lastName = nameArray[1].toUpperCase();
	var firstName = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase();
	var newName = firstName + " " + lastName;
	return newName;
}

displaySkills();
displayWork();
projects.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {

});