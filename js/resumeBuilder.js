//uncomment below for log-clicks.
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


var bio = {
  "name": "Mike Moss",
  "role": "UX Designer",
  "contacts": {
    "location": "San Francisco, CA",
    "email": "michaeljmoss@gmail.com",
    "github": "mmux",
    "mobile": 415 + "-" + 400 + "-" + 5000,
  },
  "welcomeMessage": "Thanks for stopping by. Bear with me as I build some chops in front end development.",
  "skills": [
  "UX Design", "Visual Design", "Front End Development", "Prototyping"
  ],
  "bioPic": "images/fry.jpg",

};

// education section

var education = {
  "schools": [
  {
    "name": "School of Visual Arts",
    "location": "New York, NY",
    "degree": "BFA",
    "major": "Illustration",
    "dates": 1997,
    "url": "http://www.sva.edu/"
  },
  {
    "name": "Academy of Art",
    "location": "San Francisco, CA",
    "degree": "MFA",
    "major": "Graphic Design",
    "dates": 2011,
    "url": "http://www.academyart.edu"
  }
  ],
  "online" : {
    "title" : "Front End Developer Certification",
    "school" : "Udacity",
    "dates" : "2014",
    "url" : "http://www.udacity.com"
  }
};

var work = {
  "jobs": [
  {
    "employer": "Apigee",
    "title": "UX Designer",
    "location": "San Jose, CA",
    "dates": "07 Jul, 2012 - Present",
    "description": "Responsible for UI for API Management tools. Prototyping, visual design and nomenclature."
  },
  {
    "employer": "Manmade",
    "title": "Designer",
    "location": "San Francisco, CA",
    "dates": "15 Aug, 2011" + " - " + "June 10, 2012",
    "description": "Design for branding, UX for weather maps."
  }
  ]
};

var projects = {
  "projects": [
  {
    "title" : "Twixxies",
    "dates" : "January 2014 - now",
    "description" : "Twixxies is an app platform that offers app themes and hosting to businesses.",
    "images" : ["./images/Twix.png", "./images/hosting.png", "./images/indie-app.png"]
  },
  {
    "title" : "Pixies",
    "dates" : "Hellacool 2014 - now",
    "description" : "Twixxies is an app platform that offers app themes and hosting to businesses.",
    "images" : ["./images/Twix.png", "./images/hosting.png", "./images/indie-app.png"]
  }
  ]
};

$("#mapDiv").append(googleMap);

$('#main').append(internationalizeButton);

// show the schools section
showSchools = function() {

  $('#education').append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
  // $('#education').children().next().append(formattedSchoolName);

  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
  // $('#education').children().next().append(formattedSchoolDegree);

  // combines the Employer and Title
  var formattedEmployerTitle = formattedSchoolName + formattedSchoolDegree;
  $('#education').children().next().append(formattedSchoolName + formattedSchoolDegree);

  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
  $('#education').children().next().append(formattedSchoolLocation);




  var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[0].dates);
  $('#education').children().next().append(formattedSchoolDate);

  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);
  $('#education').children().next().append(formattedSchoolMajor);





    // to append all variables in one line
    // $('#education').children().next().append(formattedSchoolName, formattedSchoolDegree, formattedSchoolLocation,  formattedSchoolDate, formattedSchoolMajor );


    $("#education").append(HTMLonlineClasses);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online.title);


    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online.school);

    var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.online.dates);

      // $('#education').insertAfter('.education-entry').append(formattedOnlineTitle);

    // // second school
    // var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[1].name);
    // $('#education').append(formattedSchoolName);

    // var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[1].location);
    // $('#education').append(formattedSchoolLocation);

    // var formattedSchoolMajor = HTMLschoolLocation.replace("%data%", education.schools[1].major);
    // $('#education').append(formattedSchoolMajor);

    // var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[1].dates);
    // $('#education').append(formattedSchoolDate);

  };

  showSchools();

  showWork = function() {

    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);

// combines the Employer and Title
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('#workExperience').children().next().append(formattedEmployer + formattedTitle);


    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
    $('#workExperience').children().next().append(formattedDates);

    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[0].description);
    $('#workExperience').children().next().append(formattedWorkDesc);

  };

  showWork();

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);




  var profilePic = HTMLbioPic.replace("%data%", bio.bioPic);
  $('#header').append(profilePic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// $('#topContacts').append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
// $('#topContacts').append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.city);
// $('#topContacts').append(formattedLocation);



$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedLocation);


$('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

$('#header').append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$('#skills').append(formattedSkills);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$('#skills').append(formattedSkills);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$('#skills').append(formattedSkills);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$('#skills').append(formattedSkills);



showProjects = function() {

  $('#projects').append(HTMLprojectStart);

  var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[0].title);
  $('#projects').children().next().append(formattedProjectTitle);

  var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
  $('#projects').children().next().append(formattedProjectDates);

  var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[0].description);
  $('#projects').children().next().append(formattedProjectDesc);

  var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[0].description);
  $('#projects').children().next().append(formattedProjectImage);

};

showProjects();


// map section





// footer for contacts


