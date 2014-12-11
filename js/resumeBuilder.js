var work={
	"jobs":[
	{
	"employer":"Tomtom Taxi",
	"title":"Online Content Intern",
	"location":"Amsterdam",
	"dates":"2012-2013",
	"description":"Tomtom taxi was a mobile app startup, which allowed consumers to book a taxi with a click of a button. The product was launched for IOS and Android. I was mainly part of the online team where we launched and managed the website in Dutch and English."
	},
	{
	"employer":"Fatale Entertainment",
	"title":"Co-founder",
	"location":"Rotterdam",
	"dates":"2012-2013",
	"description":"Fatale Entertainment is an organizer of international events for university students. It has partnership with one of the largest international student organization, ESN, and have organized events for up to 500 people. As a cofounder, I was responsible from Fatale brand by managing a coherent identity in online and offline mediums. I was also responsible for sponsors and venues."
	},	
	{
	"employer":"Cross Capto",
	"title":"Online Marketing Intern",
	"location":"Rotterdam",
	"dates":"2011-2012",
	"description":"Cross Capto is an online marketing company which provides clients with web design, SEO, SEM and marketing solutions."
	}
	]
}


var projects={
	"project":[
	{
	"title":"Udacity Portfolio Page",
	"dates":"2014",
	"description":"Placeholder Project 1 - Portfolio Project",
	"image":"images/project1-full.jpg",
	"url":"http://frank3stein.github.io/index.html"
	},
	{
	"title":"Udacity Interactive Resume",
	"dates":"2014",
	"description":"Placeholder Project 2 - Interactive Resume",
	"image":"images/project1-full.jpg",
	"url":"http://frank3stein.github.io/index.html"
	}
	]
}

var bio={
	"name":"Emil Martinov",
	"role":"Front-end Developer Marketing Ninja",
	"picture":"images/fry.jpg",
	"welcomeMessage":"Cliche as it is bridge building is what I do, between science of physics, consumer behavior and online behavior. I surf the web and create pieces of it.",
	
	"contacts":
	{
		"mobile":"+31634636711",
		"email":"martinov.emil@gmail.com",
		"github":"frank3stein",
		"twitter":"emilmartinov",
		"location":"Rotterdam"
	},

	"skills":[
	"HTML",
	" CSS",
	" JavaScript",
	" Marketing",
	" Social Media",
	" Office Suite",
	" Photoshop CS",
	" Google Adwords",
	" SEO"
	]
}


var education={
"schools":[
	{
		"name":"Rotterdam School of Management",
		"location":"Rotterdam",
		"degree":"Masters",
		"majors":"Marketing Management",
		"dates":"2009-2014",
		"url":"http://www.rsm.nl/master/"
		},
	{
		"name":"Rotterdam School of Management",
		"location":"Rotterdam",
		"degree":"Masters",
		"majors":"General Management",
		"dates":"2008-2009",
		"url":"http://www.rsm.nl/master/"
		},
	{
		"name":"Rotterdam School of Management",
		"location":"Rotterdam",
		"degree":"Masters",
		"majors":"Management of Innovation",
		"dates":"2010-",
		"url":"http://www.rsm.nl/master/"
		},
	{
		"name":"Koc University",
		"location":"Istanbul, Turkey",
		"degree":"Bachelor",
		"majors":"Physics",
		"dates":"2003-2008",
		"url":"https://www.ku.edu.tr/en"
		}
]
}

