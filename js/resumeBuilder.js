var bio = {
	"name" : "David Ciccone",
	"role" : "Web Developer",
	  "contacts": {
	    "email": "test@email.com",
	    "mobile": "123-456-7890",
	    "github": "username",
	    "location": "city, state",
	    "blog" : "website.com"
					},
"welcomeMsg": "Hi there, how are you?",
"skills": [
	"HTML", 
	"CSS", 
	"JavaScript" 
],
 "bioPic": "images/fry.jpg"
}

var work = {
	"jobs" :[
	{
		"employer" : "Company X",
		"title" : "customer Representative",
		"dates" : "October 2010 - Current",
		"location" : "city, state",
		"discription" : "Customer Service Company X"
	}
	]
}

var projects ={
	"projects" :[
	{
		
		"title" : "Sweet Project 1",
		"dates" : "2015",
		"discription" : "This was the first sweet project I did",
		 "image": "images/fry.jpg"
	}
	]
}


var education = {
	"schools" : [
	  {
	  	"name" : "State University",
	  	"location" : "city, state",
	  	"degree" : "Bachelors of Science",
	  	"major" : "Being awesome",
	  	"dates" : "2006 - 2010"
		}	
],

	

	"onlineCourses" :[ 
		{
			"title" : "Front End Developer Nano Degree",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com"
		}
	]
   }

var formattedName = HTMLheaderName.replace("%data%", bio.name)
var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
//var skills = HTMLskillsStart;
//var formattedSkills = HTMLskills.replace("%data%", bio.skills);
//var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
//var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);

//var startWork = HTMLworkStart;
//var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
//var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
//var formattedDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
//var formattedlocations = HTMLworkLocation.replace("%data%", work.jobs[0].location);
//var formatteddiscription = HTMLworkDescription.replace("%data%", work.jobs[0].discription);

//var startProjects = HTMLprojectStart;
//var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
//var formattedProject0Dates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
//var formattedProject0Description = HTMLprojectDescription.replace("%data%", projects.projects[0].discription);
//var formattedProject0image = HTMLprojectImage.replace("%data%", projects.projects[0].image0);

var startEducation = HTMLschoolStart;
var formattedSchool = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedDatesEdu = HTMLschoolDates.replace("%data%", education.schools[0].dates);
var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);

var formattedOnlineClasses = HTMLonlineClasses;
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
var formattedOnlineDatesEdu2 = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);

if(bio.skills.length > 0) {$("#header").append(formattedSkills);}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedblog);
$("#topContacts").append(formattedlocation);
$("#header").append(formattedpic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkills);}



//$("#header").append(formattedSkills);
//$("#header").append(formattedSkills1);
//$("#header").append(formattedSkills2);

//$("#workExperience").append(startWork);
//$(".work-entry").append(formattedWork + formattedTitle);
//$(".work-entry").append(formattedDates);
//$(".work-entry").append(formattedlocations);
//$(".work-entry").append(formatteddiscription);
function displayWork(){
for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
$(".work-entry:last").append(formattedWork + formattedTitle);
var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);
var formattedlocations = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedlocations);
var formatteddiscription = HTMLworkDescription.replace("%data%", work.jobs[job].discription);
$(".work-entry:last").append(formatteddiscription);

}}
displayWork();

projects.display = function() {
	for(project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedProjectTitle);

var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedProjectDates);

var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].discription);
	$(".project-entry:last").append(formattedProjectDescription);

//if (projects.projects[project].image.length > 0) {
	//for (image in projects.projects[project].image) {
var formatttedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
	$(".project-entry:last").append(formatttedProjectImage);
	
//}}
}}
projects.display();

//$("#projects").append(startProjects);
//$(".project-entry").append(formattedProject0Title);
//$(".project-entry").append(formattedProject0Dates);
//$(".project-entry").append(formattedProject0Description);
//$(".project-entry").append(formattedProject0image);

$("#education").append(startEducation);
$(".education-entry").append(formattedSchool + formattedDegree);
$(".education-entry").append(formattedDatesEdu);
$(".education-entry").append(formattedLocation);
$(".education-entry").append(formattedMajor);

$(".education-entry").append(formattedOnlineClasses);
$(".education-entry").append(formattedOnlineTitle + formattedOnlineSchool);
$(".education-entry").append(formattedOnlineDatesEdu2);
$(".education-entry").append(formattedOnlineUrl);

$(document).click(function(loc) {
  var x = loc.PageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);


