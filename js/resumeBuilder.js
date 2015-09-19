

var work = {
	"jobs": [
	{
		"employer": "Statistics New Zealand",
		"title": "Solutions Architect",
		"location": "Wellington, New Zealand",
		"dates": "2014-2015",
		"description": "As a Solutions Architect I provide technical advice and design. I enable the development and documentation of operational solution architectures that meet the evolving IT requirements to deliver Statistics NZ's strategic priorities."
	},
	{
		"employer": "Itree",
		"title": "Technical Business Analyst",
		"location": "Wellington, New Zealand",
		"dates": "2013-2014",
		"description": "Hired to engage with clients and their respective stakeholders on site, conduct workshops to identify, define & analyse business and technical requirements, produce effective documentation, design software solutions and manage agile solution development. Identified and defined requirements on projects for both The Ministry for Primary Industries and Maritime New Zealand. Designed and implemented the SeaCert and MOSS Software Solution for Maritime New Zealand on time and within budget. Developed Seafarer Licenses in both card and passport formats primarily using SQL. Completed data migration analysis, mapping and requirements for Maritime New Zealand."
	},
	{
		"employer": "Talent2",
		"title": "Business Analyst",
		"location": "Wellington, New Zealand",
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
		"images" : [{"url" : "/images/Portfoliowebsite.jpg"}]
	},
	{
		"title": "Interactive Resume",
		"dates": "2015",
		"description": "Developed an interactive resume application that reads resume content from a JSON file and dynamically displays that content within an online resume webpage. The webpages uses objects, functions, conditionals, and control structures to compose the content that is displayed on the resume.",
		"images": [{
			"url": ""
		}]
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
		"location" : "Wellington, New Zealand"
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
		"location": "Wellington, New Zealand",
		"degree": "Bachelors",
		"majors": [
			"Management",
			"Information Systems"
			],
		"dates": "2009-2011",
		"url": "http://www.openpolytechnic.ac.nz/"
	},
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork(){
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

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});