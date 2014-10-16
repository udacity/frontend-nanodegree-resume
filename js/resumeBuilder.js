// Creating objects
var bio = {
	name: "Rowan Savage",
	role: "Front-end Developer",
	"contacts": {
		"email": "rowan.savage@gmail.com",
		"mobile": "044619933",
		"twitter": "http://www.twitter.com",
		"github": "http://www.github.com"   
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
			"location": "Canberra, Australia",
			"dates": "2013-2014",
			"description": "Overseas the maintanence and improvement of safeworkaustralia.gov.au"
		},
		{
			"employer": "National Science and Technology Center (Questacon)",
			"title": "Web developer",
			"city": "Canberra, Australia",
			"dates": "2010-2011",
			"description": "Created mobile version of Questacon's website and assistaced in the audit and implemntation of a accessibility improvements"
		},
		{
			"employer": "Insitec",
			"title": "Web App Developer",
			"city": "Canberra, Australia",
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
			"images": ["http://google.com", "http://google.com"]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Australian National University",
			"city": "Canberra, Australia",
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

/*
// Fomatting text

//Format heading
var formattedName = 
	HTMLheaderName.replace("%data%", bio.name);

var formattedRole =
	HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail =
	HTMLemail.replace("%data%", bio["contact info"].email);

var formattedMobile =
	HTMLmobile.replace("%data%", bio["contact info"].mobile);

var formattedTwitter =
	HTMLtwitter.replace("%data%", bio["contact info"].twitter);

var formattedGithub =
	HTMLgithub.replace("%data", bio["contact info"].github)

var formattedPic =
	HTMLbioPic.replace("%data%", bio["picture URL"]);

var formattedWelcome =
	HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

//Format skills
var formattedSkill1 =
	HTMLskills.replace("%data%", bio.skills[0]);

var formattedSkill2 =
	HTMLskills.replace("%data%", bio.skills[1]);

//Format Work
var formattedPosition =
	HTMLworkTitle.replace("%data%", work["position"]);

var formattedEmployer =
	HTMLworkEmployer.replace("%data%", work["employer"]);

var formattedJob =
	formattedEmployer + formattedPosition;

var formattedWorkDates =
	HTMLworkDates.replace("%data%", work["years"]);

var formattedWorkCity =
	HTMLworkLocation.replace("%data%", work["city"]);

// Format Education
var formattedSchool =
	HTMLschoolName.replace("%data%", education.school);

var formattedDegree =
	HTMLschoolDegree.replace("%data%", education.degree);

var formattedSchoolDegree =
	formattedSchool + formattedDegree;

var formattedEdDates =
	HTMLschoolDates.replace("%data%", education.years);

var formattedEdCity =
	HTMLschoolLocation.replace("%data%", education.city);

// Appending text

//Name
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); 

// Image and welcome
$("#header").prepend(formattedPic);
$("#header").append(formattedWelcome);

// Contacts
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);

// Skills
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkill1);
$("#skills").append(formattedSkill2);

// Employment
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedJob);
$(".work-entry").append(formattedWorkDates);
$(".work-entry").append(formattedWorkCity);

// Education

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedEdDates);
$(".education-entry").append(formattedEdCity);
*/
