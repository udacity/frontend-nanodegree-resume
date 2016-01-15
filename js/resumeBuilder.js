/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append(["Li Wang"]);

 //var awesomeThoughts, funThoughts;
 //awesomeThoughts = "I am Li Wang and I am awesome!";
 //funThoughts = awesomeThoughts.replace("awesome", "FUN");
 //console.log(awesomeThoughts);
 //$("#main").append(funThoughts);

 var bio = {
 	"name": "Li Wang",
 	"role": "Web Developer",
 	"welcomeMsg":"Build Applications And Make A Difference!",
 	"contacts": {
 		"email": "wangxbl56@gmail.com",
 		"github": "llwang8",
 		"twitter": "@Lwang2015",
 		"location": "Princeton, NJ"
 	},
 	"skills": ["Ruby on Rails", "JavaScript", "jQuery", "SQL", "PostgreSQL", "HTML", "CSS"]

 };

 HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
 HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
 $("#header").prepend(HTMLheaderRole);
 $("#header").prepend(HTMLheaderName);

 $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
 $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
 $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
 $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
 $("#header").append(HTMLbioPic.replace("%data%", "images/selfie4.jpg"));
 $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));



 if (bio.skills != []) {
 	$("#header").append(HTMLskillsStart);

 	for (var i = 0, len = bio.skills.length; i < len; i ++) {
 		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
 		HTMLskills = HTMLskills.replace(bio.skills[i], "%data%");
 	}
 }

var work = {
	"jobs": [
		{
			"employer": "Inlingua Princeton",
			"title": "Voice Talent and Translator",
			"location": "Princeton, NJ",
			"dates": "2006-2015",
			"description": "Record Chinese and verify scripts for clinical trial projects conducted in China. <br>Translator for public schools to help immigrant families."
		},
		{
			"employer": "CherryValley Studio",
			"title": "Founder",
			"location": "Princeton, NJ",
			"dates": "2002-2015",
			"description": "Operated studio to provide comprehensive quality DVD services to businesses and families. <br>Managed all business aspects including accounting, taxation, marketing and website."
		},
		{
			"employer": "C&A and Associates",
			"title": "Associate Programmer",
			"location": "Somerville, NJ",
			"dates": "2000-2001",
			"description": "Using ASP, Javascript, SQL, HTML/DHTML, CSS, Visual  Interdev to participate in the development PPM (people profile management), <br>build Essistme (v1) application, customize CNCv1 (news engine) for various clients ."
		},
		{
			"employer": "PILLSBURY, MADISON & SUTRO LLP",
			"title": "Financial Analyst",
			"location": "San Francisco, CA",
			"dates": "1998",
			"description": "Management reporting, forecasting, budgeting and financial analysis."
		},
		{
			"employer": "Beckman Coulter",
			"title": "Financial Analyst",
			"location": "Palo Alto, CA",
			"dates": "1996-1998",
			"description": "Management reporting, forecasting, budgeting and analysis."
		},
		{
			"employer": "Linus Pauling Institute",
			"title": "Controller",
			"location": "Palo Alto, CA",
			"dates": "1995-1996",
			"description": "Management reporting, budgeting, analysis, accounting, taxation and purchasing."
		}

	]

};

function displayWork() {
	if (work.jobs.length > 1) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle =  formattedEmployer + " " + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
			//HTMLworkEmployer.replace(work.jobs[job].emppoyer, "%data%");
			//HTMLworkTitle.replace(work.jobs[job].title, "%data%");
		}
	}
}

displayWork();

function inName(name){
	name = name.trim().split(" ");
	name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1]= name[1].toUpperCase();
	HTMLheaderName = HTMLheaderName.replace(name[0] + " " + name[1]);
}

var internationalizedButton = '<input type="button" value="Internationalize Name" onClick=inName(HTMLheaderName)>';
$("#main").append(internationalizedButton);

