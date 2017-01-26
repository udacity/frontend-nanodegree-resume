var skills = [
    [["HTML & CSS"],["javascript"],["Bootstrap"]],
    ["Awesomness"]
  ];

// Biographic Info Object

var bio = {
  "name": "Mike ",
  "role": "Front-End ",
  "contact" : {
    "email": "myemailmate@gmail.com ",
    "mobile": 0750432321,
    "git" : "https://github.com/0750kosse"
  },
  "message" : "Hello and welcome to my website Hello and welcome to my website balbla",
  "skills" : skills
};
bio.city = "London";
bio.image  = "images/me.jpg";

var workInfo = {};
workInfo.JobPosition = "Retail Manager";
workInfo.Employer = "Selfridges";
workInfo.Years = "2010 to present";
workInfo.City = "London, UK";

var previousJob = {};
  previousJob.JobPosition = "Rocket Engineer";
  previousJob.Employer = "NASA";
  previousJob.Years = "2005 to 2010";
  previousJob.City = "Massachusets, USA";

var education = {};
education["Last School"] = "UAB";
education["Years Attended"]= "2000 to 2003";
education["School City"] = "Mollet del Valles";
//header
var formattedName = HTMLheaderName.replace("%data%", "Jose C. Sanchez");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
//topContacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGit = HTMLgithub.replace("%data%", bio.contact.git);
var formattedCity = HTMLlocation.replace("%data%", bio.city);
var formattedPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

//Work
var currentRole = HTMLworkTitle.replace("%data%",workInfo.JobPosition);
var Employer = HTMLworkEmployer.replace("%data%", workInfo.Employer);
var dates = HTMLworkDates.replace("%data%", workInfo.Years);
var workLocation = HTMLworkLocation.replace("%data%", workInfo.City);

var previousRole = HTMLworkTitle.replace("%data%", previousJob.JobPosition);
var Employer2 = HTMLworkTitle.replace("%data%", previousJob.Employer);
var dates2 = HTMLworkTitle.replace("%data%", previousJob.Years);
var workLocation2 = HTMLworkTitle.replace("%data%", previousJob.City);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGit);
$("#topContacts").append(formattedCity);
$("#topContacts").append(formattedMessage);

$("#workExperience").prepend(HTMLskillsStart);
$("#workExperience").prepend(formattedSkills);
$("#workExperience").prepend(formattedSkills);
$("#workExperience").prepend(formattedSkills);

$("#workExperience").append(HTMLworkStart);
//$("#workExperience").append(Employer);
$("#workExperience").append(currentRole);
//$("#workExperience").append(workLocation);
//PREVIOUS JOB
//$("#workExperience").prepend(HTMLworkStart);
//$("#workExperience").append(Employer2);
//$("#workExperience").append(previousRole);
//$("#workExperience").append(workLocation2);

$("#education").append(HTMLschoolStart);
$("#education").append(education["Last School"]);




