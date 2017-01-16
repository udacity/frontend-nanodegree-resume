/*
var bio = {
 	"name" : "Martez Latimer",
 	"role" : "Year Up Student",
 	"welcomeMessage" :"I am a determined and resilient type of person that has <br> the ability to be an efficient team worker while making other people around me better. I stay focused on the task at hand<br> by asking questions and by researching information own my own time to help myself become more experienced within the professional job field I’m in. <br>"
 	"bioPic" : "images.jpg",
 	"contacts" : {
 		"email" : "martezlatimer@gmail.com",
		"phone" : "678.531.5522",
		"github" : "Tezcancode2017",
		"location" : "Atlanta, GA"
	},
 	"skills" : ["Intermediate Level Spanish Speaker ", “Knowledge of Computer Operating Systems, HTML, and assembling CPU parts “ , "Microsoft, Outlook, and Google Programs " , "Proficient with different operating systems",  "Installing and Repairing Computers " ]
 };
 
 bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for (var e in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
      $("#skills").append(formattedSkill);
    }
  };

bio.display();


 function inName(name) {
 	name = name.trim().split(" ");
 	console.log(name);
 	name[1] = name[1].toUpperCase();
 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

 	return name[0] + " " + name[1];
 }
 
 $('#main').append(internationalizeButton);

 var work = {
 	"jobs" : [
 		{
 			"employer" : "Ryan Thomson",
 			"title" : "  Volunteered For STEM Project For Girl Scouts ",
 			"location" : "Atlanta, GA",
 			"dates" : "October, 2016",
 			"description" : ["Taught girls how to use computers.", "Established great teamwork with fellow volunteers.", "Maintained excellent standing with the kids and the boss." ]
 		},
 		{
 			"employer" : "Salvation Army",
 			"title" : "Volunteered At The Salvation Army",
 			"location" : "Atlanta, GA",
 			"dates" : "September, 2010 - November 2010 ",
 			"description" : ["Cleaned areas inside the building.", "Moved equipment around.", ]
 		}

  	]

 };

function displayWork() {
 for (job in work.jobs) {
 	$("#workExperience").append(HTMLworkStart);

 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

 	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	$(".work-entry:last").append(formattedDates);

 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 	$(".work-entry:last").append(formattedDescription);
 }
};

 displayWork();

 var education = {
 	"schools" : [
		{
			"name" : "Gwinnett Technical College/Year Up ",
 			"location" : "Alpharetta, GA ",
 			"degree" : "PC Repair and Network Technician Certificate ", 
 			"major" : ["Computer Science "],
 			"year" : 2016
		},
		{
			"name" : "Georgia State",
 			"location" : "Dunwoody, GA ",
 			"degree" : "AS ",
 			"major" : ["Computer Science "],
 			"year" : 2015
		}

 	]
 	
 };


 function displaySchools() {
    for (var e in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[e].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[e].major);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[e].year);

      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajors);
    }
  };

 displaySchools();


 var project = {
 	"projects" : [
 		{
 			"title" : "Year Up Bootcamp ",
 			"dates" : "Ongoing, 2016-2017",
 			"description" : "Learning the proper skills in order to become a successful intern at a job.",
 			"image" : "images.png"

 		}

 	]

  };

 function displayProjects() {
    for (var e in project.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[e].title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.projects[e].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[e].description);
      var formattedImage = HTMLprojectImage.replace("%data%", project.projects[e].image);
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    }
  };

displayProjects();

$(document).click(function(loc) {
  	var x = loc.pageX;
  	var y = loc.pageY;

  	logClicks(x,y);
  });

$("#mapDiv").append(googleMap);

 */
