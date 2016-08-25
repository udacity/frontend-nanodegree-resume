
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
			"description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
		}, {
      "employer": "TU Wien",
			"title": "Mechanical Engennering",
			"location": "Vienna",
			"dates": "Vienna",
			"description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam n At vero eos et accusam et justo duo dolores et ea rebum. "
		}, {
      "employer": "TU Wien",
			"title": "Mechanical Engennering",
			"location": "Vienna",
			"dates": "Vienna",
			"description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. "
		}
	]
}
var projects = {
  "projects": [{
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
    ]
}

var education = {
    "schools": [{
        "name": "University of California, San Diego",
        "dates": "2007-2010",
        "location": "La Jolla, California",
        "degree": "Bachelor of the Arts",
        "majors": ["International Studies/Business Management"],
        "url": "www.ucsd.edu"
    }, {
        "name": "University of California, San Diego",
        "dates": "2007-2010",
        "location": "La Jolla, California",
        "degree": "Bachelor of the Arts",
        "majors": ["International Studies/Business Management"],
        "url": "www.ucsd.edu"
    }, {
        "name": "La Jolla High School",
        "dates": "2007-2010",
        "location": "La Jolla, California",
        "degree": "Bachelor of the Arts",
        "majors": ["International Studies"],
        "url": "www.lajollahighschool.edu"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Javascript Basics",
        "date": "May 2016",
        "url": "https://www.google.com"
    }, {
        "school": "Udacity",
        "title": "Intro to HTML and CSS",
        "date": "March 2016",
        "url": "https://www.udacity.com/course/ud304"
    }, {
        "school": "Udacity",
        "title": "Web Development",
        "date": "August 2016",
        "url": "https://www.udacity.com/course/cs253"
    }],
};
var formattedName =
    HTMLheaderName.replace("%data%" , bio.name);
$('#header').prepend(formattedName);

if (bio.skills.length > 0) {

  $('#header').append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $('#skills').append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $('#skills').append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2  ]);
  $('#skills').append(formattedSkill);

}
function displayWork(){
for (job in work.jobs) {
  $('#workExperience').append(HTMLworkStart);
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
displayWork();
$("#mapDiv").append(googleMap);


/* first block


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

 */
