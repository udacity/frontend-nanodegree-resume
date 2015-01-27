// first exercise
//$("#main").append("Sarah Paetsch");

//var awesomeThoughts = "My name is foo and I'm awesome.";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace ("awesome", "fun");

//$("#main").append(funThoughts);

//var name = "Sarah Paetsch"

//--------------------

// Lesson 1

/* 

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedPic = HTMLbioPic.replace("%data%", bio.picURL);
$("#header").prepend(formattedPic);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var welcomeMsg = bio.welcomeMsg;
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", welcomeMsg);
$("#header").append(formattedWelcomeMsg);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

var jobTitle = work["position"]; 
var formattedjobTitle = HTMLworkTitle.replace("%data%", jobTitle);
$("#header").append(HTMLworkStart);
$("#workExperience").append(formattedjobTitle);

var schoolName = education.name;
var formattedschoolName = HTMLschoolName.replace("%data%", schoolName);
$("#header").append(HTMLschoolStart);
$("#education").append(formattedschoolName);


*/

//--------------------


var bio = {
	"name" : "Sarah Paetsch",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "123-456-7890",
		"email" : "foo@example.com",
		"twitter" : "@twitterName" ,
		"github" : "githubName",
		"location" : "Seattle"
	},

	"picURL" : "images/userpic1.jpg",
	"welcomeMsg" : "Welcome to my awesome website",
	"skills" : [
		"skill1 " , "skill2 ", "skill3 "
	]
};

var education = {
	"schools" : [
	{
		"name":"Univerity of Texas at Austin",
		"city": "Austin, TX",
		"major" : "English",
		"gradyear" : "2000"
	},
	{
	"name":"The Ohio State Univerity",
	"city": "Columbus, OH",
	"major" : "English",
	"minor" : "Computer Science",
	"gradyear" : "1998"
	}
	],

	"onlineclasses" : [
	{
	"courseTitle" : "Javascript Basics",
	"school" : "Udacity",
	"dates" : "January 2015",
	"siteURL" : "www.udacity.com"
	},
	{
	"courseTitle" : "Class 2",
	"school" : "moo",
	"dates" : "December 2014",
	"siteURL" : "www.somewhere.com"
	}
]
};


var workList = {
	"jobs" : [
	{	
	"employer" : "Devilbunny Dyeworks (self)",
	"position" : "Indie Yarn Dyer",
	"dates" : "2012 - present",
	"location" : "Campbell, CA",
	"description" : "Dolcelatte emmental cheese triangles. Cottage cheese lancashire cheesy grin roquefort fromage pepper jack cheese slices fromage."
	},
	{	
	"employer" : "National Instruments",
	"position" : "Technical Writer / Course Developer",
	"dates" : "2007-2009",
	"location" : "Austin, TX",
	"description" : "Dolcelatte emmental cheese triangles. Cottage cheese lancashire cheesy grin roquefort fromage pepper jack cheese slices fromage."
	}
	]
};

var projectList = {
	"projects" : [
	{
	"projectTitle" : "Sample Project 1",
	"projectDates" : "2014",
	"projectDesc" : "I love cheese, especially port-salut macaroni cheese. Cheesecake everyone loves red leicester gouda jarlsberg gouda the big cheese. Fondue halloumi bocconcini babybel bocconcini the big cheese cheeseburger.",
	"projectImages" : [
		"http://www.fillmurray.com/200/300", "http://www.fillmurray.com/200/300"
	]
	},
	{
	"projectTitle" : "Sample Project 2",
	"projectDates" : "2015",
	"projectDesc" : "I love cheese, especially port-salut macaroni cheese. Cheesecake everyone loves red leicester gouda jarlsberg gouda the big cheese. Fondue halloumi bocconcini babybel bocconcini the big cheese cheeseburger.",
	"projectImages" : [
		"http://www.fillmurray.com/250/250", "http://www.fillmurray.com/250/250", "http://www.fillmurray.com/250/250"
	]
	}
	]
};


var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedPic = HTMLbioPic.replace("%data%", bio.picURL);
$("#header").append(formattedPic);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}



function displayWork(){
	for (job in workList.jobs){
		var formattedjobTitle = HTMLworkTitle.replace("%data%", workList.jobs[job].position);
		var formattedjobEmployer = HTMLworkEmployer.replace("%data%", workList.jobs[job].employer);

		var formattedDates = HTMLworkDates.replace("%data%", workList.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", workList.jobs[job].location);
		var formattedDesc = HTMLworkDescription.replace("%data%", workList.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedjobEmployer + formattedjobTitle);		
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDesc);

	}
}

displayWork();

$(document).click(function(loc){

	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

/* internationalize button code
function inName(name){
	console.log("here");
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[2] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
*/
console.log("here");

		console.log(projectList.projects[1].projectTitle);


projects.display = function(){
	for (project in projectList.projects) {

		console.log("here2");

		console.log(projectList.projects[1].projectTitle);
		$("#projects").append(HTMLprojectStart);

		console.log(projectList.projects[project].projectTitle);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projectList.projects[project].projectTitle);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projectList.projects[project].projectDates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projectList.projects[project].projectDesc);
		$(".project-entry:last").append(formattedDescription);

		if (projectList.projects[project].projectImages.length > 0){
			for (image in projectList.projects[project].projectImages) {
				var formattedImage = HTMLprojectImage.replace("%data%", projectList.projects[project].projectImages[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);


