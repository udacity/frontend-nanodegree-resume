var work = {
	"jobs":[
		{
			"employer":"Tomtom Taxi",
			"title":"Online Content Intern",
			"location":"Amsterdam, Netherlands",
			"dates":"2012-2013",
			"description":"Tomtom taxi was a mobile app startup, which allowed consumers to book a taxi with a click of a button. The product was launched for IOS and Android. I was mainly part of the online team where we launched and managed the website in Dutch and English."
		},
		{
			"employer":"Fatale Entertainment",
			"title":"Co-founder",
			"location":"Rotterdam, Netherlands",
			"dates":"2012-2013",
			"description":"Fatale Entertainment is an organizer of international events for university students. It has partnership with one of the largest international student organization, ESN, and have organized events for up to 500 people. As a cofounder, I was responsible from Fatale brand by managing a coherent identity in online and offline mediums. I was also responsible for sponsors and venues."
		},
		{
			"employer":"Cross Capto",
			"title":"Online Marketing Intern",
			"location":"Rotterdam, Netherlands",
			"dates":"2011-2012",
			"description":"Cross Capto is an online marketing company which provides clients with web design, SEO, SEM and marketing solutions."
		}
	]
};


var projects = {
	"project":[
		{
			"title":"Udacity Portfolio Page",
			"dates":"2014",
			"description":"Portfolio Project",
			"image":"images/project1-full.jpg",
			"url":"http://frank3stein.github.io/index.html",
			"repo":"https://github.com/frank3stein/frank3stein.github.io"
		},
		{
			"title":"Udacity Interactive Resume",
			"dates":"2014",
			"description":"Here i created an online resume using Javascript to manipulate the DOM and to read data from JSON. By editing JSON the page automatically updates itself.",
			"image":"images/project2-full.jpg",
			"url":"http://frank3stein.github.io/frontend-nanodegree-resume/",
			"repo":"https://github.com/frank3stein/frontend-nanodegree-resume"
		},
		{
			"title":"Classic Arcade Clone",
			"dates":"2014",
			"description":"This is a simple frogger game. The player can start by playing the game immediately by using either arrow keys on the keyboard or WASD keys. Avoid the enemy bugs and try to reach the water. Once you reach the water you win the game.",
			"image":"images/Frogger.jpg",
			"url":"http://frank3stein.github.io/frontend-nanodegree-arcade-game/",
			"repo":"https://github.com/frank3stein/frontend-nanodegree-arcade-game"
		},
		{
			"title":"Website Optimization",
			"dates":"2015",
			"description":"The project was about using best practices for performance on websites. This included fonts optimisation through @font face, inlining css, minimising images and server request prioritisation. Also in the pizza web page, animations were improved through optimising the code (loop contents), using translate 3d hack and request animations in order to reach 60 fps quality measure.",
			"image":"images/Udacity_Performance.jpg",
			"url":"http://frank3stein.github.io/frontend-nanodegree-mobile-portfolio/",
			"repo":"https://github.com/frank3stein/frontend-nanodegree-mobile-portfolio"
		},
		{
			"title":"Neighborhood Project",
			"dates":"2015",
			"description":"In this project I used Yelp API, Google Maps API, Google StreetView API and Wikipedia API in order to create a map of Sydney where users can look at the first 20 Sushi Restaurants around the city.",
			"image":"images/Udacity_Neighbourhood_Map.jpg",
			"url":"http://frank3stein.github.io/fnd-project5/build/",
			"repo":"https://github.com/frank3stein/fnd-project5"
		},
		{
			"title":"Feedreader Testing",
			"dates":"2015",
			"description":"In this project I used Yelp API, Google Maps API, Google StreetView API and Wikipedia API in order to create a map of Sydney where users can look at the first 20 Sushi Restaurants around the city.",
			"image":"images/UdacityFeeds_Jasmine.jpg",
			"url":"http://frank3stein.github.io/frontend-nanodegree-feedreader/",
			"repo":"https://github.com/frank3stein/frontend-nanodegree-feedreader"
		}
	]
};

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
		"location":"Rotterdam, Netherlands"
	},

	"skills":[
		"HTML",
		" CSS",
		" JavaScript",
		" JQuery",
		" Knockout.js",
		"	Bootstrap",
		" Gulp/Grunt",
		" Github",
		" Photoshop CS",
		" Google Adwords",
		" SEO"
	]
};


var education={
	"schools":[
		{
			"name":"Udacity",
			"location":"Rotterdam, Netherlands",
			"degree":"Nano Degree",
			"majors":"Front End Development",
			"dates":"2014-2015",
			"url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"name":"Rotterdam School of Management",
			"location":"Rotterdam, Netherlands",
			"degree":"Masters",
			"majors":"Marketing Management",
			"dates":"2009-2014",
			"url":"http://www.rsm.nl/master/"
		},
		{
			"name":"Rotterdam School of Management",
			"location":"Rotterdam, Netherlands",
			"degree":"Masters",
			"majors":"General Management",
			"dates":"2008-2009",
			"url":"http://www.rsm.nl/master/"
		},
		{
			"name":"Rotterdam School of Management",
			"location":"Rotterdam, Netherlands",
			"degree":"Masters",
			"majors":"Management of Innovation",
			"dates":"2010-",
			"url":"http://www.rsm.nl/master/"
		},
		{
			"name":"Koc University",
			"location":"İstanbul, Turkey",
			"degree":"Bachelor",
			"majors":"Physics",
			"dates":"2003-2008",
			"url":"https://www.ku.edu.tr/en"
		}
	]
};

