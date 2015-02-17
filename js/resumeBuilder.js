var work = {
	"jobs": [
	  {
		"employer": "CouponPal",
		"title": "Content Specialist",
		"location": "Santa Monica, CA",
		"dates": "September 2014 - January 2015",
		"description": "Wrote content for store pages and blogs promoting retailers."
		},
		{
			"employer": "Pasadena Humane Society",
			"title": "Developement Assistant",
			"location": "Pasadena, CA",
			"dates": "September 2013 - June 2014",
			"description": "Edited development publications, assisted with planning and execution of events, managed office supplies and copier, maintained database of donor information"
		},
		{
			"employer": "Grassroots Campaigns",
			"title": "Field Manager",
			"location": "Pasadena, CA",
			"dates": "August 2013 - October 2013",
			"description": "Recruited members and solicited donataions on behalf of the Southern Poverty Law Center, Oversaw a team of canvassers, Maintained logs of team progress"
		},
		{
			"employer": "Abilene Christian University",
			"title": "Graduate Assistant",
			"location": "Abilene, TX",
			"dates": "August 2010 - May 2012",
			"description": "Taught Freshman-level English courses as teacher of record, Assisted professors with research and publication schedules, Tutored students in University Writing Center, Instructor for University’s English Language Learners Program"
		}

]
};

var myProjects = {
	"projects" : [
		{
      "title": "Résumé",
      "url": "",
      "dates": "February 2015",
      "description": "The résumé you're looking at.",
      "images": ["#"]
    }
	]
};

var bio = {
	"name" : "Brent Dill",
	"role" : "Writer, Front End Developer",
	"welcomeMessage" : "I am a creative person looking for a job which will allow me to exercise my creativity in as many ways as possible.",
	"contacts": {"email" : "bdill12@gmail.com",
		"mobile": "##########",
		"github": "bdill12",
		"twitter": "@bdill12",
		"location": "Greater Los Angeles Area"
				},
	"url" : "images/profpic100100.jpg",
	"skills" : [" Creative Writing", " HTML", " CSS", " Proofreading", " Editing"]
};


var education = {
	"schools": [
	{
		"name": "Abilene Christian University",
		"degree": "Master of Arts",
		"majors": ["English - Composition and Rhetoric"],
		"location": "Abilene, Texas",
		"dates": "2010 - 2012",
		"url": "http://www.acu.edu"
	},
	{
		"name": "Abilene Christian University",
		"degree": "Bachelor of Arts",
		"majors": ["English - Language and Literature"],
		"location": "Abilene, Texas",
		"dates": "2006 - 2010",
		"url": "http://www.acu.edu"
	}
	],
	"onlineCourses": [
	{
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": "2014",
		"url": "https://www.udacity.com/"
    },
    {
		"title": "Intro to Javascript",
		"school": "Udacity",
		"dates": "2014",
		"url": "https://www.udacity.com/"
	}
	]
};

//bio info
//who I am
bio.display = function() {
	var headerName = HTMLheaderName.replace("%data%", bio.name);
	var headerRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(headerName, headerRole);

//make 'em see contacts
	var contacts = bio.contacts;
	var myEmail = HTMLemail.replace("%data%", contacts.email);
	var myGithub = HTMLgithub.replace("%data%", contacts.github);
	var myLocation = HTMLlocation.replace("%data%", contacts.location);
	var myTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
	var myMobile = HTMLmobile.replace("%data%", contacts.mobile);
	var getInTouch = myMobile + myEmail + myTwitter + myGithub + myLocation;
	$(getInTouch).appendTo("#topContacts, #footerContacts");

//Tell 'em bout me n let em see
	var bioPic = HTMLbioPic.replace("%data%", bio.url);
	var welcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(bioPic, welcomeMessage);
//adding skills
//if (bio.skills.length > 0) {
	//$("#header").append(HTMLskillsStart);
	//var i = "";
	//for (i = 1, i < bio.skills.length, i++){
		//formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		//$("#skills").append(formattedSkill);
	//}
};

// adding work
function displayWork() {
	for (var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}
//edu
education.display = function() { {
		$("#education").append(HTMLschoolStart);
		var skool = education.schools.school;
		var formattedName = HTMLschoolName.replace("%data%", skool.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", skool.degree);
		var formattedDates = HTMLschoolDates.replace("%data%", skool.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", skool.location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", skool.majors);
	$(".education-entry:last").append(formattedName, formattedDegree, formattedMajor, formattedDates, formattedLocation);
  }
  {
if (education.onlineCourses.length > 0){
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses){
      $("#education").append(HTMLschoolStart);
      var web = education.onlineCourses.course;
      var formattedUrl = HTMLonlineURL.replace("%data%", web.url);
      var formattedTitle = HTMLonlineTitle.replace("%data%", web.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", web.school);
      var formattedDates = HTMLonlineDates.replace("%data%", web.dates);
      $(".education-entry:last").append(formattedUrl + formattedTitle + formattedSchool + formattedDates);
    }
  }
}
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
     var shortPro = projects.projects[project];
    var formattedTitle = HTMLprojectTitle.replace("%data%", shortPro.title);
    var formattedDates = HTMLprojectDates.replace("%data%", shortPro.dates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", shortPro.description);
    var formattedImages = "";
    if (shortProimages.length > 0){
      for (image in shortPro.images) {
        formattedImages += HTMLprojectImage.replace("%data%", shortPro.images.image);
      }
    }
    $(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc + formattedImages);
  }
};

// Call display functions

bio.display();
displayWork();
projects.display();
education.display();

// Log clicks to console

$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});

// Internationalize... but it doesn't, so....

$("#main").append(internationalizeButton);

var inName = function() {
  var oldName = $("#name").text();
  var finalName = oldName.trim().split(" ");
  finalName[0] = finalName[0][0].toUpperCase() + finalName[0].slice(1).toLowerCase();
  finalName[1] = finalName[1].toUpperCase();
  finalName = finalName.join(" ");
  return finalName;
};

// Add map ... yet again a failure!

$("#mapDiv").append(googleMap);
