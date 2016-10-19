var work = {
  "jobs": [
    {
      "employer": "Flaming & Co",
      "title": "Head Bartender",
      "location": "Warsaw, Poland",
      "dates": "2009 - 2011",
      "description": "Creating Cocktail menu, seasonal and occasional. Supervising bartenders and waiters, maintaining and ordering stock. Preparing orders for waiters, hot, cold drinks, wines and cocktails. "
    },
    {
      "employer": "St. Georges Hospital",
      "title": "Assistant Theatre Practitioner",
      "location": "London, UK",
      "dates": "2011 - 2016",
      "description": "Assisting versatile medical team during surgical procedures in fastpaced emergency theatres. Preparing and maintaining medical equipment and stock in theatres"
    }
  ]
};

var projects = {
  "project": [
    {
      "title": "Responsive Portfolio",
      "dates": "2016",
      "description": "Responsive, mobile first portfolio website created with Bootstrap, CSS and jQuery",
      "images": ["images/portfolio.jpg", "images/portfolio.jpg"]
    },
    {
      "title": "Portfolio",
      "dates": "2016",
      "description": "My portfolio website",
      "images": ["images/portfolio2.jpg", "images/portfolio2.jpg"]
    }
  ]
};

var bio = {
  "name" : "Andy Panasiuk",
  "role" : "Web Developer",
  "welcomeMessage" : "Cheerful, fun and friendly person, Tech savvy, highly motivated for success. I work well in a team but also on my own as I like to set myself goals which I will achieve. I am a quick learner with a hungry mind, always up for new challenges.",
  "biopic": "images/logo.jpg",
  "contacts" : [{
    "mobile" : "07507111029",
    "email" : "apanasiuk00@gmail.com",
    "github" : "Androsh",
    "twitter" : "@apanasiuk",
    "skype" : "apanasiuk00",
    "location" : "London"
  }],
  "skills": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"]
};

var education = {
  "schools": [
    {
      "name": "Secondary School nr 1",
      "location": "Mlawa",
      "degree": "A-Lvl",
      "dates": "2002-2005",
      "url": "http://lo1mlawa.pl/",
      "majors": ["Math", "English", "History of Art", "Geography"]
    },
    {
      "name": "Massage and Rehabilitation",
      "location": "Ciechanow",
      "degree": "Associate's Degree",
      "dates": "2005-2007",
      "url": "http://www.mszciechanow.pl/",
      "majors": ["Massage", "Rehabilitation"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
  $("#header").append(HTMLskillsStart);

  for (var a = 0; a < bio.skills.length; a++) {
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[a]);
    $("#skills").append(formattedSkills);
  };

  bio.contacts.forEach(function(contact) {
    var formattedMobile = HTMLmobile.replace("%data%",contact.mobile);
    var formattedEmail = HTMLemail.replace("%data%",contact.email);
    var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",contact.skype);
    var formattedGit = HTMLgithub.replace("%data%",contact.github);
    $("#topContacts").append(formattedMobile,formattedEmail,formattedSkype, formattedGit);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype, formattedGit);
  });
};

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%",school.name).replace("#",school.url);
    var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
    var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
    var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
    $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
  });

  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(course) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLonlineTitle.replace("%data%",course.title).replace("#",course.url);
    var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
    var formattedDates = HTMLonlineDates.replace("%data%",course.dates);
    $(".education-entry:last").append(formattedName + formattedSchool,formattedDates);
  });
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
    var formattedDates = HTMLworkDates.replace("%data%",job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
    var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
    $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription, formattedLocation);
  });
};

projects.display = function(){
  projects.project.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
    var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);

    $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

    for (var a = 0; a < project.images.length; a++){
      var formattedImage = HTMLprojectImage.replace("%data%",project.images[a]);
      $(".project-entry:last").append(formattedImage);
    }
  });
};

work.display();
projects.display();
education.display();
bio.display();


$("#mapDiv").append(googleMap);
