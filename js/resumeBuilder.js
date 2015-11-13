
// JSONs

var bio = {
	"name" : "Gregg Strohkorb",
	"role" : "Portfolio Manager, Data Scientist and App Developer",
	"contacts" :
	  {
		"mobile" : "785-221-9437",
		"email" : "gregg@strohkorb.com",
		"github" : "gstroh",
		"twitter" : "@gstroh",
		"location" : "Leawood, KS, USA"
	  },
	"welcomeMessage" : "Welcome to my resume which contains skills from 3 areas: Finance, Data & Computer Sciences.",
	//"skills" : ["Data Analysis","Applications Development","Portfolio Management", "CFA"],
	"skills" : ["Quantitative portfolio manager and analyst",
				"CFA Charter Holder",
				"Quantitative equity research, backtesting and modeling",
				"Project management",
				"Strong analytical and problem solving skills, detail oriented",
				"Financial data scientist",
				"Advanced Math & Computer Science (M.S.) degree",
				"Advanced Finance (MBA) degree",
				"Portfolio optimization, attribution and risk analysis",
				"Works well on team and individually",
				"Buy-side investment experience on quantamental teams",
				"Automate data validation and processing",
				"Collaborates well with fundamental PMs and analysts",
				"Good written and oral communication skills",
				"Database building, administration and management",
				"Programming skills and application development",
				"Experience with North American and international data sets",
				"Programming tools: VB.net, SQL Server, Matlab, R",
				"Finance tools: Clarifi, Compustat, Bloomberg, Northfield",
				"Web tools: HTML, CSS, Javascript, Ruby on Rails"],
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
	  },
	  {
		"title": "Intro to jQuery",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com/course/intro-to-jquery--ud245"
	  }
	  ],
	  "display" :
	  	function () {
	  		// header
			$("#education").append(HTMLschoolStart);

	  		for (school in education.schools) {

				var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

				$(".education-entry:last").append(formattedName + formattedDegree);
				$(".education-entry:last").append(formattedDates);
				$(".education-entry:last").append(formattedLocation);
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
				// Loop over online classes
    	  		for (onlineCourse in education.onlineCourses) {
					var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
					var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
					var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
					var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

					$(".education-entry:last").append(formattedTitle + formattedSchool);
					$(".education-entry:last").append(formattedDate);
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
		"description":  "Portfolio Manager for Compass Undervalued Top Picks Portfolio, a UIT offer by Guggenheim. " +
						"Perform quantitative research, backtesting and modeling for fundamental U.S. value equity team. " +
						"Develop and maintain stock research applications in VB.Net/Excel/MS SQL Server/Matlab. " +
						"Author of Compass Model for stock selection and risk analysis. " +
						"Utilize Northfield for portfolio optimization, attribution and risk analysis. " +
						"Support marketing and client service with presentations of tools and explanation of quantitative techniques used to manage client funds."
	  },
	  {
		"employer": "Petra Hedge Fund Advisors, LLC",
		"title": "Portfolio Manager, President, Owner",
		"location": "Parker, CO",
		"dates": "2003-2006",
		"description": 	"Portfolio Manager for Petra Long/Short Equity Fund. " +
						"Managed professional outsource relationships for trading, accounting, audit, compliance and taxes. "
	  },
	  {
		"employer": "Gaines Asset Management, Inc.",
		"title": "Senior Quantitative Analyst, President, Owner",
		"location": "Parker, CO",
		"dates": "2001-2006",
		"description": 	"Quantitative equity investment consultant for Denver Investment Advisors. " +
						"Worked as a consultant while starting a hedge fund and real estate investment firms. "
	  },
	  {
		"employer": "Denver Investment Advisors",
		"title": "Senior Quantitative Analyst, Vice President",
		"location": "Denver, CO",
		"dates": "1996-2001",
		"description": 	"Senior quantitative analyst for $1 billion small-cap value equity fund. " +
						"Multi-factor model development. " +
						"Systems and applications development. " +
						"Risk analysis and portfolio optimization construction with Barra."
	  },
	  {
		"employer": "Saudi Arabian Oil Company",
		"title": "Supervisor of Hydrocarbon Planning Computer Systems",
		"location": "Dhahran, Saudi Arabia",
		"dates": "1988-1996",
		"description": 	"Supervisor of hydrocarbon planning & sales system for world's largest producing country, Saudi Arabia. " +
						"Oil Supply Planning and Scheduling (OSPAS) Department of Saudi ARAMCO, directed and planned all country production and offtake. " +
						"Other roles included: project manager, systems engineer, software developer, database administrator. " +
						"Work involved 24-hour a day information and real-time monitoring systems utilizing skills in computer science and finance."
	  },
	  {
		"employer": "Morgan Stanley",
		"title": "Senior Associate, International Information Systems",
		"location": "New York, NY",
		"dates": "1987-1988",
		"description": 	"Member of systems development team for international investment information systems. " +
						"Authored and supported systems for Japanese securities lending. " +
						"Developed and maintained systems for securities lending and interest for Morgan Stanley Trust Company. " +
						"Wrote and supported systems in Hong Kong and Tokyo for self-clearing. " +
						"Provided 24-hour support for all international market systems processed by Morgan Stanley."
	  },
	  {
		"employer": "Saudi Aramco",
		"title": "Systems Engineer",
		"location": "Dhahran, Saudi Arabia",
		"dates": "1982-1986",
		"description": 	"Systems analyst and engineer for Production and Offtake Planning (PROP) system. " +
						"Provided 24-hour support for information systems used for Saudi Arabia’s oil and gas production and sales. "
	  },
	  {
		"employer": "George Washington University, NASA-Langley Research Center",
		"title": "Research Analyst",
		"location": "Hampton, VA",
		"dates": "1979-1982",
		"description": 	"Performed research in advanced computational methods for nonlinear finite element analysis. " +
						"Authored paper (NASA TM-84566) with my supervisor, Dr. Ahmed Noor, 'Potential of Minicomputer/Array-Processor System for Nonlinear Finite-Element Analysis.'"
	  }
	  ],
	  "display" :
	  	function () {
	  		// header
			$("#workExperience").append(HTMLworkStart);
			// loop over jobs in work experience
			for (job in work.jobs) {
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
		"images": ["images/v1.jpg","images/c1.jpg"]
	  },
	  {
		"title": "Curve Applications",
		"dates": "2006-2009",
		"description": "Applications developed to support the Curve model of portfolio management.",
		"images": ["images/ctt4.jpg","images/ctt1.jpg","images/r2000.jpg"]
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

// Fix Online Classes header.  GS 11/11/2015
var h3;
h3 = $('.education-entry').find('h3');
h3.css('padding-left','0');
h3.css('padding-top','20px');

// map
$("#mapDiv").append(googleMap);