// To be included once completed
var onlinecourses={
	"onlinecourse":[
		{
			"title":"Front-end Nano Degree",
			"school":"Udacity",
			"dates":"2014-",
			"url":""
		}
	]
};


// Since personal information is unique no need for a function to be written. Here Information is written to html from bio object.
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var	formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
var formattedPicture=HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
// var formattedSkills=HTMLskills.replace("%data%",bio.skills);

// Sticky NavBar implementation
$(function() {
	var navPosition = $('#navBar').offset().top,
	navBar = document.getElementById('navBar'),
	header = document.getElementById('header');

	// On window resize recalculates menu element heights
	window.addEventListener('resize', function(){
			navPosition = $('#navBar').offset().top;
		  navBar = document.getElementById('navBar');
		  header = document.getElementById('header');
		}
	);

  function navControl() {
    var currentScroll = $(document).scrollTop();
    if (currentScroll >= navPosition) {
      navBar.classList.add('fixed-nav');
      header.classList.add('expand-header');
    } else {
      navBar.classList.remove('fixed-nav');
      header.classList.remove('expand-header');
    }
  }

  $(window).scroll(navControl);
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
		var navHeight = $('#navBar').height();
		console.log(target);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top-navHeight
        }, 3000);
    }
});

$("#footerContacts").append(formattedEmail,formattedMobile,formattedGithub,formattedLocation);

// WorkMap is an array created in order to use to manipulate name in map.
// var workMap=[];
// Display work function takes objects from the work array and appends them to the page. Function was written in order to add new information to the page automatically.
function displayWork(){
	for (var workObj=0; workObj<work.jobs.length; workObj++){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[workObj].employer);
		var formattedworkTitle=HTMLworkTitle.replace("%data%",work.jobs[workObj].title);
		var formattedEmployerTitle=formattedEmployer+formattedworkTitle;
		var formattedworkDates=HTMLworkDates.replace("%data%",work.jobs[workObj].dates);
		var formattedworkLocation=HTMLworkLocation.replace("%data%",work.jobs[workObj].location);
		var formattedworkDecription=HTMLworkDescription.replace("%data%",work.jobs[workObj].description);
		// THis is not implemented. The goal of the following code was to record earch work object code so I can use it on the google maps marker info.
		// workMap.push(HTMLworkStart+"\n"+formattedEmployer+"\n"+formattedworkTitle+"\n"+formattedEmployerTitle+"\n"+formattedworkDates+"\n"+formattedworkDecription);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDecription);
	}
}
displayWork();

// The Here is the header information appended to the html document
$("#header").prepend(formattedName,formattedRole);
$("#topContacts").append(formattedEmail,formattedMobile,formattedGithub,formattedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);
// Checking if there are any skills in bio, if there are publish the start and the skills
if (bio.skills.length !== 0){
	$("#header").append(HTMLskillsStart);
	for (var skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
		// document.getElementByID("skills").textContent = formattedSkills;
		// $(formattedSkills).appendTo($("#skills"));
	}
}

$("#navBar").append(HTMLNavBar);

// Internationilizing the Name if you get emil martinov === Emil MARTINOV
// function inName(name){
// 	var names=name.split(" ");
// 	var firstName=names[0];
// 	var lastName=names[1];
// 	firstName=firstName.toLowerCase();
// 	firstName=firstName.charAt(0).toUpperCase()+firstName.slice(1);
// 	lastName=lastName.toUpperCase();
// 	return firstName+" "+lastName;
// }
// Appending to main
// $("#main").append(internationalizeButton);

// Adding a map
$("#mapDiv").append(googleMap);

// Adding Projects to the page
projects.display 	=	function(){
	$("#projects").append(HTMLprojectStart);
	for (var project=0; project<projects.project.length; project++){
		$(".project-entry").append(HTMLprojectFlex);
		var formattedprojectTitle		=	HTMLprojectTitle.replace("%data%",projects.project[project].title).replace("#",projects.project[project].url);
		var formattedprojectDates		=	HTMLprojectDates.replace("%data%",projects.project[project].dates);
		var formattedprojectDescription	=	HTMLprojectDescription.replace("%data%", projects.project[project].description).replace("#",projects.project[project].repo);
		var formattedprojectImage		= 	HTMLprojectImage.replace("%data%",projects.project[project].image).replace("#",projects.project[project].url);
		$(".flex-projects:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription, formattedprojectImage);
	}
};
projects.display();

// Here education is also saved in an array so that it may be used in the map content data in the marker.
var educationMap=[];


// Adding Education to the Resume
education.display =	function(){
	for ( var degree = 0; degree<education.schools.length; degree++){
		$("#education").append(HTMLschoolStart);
		var formattedschoolName			=	HTMLschoolName.replace("%data%",education.schools[degree].name).replace("#", education.schools[degree].url);
		var formattedschoolDegree		=	HTMLschoolDegree.replace("%data%",education.schools[degree].degree);
		var formattedschoolDates		=	HTMLschoolDates.replace("%data%", education.schools[degree].dates);
		var formattedschoolLocation		= 	HTMLschoolLocation.replace("%data%",education.schools[degree].location);
		var	formattedschoolMajor		=	HTMLschoolMajor.replace("%data%",education.schools[degree].majors);
		educationMap.push(HTMLschoolStart+"\n"+formattedschoolName+"\n"+formattedschoolDegree+"\n"+formattedschoolDates+"\n"+formattedschoolLocation+"\n"+formattedschoolMajor);
		$(".education-entry:last").append(formattedschoolName, formattedschoolDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajor);
	}
};
education.display();
