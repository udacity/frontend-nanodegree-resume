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
  "image": "images/logo.jpg",
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
      "url": "http://udacity.com"
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  formattedImage = HTMLbioPic.replace("%data%",bio.image);
  formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
  $("#header").append(HTMLskillsStart);

  for (var a = 0; a < bio.skills.length; a++) {
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[a]);
    $("#skills").append(formattedSkills);
  };

  bio.contacts.forEach(function(contact) {
    var formattedMobile = HTMLmobile.replace("%data%",contact.mobile);
    formattedEmail = HTMLemail.replace("%data%",contact.email);
    formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",contact.skype);
    $("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
  });
};

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%",school.name);
    formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
    formattedDates = HTMLschoolDates.replace("%data%",school.dates);
    formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
    formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
    $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
  }),
  education.onlineCourses.forEach(function(course) {
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedName = HTMLonlineTitle.replace("%data%",course.title);
    formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
    formattedDates = HTMLonlineDates.replace("%data%",course.dates);
    formattedURL = HTMLonlineURL.replace("%data%",course.url)
    $(".education-entry:last").append(formattedName + formattedSchool,formattedDates,formattedURL);
  })
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    formattedTitle = HTMLworkTitle.replace("%data%",job.title);
    formattedDates = HTMLworkDates.replace("%data%",job.dates);
    formattedDescription = HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
  })
};

projects.display = function(){
  projects.project.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
    formattedDates = HTMLprojectDates.replace("%data%",project.dates);
    formattedDescription = HTMLprojectDescription.replace("%data%",project.description);

    $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

    for (var a = 0; a < project.images.length; a++){
      var formattedImage = HTMLprojectImage.replace("%data%",project.images[a]);
      $(".project-entry:last").append(formattedImage);
    }
  })
};

function inName(name){
  console.log(name);
  var newName = name;
  newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
  return newName;
};


work.display();
projects.display();
education.display();
bio.display();


$("#mapDiv").append(googleMap);
