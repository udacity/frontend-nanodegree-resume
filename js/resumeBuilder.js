var bio = {
    "name": "Saher Almaita",
    "role": "Front-End Developer",
    "contacts": {
        "mobile":"000-000-0000",
		"email":"saheralmaita@gmail.com",
        "github":"almaita2",
        "twitter":"@saheralmaita",
		"location" : "NJ",
	},
	"welcomeMessage": "Welcome",
    "skills": [ "Process Engineering", "Front End Dev", "Graphic Design", "Fantasy Football"],
    "bioPic": "images/selfie.jpg",
	 display: function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedBioPic);
		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
		$("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		//make skills flow vertically
		for (var skill in bio.skills) {
		  var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		  $("#skills").append(formattedSkill);
		} 
  }
};

bio.display();

var education = {
    "schools":  [
        {
            "name": "WPUNJ",
            "location": "Wayne, NJ",
            "degree": "BA Philosophy",
            "majors": "Philosophy",
            "dates": "2009"
			//"url":"www.wpunj.edu"  need to add to helper.js
        },
        {
            "employer": "Novartis",
            "title": "Material Data Master",
            "location": "Suffern",
            "dates": "2013-2014",
            "description": "Database administration"
        },    
    ],
	"onlineCourses":  [
        {
            "title": "Front End Devolper NanoDegree",
            "school": "Wayne, NJ",
            "date": "2016",
            "url": "udacity.com",
        },
		{
            "title": "Intro to HTML/CSS",
            "school": "Wayne, NJ",
            "date": "2016",
            "url": "codeacademy.com",
        },    
    ],
	displaySchools: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
			$(".education-entry:last").append(formattedschoolDates);
			$(".education-entry:last").append(formattedschoolLocation);
			$(".education-entry:last").append(formattedschoolMajors);
		}
	},
	//fix the online class sections
	displayOnline: function() {
		for (course in education.onlineCourses) {
			$("#education").append(HTMLonlineClasses);
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedonlineURL = HTMLonlineURL.replace("%url%", education.onlineCourses[course].url);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		    $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
			$(".education-entry:last").append(formattedonlineDates);
		}
	},
  };
  
 education.displaySchools();
 education.displayOnline();

var work = {
    "jobs":  [
        {
            "employer": "Tangoe",
            "title": "Process Engineer",
            "location": "NJ",
            "dates": "2014-Current",
            "description": "Telecom"
        },
        {
            "employer": "Novartis",
            "title": "Material Data Master",
            "location": "Suffern",
            "dates": "2013-2014",
            "description": "Database administration"
        },    
    ],
	display: function() {
		for (job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates); 
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();


var proj = {
    "projects": [ 
			{
                "title" : "#",
                "dates" : "2015",
                "description" : "Front End Degree resume",
                "images" : "images/197x148.gif",
                "link" : "#"
            },
			{
                "title" : "#",
                "dates" : "2015",
                "description" : "Front End Degree resume",
                "images" : "images/197x148.gif",
                "link" : "#"
            },
			],
	display: function() {
		for (project in proj.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%",proj.projects[project].title);
			var formattedprojectDates = HTMLprojectDates.replace("%data%",proj.projects[project].dates);
			var formattedprojectDescription = HTMLprojectDescription.replace("%data%",proj.projects[project].description);
			var formattedprojectImage = HTMLprojectImage.replace("%data%",proj.projects[project].images);
			var formattedprojectLink = HTMLprojectImage.replace("%data%",proj.projects[project].link);
			$(".project-entry:last").append(formattedprojectTitle + formattedprojectDates + formattedprojectDescription + formattedprojectImage + formattedprojectLink);
		}
	},
    
};

proj.display();

//click counter
$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});

$("#mapDiv").append(googleMap);