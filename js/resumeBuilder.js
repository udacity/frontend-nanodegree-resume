
var bio = {
  "name": "Daniel Stuart",
  "role": "Co-Founder & Chief Product Officer",
  "contacts": {
    "email": "dan@bidvine.com",
    "github": "danstuart",
    "twitter": "@danstuart",
    "location": "Guelph, Ontario, Canada"
  },
  "welcomeMessage": "This is a little bit about me. I am always learning and this is part of building up skills in parallel to my design and product planning background. My goal here is to go a bit deeper into the stack.",
  "skills": ["management", "design", "HTML", "CSS", "Javascript", "Ruby on Rails", "Slim", "Sketch", "SASS"],
  "biopic": "images/mypic.jpg",

	"displayHeader": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$('#header').prepend(formattedPic);
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		$('#header').append(formattedMessage);
		$('#header').append(HTMLskillsStart);

		for(i in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$('#header').append(formattedSkills);
		}
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);

		$('#topContacts').append(formattedTwitter);
		$('#topContacts').append(formattedEmail);
		$('#topContacts').append(formattedGithub);
		$('#topContacts').append(formattedLocation);
	}
};


var work = {
  "jobs": [
    {
      "employer": "Bidvine",
      "title": "Co-Founder & Chief Product Officer",
      "location": "London, United Kingdom; Waterloo, Ontario, Canada",
      "datesworked": "2014-2015",
      "description": "Co-founder and CPO of Bidvine - a Techstars London 2014 company. Bidvine is the fast, free way to get competing quotes from local service professionals."
    },
    {
      "employer": "AdGear",
      "title": "VP Business Development",
      "location": "Toronto, Ontario",
      "datesworked": "2013-2014",
      "description": "Ran sales from strategy through to selling."
    },
    {
      "employer": "LivingSocial",
      "title": "Senior Director Canada",
      "location": "Toronto, Ontario",
      "datesworked": "2012-2013",
      "description": "Local sales management and country-level strategy."
    },
    {
      "employer": "GoNabit",
      "title": "Co-Founder & CEO",
      "location": "Dubai, UAE",
      "datesworked": "2010-2012",
      "description": "Founder, marketing, FP&A, product, HR, legal and strategy."
    },
    {
      "employer": "Bayt.com",
      "title": "Chief Possibility Officer",
      "location": "Dubai, UAE",
      "datesworked": "2006-2010",
      "description": "Senior BD, product, corporate VC and strategy."
    }
  ],

  "displayWork": function() {
		for(i in work.jobs) {
			var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var EmpTitle = formattedworkEmployer + formattedworkTitle;
			var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].datesworked);
			var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(EmpTitle);
			$('.work-entry:last').append(formattedworkDates);
			$('.work-entry:last').append(formattedworkLocation);
			$('.work-entry:last').append(formattedworkDescription);
		}
	}
};


var projects = {
  "projects": [
    {
      "title": "Bidvine site plan",
      "dates": "2014",
      "description": "Mapped out the needs, goals, flows, etc etc for the site blah blah before we told anyone that it might be something or some such.",
      "images": ["images/bidvine_logo.png", "images/Mobile_nav.png"]
    }
  ],

	"displayProjects": function() {
		for(var i in projects.projects) {
			var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesworked);
			var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(formattedProjTitle);
		$('.project-entry:last').append(formattedProjDates);
		$('.project-entry:last').append(formattedProjDescription);
			for(j in projects.projects[i].images) {
				var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$('.project-entry:last').append(formattedProjImage);
			}
		}
	}
};


var education = {
  "schools": [
    {
      "name": "Wilfrid Laurier University",
      "location": "Waterloo, Ontario, Canada",
      "degree": "Honours Bachelor of Arts",
      "majors": ["English Literature", "History"],
      "datesattended": "1992-1996",
      "url": "http://wlu.ca/"
    },
    {
      "name": "D'Youville College",
      "location": "Buffalo, New York, USA",
      "degree": "Master's Degree",
      "majors": ["Adolescence Education"],
      "datesattended": "2001-2002",
      "url": "http://www.dyc.edu/"
    },
    {
      "name": "University of Toronto",
      "location": "Toronto, Ontario, Canada",
      "degree": "Master's Degree",
      "majors": ["Education: Curriculum, Teaching and Learning"],
      "datesattended": "2005-2006",
      "url": "http://www.utoronto.ca/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Lean Six Sigma",
      "school": "Villinova University",
      "datesattended": "2009",
      "url": "http://www.villanovau.com/resources/six-sigma/lean-six-sigma-certification/"
    },
    {
      "title": "Frontend Web Developer Nanodegree",
      "school": "Udemy",
      "datesattended": "2015",
      "url": "https://www.udacity.com/course/nd001"
    }
  ],
	"displayEdu": function() {
		for(i in education.schools) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var nameDeg = formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesattended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(nameDeg);
			$('.education-entry:last').append(formattedSchoolDates);
			$('.education-entry:last').append(formattedSchoolLocation);
				for(j in education.schools[i].majors) {
					var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
					$('.education-entry:last').append(formattedSchoolMajors);
				}
		}
		$('#education').append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var titleSchool = formattedOnlineTitle + formattedOnlineSchool;
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].datesattended);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(titleSchool);
				$('.education-entry:last').append(formattedOnlineDates);
				$('.education-entry:last').append(formattedOnlineURL);
			}
	}
};

function displayFooter() {
	var formattedMobile = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLocation);
}

$('#mapDiv').append(googleMap);

bio.displayHeader();
work.displayWork();
projects.displayProjects();
education.displayEdu();
displayFooter();
