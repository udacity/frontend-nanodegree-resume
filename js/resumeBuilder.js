var bio = {
  "name": "Hope Seebok",
  "role": "Web Developer",
  "contacts": {
    "mobile": "151-1121-5008",
    "email": "hopeseebok@gmail.com",
    "github": "hopeseebok",
    "twitter": "@hopeseebok",
    "location": "Shenzhen"
  },
  "welcomeMessage": "CBOK's welcome message",
  "skills": [
    "Android Developing", "C/C++", "Java", "Python"
  ],
  "bioPic": "images/fry.jpg"
};

var work = {
  "jobs": [
    {
      "employer": "OM Cloud",
      "title": "Android developer",
      "location": "Shenzhen",
      "dates": "Mar.2016 - Now",
      "description": "Who developing Android applications.Designing and developing advanced applications for the Android platform.Unit-testing code for robustness, including edge cases, usability, and general reliability.Bug fixing and improving application performance"
    },
    {
      "employer": "Wayto Tech",
      "title": "Android developer",
      "location": "Shanghai",
      "dates": "July.2015 - Feb.2016",
      "description": "Who developing Android applications.Designing and developing advanced applications for the Android platform.Unit-testing code for robustness, including edge cases, usability, and general reliability.Bug fixing and improving application performance"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "CMCC",
      "dates": "Jun.2016 - Sep.2016",
      "description": "Who developing Android applications.Designing and developing advanced applications for the Android platform.Unit-testing code for robustness, including edge cases, usability, and general reliability.Bug fixing and improving application performance.Continuously discover, evaluate, and implement new technologies to maximize development efficiency",
      "images":[
        "http://www.jrtstudio.com/sites/default/files/ico_android.png",
        "http://www.jrtstudio.com/sites/default/files/ico_android.png"
      ]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Hong Kong University",
      "city": "Hong Kong",
      "degree": "Master",
      "majors": ["CE"],
      "dates": 2015,
      "url": "http://github.com/hopeseebok"
    },
    {
      "name": "Central South University",
      "city": "Changsha",
      "degree": "BA",
      "majors": ["CE"],
      "dates": 2011,
      "url": "http://github.com/hopeseebok"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End",
      "school": "Udacity",
      "dates": 2017,
      "url": "https://www.udacity.com"
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var fomattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var fomattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var fomattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var fomattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(fomattedEmail);
  $("#topContacts").append(fomattedGithub);
  $("#topContacts").append(fomattedTwitter);
  $("#topContacts").append(fomattedLocation);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(fomattedEmail);
  $("#footerContacts").append(fomattedGithub);
  $("#footerContacts").append(fomattedTwitter);
  $("#footerContacts").append(fomattedLocation);
  var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
};
bio.display();

work.display = function() {
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%",job.location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedDates = HTMLworkDates.replace("%data%",job.dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedDescription);
  });
};
work.display();

projects.display = function() {
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
    $(".project-entry:last").append(formattedDescription);
    if (project.images.length > 0) {
      project.images.forEach(function(image){
        var formattedImage = HTMLprojectImage.replace("%data%",image);
        $(".project-entry:last").append(formattedImage);
      });
    }
  });
};
projects.display();

education.display = function() {
  education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.city);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",school.majors);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDates);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
  });
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    $("#education").append('<div class="online-entry education-entry"></div>');
    education.onlineCourses.forEach(function(onlineCourse){
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%",onlineCourse.url);
      $(".online-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
      $(".online-entry:last").append(formattedOnlineDates);
      $(".online-entry:last").append(formattedOnlineURL);
    });
  }
};
education.display();

$("#mapDiv").append(googleMap);
