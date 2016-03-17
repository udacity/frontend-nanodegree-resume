var bio = {
  "name": "Pao Perez",
  "role": "Software Developer",
  "contacts": {
    "mobile": "09179999999",
    "email": "pao.perez@test.com",
    "github": "pao-perez",
    "twitter": "no-twitter",
    "location": "blah blah city"
  },
  "biopic": "images/fry.jpg",
  "welcomeMessage": "Hi There!",
  "skills": [
    "java",
    "bash",
    "javascript",
    "google-fu"
  ],
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedName + formattedRole
      + formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation
      + formattedBioPic + formattedWelcomeMessage);

      var skillsLength = bio.skills.length;
      if (skillsLength > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkills;
        for (var x = 0; x < skillsLength; x++) {
          formattedSkills = HTMLskills.replace("%data%", bio.skills[x]);
          $("#skills").append(formattedSkills);
        }
      }
    }
  }

  bio.display();


  var work = {
    "jobs": [
      {
        "employer": "ABC",
        "title": "Java Developer",
        "location": "Blah blah City",
        "dates": "11-2015 - Present",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        "employer": "DEF",
        "title": "Google Apps Developer",
        "location": "Blah blah City",
        "dates": "06-2015 - 11-2015",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        "employer": "XYZ",
        "title": "Jr. Software Engineer",
        "location": "Blah blah City",
        "dates": "03-2014 - 04-2015",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
    ],
    "display": function() {
      var formattedEmployer;
      var formattedTitle;
      var formattedLocation;
      var formattedDates;
      var formattedDescription;

      work.jobs.forEach(function(val) {
        $("#workExperience").append(HTMLworkStart);

        formattedEmployer = HTMLworkEmployer.replace("%data%", val.employer);
        formattedTitle = HTMLworkTitle.replace("%data%", val.title);
        formattedLocation = HTMLworkLocation.replace("%data%", val.location);
        formattedDates = HTMLworkDates.replace("%data%", val.dates);
        formattedDescription = HTMLworkDescription.replace("%data%", val.description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription);
      });
    }
  }

  work.display();


  var projects = {
    "projects": [
      {
        "title": "Resume",
        "dates": "03-2016 - 03-2016",
        "description": "Learning basic JavaScript syntax.",
        "images": [
          "http://placekitten.com/395/200",
          "http://placekitten.com/395/200"
        ]
      },
      {
        "title": "Portfolio",
        "dates": "03-2016 - 03-2016",
        "description": "A playground for learning how to write HTML and CSS from a front-end developer's point of view, starting from a mock-up design, boxifying, etc., following Udacity's awesome tutorial.",
        "images": [
          "http://placekitten.com/395/200",
          "http://placekitten.com/395/200"
        ]
      }
    ],
    "display": function() {
      var formattedTitle;
      var formattedDates;
      var formattedDescription;
      var formattedImages;

      projects.projects.forEach(function(val) {
        $("#projects").append(HTMLprojectStart);

        formattedTitle = HTMLprojectTitle.replace("%data%", val.title);
        formattedDates = HTMLprojectDates.replace("%data%", val.dates);
        formattedDescription = HTMLprojectDescription.replace("%data%", val.description);

        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        var formattedImages;
        for (var x = 0; x < val.images.length; x++) {
          formattedImages = HTMLprojectImage.replace("%data%", val.images[x]);
          $(".project-entry:last").append(formattedImages);
        }
      });
    }
  }

  projects.display();


  var education = {
    "schools": [
      {
        "name": "ABC",
        "location": "Abc avenue",
        "degree": "BS",
        "majors": [
          "CS",
        ],
        "dates": 2014,
        "url": "www.abc.com"
      },
      {
        "name": "DEF",
        "location": "Def avenue",
        "degree": "BA",
        "majors": [
          "MA"
        ],
        "dates": 2010,
        "url": "www.def.com"
      }
    ],
    "onlineCourses": [
      {
        "title": "Intro to Html & Css",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/viewer#!/c-ud304"
      },
      {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/viewer#!/c-ud804"
      }
    ],
    "display": function() {
      var formattedSchool;
      var formattedDegree;
      var formattedDates;
      var formattedLocation;
      var formattedDescription;

      education.schools.forEach(function(val) {
        $("#education").append(HTMLschoolStart);

        formattedSchool = HTMLschoolName.replace("%data%", val.name);
        formattedDegree = HTMLschoolDegree.replace("%data%", val.degree);
        formattedDates = HTMLschoolDates.replace("%data%", val.dates);
        formattedLocation = HTMLschoolLocation.replace("%data%", val.location);

        $(".education-entry:last").append(formattedSchool + formattedDegree + formattedDates + formattedLocation);

        var formattedMajors;
        for (var x = 0; x < val.majors.length; x++) {
          formattedMajors = HTMLschoolMajor.replace("%data%", val.majors[x]);
          $(".education-entry:last").append(formattedMajors);
        }
      });

      //TODO $("#education").append(HTMLonlineClasses);

      education.onlineCourses.forEach(function(val) {
        formattedTitle = HTMLonlineTitle.replace("%data%", val.title);
        formattedSchool = HTMLonlineSchool.replace("%data%", val.school);
        formattedDate = HTMLonlineDates.replace("%data%", val.date);
        formattedURL = HTMLonlineURL.replace("%data%", val.url);

        $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDate + formattedURL);
      });
    }
  }

  education.display();
