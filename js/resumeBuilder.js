var bio = {
    "name": "Saher Almaita",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "000-000-0000",
		"email": "saheralmaita@gmail.com",
        "github": "almaita2",
        "twitter": "@saheralmaita",
		"location" : "NJ"
	},
	"welcomeMessage": "Using analytical skills and a unique perspective I am able to identify pain points, describe their impacts, and offer solutions based on strategic business objectives.  And with my broad range of workplace experiences I have also developed the skills to make and deliver professional presentations to key stakeholders and clients.",
    "skills": [ "Process Engineering", "Front End Dev", "Graphic Design", "Fantasy Football"],
    "bioPic": "images/selfie.jpg",
	 display: function () {
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
            "dates": "2009",
			"url":"www.wpunj.edu"
        },
    ],
	"onlineCourses":  [
        {
            "title": "Front End Devolper NanoDegree",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "www.udacity.com",
        },
		{
            "title": "Intro to HTML/CSS",
            "school": "Code Academy",
            "dates": "2015",
            "url": "www.codeacademy.com",
        },
        {
            "title": "Intro to Javascript",
            "school": "Code Academy",
            "dates": "2015",
            "url": "www.codeacademy.com",
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
            var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
			$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
			$(".education-entry:last").append(formattedschoolDates);
			$(".education-entry:last").append(formattedschoolMajors);
            $(".education-entry:last").append(formattedschoolURL);
            $(".education-entry:last").append(formattedschoolLocation);
            $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
	},
	//fix the online class sections
	displayOnline: function() {
        $(".education-entry:last").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		    $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
			$(".education-entry:last").append(formattedonlineDates);
            $(".education-entry:last").append(formattedonlineURL);
            $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
		}
	},
};
 education.displaySchools();
 education.displayOnline();

var work = {
    "jobs":  [
        {
            "employer": "Tangoe",
            "title": "Associate Process Engineer",
            "location": "NJ",
            "dates": "2014-Current",
            "description": "Engineer Business processes and design relevant process documentation."
        },
        {
            "employer": "Novartis",
            "title": "Material Data Master",
            "location": "Suffern",
            "dates": "2013-2014",
            "description": "Maintained materials database in SAP systems."
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
                "title" : "Online Portfolio",
                "dates" : "2015",
                "description" : "Portfolio site designed using the foundation framework, including jQuery navigation.",
                "images" : "images/Portfolio-Capture.png",
                "link" : ""
            },
			{
                "title" : "Resume.js",
                "dates" : "2015",
                "description" : "Resume built using javascript functions",
                "images" : "images/197x148.gif",
                "link" : ""
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