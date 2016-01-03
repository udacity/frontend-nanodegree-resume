/************************************
JSON Objects
************************************/

var bio = {
	"name" : "Matthew Magee", 
	"role" : "Software Developer",
	"contacts" : {
	"phone" : "907-414-3717",
	"email" : "matthewmagee05@gmail.com",
	"github" : "https://github.com/matthewmagee05",
	"twitter" : "@matthewmagee05",
	"location" : "San Diego"
},
	"welcomeMessage" : "This is a welcome message",
	"skills" : ["java", " html", " css", " javascript", " unity"],
	"bioPic" : "http://www.alimits.com/login/repository/Puzzle/03.png"
};

var work = {
	"job" : [
	{
	"position" : "Wheeled Vehicle Mechanic",
	"employer" : "United States Army",
	"years" : "2005-2014",
	"location" : "Fort Hood, Texas",
	"description": "Job duties go here"
}
	]
}

var education = {
	"school": [
		{
			"name" : "Coleman University",
			"location" : "San Diego, CA",
			"degree" : "Bachelors of Science",
			"majors" : ["Software Development"],
			"dates" : "2015-2018 (expected)"
		}
		
	],
	"onlineCourses": [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2015-2016(expected)",
			"url" : "http://www.udacity.com"
		}
	]
}

var projects = {
	"projects": [
		{
			"title" : "Sample Project 1",
			"dates" : "2015 to present",
			"description" : "description will go here",
			"images" : "http://www.alimits.com/login/repository/Puzzle/03.png"
		}
		
	]
}

/************************************
Variable declarations for bio
************************************/

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);

/************************************
Append bio info to page
************************************/

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);
$("#topContacts").append([formattedPhone]);
$("#topContacts").append([formattedEmail]);
$("#topContacts").append([formattedTwitter]);
$("#topContacts").append([formattedGithub]);
$("#topContacts").append([formattedLocation]);
$("#header").append([formattedPicture]);
$("#header").append([formattedWelcomeMessage]);

/************************************
Display Skills
************************************/
if(bio.skills.length > 0) {
	$("#header").append([HTMLskillsStart]);

	
	$("#header").append([HTMLBar]);

}

/************************************
Functions
************************************/

work.display = function(){

		$("#workExperience").append([HTMLworkStart]);

		for(jobs in work.job) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.job[jobs].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.job[jobs].position);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedYears = HTMLworkDates.replace("%data%", work.job[jobs].years);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.job[jobs].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.job[jobs].description);

			$(".work-entry:last").append(formattedYears);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		
	}
}

education.display = function(){

	$("#education").append([HTMLschoolStart]);
	
	for(place in education.school){
		var formattedName = HTMLschoolName.replace("%data%", education.school[place].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[place].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.school[place].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[place].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[place].majors);

		$(".education-entry:last").append([formattedName]);
		$(".education-entry:last").append([formattedDegree]);
		$(".education-entry:last").append([formattedDates]);
		$(".education-entry:last").append([formattedLocation]);
		$(".education-entry:last").append([formattedMajor]);
	}

	$(".education-entry").append(HTMLonlineClasses);

	for(course in education.onlineCourses){
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course ].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course ].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course ].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course ].url);
		
		$(".education-entry").append([formattedTitle]);
		$(".education-entry").append([formattedSchool]);
		$(".education-entry").append([formattedDates]);
		$(".education-entry").append([formattedURL]);
	}

}


projects.display = function(){
	$("#projects").append([HTMLprojectStart]);

	for(project in projects.projects){
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

		$(".project-entry:last").append([formattedTitle]);
		$(".project-entry:last").append([formattedDates]);
		$(".project-entry:last").append([formattedDescription]);
		$(".project-entry:last").append([formattedImage]);
		
	}
}



/************************************
Display projects,work history and 
education
************************************/
projects.display();

education.display();

work.display();

/************************************
Append the google map to page
************************************/

$("#mapDiv").append(googleMap);

/************************************
Track where visitors click on page
************************************/
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


