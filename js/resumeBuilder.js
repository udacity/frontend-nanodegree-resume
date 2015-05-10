//$("#main").append("Miguel Morales");
/*var awesomeThoughts = "My name is Miguel and I am AWESOME"
var funThoughts = awesomeThoughts.replace("AWESOME","FUN")
console.log(awesomeThoughts)
console.log(funThoughts)*/

/*var titleName = "Miguel Morales"
var role = "Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role)
var formattedName = HTMLheaderName.replace("%data%", titleName)
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/


var bio = {
	"name" : "Miguel Morales",
	"role" : "Developer",
	"contacts" : {
		"mobile" : "655162992",
		"email" : "miguee02@gmail.com",
		"twitter" : "eugim02",
		"github" : "migue02",
		"location" : "Granada"
	},
	"picture" : "images/fry.jpg",
	"welcomeMsg" : "Hola a todos",
	"skills" : [
		"Good speaker","Good listener","Awesomeness"
	]
};


var education = {
	"schools" : [
		{
			"name" : "Universidad de Granada",
			"degree" : "Ingeniería Técnica en Informática de Sistemas",
			"dates" : "2008 - 2011",
			"location" : "Granada",
			"major" : "CS",
			"url" : "http://www.ugr.es"
		},
		{
			"name" : "Universidad de Granada",
			"degree" : "Ingeniería Informática",
			"dates" : "2011 - 2014",
			"location" : "Granada",
			"major" : "CS",
			"url" : "http://www.ugr.es"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Veridata S.L.",
			"title" : "Developer",
			"dates" : "November 2013 - Now",
			"location" : "Granada",
			"description": "Developer of VDoc",
			"url" : "http://www.veridata.es/"
		}
	]
};


var onlineClasses = {
	"onlineClasses" : [
		{
			"name" : "Developing Android Apps",
			"school" : "Udacity",
			"dates" : "May 2014",
			"url" : "https://www.udacity.com/",
			"url_class" : "https://www.udacity.com/course/developing-android-apps--ud853"
		},
		{
			"name" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "December 2014",
			"url" : "https://www.udacity.com/",
			"url_class" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"name" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "May 2015",
			"url" : "https://www.udacity.com/",
			"url_class" : "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"name" : "Mobile Web Development",
			"school" : "Udacity",
			"dates" : "June 2014",
			"url" : "https://www.udacity.com/",
			"url_class" : "https://www.udacity.com/course/mobile-web-development--cs256"
		},
		{
			"name" : "Programming Foundations with Python",
			"school" : "Udacity",
			"dates" : "March 2014",
			"url" : "https://www.udacity.com/",
			"url_class" : "https://www.udacity.com/course/programming-foundations-with-python--ud036"
		},
		{
			"name" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"dates" : "June 2015",
			"url" : "https://www.udacity.com/",
			"url_class" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		}
	]
};


var projects = {
	"projects" : [
		{
			"title" : "Juego de reconocimiento",
			"dates" : "2013 - 2014",
			"description" : "Android app for blind children",
			"url":" https://github.com/migue02/JuegoReconocimiento",
			"images":
			[
				"images/icono_juego.png",
				"images/alumnos_180.png"
			]
		}
	]
};

bio.skills.display = function(){
	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for (var i=0;i<bio.skills.length;i++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}
	}
}

bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedLocation);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	if (bio.skills.length > 0){
		bio.skills.display();
	}
}

work.display =  function(){
	for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY)
});

function inName(psName){
	psName = psName.trim().split(" ");
	console.log(psName);
	return psName[0].slice(0,1).toUpperCase()+psName[0].slice(1).toLowerCase()+ " " + psName[1].toUpperCase();
}

$("#main").append(internationalizeButton);


projects.display = function(){
	for(var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0){
			for(var image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function(){
	for(var school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedName = formattedName.replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedTitle = formattedName+formattedDegree;
		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
}

onlineClasses.display = function(){
	$(".education-entry:last").append(HTMLonlineClasses);
	for(var onlineClass in onlineClasses.onlineClasses){
		var formattedName = HTMLonlineTitle.replace("%data%", onlineClasses.onlineClasses[onlineClass].name);
		formattedName = formattedName.replace("#", onlineClasses.onlineClasses[onlineClass].url_class);
		var formattedSchool = HTMLonlineSchool.replace("%data%", onlineClasses.onlineClasses[onlineClass].school);
		var formattedDates = HTMLonlineDates.replace("%data%", onlineClasses.onlineClasses[onlineClass].dates);
		var formattedProvider = HTMLonlineURL.replace("%data%", onlineClasses.onlineClasses[onlineClass].school);
		formattedProvider = formattedProvider.replace("#", onlineClasses.onlineClasses[onlineClass].url);
		var formattedTitle = formattedName+formattedSchool;
		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedProvider);
	}
}


bio.display();
projects.display();
work.display();
education.display();
onlineClasses.display();
$("#main").append(googleMap);