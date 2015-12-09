/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work={
	"jobs":[
		{
		"employer":"CNPC",
		"title": "IT engineer",
		"location": "Ashhabad, Turkmenistan",
		"dates": "2009 - 2012",
		"description" : "It support job"
		},
		{
		"employer":"CACI inc",
		"title": "NOC support technician",
		"location": "Silver Spring, MD",
		"dates": "2012 - 2015",
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
			"name": "Bauman Moscow State Technical University",
			"location": "Moscow, Russia",
			"degree": "Master of Science",
			"majors": "Engeneering",
			"dates": "1999 - 2005",
			"url": "http://www.bmstu.ru"
		},

		{	"name": "Rosnou / Russian New University",
			"location": "Moscow, Russia",
			"degree": "1st - year graduate",
			"majors": "CompSience",
			"dates": "2005 - 2006",
			"url": "http://www.rosnou.ru"
		}
	],
	"onlineCourses":[
		{
			"title": "Udacity",
			"school": "onlineCourses",
			"dates": "2014 - 2015",
			"url": "http://www.udacity.com"
		},
		{
			"title": "Coursera",
			"school": "onlineCourses",
			"dates": "2015",
			"url": "http://www.coursera.com"
		},
		{
			"title": "Udemy",
			"school": "onlineCourses",
			"dates": "2014",
			"url": "http://www.udemy.com"
		}
	]

};


//displaying name and role on the top
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
//displaying Contacts 
$("#header").append($("#topContacts"));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
//displaying picture and biography
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
//displaying skills
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



// work section
work.display = function() {
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
//display work section
work.display();
// project section
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
//displaying project section
projects.display();

//education section
education.display = function() {
	 for (school in education.schools){
	 	$("#education").append(HTMLschoolStart);
	 	var formatedSchoolName = HTMLschoolName.replace
	 	("%data%", education.schools[school].name);
	 	var formatedSchoolDegree = HTMLschoolDegree.replace
	 	("%data%", education.schools[school].degree);
	 	var formatedSchoolDates = HTMLschoolDates.replace
	 	("%data%", education.schools[school].dates);
	 	var formatedSchoolLocation = HTMLschoolLocation.replace
	 	("%data%", education.schools[school].location);
	 	var formatedSchoolMajor = HTMLschoolMajor.replace
	 	("%data%", education.schools[school].majors);	
	 	
	 	var formatedSchoolData = formatedSchoolName + formatedSchoolDegree +
	 	 formatedSchoolDates + formatedSchoolLocation + formatedSchoolMajor;
	    $(".education-entry:last").append(formatedSchoolData);
	 };

	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses){
		var formatedCourseTitle = HTMLonlineTitle.replace
	 	("%data%", education.onlineCourses[course].title);
	 	var formatedCourseSchool = HTMLonlineSchool.replace
	 	("%data%", education.onlineCourses[course].school);
	 	var formatedCourseDates = HTMLonlineDates.replace
	 	("%data%", education.onlineCourses[course].dates);
	 	var formatedCourseURL = HTMLonlineURL.replace
	 	("%data%", education.onlineCourses[course].url);
	 		
	 	
	 	var formatedCourseData = formatedCourseTitle + formatedCourseSchool +
	 	 formatedCourseDates + formatedCourseURL;
	 	$(".education-entry:last").append(formatedCourseData);
	 };
};
//displaying education
education.display();

//displaying MAP
$("#mapDiv").append(googleMap);
//displaying footer contacts
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

//Internationalized button
$("#main").append(internationalizeButton);
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] =name[0].slice(0,1).toUpperCase()+
		name[0].slice(1).toLowerCase();
	return name[0]+ " " + name[1];

};
