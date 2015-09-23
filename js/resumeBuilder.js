

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
	}
	]
};
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
		"images": []
	}
	]
};
var bio = {
	"name" : "Ross Drury",
	"role" : "Solutions Architect",
	"contacts": {
		"email" : "ross.drury@gmail.com",
		"mobile" : "0272660462",
		"github" : "ross drury",
		"twitter": "",
		"location" : "Hinemoa Street, Wellington"
	},
	"welcomeMessage" : "Stay awhile and listen...",
	"skills" : [
		"Integration", "Design", "UML", "Viewpoints & Perspectives Modelling", "Infrastructure Architecture", "Component Modelling", "UI Design"
	]
};
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
	
	},
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
	}]
};

education.display = function () {
	$("#education").append(HTMLschoolStart);

	for (school in education.schools) {
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedName);	
	$(".education-entry:last").append(formattedLocation);	
	$(".education-entry:last").append(formattedDegree);	
	$(".education-entry:last").append(formattedDates);	

	if (education.schools[school].majors.length > 0) {
		for (major in education.schools[school].majors) {
			var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajors);	
		}
	}

	}
	$(".education-entry:last").append(HTMLonlineClasses);

	for (onlineCourse in education.onlineCourses) {

	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
	var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
	var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
	$(".education-entry:last").append(formattedTitle);	
	$(".education-entry:last").append(formattedSchool);	
	$(".education-entry:last").append(formattedDates);
	$(".education-entry:last").append(formattedURL);	
	}
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		
		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

work.display = function() {
	for (job in work.jobs) {
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

projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);	
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);	
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);	
		
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);	
			}
		}	
	}
}



function inName(name) {
	name = name.trim();
	name = name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

