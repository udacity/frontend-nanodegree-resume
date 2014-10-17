// Creating objects
var bio = {
	"name": "Rowan Savage",
	"role": "Front-end Developer",
	"contacts": {
		"email": "rowan.savage@gmail.com",
		"mobile": "044619933",
		"twitter": "twitter.com",
		"github": "github.com",
		"location": "Auckland, New Zealand"   
},
	"imgURL": "images/fry.jpg",
	"welcome": "Welcome to my Udacity sponsored resume!",
	"skills": ["Craziness","Mad skillz","Fully sickness"] 
};

var work = {
	"jobs": [
		{
			"employer": "Safe Work Australia",
			"title": "Senior web developer",
			"location": "Townsville, Australia",
			"dates": "2013-2014",
			"description": "Overseas the maintanence and improvement of safeworkaustralia.gov.au"
		},
		{
			"employer": "National Science and Technology Center (Questacon)",
			"title": "Web developer",
			"location": "Sydney, Australia",
			"dates": "2010-2011",
			"description": "Created mobile version of Questacon's website and assistaced in the audit and implemntation of a accessibility improvements"
		},
		{
			"employer": "Insitec",
			"title": "Web App Developer",
			"location": "Canberra, Australia",
			"dates": "2009-2010",
			"description": "Assistated with the development of a custom CMS aimed at government departments."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Safe Work Australia App",
			"description": "App to display events and details relating to Safe Work Australia Month",
			"dates": "2013",
			"images": ["images/google.png"]
		},
		{
			"title": "Questacon Mobile",
			"description": "Created mobile version of Questacon website focusing on UX",
			"dates": "2011",
			"images": ["images/facebook.png"]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Australian National University",
			"location": "Canberra, Australia",
			"degree" : "BA",
			"majors": ["Science Communication", "CompSci"],
			"minors": "None",
			"dates": "2009-2009"
		}],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://udacity.com"
		},
		{
			"title": "Introduction to HTML",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www.udacity.com"
		}
	]
};


// Fomatting text

//Format heading
var formattedName = 
	HTMLheaderName.replace("%data%", bio.name);

var formattedRole =
	HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail =
	HTMLemail.replace("%data%", bio["contacts"].email);

var formattedMobile =
	HTMLmobile.replace("%data%", bio["contacts"].mobile);

var formattedTwitter =
	HTMLtwitter.replace("%data%", bio["contacts"].twitter);

var formattedGithub =
	HTMLgithub.replace("%data%", bio["contacts"].github)

var formattedLocation =
	HTMLlocation.replace("%data%", bio["contacts"].location)

var formattedPic =
	HTMLbioPic.replace("%data%", bio["imgURL"]);

var formattedWelcome =
	HTMLWelcomeMsg.replace("%data%", bio["welcome"]);

// Appending text

$("#main").prepend(internationalizeButton);

// Image 
$("#header").prepend(formattedPic);

//Name
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 

$("#header").append(formattedWelcome);

// Contacts
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

if (bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart); 
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0])); 
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1])); 
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2])); 
}

projects.display = function() {
	for (var i in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var projectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var projectImg = HTMLprojectImage.replace("%data%", projects.projects[i].images);
		$(".project-entry:last").append(projectTitle, projectDesc, projectDates, projectImg);
	}
}

projects.display();

var displayWork = function() {

	for (var i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var jobTitle = (HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i]["title"]));
		var jobLocation = HTMLworkLocation.replace("%data%", work.jobs[i]["location"]);
		var jobDates = HTMLworkDates.replace("%data%", work.jobs[i]["dates"]);
		var jobDesc = HTMLworkDescription.replace("%data%", work.jobs[i]["description"]);
		$(".work-entry:last").append(jobTitle, jobLocation, jobDates, jobDesc);
	}

}

displayWork();

var locationizer = function(work_obj) {
	var locations = [];
	for (var i in work_obj.jobs){
		locations.push(work_obj.jobs[i]["location"]);
	}
	return locations;
}

console.log(locationizer(work));

var inName = function(name) {
	name = name.split(" ");

	var firstName = name[0];
	firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();

	var lastName = name[1].toUpperCase();

	name = firstName + " " + lastName;

	return name;
}

$("#mapDiv").append(googleMap);