var projects = {
	"projs": [
		{
			"title": "Ruby Rampup Projects",
			"dates": "2015",
			"description": "Blackjack Game, Game Of Life, League Point Calculator, NYC Restaurant Health Check.",
			"images":[]
		},
		{
			"title": "ResourcesXchange",
			"dates": "2015",
			"description": "Rails app - Follow Michael Hartl's ruby on rails tutorial and build a Twitter clone in rails plus more add-on features.",
			"images":["images/ResourcesXchange.png"]	
		},
		{
			"title": "Send Twilio Message",
			"dates": "2015",
			"description": "Rails app - Use web interface to send twilio message to pre-certify cell number.",
			"images":[]
		},
		{
			"title": "moviestore",
			"dates": "2015",
			"description": "Rails app - Online Movie Store using Foundation for responsive page design, Redit for shopping cart tracking, Raintree to accept payments, Ransack for advance search.",
			"images":["images/MovieStore.png"]
		},
		{
			"title": "Simple Webblog",
			"dates": "2015",
			"description": "Rails app - Web blog Using MVC (Model, View, Controller) and RESTful design to perform CRUD operations connectting web interface with SQL database.",
			"images":[]
		}

	]
}
projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (var proj in projects.projs) {
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projs[proj].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projs[proj].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projs[proj].description));
		if (projects.projs[proj].images.length > 1) {
			for (img in projects.proj[proj].images) {
			 $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projs[proj].images[img]));
			}
		}
	}
}

projects.display();

var education = {
	"schools": [
	{
		"name": "Startup Institute",
		"location": "New York, NY",
		"degree": "Certificate of Achievement",
		"major": "Web Development",
		"dates": "October to December 2015",
		"url": "https://www.startupinstitute.com"
	},
	{
		"name": "Chubb Institute",
		"location": "Islin, NJ",
		"degree": "Certificate of Achievement",
		"major": "Programming and Web Development",
		"dates": "August to October 1999",
		"url": "http://www.chubb-computer-institute.org/index.html"
	},
	{
		"name": "Bryant University",
		"location": "Smithfield, RI",
		"degree": "MBA",
		"major": "Accounting",
		"dates": "1992-1993",
		"url": "http://www.bryant.edu"
	},
	{
		"name": "Nankai University",
		"location": "Tianjing, P.R. China",
		"degree": "B.S.",
		"major": "Biology",
		"dates": "1984-1988",
		"url": "http://www.nankai.edu.cn"
	}
	],

	"onlineClasses": [
		{
			"title": "JavaScript Basics - Resume Project",
			"school": "Udacity.com",
			"dates": "January 2016",
			"url": "https://www.udacity.com/course/viewer#!/c-ud804/l-1930528550/e-1935058561/m-2948908664"
		},
		{
			"title": "HTML",
			"school": "W3School",
			"dates": "January 2016",
			"url": "http://www.w3schools.com/html/default.asp"
		},
		{
			"title": "JQuery",
			"school": "W3School",
			"dates": "January 2016",
			"url": "http://www.w3schools.com/jquery/default.asp"
		},
		
		{
			"title": "JavaScript",
			"school": "W3School",
			"dates": "December 2015",
			"url": "http://www.w3schools.com/js/default.asp"
		},
		{
			"title": "AngularJS",
			"school": "W3School",
			"dates": "November 2015",
			"url": "http://www.w3schools.com/angular/default.asp"
		},
		{
			"title": "SQL Query",
			"school": "Vertabelo",
			"dates": "October 2015",
			"url": "https://academy.vertabelo.com/course/sql-queries"
		}
		

	]

};

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (var sch in education.schools) {
		HTMLschoolName = HTMLschoolName.replace("%data%", education.schools[sch].name);
		HTMLschoolName = HTMLschoolName.replace("#", education.schools[sch].url);	
		
		$(".education-entry:last").append(HTMLschoolName.concat(HTMLschoolDegree.replace("%data%", education.schools[sch].degree)));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[sch].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[sch].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[sch].major));
		$(".education-entry:last").append('<br>');
		HTMLschoolName = HTMLschoolName.replace(education.schools[sch].name, "%data%");
		HTMLschoolName = HTMLschoolName.replace(education.schools[sch].url, "#");
	}

	$(".education-entry:last").append(HTMLonlineClasses);
	for (var online in education.onlineClasses) {
		HTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[online].title);
		HTMLonlineTitle = HTMLonlineTitle.replace("#", education.onlineClasses[online].url);
		$(".education-entry:last").append(HTMLonlineTitle.concat(HTMLonlineSchool.replace("%data%", education.onlineClasses[online].school)));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineClasses[online].dates));
		HTMLonlineTitle = HTMLonlineTitle.replace(education.onlineClasses[online].title, "%data%");
		HTMLonlineTitle = HTMLonlineTitle.replace(education.onlineClasses[online].url, "#");

	}
}

education.display();


$("#mapDiv").append(googleMap);


$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
 $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
 $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
 $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));




