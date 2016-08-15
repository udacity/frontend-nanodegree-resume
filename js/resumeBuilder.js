/*
This is empty on purpose! Your code to build the resume will go here.
 */




var bio = {
  "name" : "Darko Antic",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "650 750 30 35",
    "email" : "antic.darko@gmail.com",
    "github"  : "dragidare",
    "twitter" : "@dragidare",
    "location" : "Vienna"
  },

  "welcomeMessage" : "Hello welcome to my resume page",
  "skills" : ["JS", "HTML5", "CSS3" ],
  "biopic" : "images/fry.jpg"

};

var work = {
  "jobs": [{
			"employer": "TU Wien",
			"title": "Mechanical Engennering",
			"location": "Vienna",
			"dates": "Vienna",
			"description": "Vienna"
		}, {
      "employer": "TU Wien",
			"title": "Mechanical Engennering",
			"location": "Vienna",
			"dates": "Vienna",
			"description": "Vienna"
		}, {
      "employer": "TU Wien",
			"title": "Mechanical Engennering",
			"location": "Vienna",
			"dates": "Vienna",
			"description": "Vienna"
		}
	]
}
var projects = {
  "projects": {{
			"title": "Mechanical Engennering",
			"dates": "Vienna",
			"description": "Vienna",
			"images": "images/proj1.jpg"
		}, {
      "title": "Mechanical Engennering",
			"dates": "Vienna",
			"description": "Vienna",
			"images": "images/proj1.jpg"
		}, {
      "title": "Mechanical Engennering",
			"dates": "Vienna",
			"description": "Vienna",
			"images": "images/proj1.jpg"
		}
    }
}





var formattedName =
    HTMLheaderName.replace("%data%" , bio.name);
$('#header').prepend(formattedName);

var formattedRole =
    HTMLheaderRole.replace("%data%", bio.role);
$('#header').append(formattedRole);

var formattedBioPic =
    HTMLbioPic.replace("%data%", bio.biopic);
$('#header').prepend(formattedBioPic);

var formattedEmail =
    HTMLemail.replace("%data%", bio.contacts.email);
$('#header').append(formattedEmail);

var formattedMobile =
    HTMLmobile.replace("%data%", bio.contacts.mobile);
$('#header').append(formattedMobile);

var formattedGithub =
    HTMLgithub.replace("%data%", bio.contacts.github);
$('#header').append(formattedGithub);

var formattedTwitter =
    HTMLtwitter.replace("%data%", bio.contacts.twitter);
$('#header').append(formattedTwitter);

var formattedLocation =
    HTMLlocation.replace("%data%", bio.contacts.location);
$('#header').append(formattedLocation);


var formattedMessage =
    HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$('#header').append(formattedMessage);

var formattedSkills =
    HTMLskills.replace("%data%", bio.skills);
    $('#header').append(HTMLskillsStart);
$('#header').append(formattedSkills);


var work = {};
work.position = "Web Developer";
work.employer = "Makita";
work.years = 0.3;

var education = {};
education["name"] = "SAE Wien";
education["years"] = "2011-2013";
education["city"] = "Vienna, Austria";

$("#main").append(work["position"]);
$("#main").append(education.name);
