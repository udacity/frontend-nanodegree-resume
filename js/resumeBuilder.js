var bio = {
  "name": "Hope Seebok",
  "role": "Web Developer",
  "contacts": {
    "mobile": "151-1121-5008",
    "email": "hopeseebok@gmail.com",
    "github": "hopeseebok",
    "twitter": "@hopeseebok",
    "location": "Shen Zhen"
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
      "location": "Shen Zhen",
      "dates": "Mar.2016 - Now",
      "description": "Who developing Android applications.Designing and developing advanced applications for the Android platform.Unit-testing code for robustness, including edge cases, usability, and general reliability.Bug fixing and improving application performance"
    },
    {
      "employer": "Wayto Tech",
      "title": "Android developer",
      "location": "Shang Hai",
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
  "school": [
    {
      "name": "Central South University",
      "city": "Chang Sha",
      "degree": "Masters",
      "majors": ["CE"],
      "dates": 2015,
      "url": "http://github.com/hopeseebok"
    },
    {
      "name": "Central South University",
      "city": "Yi Yang",
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
      "url": "https://classroom.udacity.com/me"
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
