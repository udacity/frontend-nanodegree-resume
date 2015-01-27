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
	"projectImage" : "images/something.jpg"
	},
	{
	"projectTitle" : "Sample Project 2",
	"projectDates" : "2015",
	"projectDesc" : "I love cheese, especially port-salut macaroni cheese. Cheesecake everyone loves red leicester gouda jarlsberg gouda the big cheese. Fondue halloumi bocconcini babybel bocconcini the big cheese cheeseburger.",
	"projectImage" : "images/something2.jpg"
	}
	]
};



