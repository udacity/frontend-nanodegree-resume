$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// map and internationalize button
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);


var bio = {
  "name": "Mike Moss",
  "role": "UX Designer",
  "contacts": {
    "location": "San Francisco, CA",
    "email": "michaeljmoss@gmail.com",
    "github": "MMux",
    "mobile": 415 + "-" + 400 + "-" + 5000,
  },
  "welcomeMessage": "Thanks for stopping by. Bear with me as I build some chops in front end development.",
  "skills": [
  "UX Design", "Visual Design", "Front End Development", "Prototyping"
  ],
  "bioPic": "images/mikeM.jpeg",
};

displayBio = function() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  var profilePic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(profilePic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

// contacts for header and footer
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

// skills section
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);

}

};

displayBio();

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
  "online" : [
  {
    "title" : "Front End Developer Certification",
    "school" : "Udacity",
    "dates" : 2014,
    "url" : "http://www.udacity.com"
  }
  ]
};

// show the schools section
displaySchools = function() {

  for(school in education.schools) {

    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

  // combines the School and Degree
  var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;
  $(".education-entry:last").append(formattedSchoolTitle);

  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchoolLocation);

  var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchoolDate);

  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedSchoolMajor);

}

for(online in education.online) {
    // online classes section

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[online].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[online].school);

  // combines the School and Degree
  var formattedOnlineHeading =  formattedOnlineTitle + formattedOnlineSchool;
  $(".education-entry:last").append(formattedOnlineHeading);

  var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[online].dates);
  $(".education-entry:last").append(formattedOnlineDates);

  var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[online].url);
  $(".education-entry:last").append(formattedOnlineURL);

  }
};

displaySchools();

var work = {
  "jobs": [
  {
    "employer": "Apigee",
    "title": "UX Designer",
    "location": "San Jose, CA",
    "dates": "07 Jul, 2012 - Present",
    "description": "Responsible for UI for API Management tools for the enterprise. Prototyping, visual design and nomenclature across multiple products."
  },
  {
    "employer": "Manmade",
    "title": "Designer",
    "location": "San Francisco, CA",
    "dates": "15 Aug, 2011" + " - " + "June 10, 2012",
    "description": "Responsible for visual design, branding and identity development. Worked on a range of projects from b2b websites, to weather map UI."
  }
  ]
};

function displayWork () {

  for(job in work.jobs) {
    // create div for work
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    // combines the Employer and Title
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployer + formattedTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDesc);
  }
}

displayWork();

var projects = {
  "projects": [
  {
    "title" : "Swagger Editor",
    "dates" : "September 2013 - Present",
    "description" : "Swagger editor is a YAML to swagger API authoring tool. Define your API structure in YAML, see a human readable documentation in Swagger in the righthand pane. I was responsible for the visual design and UX, and used Less and Bootstrap, while doing commits in pair with a front end developer",
    "images" : ["images/swagger-1.png", "images/swagger-2.png"]
  }
  ]
};

displayProjects = function() {

  for(project in projects.projects) {

    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDesc);

    if(projects.projects[project].images.length > 0) {
      for(images in projects.projects[project].images) {

        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[images]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};

displayProjects();













