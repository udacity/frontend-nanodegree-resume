//P2: Online Resume
//Build four JSONs, each one representing a different resume section
//Iterate through each JSON and append its information to index.html in the correct section.
var bio = {
	"name" : "Martin V",
	"role" : "Product Manager",
	"contacts" : [{
		"mobile" : "646-123-4567",
		"email" : "martin@mavo.com",
		"github" : "martinv",
		"twitter" :"@martinv",
		"location" : "San Francisco"
	}],
	"welcomeMessage" : "I'm a Product Manager with focus on EdTech and FinTech.",
	"skills" : ["Product Management","Project Management","Data Analysis", "e-Learning"],
	"biopic" : "images/profile-pic.png"

};

//Encapsulate display() within bio JSON
//Iterate through bio JSON and append its information
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);
	//Iterate through bio JSON and append its information to index.html in the correct section
	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};
	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%contact%","github").replace("%data%",bio.contacts[contact].github);
		var formattedLocation =HTMLlocation.replace("%data%", bio.contacts[contact].location);
		var formattedTwitter =HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
       	$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
	};
};

var education = {
	"schools" : [
	{
		"name" : "Kaiserslautern University of Technology",
		"location" : "Kaiserslautern, Germany",
		"degree" : "MS",
		"majors" : "Management",
		"date" : "1996",
		"url" : "http://www.uni-kl.de/en/"
	},
	{
		"name" : "Kaiserslautern University of Technology",
		"location" : "Kaiserslautern, Germany",
		"degree" : "BS",
		"majors" : "Industrial Engineering/Operations Research",
		"date" : "1994",
		"url" : "http://www.uni-kl.de/en/"
	}],
	"onlineCourses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : "2015",
		"url" : "https://www.udacity.com/course/nd001"
	},
	{
		"title" : "Programming Java",
		"school" : "Hasso Plattner Institute",
		"date" : "2015",
		"url" : "https://open.hpi.de/"
	}]
};

//Encapsulate display() within education JSON
//Iterate through education JSON and append its information
education.display = function() {
//Iterate through education JSON and append its information to index.html in the correct section
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
 $("#education").append(HTMLonlineClasses);
          for (var course in education.onlineCourses) {
			  $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate =
                  HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
                  var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
};

var work = {
	"jobs" : [
	{
		"employer" : "MAVO",
		"title" : "General Manager, Founder",
		"dates" : "2013 - present",
		"location" : "San Franicsco",
		"description" : "Delivered product and project management training courses and built a community of 33,000+ trainees."
	},
	{
		"employer" : "Startup Leadership",
		"title" : "Program Lead",
		"dates" : "2013 - present",
		"location" : "San Francisco",
		"description" : "The Startup Leadership Program (SLP) is a selective global training program and lifetime network of 1300+ outstanding founders and innovators."
	},
	{
		"employer" : "Citi",
		"title" : "VP PM",
		"dates" : "2006 - 2013",
		"location" : "New York City",
		"description" : "During my tenure with CTS I enhanced global payment self-service capabilities, implemented payment standards and CRM software."
	},
	]
};

//Encapsulate display() within work JSON
//Iterate through work JSON and append its information
work.display = function() {
	//Iterate through work JSON and append its information to index.html in the correct section
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedLocation, formattedDescription);
	}
};

var projects = {
	"project" : [{
		"title" : "Product Mgmt Course",
		"dates" : "2013",
		"description" : "This course covers the fundamentals of product management.",
		"images" : ["images/prod-mgt-cover.png"]
	},
	{
		"title" : "Project Mgmt Course",
		"dates" : "2014",
		"description" : "This course is an introduction to project management.",
		"images" : ["images/prod-mgt-cover.png"]
	}]
};

//Encapsulate display() within projects JSON
//Iterate through projects JSON and append its information
projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};



	}
};

//Access object methods above
work.display();
projects.display();
education.display();
bio.display();

//Add an internationalize function
function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
};

//Add a button to call the internationalize function
$("#main").append(internationalizeButton);

// Add interactive map
$("#mapDiv").append(googleMap);