var onlinecourses={
	"onlinecourse":[
	{
		"title":"Front-end Nano Degree",
		"school":"Udacity",
		"dates":"2014-",
		"url":""
	}
	]
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var	formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
var formattedPicture=HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills=HTMLskills.replace("%data%",bio.skills);
	
	function displayWork(){
	for (var workObj=0; workObj<work.jobs.length; workObj++){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[workObj].employer);
	var formattedworkTitle=HTMLworkTitle.replace("%data%",work.jobs[workObj].title);
	var formattedEmployerTitle=formattedEmployer+formattedworkTitle;
	var formattedworkDates=HTMLworkDates.replace("%data%",work.jobs[workObj].dates);
	var formattedworkLocation=HTMLworkLocation.replace("%data%",work.jobs[workObj].location);
	var formattedworkDecription=HTMLworkDescription.replace("%data%",work.jobs[workObj].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDecription);	
		}
	}
	displayWork();
$("#header").prepend(formattedName,formattedRole);
$("#header").append(formattedEmail,formattedMobile,formattedGithub,formattedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);
// if (bio.length!=0){$("#header").append(HTMLskillsStart);};
// $("#header").append(formattedSkills);


// Internationilizing the Name if you get emil martinov === Emil MARTINOV
	function inName(name){
	var names=name.split(" ");
	var firstName=names[0];
	var lastName=names[1];
	firstName=firstName.toLowerCase();
	firstName=firstName.charAt(0).toUpperCase()+firstName.slice(1);
	lastName=lastName.toUpperCase();
	return firstName+" "+lastName;
}
$("#main").append(internationalizeButton);
// Checking if there are any skills in bio, if there are publish the start and the skills

if (bio.skills.length=!0){
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formattedSkills);
};

// Adding a map 
$("#mapDiv").append(googleMap);

// Adding Projects to the page 
projects.display 	=	function(){
for (var project=0; project<projects.project.length; project++){
	$("#projects").append(HTMLprojectStart);
	var formattedprojectTitle		=	HTMLprojectTitle.replace("%data%",projects.project[project].title).replace("#",projects.project[project].url); 
	var formattedprojectDates		=	HTMLprojectDates.replace("%data%",projects.project[project].dates); 
	var formattedprojectDescription	=	HTMLprojectDescription.replace("%data%", projects.project[project].description);
	var formattedprojectImage		= 	HTMLprojectImage.replace("%data%",projects.project[project].image);
	$(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription, formattedprojectImage);
	}
}
projects.display();
var educationMap=[];


// Adding Education to the Resume
education.display 	=	function(){
for ( var degree =0; degree<education.schools.length; degree++){
	$("#education").append(HTMLschoolStart);
	var formattedschoolName			=	HTMLschoolName.replace("%data%",education.schools[degree].name).replace("#", education.schools[degree].url); 
	var formattedschoolDegree		=	HTMLschoolDegree.replace("%data%",education.schools[degree].degree); 
	var formattedschoolDates		=	HTMLschoolDates.replace("%data%", education.schools[degree].dates);
	var formattedschoolLocation		= 	HTMLschoolLocation.replace("%data%",education.schools[degree].location);
	var	formattedschoolMajor		=	HTMLschoolMajor.replace("%data%",education.schools[degree].majors);
	educationMap.push(HTMLschoolStart+"\n"+formattedschoolName+"\n"+formattedschoolDegree+"\n"+formattedschoolDates+"\n"+formattedschoolLocation+"\n"+formattedschoolMajor);		
	$(".education-entry:last").append(formattedschoolName, formattedschoolDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajor);
	}
}
education.display();
// Inside the project function
// var formattedprojectTitle		=	HTMLprojectTitle.replace("%data%",projects[0].title); 
// var formattedprojectDates		=	HTMLprojectDates.replace("%data%",projects[0].dates); 
// var formattedprojectDescription	=	HTMLprojectDescription.replace("%data%", projects[0].description);
// var formattedprojectImage		= 	HTMLprojectImage.replace("%data%",projects[0].image);
// $("#projects").append(HTMLprojectStart);
// $("#projects").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription, formattedprojectImage);


// // Recording the x,y location when left mouse button is clicked.
// $(document).click(function(loc){
// 	var x = loc.pageX;
// 	var y = loc.pageY;
// 	logClicks(x,y);
// });