var bio ={
 	"name" : "Emil Martinov",
	"role" : "Online Marketeer",
	"contact" : {
		"mail":"martinov.emil@gmail.com",
		"phone":"+31634336711",
		"github":"frank3stein",
		"location":"Rotterdam"
	},
	"picture" : "sad",
	"welcome" : "Hi, welcome to my resume. Any information you would like to learn could be asked via phone or mail.",
	"Skills" : ["HTML"," CSS"," Javascript"],
		};



// Contact --------------------
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var	formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail=HTMLemail.replace("%data%",bio.contact.mail);
var formattedMobile=HTMLmobile.replace("%data%",bio.contact.phone);
var formattedGithub=HTMLgithub.replace("%data%",bio.contact.github);
var formattedLocation=HTMLlocation.replace("%data%",bio.contact.location);
var formattedPicture=HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcome);
var formattedSkills=HTMLskills.replace("%data%",bio.Skills);


$("#header").prepend(formattedName,formattedRole);
$("#header").append(formattedEmail,formattedMobile,formattedGithub,formattedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);
if (bio.length!=0){$("#header").append(HTMLskillsStart);};
$("#header").append(formattedSkills);


// Work
var work ={};
work.jobPosition="Online Content Intern";
work.employer="Tomtom Taxi";
work.yearsWorked="1";
work.started="2012";
work.city="Amsterdam";

// var formattedEmployer=HTMLworkEmployer.replace("%data%",work.employer);
// var formattedWorkStart=HTMLworkStart.replace("",work.started);
// var formattedSchoolName=;
// for (workObj in work){
// 	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.employer[workObj]);
// 	var	formattedworkTitle=HTMLworkTitle.replace("%data%",work.jobPosition[workObj];
// };

$("#workExperience").append(formattedEmployer);



// Education
var education={};
education["name"]="Rotterdam School of Management";
education["schoolStartYear"]="2009"
education["yearsAttended"]="2009-2014";
education["city"]="Rotterdam";
education["degree"]="Masters";
education["major"]="Marketing Management";

var formattedSchoolStartYear=HTMLschoolStart.replace("",education["schoolStartYear"]);
var formattedSchoolName=HTMLschoolName.replace("%data%",education["name"]);
var formattedDegree=HTMLschoolDegree.replace("%data%",education["degree"]);
var formattedschoolDates=HTMLschoolDates.replace("%data%",education["yearsAttended"]);
var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",education["city"]);
var formattedSchoolMajor=HTMLschoolMajor.replace("%data%",education["major"]);


$("#education").append(formattedSchoolStartYear,formattedSchoolName,formattedDegree,formattedschoolDates,formattedSchoolLocation,formattedSchoolMajor);

// $("#education").append(formattedSchoolStartYear);
// $("#education").append(formattedSchoolName);
// $("#education").append(formattedSchoolStartYear);
// // $("#workExperience").append(formattedWorkStart);


// $("#header").append(formattedRole);








