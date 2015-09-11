/* Michael Stanley
P2 Resume
Udacity Front End Web Develeopment Course
*/

//Bio object -- stores info and displays bio, contact info, and skills
var bio = {
	"name" : "Michael Stanley",
	"role": "Web Developer",
	"contacts" : {
		"mobile" : "786-282-3250",
		"email" : "michael.stanley002@gmail.com",
		"location" : "Orlando, FL"
	},
	"welcomeMessage" : "Hola",
	"age" : 31,
	"skills": [
		"Computers", "Programming", "Archery", "Auto Detailing"
	],
	"bioPic" : "images/me.jpg",
	//Function to display bio, contact info, and skills
	display : function(){
		$("#header").append(HTMLheaderName.replace("%data%", bio.name))
		$("#header").append(HTMLheaderRole.replace("%data%", bio.role))
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic))
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
		$("#topContacts").append(HTMLemail.replace(/%data%/g, bio.contacts.email))
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location))

		//Display Footer Contact Info
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
		$("#footerContacts").append(HTMLemail.replace(/%data%/g, bio.contacts.email))
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location))

		//Tests the length of the skill array and displays the skills
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

//Work Object -- stores info and displays work infomation
var work = {
	"jobs": [
	{
		"start" : 2005,
		"employer" : "Devon Aire K-8 Center",
		"title" : "Computer and Network Specialist",
		"end" : 2008,
		"location" : "Miami, FL",
		"description" : "Assisted users with IT related issues."
	},
	{
		"start" : 2008,
		"employer" : "Leesfield & Partners",
		"title" : "Computer and Network Specialist",
		"end" : 2011,
		"location" : "Miami, FL",
		"description" : "Assisted users with IT related issues."
	},
	{
		"start" : 2011,
		"employer" : "DBKSMN",
		"title" : "Computer and Network Specialist",
		"end" : "Current",
		"location" : "Orlando, FL",
		"description" : "Assisted users with IT related issues."
	}
	],

	//Function to display work info
	display: function(){
		for (jobsWorked in work.jobs){
			$("#workExperience").append(HTMLworkStart)
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[jobsWorked].employer + " - " + work.jobs[jobsWorked].title))
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[jobsWorked].start + " - " + work.jobs[jobsWorked].end))
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[jobsWorked].location))
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[jobsWorked].description))
		};
	}
};

//Travel Object -- stores info for extra locations on map
var travel = {
	"visited": [
	{
		"date" : 2012,
		"location" : "Fayetteville, WV"
	},
	{
		"date" : 2013,
		"location" : "Phoenix, AZ"
	}
	]
}

//Education Object -- stores info and displays education object
var education = {
	"schools": [
		{
		"name": "Miami Dade College",
		"location": "Miami, FL",
		"degree": "AA",
		"major": ["Electrical Engineering"],
		"dates": 2009,
		"url": "http://www.mdc.edu/main/"
		}
	],
	"onlineCourses": [
		{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com"
		}
	],
	//Function to display education info
	display: function(){

		for (count in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[count].name);

			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[count].degree);

			var formattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[count].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[count].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[count].major);
			$(".education-entry:last").append(formattedMajor);

			//Online Course section
			$(".education-entry:last").append(HTMLonlineClasses);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[count].title);

			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[count].school);

			var formattedSchoolTitle = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedSchoolTitle);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[count].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[count].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
};


//Projects Object -- stores info and displays projects object
var projects = {
	"projects": [
	{
		"title" : "Project 0",
		"dates" : 2015,
		"description" : "1st Project for Front End Web Development",
		"images" : ["http://i.imgur.com/CTxuot5.png"],
		"url" : "http://codepen.io/michaelstanley002/full/jPRQYr/"
	},
	{
		"title" : "Project 1",
		"dates" : 2015,
		"description" : "2nd Project for Front End Web Development",
		"images" : ["http://i.imgur.com/m5XvPI8.jpg"],
		"url" : "http://codepen.io/michaelstanley002/full/WvVLMr/"
	}
	],
	display : function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
		var formattedURL = HTMLURL.replace(/%data%/g, projects.projects[project].url);
		$(".project-entry:last").append(formattedURL);
	}
}
};

//Function to display Education
education.display();

//Function to display Projects
projects.display();
//Function to display Bio and Skills
bio.display();

//Functioin to display Work
work.display();

//Display Map
$("#mapDiv").append(googleMap);

//Internationalize Button
/*function inName(){
	var finalName = name;
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

$("#main").append(internationalizeButton);
*/
