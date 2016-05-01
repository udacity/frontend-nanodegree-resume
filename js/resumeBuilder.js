/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //factor out constantly repeated '%data%''
 var data = '%data%';

 var bio = {
  "name" : "Jessica Park",
  "role" : "Software Engineer",
  "contacts" : {
		"mobile" : "415-602-9974",
 	 	"email" : "jessjhpark@gmail.com" ,
 	 	"github" : "github.com/jeehaepark",
  	"twitter" : "@tinklejess",
  	"location" : "San Francisco"
  },
  "welcomeMessage" : "I focus on front-end development in JavaScript/HTML/CSS, using technologies such as Node.js and Express, libraries such as jQuery, D3, and Bootstrap, and most front-end MVC frameworks with a specialization in Angular.js.",
  // Other parts of the stack that I'm strong include git, Postgres, MongoDB, MySQL, and tools such as Gulp, Grunt, Mocha, Chai and Karma. Other things I dabble in: statistics, social impact, full-stack development, classical music (violin)
  "skills" : ["JavaScript","node.js","express.js","AngularJS","PostgreSQL","MongoDB"],
  "biopic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASbAAAAJGYzY2UxZGE3LWZiNTEtNDQyZC1iNmIyLTRhZDA0Y2Y5OTRlMg.jpg"
 };

bio.display = function (){
 	// name and role
var formattedName = HTMLheaderName.replace(data,bio.name);
var formattedRole = HTMLheaderRole.replace(data,bio.role);

 $('#header').prepend(formattedRole);
 $('#header').prepend(formattedName);

//contact
var formattedMobile = HTMLmobile.replace(data,bio.contacts.mobile);
var formattedEmail = HTMLemail.replace(data,bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace(data,bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace(data,bio.contacts.github);
var formattedLocation = HTMLlocation.replace(data,bio.contacts.location);
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedTwitter);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedLocation);

//bioPhoto
var formattedBioPic = HTMLbioPic.replace(data,bio.biopic);

$('#header').append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data,bio.welcomeMessage);
$('#header').append(formattedWelcomeMsg);

// skill sets
$('#header').append(HTMLskillsStart);

bio['skills'].forEach(function(ele){
	 var formattedSkills = HTMLskills.replace(data,ele);
	 $('#skills').append(formattedSkills);
	});
};

//invoke the display method
bio.display();

 var education = {
  "schools": [
	  {  "name" : "MakerSquare",
	  "location" : "San Francisco",
	  "degree" : "Advanced Software Engineering Immersive",
	  "majors" : ["JavaScript"],
	  "dates": "2016",
	  "url" : "http://www.makersquare.com/" },
	  {  "name" : "Diablo Valley College",
	  "location" : "Pleasant Hill",
	  "degree" : "Associate Degree",
	  "majors" : ["mathematics"],
	  "dates": "2012-2015",
	  "url" : "http://www.dvc.edu/" }],
	"onlineCourses": [{
		"title" : "Front-End Web Developer Nanodegree",
  	"school" : "Udacity",
  	"date" : "2016",
  	"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"}]
 };

education.display = function(){
	$('#education').append(HTMLschoolStart);

	education.schools.forEach(function(school){
		var formattedSchoolName = HTMLschoolName.replace(data,school.name);
		var formattedSchoolDegree = HTMLschoolDegree.replace(data,school.degree);
		$('.education-entry').append(formattedSchoolName+formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
		$('.education-entry').append(formattedSchoolDates);
		$('.education-entry').append(formattedSchoolLocation);

		for(major in school.majors){
			var formattedSchoolMajor = HTMLschoolMajor.replace(data, school.majors[major]);
			$('.education-entry').append(formattedSchoolMajor);
		}
	});

	$('#education').append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(online){
		var formattedOnlineTitle = HTMLonlineTitle.replace(data,online.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace(data,online.school);
		$('#education').find('h3').append(formattedOnlineTitle+formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace(data, online.date);
		var formattedOnlineURL = HTMLonlineURL.replace(data, online.url);

		$('#education').find('h3').append(formattedOnlineDates);
		$('#education').find('h3').append(formattedOnlineURL);
	});
};
education.display();

 var work = {
 	"jobs": [{
  	"employer": "Diablo Valley College" ,
    "title": "Math Tutor",
    "location": "Pleasant Hill, CA",
    "dates": "2013 ‐ 2015",
    "description": "Taught problem‐solving and critical thinking skills for multivariable calculus and statistics to hundreds of students." 
 	},{
  	"employer": "Upward Bound" ,
    "title": "Mentor",
    "location": "Concord, CA",
    "dates": "2014",
    "description": "Mentored high school students providing not only school work assistance, but 1:1 support, motivation, and to critically analyze and plan their futer and academic careers." 
 	}]
 };

work.display = function(){
	// workExperience
	$('#workExperience').append(HTMLworkStart);
	// var workObj = work.jobs(type of Arr);
	work['jobs'].forEach(function(workObj){
		var formattedWorkEmployer = HTMLworkEmployer.replace(data,workObj.employer);
		var formattedWorkTitle = HTMLworkTitle.replace(data,workObj.title);

		$('.work-entry:last').append(formattedWorkEmployer+formattedWorkTitle);

		var formattedWorkLocation = HTMLworkLocation.replace(data,workObj.location);

		$('.work-entry:last').append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace(data, workObj.dates);
		var formattedWorkDescription = HTMLworkDescription.replace(data,workObj.description);

		$('.work-entry:last').append(formattedWorkDates);
		$('.work-entry:last').append(formattedWorkDescription);

	});
};
work.display();

 var projects = {
 	"projects": [{
 		"title": "Saja", 
    "dates": "2016-03",
    "description": "Price tracker that lets the user list items to buy and track price drops via email and sms notifications. Built with Angular, Node, Express, and PostgreSQL",
    "images": ["https://s3.amazonaws.com/accredible-api-projects/previews/5390/large/1461091858653?1461091485"]
        },{
 		"title": "MyBooletin", 
    "dates": "2016-02",
    "description": "Built v2 iteration of an existing event organization and event discovery platform multi-view web app.Built with Angular, Node, Express, and Firebase",
    "images": ["https://s3.amazonaws.com/accredible-api-projects/previews/5391/large/1461092235160?1461091754"]
        },{
 		"title": "Freebees", 
    "dates": "2016-02",
    "description": "Single page app where users can post items to give away and view available items nearby on a map. Built with Angular, Node, Express, and MongoDB",
    "images": ["https://s3.amazonaws.com/accredible-api-projects/previews/5477/large/1462052988684?1462052784"]
        }]
 };

 projects.display = function(){
 	//Project
	$('#projects').append(HTMLprojectStart);

	for( project in projects.projects){
		var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);

		var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[project].dates);

		var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace(data,projects.projects[project].images);

			$('.project-entry:last').append(formattedProjectTitle);
			$('.project-entry:last').append(formattedProjectDates);
			$('.project-entry:last').append(formattedProjectDescription);
			$('.project-entry:last').append(formattedProjectImage);	
	}
 };
//invoke projects information
projects.display();


$('#mapDiv').append(googleMap);

