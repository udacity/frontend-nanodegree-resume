//initialize bio object
var bio = {
	"name" : "Dmitriy O. Makarov",
	"role" : "Aspiring Front End Engineer",
	"contacts" : {
		"mobile" : "630-207-7606",
		"email" : "dmakarov@iphorgan.net",
		"github" : "hackdev",
		"twitter" : "@musewanted",
		"location" : "Buffalo Grove, IL"
		},
	"welcomeMessage" : "Family man and aspiring front-end developer. Sushi muncher. Harley fanboy. Happy camper.",
	"skills" : ["HTML", "CSS", "JavaScript", "jQuery"],
	"biopic" : "images/dom.jpg"
}

//define bio display function
bio.display = function() {

	//replace placeholder text for name and role with JSON data
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	//insert name and role at the start of the header div
	$("#header").prepend(formattedRole).prepend(formattedName);

	//iterate through contacts object to insert contact info
	for (var contact in bio.contacts) {

		//replace placeholder text with contact label and value
		var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);

		//insert contact info at the topContacts and footerContacts divs
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
	};

	//populate photo url and welcome message with JSON data
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	//add photo and message to the header div
	$("#header").append(formattedBiopic).append(formattedWelcomeMessage);

	//display skills if available
	//check whether skills array has content
	if (bio.skills.length > 0) {

		//add Skills heading and ul to header div
		$("#header").append(HTMLskillsStart);

		//iterate through skills array to insert skills
		for (var skill in bio.skills) {

			//replace placeholder text with JSON data
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

			//insert skill list item into skills ul
			$("#skills").append(formattedSkill);
		}
	}
}

//initialize work object
var work = {
	"jobs": [
		{
			"employer": "IpHorgan Ltd.",
			"title" : "Attorney / Chief Software Architect",
			"location" : "Bufalo Grove, IL, US",
			"dates" : "August 2006 - Present",
			"description" : "I am an intellectual property lawyer with expertise in Anti-counterfeiting, Copyright, Domain-Name, Trademark, Trade Identity and Unfair Competition law matters. I am also responsible for the firm's IT infrastructure and oversee the development, integration and maintenance of custom practice management software applications.",
			"url" : "http://www.iphorgan.com/"
		},

		{
			"employer": "Velvet Aardvark",
			"title" : "Photographer / Webmaster",
			"location" : "Bufalo Grove, IL, US",
			"dates" : "July 2010 - Present",
			"description" : "I am a professional photographer specializing in lifestyle child and family portraiture. I am also the webmaster and will be re-designing the website once I am done with the Front-End Web Developer Nanodegree.",
			"url" : "http://www.velvetaardvark.com/"
		}
	]
}

//define work display function
work.display = function() {

	//iterate through jobs array and insert jobs
	work.jobs.forEach(function (job) {

		//add work-entry div to workExperience div
		$("#workExperience").append(HTMLworkStart);

		//replace placeholder text for each object property with JSON data
		var formattedEmployer = HTMLworkEmployer.replace("#", job.url).replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

		//insert formatted properties into the last work-entry div
		$(".work-entry:last").append(formattedEmployerTitle)
			.append(formattedLocation)
			.append(formattedDates)
			.append(formattedDescription);
	});
}

//initialize projects object
var projects = {
	"projects": [
		{
			"title": "Portfolio Site",
			"dates" : "2015",
			"description" : "Converted provided PDF design mockup into a responsive website using hand-coded, standards-compliant HTML and CSS. More specifically, this project involved creating a DOM tree to organize and structure the page content; using appropriate HTML5 semantic tags to describe page elements; and applying grid-based layout- and responsive-design principles to ensure the site renders appropriately and includes all required components when viewed on each of the required devices—iPad, Nexus 5 phone, and a laptop.",
			"images" : ["images/p1.jpg", "images/p2.jpg", "images/p3.jpg"],
			"url" : "https://github.com/hackdev/build-a-portfolio-site_1"
		},

		{
			"title": "Online Resume",
			"dates" : "2015",
			"description" : "This is a work in progress.",
			"images" : ["images/fry.jpg", "images/fry.jpg"],
			"url" : "https://github.com/hackdev/frontend-nanodegree-resume"
		}
	]
}

