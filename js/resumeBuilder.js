/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Chada El Islam"
var role = "ITLP - GE Digital"

var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);

var formattedName = HTMLheaderName.replace('%data%', name);
$('#header').prepend(formattedName);

//Preparing the object of BIO
var skills = ['python', 'SQL', 'Communication'];
var msg = "Welcome to my page .. You will spend awesome time knowing me!";
var URL = "images/Photo-Chada.jpg";

var bio = {
	"name" : name,
	"role": role,
	"contactInfo": {
		"M": "+54826945200",
		"email": "benchada@gmail.com",
		"github": "@benchada",
		"twitter": "@chadou20",
		"blog": "benchada.wordpress.com"	
	},

	"location": "Algeria",
	"PictureURL": URL,
	"welcomeMSG": msg,
	"skills": skills

}

var formattedMobile = HTMLmobile.replace('%data%',bio.contactInfo.M);
var formattEmail =  HTMLemail.replace('%data%', bio.contactInfo.email);
var formatedTwitter = HTMLtwitter.replace('%data%',bio.contactInfo.twitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contactInfo.github);
var formattedBlog = HTMLblog.replace('%data%', bio.contactInfo.blog);
var formattedLocation = HTMLlocation.replace('%data%', bio.location);
var formattedPic =  HTMLbioPic.replace('%data%', bio.URL);
var formattedmsg   = HTMLwelcomeMsg.replace('%data%', bio.welcomeMSG);

var skill_1 = HTMLskills.replace('%data%',skills[0]);
var skill_2 = HTMLskills.replace('%data%',skills[1]);
var skill_3 = HTMLskills.replace('%data%',skills[2]);


$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattEmail);
$('#topContacts').append(formatedTwitter);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedBlog);



//Preparing the object of Work
var work = {};
work.employer = 'GE';
work.title = "ITLP-Algeria";
work.years = 1;
work.city = "Algiers";

var formattedWork = HTMLworkEmployer.replace('%data%',work.employer) ;
var formattedWorkTitle =  HTMLworkTitle.replace('%data%',work.employer)

$('#workExperience').append(HTMLworkStart);
$('#workExperience').append(formattedWork);
$('#workExperience').append(formattedWorkTitle);

var education = {};
education ["school"] = "AUC";
education ["year"] = "2015";
education ["city"] = "Cairo";



$('#Education').append(HTMLschoolStart);
$('#Education').append(HTMLschoolName.replace('%data%',education.school)+HTMLschoolDegree.replace('%data%', 'Computer Science'));


// var bio = {
// 	"name" : name,
// 	"role": role,
// 	"contactInfo": {
// 		"M": "+54826945200",
// 		"email": "benchada@gmail.com",
// 		"github": "@benchada",
// 		"twitter": "@chadou20",
// 		"blog": "benchada.wordpress.com"	
// 	},

// 	"location": "Algeria",
// 	"PictureURL": URL,
// 	"welcomeMSG": msg,
// 	"skills": skills

// };

// var education = {
// 	"schools":[ 
// 	{
// 		"name": "The American University in Cairo",
// 		"city": "Cairo, Egypt",
// 		"majors": ["CS"],
// 		"minors": ["Business"],
// 		"dates": "2015"

// 	},
// 	{
// 		"name": "Colorado University",
// 		"city": "Colorado, Boulder",
// 		"majors": ["CS"],
// 		"dates":"2013"
// 	}
// 	],
// 	"Online Courses": [
// 		{
// 			"name": "javascript"
// 		}
// 	]

// };

// var projects = {
// 	"projects": 
// 	[
// 	{
// 		"title": "Algesco Convertibility",
// 		"Dates": "2016",
// 		"Description": "Identifying thegaps in orderin trends of our buyers"
// 	}
// 	]

// };

// var work = {
// 	"employer" :'GE',
// 	"title" : "ITLP-Algeria",
// 	"years ": 1,
// 	"city" : "Algiers"
// }