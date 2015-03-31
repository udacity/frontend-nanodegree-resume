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

      work.display = function () {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer =
            HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

            var formattedTitle =
            HTMLworkTitle.replace("%data%", work.jobs[job].title);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates =
            HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation =
            HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription =
            HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
      }
    };
    work.display();

    var education = {
      "schools": [
    	   {
    		  "name": "Hofstra University",
    	    "location": "Hempstead, New York",
    	    "degree" : "Continuing Education",
    	    "majors": ["Digital & Social Media Marketing"],
    	    "dates": 2011,
    	    "url": "http://www.hofstra.edu/"
        },
        {
          "name": "Brooklyn Law School",
          "location": "Brooklyn, New York",
          "degree" : "Juris Doctor",
          "majors": ["Law"],
          "dates": 1994,
          "url": "http://www.brooklaw.edu/"
        },
        {
          "name": "Yeshiva Univeristy - Sy Syms School of Business",
          "location": "New York, New York",
          "degree" : "Bachelor of Science",
          "majors": ["Finance"],
          "dates": 1992,
          "url": "https://yu.edu/syms/"
        }
          ],

      "onlineCourses": [
    	   {
    		"title": "Front End Web Developer Nanodegree",
    		"school": "Udacity",
    		"date": 2015,
    		"url": "http://www.udacity.com"
      },
      {
        "title": "Become a Certified Web Developer",
        "school": "Learn to Program",
        "date": 2015,
        "url": "http://www.learntoprogram.tv"
      },
      {
        "title": "The Complete Web Devleoper Course",
        "school": "Udemy",
        "date": 2015,
        "url": "http://www.udemy.com"
      },
      {
        "title": "Getting Started with Wordpress",
        "school": "Udemy",
        "date": 2014,
        "url": "http://www.udemy.com"
      },
      {
        "title": "Complete Wordpress Mastery Course",
        "school": "udemy",
        "date": 2014,
        "url": "http://www.udemy.com"
      },
      {
        "title": "Wordpress eCommerce",
        "school": "Udemy",
        "date": 2014,
        "url": "http://www.udacity.com"
      }
       ]
    };
