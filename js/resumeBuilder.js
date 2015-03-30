var bio = {
  "name": "Jason Goldfarb",
  "role": "Web Developer",
  "contacts": {
     "mobile": "(917) 207-1982",
     "email": "jason.r.goldfarb@gmail.com",
     "github": "jgoldfarb",
     "twitter": "jasonrgoldfarb",
     "location": "New York Metro",
   },
  "welcomeMessage": "This is my Front-End Web Development resume",
  "skills": ["awesomeness", "programming", "teaching", "JS"],
  "bioPic": "images/headshot.jpg"
};

var work = {
  "jobs": [
    {
    "employer": "AT&T",
    "title": "Senior Real Estate and Construction Manager - LTE Project Manager",
    "location": "New York City Metropolitan Area",
    "dates": "October 2011 - Current",
    "description": "Completed 100% of the 2014 LTE upgrade projects for 800+ locations, ahead of time, and within budget. Lead weekly project development and deployment meetings with multiple site acquisition and civil project vendors.	Provide guidance for complicated, legal, technical, business, and contractual issues that impact project timelines. Create market-specific master trackers, and provide in depth reporting of all milestone progress to senior level executive teams. Responsible for maintaining project schedules and for hitting and exceeding goals linked to planned, forecasted, and completion objectives. On board new vendor teams, and liaison with all internal and external groups accountable for LTE deployment in the market.",
    }
      ],
  };


var education = {
  "schools": [
	   {
		  "name": "Brooklyn Law School",
	    "location": "Brooklyn, New York",
	    "degree" : "Juris Doctor",
	    "majors": "Law",
	    "dates": 1994,
	    "url": "http://www.brooklaw.edu/",
	   }
      ],

  "onlineCourses": [
	   {
		"title": "Front End Web Developer",
		"school": "Udacity",
		"date": 2015,
		"url": "http://www.udacity.com"
	   }
   ],
};

    var formattedRole =
        HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

    var formattedName =
        HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

    var formattedMobile =
        HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

    var formattedEmail =
        HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

    var formattedGithub =
        HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);

    var formattedTwitter =
        HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);

    var formattedLocation =
        HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);

    var formattedPic =
        HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPic);

    var formattedWelcomeMessage =
        HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkills);
    }
