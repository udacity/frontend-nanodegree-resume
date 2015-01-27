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
//console.log("here");

		//console.log(projectList.projects[1].projectTitle);


//--------------------


var bio = {
	"name" : "Sarah Paetsch",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "512-293-7337",
		"email" : "spaetsch@gmail.com",
		"twitter" : "@twitterName" ,
		"github" : "spaetsch",
		"location" : "Seattle, WA"
	},
	"welcomeMessage" : "Welcome to my awesome website.",
	"skills" : [
		"Javascript" , "jQuery", "HTML", "CSS"
	],
	"biopic" : "images/fry.jpg",
};

bio.display = function(){

	var name = bio.name;
	var formattedName = HTMLheaderName.replace("%data%", name);

	var role = bio.role;
	var formattedRole = HTMLheaderRole.replace("%data%", role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	var welcomeMsg = bio.welcomeMessage;
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", welcomeMsg);
	$("#header").append(formattedWelcomeMsg);

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

	var location = bio.contacts.location;
	var formattedLocation = HTMLlocation.replace("%data%", location);
	$("#topContacts").append(formattedLocation);

	$("#header").append(HTMLskillsStart);

	//iterates through skill list to display all of them
	for (skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);	
		$("#skills").append(formattedSkill);
	}
}


var education = {
	"schools" : [
	{
		"name":"University of Texas at Austin",
		"location": "Austin, TX",
		"degree" : "M.A.",
		"majors" : [
			"English with Computers and Literature concentration"
			],
		"dates" : "2000",
		"url" : "http://www.utexas.edu/"
	},
	{
		"name":"The Ohio State Univerity",
		"location" : "Columbus, OH",
		"degree" : "B.A.",
		"majors" : [
			"English"
			],
		"dates" : "1998",
		"url" : "http://www.osu.edu/"
	}
	],

	"onlineclasses" : [
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"date" : "January 2015",
		"url" : "https://www.udacity.com/"
	},
	{
		"title" : "Intro to jQuery",
		"school" : "Udacity",
		"date" : "February 2015",
		"url" : "https://www.udacity.com/"
	}
	]
};

education.display = function(){
	for (school in education.schools){

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		
		for (major in education.schools[school].majors){
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
		}

		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolMajor);
	}
}

var work = {
	"jobs" : [
	{	
		"employer" : "Devilbunny Dyeworks",
		"title" : "Sole Proprietor / Independent Yarn Dyer",
		"location" : "Campbell, CA",
		"dates" : "2012 - present",
		"description" : "Nam pellentesque suscipit porttitor. Nunc sed bibendum erat, ac condimentum urna. Praesent vitae sapien velit."
	},
	{	
		"employer" : "National Instruments",
		"title" : "Technical Writer / Course Developer",
		"location" : "Austin, TX",
		"dates" : "2007-2009",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat convallis lorem non viverra. Nulla facilisi. Praesent non eros nisi. Ut ac nunc egestas, varius nisi quis, interdum augue."
	}, 
	{	
		"employer" : "Enspire Learning",
		"title" : "Content Developer",
		"location" : "Austin, TX",
		"dates" : "2005-2006",
		"description" : "Phasellus nec nisl id nibh rhoncus tristique sed in velit. Phasellus ut feugiat mi. Aliquam iaculis, lacus eget porta posuere, orci enim efficitur neque, sit amet tincidunt est elit in tellus."
	}
	]
};

work.display = function(){
	for (job in work.jobs){
		var formattedjobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedjobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedjobEmployer + formattedjobTitle);		
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDesc);

	}
}

var projects = {
	"projects" : [
	{
	"title" : "Sample Project 1",
	"dates" : "2014",
	"description" : "Vestibulum molestie metus felis, nec hendrerit velit tempor in. Vivamus elementum consectetur magna vel pulvinar. Praesent ullamcorper congue tristique. Proin ut luctus enim. Suspendisse tristique sapien felis, vitae ornare nisl venenatis vitae.",
	"images" : [
		"http://placehold.it/200x200", "http://placehold.it/200x200"
	]
	},
	{
	"title" : "Sample Project 2",
	"dates" : "2015",
	"description" : "Maecenas condimentum mauris vitae condimentum tincidunt. Phasellus viverra iaculis ornare. Maecenas convallis imperdiet eros a sagittis. Donec non sem in mauris imperdiet tempor. Integer tempor suscipit diam ut bibendum. Vivamus varius tincidunt erat nec tincidunt.",
	"images" : [
		"http://placehold.it/200x150", "http://placehold.it/200x150", "http://placehold.it/200x150"
	]
	}
	]
};

projects.display = function(){
	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

bio.display();

work.display();

projects.display();

education.display();

$(document).click(function(loc){

	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

$("#mapDiv").append(googleMap);


