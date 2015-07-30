var bio = {
	"name": "Emily Zhao",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(000) 000-0000",
		"email": "e.zhao91@gmail.com",
		"github": "emmiyz",
		"location": "San Francisco"
	},
	"welcomeMessage": "Welcome to my site!",
	"skills": ["awesomeness", "programming", "teaching", "JS"],
	"bioPic": "images/fry.jpg"
};

function displayBio() {
	for (index in bio){
		// create new div for bio
		$("#header").append(HTMLcontactGeneric);
		var formattedName = HTMLheaderName.replace("%data%", bio[index].name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio[index].role);
		$("#header").append(formattedName + formattedRole);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		for (contact in bio.contacts) {
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
			$(".flex-box").append(formattedMobile);

			var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
			$(".flex-box").append(formattedEmail);

			var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
			$(".flex-box").append(formattedGitHub);

			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$(".flex-box").append(formattedLocation);
		}
	}
};

displayBio();

// If user entered skills, append it to the HTML doc
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
};

var projects = {
	"project": [
		{
			"title": "Resume",
			"dates": "July 2015",
			"description": "I used JavaScript to build an interactive resume web app for users.",
			"images": ["images/img3_small.jpg"]
		},
		{
			"title": "Portfolio Page",
			"dates": "July 2015",
			"description": "I created a portfolio page using HTML, CSS, JavaScript, and responsive images! ",
			"images": ["images/img1_small.jpg"]
		},
		{
			"title": "Calculator",
			"dates": "April 2015",
			"description": "I built a simple calculator using JavaScript",
			"images": ["images/img2_small.jpg"]
		}
	]
};

projects.display = function() {
	for (index in projects.project){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[index].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[index].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[index].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.project[index].images.length > 0) {
			for (image in projects.project[index].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.project[index].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

var work = {
	"jobs": [
		{
			"employer": "Teach For America",
			"title": "High School Math & Special Education Teacher",
			"location": "Rhode Island & California",
			"dates": "June 2013- June 2015",
			"description": "• Selected from more than 45,000 applicants nationwide to teach in under-­resourced schools for two years. <br/>• Participated in training programs to develop skills and leadership to achieve significant gains in student achievement."
		},
		{
			"employer": "Pioneer High School",
			"title": "High School SPED teacher supporting Math and Physics",
			"location": "San Jose, CA, USA",
			"dates": "August 2014 - June 2015",
			"description": "• Built a fast feedback loop to track students' learning gaps, resulting in increased content mastery from 64% to 86% <br /> • Adapted well to changing needs with long term strategic execution by staying organized, flexible, and prioritized tasks. <br /> • Improved internal processes targeting students' needs, resulting in increased student engagement from 42% to 73%."

		},
		{
			"employer": "Village Green Charter School",
			"title": "Founding Math, SPED, and Chinese teacher",
			"location": "Providence, Rhode Island, USA",
			"dates": "July 2013 - June 2015",
			"description": "• Created adaptive go-to-market strategies to launch products such as personalized learning plans for students, resulting in higher brand awareness and school expansion. <br/> • Motivated students to develop a growth mindset, resulting in increased math proficiency from 56% to 83%. <br/> • Designed a school culture template and school-wide system that will set the tone for future years."
		},
		{
			"employer": "The Daily Californian",
			"title": "Advertising & Sales Executive",
			"location": "Berkeley, CA",
			"dates": "September 2009- May 2010",
			"description": "• Identified qualified prospects, overcame objections and provided feedback to ensure continuous process optimization. <br/> • Optimized ad campaigns and built high quality long-term relationships with cilents through cold calls to drive growth. <br/ > • Collaborated with multiple teams to meet deadlines and ensure prioritization of cross-functional work. <br/> • Averaged $103,000/month and secured $300,000 in donations with a sales team of 10. <br/> • Developed and implemented new revenue streams including Scavenger Hunt, online, and niche products."
		}
	]
};

// Iterates over all the jobs in the work object and appends it to HTML doc
function displayWork() {
	for (job in work.jobs){
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title
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

};

displayWork();

var education = {
	"schools": [
		{
		"name": "University of California, Berkeley",
		"location": "Berkeley, CA, US",
		"degree": "BA",
		"major": ["Economics"],
		"dates": 2013,
		"url": "www.berkeley.edu"
		}
	],
	"onlineCourses": [
		{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2015,
		"url": "www.udacity.com"
		}
	]
};

// Iterates over all the schools in the education object and appends it to HTML doc
function displayEducation() {
	for (index in education.schools){
		// create new div for education experience
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);

		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
		$(".education-entry:last").append(formattedMajor);

		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);

		var formattedSchoolTitle = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedSchoolTitle);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
		$(".education-entry:last").append(formattedURL);

	}

};

displayEducation();

// Replaces < and >

var charEscape = function(_html) {
	var newHTML = _html;
	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g, "&gt;");
	return newHTML;
};

// Collecting click locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

// Map of places user lived and worked
$("#mapDiv").append(googleMap);