//define projects display function
projects.display = function() {

	//iterate through projects array and insert projects
	for (project in projects.projects) {

		//add project-entry div to projects div
		$("#projects").append(HTMLprojectStart);

		//replace placeholder text for each object property with JSON data
		var formattedTitle = HTMLprojectTitle.replace("#", projects.projects[project].url).replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		//insert formatted properties into the last project-entry div
		$(".project-entry:last").append(formattedTitle)
			.append(formattedDates)
			.append(formattedDescription);

		//insert images if available
		//check whether images array has content
		if (projects.projects[project].images.length>0){

			//iterate through project images array to insert images
			for (var image in projects.projects[project].images) {

				//replace placeholder text with url from JSON data
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

				//insert image into the last project-entry div
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

//initialize education object
var education = {
	"schools": [
		{
			"name" : "North Central College",
			"location" : "Naperville, IL, US",
			"degree" : "Bachelor of Science",
			"majors" : ["International Business"],
			"minors" : ["French"],
			"dates" : 2002,
			"url" : "http://www.noctrl.edu/"
		},

		{
			"name" : "DePaul University College of Law",
			"location" : "Chicago, IL, US",
			"degree" : "Juris Doctor",
			"majors" : ["Intellectual Property Law"],
			"minors" : [],
			"dates" : 2005,
			"url" : "http://law.depaul.edu"
		}
	],

	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},

		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},

		{
			"title" : "Responsive Images",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/responsive-images--ud882"
		},

		{
			"title" : "Version Control with Git and GitHub",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud775-nd/"
		},

		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		},

		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/course/intro-to-jquery--ud245"
		}
	]
}

//define education display function
education.display = function() {

	//determine the number of schools in schools array
	var length = education.schools.length;

	//iterate through schools in reverse chronological order and insert school details
	while (length--) {

		//add education-entry div to education div
    	$("#education").append(HTMLschoolStart);

    	//replace placeholder text for each object property with JSON data
    	var formattedSchool = HTMLschoolName.replace("%data%", education.schools[length].name).replace('#', education.schools[length].url);
    	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[length].location);
    	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[length].degree);
 		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[length].dates);

 		//insert formatted properties into the last education-entry div
		$(".education-entry:last").append(formattedSchool);
  		$(".education-entry:last a").append(formattedDegree);
		$(".education-entry:last").append(formattedLocation)
				.append(formattedDates);

		//insert majors if available
		//check whether majors array has content
		if (education.schools[length].majors.length > 0){

			//iterate through majors array to insert majors
			for (var major in education.schools[length].majors) {

				//replace placeholder text with JSON data
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[length].majors[major]);

				//insert major into the last education-entry div
				$(".education-entry:last").append(formattedMajor);
			}
		}

		//insert minors if available
		//check whether minors array has content
		if (education.schools[length].minors.length > 0){

			//iterate through minors array to insert minors
			for (var minor in education.schools[length].minors) {

				//replace placeholder text with JSON data
				var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[length].minors[minor]);

				//insert minor into the last education-entry div
				$(".education-entry:last").append(formattedMinor);
			}
		}
    }

    //insert online courses if available
	//check whether onlineCourses array has content
    if (education.onlineCourses.length > 0){

    	//add Online Classes heading to education div
    	$("#education").append(HTMLonlineClasses);

    	//iterate through onlineCourses array to insert courses
		education.onlineCourses.forEach(function (course) {

			//replace placeholder text with JSON data
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedDate = HTMLonlineDates.replace("%data%", course.date);
			var formattedURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);

			//create new education-entry div
			$("#education").append(HTMLschoolStart);

			//insert course details into the last education-entry div
			$(".education-entry:last").append(formattedTitle + formattedSchool)
				.append(formattedDate)
				.append(formattedURL);
		});
	}

}

//adding a d3.js visualization
function graph() {

	//initialize proficiency object
	var proficiency = {
		"skills": [
			{
				"skill": "HTML",
				"comfortLevel" : 60
			},

			{
				"skill": "CSS",
				"comfortLevel" : 50
			},

			{
				"skill": "JavaScript",
				"comfortLevel" : 10
			},

			{
				"skill": "jQuery",
				"comfortLevel" : 20
			}
		]
	}

	//iterate through skills array and create a radial for each skill
	for (var skill in proficiency.skills) {
       var rp =  radialProgress($('#div'+skill)[0]) //[0] returns a HTML DOM Object instead of a jQuery Object, source: http://stackoverflow.com/questions/4069982/document-getelementbyid-vs-jquery
                	.label(proficiency.skills[skill].skill)
                	.diameter(150)
                	.value(proficiency.skills[skill].comfortLevel)
                	.render();
		}
}

//calling display functions to populate the page
bio.display();
work.display();
projects.display();
education.display();
graph();

//adding map
$("#mapDiv").append(googleMap);

//outputting click locations to console
$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});