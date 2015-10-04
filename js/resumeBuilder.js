//activates the tabs for each menu
$('.menu .item').tab();

//Work JSON //
var work = {
	"jobs": [
	{
		"employer": "Statistics New Zealand",
		"title": "Solutions Architect",
		"location": "Hinemoa Street, Wellington",
		"dates": "2014-2015",
		"description": "As a Solutions Architect I provide technical advice and design. I enable the development and documentation of operational solution architectures that meet the evolving IT requirements to deliver Statistics NZ's strategic priorities."
	},
	{
		"employer": "Itree",
		"title": "Technical Business Analyst",
		"location": "Grey Street, Wellington",
		"dates": "2013-2014",
		"description": "Hired to engage with clients and their respective stakeholders on site, conduct workshops to identify, define & analyse business and technical requirements, produce effective documentation, design software solutions and manage agile solution development. Identified and defined requirements on projects for both The Ministry for Primary Industries and Maritime New Zealand. Designed and implemented the SeaCert and MOSS Software Solution for Maritime New Zealand on time and within budget. Developed Seafarer Licenses in both card and passport formats primarily using SQL. Completed data migration analysis, mapping and requirements for Maritime New Zealand."
	},
	{
		"employer": "Talent2",
		"title": "Business Analyst",
		"location": "The Terrace, Wellington",
		"dates": "2011-2013",
		"description": "Promoted to a Business Analyst role where I was responsible for functional and non-functional requirements gathering and analysis, business process analysis and documentation, engaging with stakeholders and eliciting user requirements for both Transpower and The Ministry of Education. Identified and defined the user and software requirements enabling the successful implementation of the Transpower HRIS solution. Procured a software solution and developed business process and procedure manuals for the management of a debt ledger created from payroll over-payments. Identified and defined user and software requirements for an urgent payment stop system feature to prevent inaccurate payments."
	}]
};

//projects JSON
var projects = {
	"projects": [
	{
		"title": "Portfolio Site",
		"dates": "2015",
		"description": "Developed a responsive website that displays images, descriptions and links to each of the portfolio projects that I completed through Udacity for the Front-End Web Developer Nanodegree.",
		"images" : ["images/portfoliowebsite.jpg"]
	},
	{
		"title": "Interactive Resume",
		"dates": "2015",
		"description": "Developed an interactive resume application that reads resume content from a JSON file and dynamically displays that content within an online resume webpage. The webpages uses objects, functions, conditionals, and control structures to compose the content that is displayed on the resume.",
		"images": ["images/onlineresume.jpg"]
	}]
};

//bio JSON
var bio = {
	"name" : "Ross Drury",
	"role" : "Solutions Architect",
	"contacts": {
		"email" : "ross.drury@gmail.com",
		"mobile" : "027 555 5555",
		"github" : "https://github.com/rosso007/",
		"twitter": "I don't use this!?!",
		"location" : "Wellington City",
		"blog" : "Maybe one day.."
	},
	"welcomeMessage" : "Stay awhile and listen...",
	"skills" : [
		"Integration", "Design", "UML", "Viewpoints & Perspectives Modelling", "Enterprise Architecture", "Component Modelling", "UI Design"
	],
	"pic" : "images/bio.jpg"
};

//education JSON
var education = {
	"schools": [
	{
		"name": "The Open Polytechnic of New Zealand",
		"location": "Kelburn Parade, Wellington, New Zealand",
		"degree": "Bachelors",
		"majors": [
			"Management",
			"Information Systems"
			],
		"dates": "2009-2011",	
	}],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
	}]
};

//encapsulated display function to populate JSON data within the correct tab.
education.display = function () {
	$("#education").append(HTMLschoolStart);

	for (var school in education.schools) {
		if (education.schools.hasOwnProperty(school)){
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedName);	
			$(".education-entry:last").append(formattedLocation);	
			$(".education-entry:last").append(formattedDegree);	
			$(".education-entry:last").append(formattedDates);	
			if (education.schools[school].majors.length > 0) {
				for (var major in education.schools[school].majors) {
					if (education.schools[school].majors.hasOwnProperty(major)) {
						var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
						$(".education-entry:last").append(formattedMajors);	
					}
				}
			}
		}

	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (var onlineCourse in education.onlineCourses) {
	if (education.onlineCourses.hasOwnProperty(onlineCourse)){	
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedTitle);	
		$(".education-entry:last").append(formattedSchool);	
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);	
		}
	}
};

//encapsulated display function to populate JSON data within the correct tab.
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
	var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedPic);
	$("#header").append(HTMLbioStart);
	$("#profile").append(formattedName);
	$("#profile").append(formattedRole);
	$("#profile").append(formattedwelcomeMessage);
	if (bio.contacts.mobile.length > 0) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#letsConnect").append(formattedMobile);
	}
	if (bio.contacts.email.length > 0) {
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#letsConnect").append(formattedEmail);
	}
	if (bio.contacts.twitter.length > 0) {
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#letsConnect").append(formattedTwitter);
	}
	if (bio.contacts.github.length > 0) {
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#letsConnect").append(formattedGithub);
	}
	if (bio.contacts.blog.length > 0) {
		var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		$("#letsConnect").append(formattedBlog);
	}
	if (bio.contacts.location.length > 0) {
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#letsConnect").append(formattedLocation);
	}	
	if(bio.skills.length > 0) {
		$("#profile").append(HTMLskillsStart);
		for(var skill in bio.skills) {
			if (bio.skills.hasOwnProperty(skill)) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}

};

//encapsulated display function to populate JSON data within the correct tab.
work.display = function() {
	for (var job in work.jobs) {
		if (work.jobs.hasOwnProperty(job)) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

//encapsulated display function to populate JSON data within the correct tab.
projects.display = function() {
	for (var project in projects.projects) {
		if (projects.projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					if (projects.projects[project].images.hasOwnProperty(image)) {
						var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}
			}	
		}	
	}
};

//function to display the google map.
var gmap = {};
gmap.display = function() {
 $("#mapDiv").append(googleMap);
};

//Calling all profile display functions.
bio.display();
work.display();
projects.display();
education.display();
gmap.display();