var apps = ["JavaScript", "Python", "IDE's"];
var bio = {
  "name":"Omari Blockton",
  "role":"web developer",
  "welcomeMessage": "Experienced web developer, focused on innovation and efficiency",
  "biopic" :"Lorem Ipsum",
  "contacts": {"Mobile": "510-421-1379",
      "address": "3230 Storer Ave, Oakland,Ca 94619",
      "Email" : "oblockton@gmail.com",
      "Github" : "oblockton"
  },
  "skills" : [
    "Adaptabilty",
     "Efficiency",
    `Develepoment Applications: ${apps}`
  ]
};

function buildBio() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name)
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", "images/Omari_vineyard.jpg")
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedWelcomeMsg);
  $("#header").append(formattedBioPic)
};

buildBio();

function formatTopContacts() {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
  $("#topContacts").prepend(formattedMobile);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.address);
  $("#topContacts").prepend(formattedLocation);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
  $("#topContacts").append(formattedGithub);
  //console.log(bio.contact.Mobile);
};

formatTopContacts();

function buildSkills() {
  if(bio['skills'].length > 0) {
    $("#header").append(HTMLskillsStart)
    for (let i = 0; i < bio['skills'].length; i++) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }
};

buildSkills();


var work = {
  "jobs" : [
    {
      "employer" : "Google",
      "title" : "Engineer",
      "location" : "Mountain View, Ca",
      "dates" : "December 2018- present",
      "description" : "Engineer Googly things"
    },
    {
      "employer" : "Google Shopping Express",
      "title" : "Lead Store Operator",
      "location" : "Mountain View, Ca",
      "dates" : "September 2013 - September 2015",
      "description" : "Responsible for oversight and fulfillment of online orders at the store level. Identify areas of improvements and implement new strategies. Manage the fulfillment process with a focus on problem prevention. Train new hires and effectively cultivate a productive and welcoming team atmosphere.Ensure accuracy throughout the entire fulfillment process, and strive for complete customer satisfaction.Work with minimal supervision.Maintain and develop effective time management skills to ensure all order deadlines are met.Continuously communicate with management, including but not limited to; escalations, status reports, supply requests, statistical data updates, and customer service inquiries.Represent and maintain the Google brand image when interacting with the retail partners, and the public. "
    }
  ]

};

function displayWork() {
  if (work['jobs'].length > 0) {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart)
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
      var formattedEmployerTitle = formattedEmployer + formattedTitle
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
      $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription)
    }
  }
};
displayWork();


var projects = {
  "projectList" : [
    {
      "title" : "Interactive Resume",
      "dates" : "Current",
      "description":"Build an interactive resume using Javascript",
      "images" : "images/fry.jpg"
    },
    {
      "title" : "Build Personal Libraries",
      "dates" : "Current",
      "description":"Build library of common functions for personal reference",
      "images" : "images/fry.jpg"
    }
  ]
}

projects.display = function() {
  for (project in projects.projectList){
    $("#projects").append(HTMLprojectStart)
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projectList[project].title)
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projectList[project].dates)
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projectList[project].description)
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projectList[project].images)
    $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage)
  }

};
projects.display();

var education = {
  "Schools" : [
    {
      "name": "The College Preparatory School",
      "location": "6100 Broadway, Oakland, CA 94618",
      "degreeDates": "Class of 2006",
      "degree" : "High School Diploma",
      "majors" : ["General Education"]
    },
    {
      "name": "The University of California Davis",
      "location": "Davis, Ca",
      "degreeDates": "Class of 2010",
      "degree" : " ",
      "majors" : ["Managerial Economics", "Computer Science"]
    }
  ],
  "onlineCourses" : [
    {
      "title": "Python",
      "school": "Udacity",
      "dates": "2017",
      "url": "not applicable"
    },
    {
      "title": "Javascript",
      "school": "Udacity",
      "dates": "2017",
      "url": "not applicable"
    },
    {
      "title": "Full Stack Bootcamp",
      "school": "Flat Iron",
      "dates": "2017",
      "url": "not applicable"
    }
  ]
};

function buildEducation() {
  for (let i=0; i < education.Schools.length; i++) {
    $("#education").append(HTMLschoolStart)
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.Schools[i].name)
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.Schools[i].location)
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.Schools[i].degreeDates)
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.Schools[i].majors)
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.Schools[i].degree)
    $(".education-entry:last").append(formattedSchoolName)
    if (education.Schools[i].degree.length > 0) {
      $(".education-entry:last").append(formattedSchoolDegree)
      $(".education-entry:last").append(formattedSchoolDates)
      $(".education-entry:last").append(formattedSchoolLocation)
      $(".education-entry:last").append(formattedSchoolMajor)
    } else {
      $(".education-entry:last").append(formattedSchoolDates)
      $(".education-entry:last").append(formattedSchoolLocation)
      $(".education-entry:last").append(formattedSchoolMajor)
    }

  }
};

buildEducation();

function buildOnlineCourses() {
  $("#education").append(HTMLonlineClasses)
  for (let i =0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLonlineStart)
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title)
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school)
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates)
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)
        $(".online-entry:last").append(formattedOnlineTitle)
        $(".online-entry:last").append(formattedOnlineSchool)
        $(".online-entry:last").append(formattedOnlineDates)
        $(".online-entry:last").append(formattedOnlineUrl)
  }
};

buildOnlineCourses();




function inName(name) {
  name = name.trim().split(" ")
  console.log(name);
  name[1] = name[1].toUpperCase()
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase()
  return name[0] + " "+ name[1]
}
$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
