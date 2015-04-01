var bio = {
  "name": "Jason Goldfarb",
  "role": "Web Developer",
  "contacts": {
     "mobile": "(917) 207-1982",
     "email": "jason.r.goldfarb@gmail.com",
     "github": "jgoldfarb",
     "twitter": "jasonrgoldfarb",
     "location": "New York City Metropolitan Area",
   },
  "welcomeMessage": "This is my Front-End Web Development resume",
  "skills": ["Web Development", "Six Sigma Green Belt", "Project Management", "Digital & Social Media", "Online Technology"],
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
        "employer": "AT&T Wireless",
        "title": "LTE Site Acquisition Project Manager",
        "location": "New York City Metropolitan Area",
        "dates": "November 2013 - Present",
        "description": "Manage a team of project managers and multiple vendors covering the site acquisition process for the Carrier Add upgrades to AT&T’s LTE network in the New York City metropolitan area and northern New Jersey. Completed 100% of the 2014 LTE upgrade projects for 800+ locations, ahead of time, and within budget. Lead weekly project development and deployment meetings with multiple site acquisition and civil project vendors.	Provide guidance for complicated, legal, technical, business, and contractual issues that impact project timelines. Create market-specific master trackers, and provide in depth reporting of all milestone progress to senior level executive teams. Responsible for maintaining project schedules and for hitting and exceeding goals linked to planned, forecasted, and completion objectives. On board new vendor teams, and liaison with all internal and external groups accountable for LTE deployment in the market.",
      },
      {
        "employer": "AT&T Wireless",
        "title": "Senior Real Estate and Construction Manager",
        "location": "New York City Metropolitan Area",
        "dates": "October 2011 - November 2013",
        "description": "Recipient of the “Top 5 Idea Award” from The Innovation Pipeline IT Innovation Program. Awarded Six Sigma Green Belt Certification.	Assembled and led a team that conducted due diligence, lease reviews, and amendment responsibilities for national projects impacting the local market.	Saved $150,000+ in operating expenses by avoiding costs associated with temporary equipment moves, and negotiating cost-cutting departure agreements. Principal advocate and contributor of a Six Sigma/Lean project designed reduce access issues and improve real estate relationships. Cross collaborated with executive management, corporate and outside counsel, and numerous internal and external teams, as the subject matter expert and point of contact for multiple projects/issues affecting the wireless real estate portfolio – including, but not limited to site access, construction, new site builds, temporary equipment moves, equipment upgrades (UMTS, LTE, 4G, HVAC, Camlock, Generators, etc.), relocations, and terminations. Responsible for the review and negotiation of business and contract terms for new lease agreements and amendments.",
      },
      {
        "employer": "T-Mobile USA",
        "title": "Property Specialist",
        "location": "Great River, New York",
        "dates": "2008 - October 2011",
        "description": "Managed a portfolio of thousands of real estate lease agreements and assets, representing every cell site location across the New York City and Long Island markets. Served as the central subject matter resource on all contract details for cross-functional internal teams, providing in-depth knowledge of lease terms and legalities to ensure seamless and continuous delivery of cellular service. Negotiated with and managed relationships with property owners to promote the most advantageous business position for the portfolio.Turned around the portfolio’s financial position, building a system lauded as a company-wide model for portfolio management, by conducting a complete portfolio risk assessment and structural overhaul. Delivered more than $1.7 million in direct operating expense savings, a figure which was projected to translate into more than $13 million in long-term dollar savings, by identifying and resolving a wide variety of discrepancies and overpayments, recommending the elimination of unnecessary or duplicate sites, and negotiating more favorable contract terms.Launched a successful effort to eliminate an entire category of “at risk” contract documents, establishing a clear process for document retention, and training junior staffers on identifying and correcting a tremendous backlog of document issues. Played a leadership role in increasing the number of fully executed new agreements by 500% as project manager of the end-to-end leasing process with an external site acquisition firm.Consistently recognized by senior executive leadership as a top performer within the property management team, setting the precedent and establishing benchmarks for property management excellence for the nationwide operation.",
      },
      {
        "employer": "Independent Contractor",
        "title": "Wireless Leasing & Real Estate Consultant ",
        "location": "Woodmere, New York",
        "dates": "2007- 2008",
        "description": "Provided specialized expertise in wireless lease acquisitions and sales, as well as advisory services for the real estate industry. Conducted in-depth research and due diligence to advise clients with cost-benefit and risk analyses and to recommend optimal deal structures.Served as the legal consultant for a real estate investor client, ensuring proper vetting and preparation of all potential deals.Orchestrated an auction for more than 100 properties, coordinating the efforts of multiple owners to compile and present detailed property information, schedule open houses, and advertise for the event.	Created strong legal protections for a client’s business interests by re-drafting the base contract document.",
      },
      {
        "employer": "Unison Site Management",
        "title": "Vice President of Origination",
        "location": "New York, New York",
        "dates": "2005 - 2007",
        "description": "Directed a 15-member sales and legal team in the oversight of the complete site acquisition process, from initiation through closure. Concurrently managed up to 80 active deals at all stages of the approval process, navigating and problem solving diverse and complex issues to drive a high percentage of deals to the closing table. Served as the company’s central subject matter expert and go-to business leader for communicating issues between the sales and legal departments, ensuring full understanding of the intricacies of all sides of the deal process.	Played a critical leadership role within the organization, leveraging a deep background both as an attorney and in sales to build the firm’s cross-functional and often competing departments into a cohesive, high-performance operation. Dramatically increased the rate of deal closings while delivering 10% cost savings and slashing origination times by re-engineering the complete acquisition processes to ensure that the highest quality deals entered the origination cycle.Boosted team morale and productivity with this new system that more directly linked performance to compensation.Built this team into the company’s top performing entity representing one-third of all closed business and more than $40 million in paid proceeds. Recognized for outstanding results and origination leadership with selection to train the entire company in the newly designed origination process.",
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
        "title": "The Complete Web Devloper Course",
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
// School information
    education.display = function () {
      for (var school in education.schools) {
          $("#education").append(HTMLschoolStart);

          var formattedschoolName =
          HTMLschoolName.replace("%data%", education.schools[school].name);

          var formattedDegree =
          HTMLschoolDegree.replace("%data%", education.schools[school].degree);

          var formattedschoolNameDegree = formattedschoolName + formattedDegree;
          $(".education-entry:last").append(formattedschoolNameDegree);

          var formattedschoolDates =
          HTMLschoolDates.replace("%data%", education.schools[school].dates);
          $(".education-entry:last").append(formattedschoolDates);

          var formattedschoolLocation =
          HTMLschoolLocation.replace("%data%", education.schools[school].location);
          $(".education-entry:last").append(formattedschoolLocation);

          var formattedSchoolMajor =
          HTMLschoolMajor.replace("%data%", education.schools[school].majors);
          $(".education-entry:last").append(formattedSchoolMajor);
        }
    };
    education.display();

// online courses
    $("#education").append(HTMLonlineClasses);
      education.onlineCourses.display = function () {
          for (var course in education.onlineCourses) {
          $("#education").append(HTMLschoolStart);

          var formattedonlineTitle =
          HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

          var formattedonlineSchool =
          HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

          var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
          $(".education-entry:last").append(formattedonlineTitle);

          var formattedonlineDate =
          HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
          $(".education-entry:last").append(formattedonlineDate);

          var formattedURL =
          HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
          $(".education-entry:last").append(formattedURL);
        }
    };
    education.onlineCourses.display();
