
// JSONs

var bio = {
	"name" : "Gregg Strohkorb",
	"role" : "Data Scientist and App Developer",
	"contacts" :
	  {
		"mobile" : "785-221-9437",
		"email" : "gregg@strohkorb.com",
		"github" : "gstroh",
		"twitter" : "@gstroh",
		"location" : "Leawood, KS, USA"
	  },
	"welcomeMessage" : "Welcome to my interactive resume.",
	"skills" : ["Data Analysis", "Applications Development", "Portfolio Management", "CFA"],
	"biopic" : "images/gregg.jpg",
	"display" :
	  	function () {
	  		var formattedName = HTMLheaderName.replace("%data%",bio.name);
			var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
			var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
			var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
			var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
			var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
			var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
			var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
			var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

			$("#header").prepend(formattedRole);
			$("#header").prepend(formattedName);

			$("#topContacts").append(formattedMobile);
			$("#topContacts").append(formattedEmail);
			$("#topContacts").append(formattedGithub);
			$("#topContacts").append(formattedTwitter);
			$("#topContacts").append(formattedLocation);

			$("#footerContacts").append(formattedMobile);
			$("#footerContacts").append(formattedEmail);
			$("#footerContacts").append(formattedGithub);
			$("#footerContacts").append(formattedTwitter);
			$("#footerContacts").append(formattedLocation);

			$("#header").append(formattedBioPic);
			$("#header").append(formattedWelcomeMessage);

			// skills array
			if (bio.skills.length > 0) {
  				// header
  				$("#header").append(HTMLskillsStart);
  				// skills loop
  				for (skill in bio.skills) {
					var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  					$("#skills").append(formattedSkill);
  				}
			}
	    }

}

var education = {
	"schools": [
	  {
		"name": "The College of William and Mary",
		"location": "Williamsburg, VA",
		"degree": "B.S.",
		"majors": ["Biology"],
		"dates": 1977,
		"url": "https://www.wm.edu/"
	  },
	  {
		"name": "The College of William and Mary",
		"location": "Williamsburg, VA",
		"degree": "M.S.",
		"majors": ["Applied Math", "Computer Science"],
		"dates": 1981,
		"url": "https://www.wm.edu/"
	  },
	  {
		"name": "Thunderbird School of Global Management",
		"location": "Glendale, AZ",
		"degree": "MBA",
		"majors": ["International Finance"],
		"dates": 1987,
		"url": "http://www.thunderbird.edu/"
	  }
	  ],
	"onlineCourses": [
	  {
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	  },
	  {
		"title": "Version Control with GIT and GitHub",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
	  },
	  {
		"title": "JavaScript Basics Course",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	  }
	  ],
	  "display" :
	  	function () {
	  		for (school in education.schools) {
	  			// header
				$("#education").append(HTMLschoolStart);

				var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				$(".education-entry:last").append(formattedName);

				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);

				if (education.schools[school].majors.length > 0) {
    		  		for (major in education.schools.majors) {
        				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
						$(".education-entry:last").append(formattedMajor);
    		   		}
    		 	}
    	  	};

    	  	// Online Courses
    	  	if (education.onlineCourses.length > 0) {
    	  		// Header
				$(".education-entry:last").append(HTMLonlineClasses);

    	  		for (onlineCourse in education.onlineCourses) {

					var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
					$(".education-entry:last").append(formattedTitle);

					var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
					$(".education-entry:last").append(formattedSchool);

					var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
					$(".education-entry:last").append(formattedDate);

					var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
					$(".education-entry:last").append(formattedURL);
    	  		}
    	  	}
	  	}
}

var work = {
	"jobs": [
	  {
		"employer": "Guggenheim Investments",
		"title": "Portfolio Manager",
		"location": "Overland Park, KS",
		"dates": "2006-Present",
		"description": "Portfolio management, quantitative research, quantitative systems development."
	  },
	  {
		"employer": "Denver Investment Advisors",
		"title": "Senior Quantitative Analyst",
		"location": "Denver, CO",
		"dates": "1996-2006",
		"description": "Quantitative research, applications development, stock selection modeling."
	  },
	  {
		"employer": "Saudi Arabian Oil Company",
		"title": "Supervisor of Hydrocarbon Planning Computer Systems",
		"location": "Dhahran, Saudi Arabia",
		"dates": "1988-1996",
		"description": "Developed and maintained systems to plan production, coordinate sales, maintain hydrocarbon resources and generate billing for the world's largest oil and gas producing company."
	  }
	  ],
	  "display" :
	  	function () {
	  		for (job in work.jobs) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				// Concatenate the two strings.
				var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerAndTitle);

				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);
				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
				var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
				//	console.log(work.jobs[job].employer);
  			}
	  	}
}

var projects = {
	"projects": [
	  {
		"title": "Compass Applications",
		"dates": "2010-Present",
		"description": "Applications developed to support the Compass model of stock selection and risk management.",
		"images": ["images/320Images/v1.jpg","images/320Images/c1.jpg"]
	  },
	  {
		"title": "Curve Applications",
		"dates": "2006-2009",
		"description": "Applications developed to support the Curve model of portfolio management.",
		"images": ["images/320Images/ctt4.jpg","images/320Images/ctt1.jpg","images/320Images/r2000.jpg"]
	  },
	  {
		"title": "Conversion of OSPAS planning and offtake systems from character-based flat files to windows-based SQL DB.",
		"dates": "1992-1994",
		"description": "Team leader for design of mission critical applications and DB design.",
		"images": []
	  }
	  ],
	  "display" :
	  	function () {
	  	  for (project in projects.projects) {
	  		// header
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
    		  for (image in projects.projects[project].images) {
        		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
    		  }
    		}
    	  }
		}

}



/*function DisplayWork() {
  for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	// Concatenate the two strings.
	var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerAndTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
//	console.log(work.jobs[job].employer);
  }
}

DisplayWork(); */

$(document).click(function(loc) {
	//var e = jQuery.Event("click");\
	//console.log(loc);
	logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(oldName) {
	var finalName = oldName;
    var names = oldName.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

/* projects.display = function () {
	  	for (project in projects.projects) {
	  		// header
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
    		  for (image in projects.projects[project].images) {
        		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
    		  }
    		}
    	}
}; */

bio.display();
work.display();
projects.display();
education.display();

// map
$("#mapDiv").append(googleMap);

