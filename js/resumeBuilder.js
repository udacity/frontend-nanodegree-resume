/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var name = "Maksim Shepin";
//var role = "Web developer";
//var formatedName = HTMLheaderName.replace("%data%", name);
//var formatedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").append(formatedName);
//$("#header").append(formatedRole);
var work={
	"jobs":[
		{
		"employer":"CNPC",
		"title": "IT engineer",
		"location": "Ashhabad, Turkmenistan",
		"dates": "2009-2012",
		"description" : "It support job"
		},
		{
		"employer":"CACI inc",
		"title": "NOC support technician",
		"location": "Silver Spring, MD",
		"dates": "2009-2012",
		"description" : "Network and system support job"
		},
		{
		"employer":"HPE Hewlett - Packard Enterprise",
		"title": "VOIP engineer",
		"location": "Washington, DC",
		"dates": "2015 - Present",
		"description" : "VOIP telephony support job"
		}
	]
};
var projects = {
	"projects":[
		{
		"title":"portfolio",
		"dates": "2015",
		"description" : "My portfolio",
		"images": ["images/fry.jpg", "images/197x148.gif"]
		},
		{
		"title":"onlineResume",
		"dates": "2015",
		"description" : "My resume",
		"images": ["images/197x148.gif"]
		}
	]

};
var bio = {
	"name": "Maksim Shepin",
	"role": "web developer",
	"welcomeMessage": "welcome to my awesom resume page made with Javascript, HTML and CSS",
	"contacts": {
		"mobile":"240-671-2573",
		"email": "shepin.maksim@gmail.com",
		"github": "github",
		"twitter" :"@twitter",
		"location": "Gaithersburg. MD"
	},
	"skills": ["awesome", "experienced", "cool", "handy"],
	"bioPic": "images/fry.jpg"
};

var education ={
	"schools": [
		{
			"name": "bauman",
			"location": "Moscow, Russia",
			"degree": "BA",
			"majors": "Engeneering",
			"dates": "dates",
			"url": "url"
		},

		{	"name": "Rosnou",
			"location": "Moscow, Russia",
			"degree": "BA",
			"majors": "CompSience",
			"dates": "dates",
			"url": "url"
		}
	],
	"onlineCourses":[
		{
			"title": "Udacity",
			"school": "onlineCourses",
			"dates": "dates",
			"url": "url"
		},
		{
			"title": "Coursera",
			"school": "onlineCourses",
			"dates": "dates",
			"url": "url"
		}
	]

};



$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));


$("#header").append($("#topContacts"));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formatedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formatedSkill);
    formatedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formatedSkill);
    formatedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formatedSkill);
    formatedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formatedSkill);
    };
function displayWork(){
 for (job in work.jobs){
 	$("#workExperience").append(HTMLworkStart);
 	var formatedEmployer = HTMLworkEmployer.replace
 	("%data%", work.jobs[job].employer);
 	var formatedworkTitle = HTMLworkTitle.replace
 	("%data%", work.jobs[job].title);
    var formatedWorkDates = HTMLworkDates.replace
 	("%data%", work.jobs[job].dates);
 	var formatedWorkLocation = HTMLworkLocation.replace
 	("%data%", work.jobs[job].location);
 	var formatedWorkDescription = HTMLworkDescription.replace
 	("%data%", work.jobs[job].description);
 	
 	var formatedData = formatedEmployer+formatedworkTitle+
 	 formatedWorkDates + formatedWorkLocation + formatedWorkDescription;
    $(".work-entry:last").append(formatedData);
 };
};
displayWork();

$("#main").append(internationalizeButton);
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] =name[0].slice(0,1).toUpperCase()+
		name[0].slice(1).toLowerCase();
	return name[0]+ " " + name[1];

}

projects.display = function() {
 	for (project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);

 		var formatedprojectTitle = HTMLprojectTitle.replace
 		("%data%", projects.projects[project].title);
 		$(".project-entry:last").append(formatedprojectTitle);

 		var formatedprojectDates = HTMLprojectDates.replace
 		("%data%", projects.projects[project].dates);
 		$(".project-entry:last").append(formatedprojectDates);

 		var formatedprojectDescription = HTMLprojectDescription.replace
 		("%data%", projects.projects[project].description);
 		$(".project-entry:last").append(formatedprojectDescription);

 		if (projects.projects[project].images.length > 0) {
 			for (image in projects.projects[project].images) {
 				var formatedprojectImage = HTMLprojectImage.replace
 				("%data%", projects.projects[project].images[image]);
 				$(".project-entry:last").append(formatedprojectImage);
 			}
 		}
 		
 	}
 };
projects.display();

$("#mapDiv").append(googleMap);
