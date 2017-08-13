//Work information
var work = {
  "jobs": [{
      "employer": "AT&T Entertainment Group",
      "title": "Associate Applications Developer",
      "location": "Richardson, TX, US",
      "dates": "2016-Present",
      "description": "Maintain and enhance the Visual Basic Application code in a massive MS Excel file",
      "url": "http://www.att.com"
    },
    {
      "employer": "AT&T Internet Services",
      "title": "Uverse Single Point of Contact (USPOC)",
      "location": "Richardson, TX, US",
      "dates": "2009-2016",
      "description": "Identify and verify possible outages on the Uverse network. Then notify the approiate departments of the outages",
      "url": "http://www.att.com"
    },
    {
      "employer": "AT&T Uverse Customer Service",
      "title": "Technical Support Representative",
      "location": "Richardson, TX, US",
      "dates": "2006-2009",
      "description": "Accept Uverse customer calls and troubleshoot and resolve any issues",
      "url": "http://www.att.com"
    }
  ]
};

//Projects information
var projects = {
  "projects": [{
      "title": "Cable Failure MicroSoft Excel Macro",
      "date": "2014",
      "description": "Automated the cable failure process",
      "images": {
        "image": ["images/cablefailuremacro.jpg"],
        "url": "http://www.att.com"
      }
    },
    {
      "title": "Access Provisioning Website",
      "date": "2017",
      "description": "Portal to send requests for tool access",
      "images": {
        "image": ["images/tabularasa1.jpg", "images/tabularasa2.jpg"],
        "url": "http://www.att.com"
      }
    }
  ]
};

//Education information
var education = {
  "schools": [{
      "name": "Richland College",
      "location": "Dallas,TX, US",
      "degree": "Associate of Science",
      "majors": "Biology",
      "dates": "2014-2016",
      "url": "http://www.richlandcollege.edu"
    },
    {
      "name": "Stephen F Austin",
      "location": "Nacogdoches,TX, US",
      "degree": "Bachelor of Science",
      "majors": "Biology",
      "dates": "1972-1974",
      "url": "http://www.sfasu.edu"
    }
  ],
  "onlineCourses": [{
      "title": "Introduction to Programming",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Webpage Development",
      "school": "Richland College",
      "dates": "2014-2015",
      "url": "http://www.richlandcollege.edu"
    },
    {
      "title": "MySQL Server",
      "school": "Richland College",
      "dates": "2015-2016",
      "url": "http://www.richlandcollege.edu"
    }
  ]
};

//Personal information
var bio = {
  "name": "Ricky Stephens",
  "role": "Associate Applications Developer",
  "contacts": {
    "mobile": "972-365-7425",
    "email": "rstephens@stephensservices.com",
    "github": "rickst1",
    "location": "Garland, TX, US"
  },
  "welcomeMessage": "I welcome the opportunity to interview for this position to discuss how my experience and abilities can benefit your organization.",
  "skills": ["Visual Basic Application", "MicroSoft Office Suite", "Project Management", "JavaScript", "Jquery", "Python", "React", "HTML", "CSS"],
  "bioPic": "images/me.jpg"
};

bio.display = function() {
  //Add name and role to the header and put a horizontal line
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  //Add contact information
  var formattedContact800Number = HTMLcontactGeneric.replace("%contact%", "toll free");
  formattedContact800Number = formattedContact800Number.replace("%data%", "844-283-7425");
  var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedContactGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var contactInfo = [formattedContactGitHub, formattedContactMobile, formattedContact800Number, formattedContactLocation, formattedContactEmail];
  for (var i = 0; i < contactInfo.length; i++) {
    $("#topContacts").append(contactInfo[i]);
    $("#footerContacts").append(contactInfo[i]);
  }
  //Add picture under the horizontal line
  var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedpic);
  //Add Welcome message
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);
  //Create skills title
  $("#header").append(HTMLskillsStart);
  if (bio.skills.length > 0) {
    //List skills
    for (i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }
};

bio.display();

//Function to add job information
work.display = function() {
  //if(work.jobs.length > 0){
  work.jobs.forEach(function(job) {
    //Create work experience div
    $("#workExperience").append(HTMLworkStart);
    //Concatenate employer and title
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
    formattedEmployerTitle = formattedEmployerTitle.replace("#", job.url);
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedWorkLocation);
    //Add dates
    var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedWorkDates);
    //Add work description
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedWorkDescription);
  });
};

work.display();

projects.display = function() {
  //Create projects div
  if (projects.projects.length > 0) {
    for (i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);
      var projTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      projTitle = projTitle.replace("#", projects.projects[i].images.url);
      $(".project-entry:last").append(projTitle);
      var projDate = HTMLprojectDates.replace("%data%", projects.projects[i].date);
      $(".project-entry:last").append(projDate);
      var projDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(projDesc);

      var projImg;
      if (projects.projects[i].images.image.length > 0) {
        for (a = 0; a < projects.projects[i].images.image.length; a++) {
          var theImage = projects.projects[i].images.image[a];
          projImg = HTMLprojectImage.replace("%data%", theImage);
          $(".project-entry:last").append(projImg);
        }
      }
    }
  }
};

projects.display();

education.display = function() {
  if (education.schools.length > 0) {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      var formattedEdName = HTMLschoolName.replace("%data%", school.name);
      formattedEdName = formattedEdName.replace("#", school.url);
      var formattedEdDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedEdNameDegree = formattedEdName + formattedEdDegree;
      $(".education-entry:last").append(formattedEdNameDegree);
      var formattedEdDates = HTMLschoolDates.replace("%data%", school.dates);
      $(".education-entry:last").append(formattedEdDates);
      var formattedEdLocation = HTMLschoolLocation.replace("%data%", school.location);
      $(".education-entry:last").append(formattedEdLocation);
      var formattedEdMajor = HTMLschoolMajor.replace("%data%", school.majors);
      $(".education-entry:last").append(formattedEdMajor);
    });
  }
  $(".education-entry:last").append(HTMLonlineClasses);
  if (education.onlineCourses.length > 0) {
    education.onlineCourses.forEach(function(course) {
      var formattedOlTitle = HTMLonlineTitle.replace("%data%", course.title);
      formattedOlTitle = formattedOlTitle.replace("#", course.url);
      var formattedOlSchool = HTMLonlineSchool.replace("%data%", course.school);
      $(".education-entry:last").append(formattedOlTitle + formattedOlSchool);

      //$(".education-entry:last").append(formattedOlSchool);
      var formattedOlDates = HTMLonlineDates.replace("%data%", course.dates);
      $(".education-entry:last").append(formattedOlDates);
      var formattedOlUrl = HTMLonlineURL.replace("%data%", course.url);
      formattedOlUrl = formattedOlUrl.replace("#", course.url);
      $(".education-entry:last").append(formattedOlUrl);
    });
  }
};

education.display();

$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(' ');
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  name = name.join(' ');
  return name;
}

//Map
$("#mapDiv").append(googleMap);
