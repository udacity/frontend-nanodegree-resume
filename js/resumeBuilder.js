var bio = {
	"name": "Jeanette Barnes",
	"role": "Web Developer",
	"contacts": {
		"mobile": "404-713-3559",
		"email": "JeanettBarnes@me.com",
		"github": "xavierjacks",
		"twitter": "@xavierjacks",
		"location": "Atlanta"
	},
	"welcomeMessage": "I'm available",
	"skills": [
	  "awesomeness", "programming", "JS", "PS"
	  ],
	"bioPic": "images/fry.jpg"
}

bio["city"] = "Atlanta";
bio.email = "jeanettebarnes@me.com";

$("#main").append(bio.city);

var education = {
  "schools":  [
    {
      "name": "University of Southern Mississippi",
      "city": "Hattiesburg, MS",
      "degree": "BA",
      "majors": [
        "Media Production",
        "English"
        ],
        "dates": "January 1996-May 2001",
        "url":  "http://www.Universityofsouthernmississippi.edu"
    },
    {
      "name": "Emory Continued Education",
      "city": "Atlanta, GA",
      "degree": "Certification",
      "majors": [
        "Web Design"],
        "dates": "2014-2015",
        "url":  "http://www.emory.edu/ece"
    }
  ],
  "onlineCourses":  [
    {
       "title":  "JavaScipt",
       "school":  "Udacity",
       "dates":  "2015",
       "url":  "http://www.Udacity.com"
    }
  ]
}

$("#education").append(education.name);

var work = {
	"jobs":  [
	  {
	  	  "employer":  "AT&T",
	  	  "title":  "Internet Advertising Consultant",
	  	  "dates":  "March 2005-Feb 2006",
	  	  "location":  "Tucker, GA",
	  	  "description":  "loren epsom...."
	  },
	  {
	  	  "employer":  "AT&T",
	  	  "title":  "National Back Office Specialist",
	  	  "dates":  "July 2006-September 2012",
	  	  "location":  "Atlanta, GA",
	  	  "description":  "loren epsom..."
	  },
	  {
	  	  "employer": "AT&T",
	  	  "title":  "Sales Consultant",
	  	  "location":  "Atlanta, GA",
	  	  "dates":  "September 2012-Present",
	  	  "description": "loren epsom..."
	  }
   ]
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedWorkDates);

  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedWorkLocation);

  var formattedWorkDescription  = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedWorkDescription);
}

$("#main").append(work["jobs"]);

var projects = {
	"projects":  [
	{
		"title":  "Sample Project 1",
		"dates":  "2015",
		"description":  "loren epsom...",
		"images":  [
		  "http://jeanettebarnes1.com"
	    ] 
	  }
	]
}

var name = "Jeanette Barnes";
var formattedName = HTMLheaderName.replace("%data%", "Jeanette Barnes");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

var formattedContact = HTMLcontactGeneric.replace("%data%", "Contacts");
var formattedMobile = HTMLmobile.replace("%data%", "4047133559");
var formattedEmail = HTMLemail.replace("%data%", "JeanettBarnes@me.com");
var formattedTwitter = HTMLtwitter.replace("%data%", "@xavierjacks");
var formattedLocation = HTMLlocation.replace("%data%", "Atlanta");

var formattedbioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome to my World");

var formattedskillsStart = HTMLskillsStart.replace(["%data%", "awesomeness", "programming", "JS", "PS"]);

if(bio.skills.length > 0)  {

  $("#skills-h3").prepend(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}



var formattedWorkStart = HTMLworkStart.replace("%data%", "2006-Present");
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", "AT&T");
var formattedWorkTitle = HTMLworkTitle.replace("%data%", "Internet Advertising Consultant");
var formattedWorkDates = HTMLworkDates.replace("%data%", "08/11/06-Present");
var formattedWorkLocation = HTMLworkLocation.replace("%data%", "Atlanta, GA");
var formattedWorkDescription  = HTMLworkDescription.replace("%data%", "loren espom...");

var formattedProjectStart = HTMLprojectStart.replace("%data%", "");
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", "Portfolio");
var formattedProjectDates = HTMLprojectDates.replace("%data%", "08/19/15");
var formattedProjectDescription = HTMLprojectDescription.replace("%data%", "loren epsom...");
var formattedProjectImage = HTMLprojectImage.replace("%data%", "");

var formattedSchoolStart = HTMLschoolStart.replace("%data%", "01/96");
var formattedSchoolName = HTMLschoolName.replace("%data%", "University of Southern Mississippi");
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", "BA");
var formattedSchoolDates = HTMLschoolDates.replace("%data%", "01/96-05/01");
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", "Hattiesburg, MS");
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", "English/Media Production");

var formattedOnlineClasses = HTMLonlineClasses.replace("%data%", "Front-End Web Developer");
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", "Front-End Web Developer");
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", "Udacity");
var formattedOnlineDates = HTMLonlineDates.replace("%data%", "07/15/15");
var formattedOnlineURL = HTMLonlineURL.replace("%data%", "www.jeanettebarnes.com");

var formatedinternationalizeButton
var googleMap



$("#header").append(formattedName);
$("#header").append(formattedRole);

$("#header").append(formattedbioPic);

$("#main").append(formattedContact);
$("#main").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedLocation);


$("#main").append(formattedWelcomeMsg);

$("#header").append(formattedskillsStart);
$("#header").append(formattedSkill);
$("#header").append(formattedSkill[3]);


$("#projects").append(formattedProjectStart);
$("#projects").append(formattedProjectTitle);
$("#projects").append(formattedProjectDates);
$("#projects").append(formattedProjectDescription);
$("#projects").append(formattedProjectImage);

$("#education").append(formattedSchoolStart);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedSchoolMajor);
$("#education").append(formattedOnlineClasses);
$("#education").append(formattedOnlineTitle);
$("#education").append(formattedOnlineSchool);
$("#education").append(formattedOnlineDates);
$("#education").append(formattedOnlineURL);

$("#mapDiv").append