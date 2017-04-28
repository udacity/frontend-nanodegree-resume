/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Nate Sargent",
    role: "Front-End Web Developer",
    biopic: "images/me.jpg",
    welcomeMessage: "FeelsGoodMan",
    skills: ["JavaScript","Overwatch","Viola"],
    contacts: {
      mobile: "(913) 626-0567",
      email: "forcelord50@gmail.com",
      github: "N8Sayer",
      location: "Lenexa, KS"
    }
};

var work = {
  jobs: [
    {
      employer: "Sungevity Solar",
      title: "Senior Remote Solar Designer",
      location: "Kansas City, MO",
      dates: "05/2015 - 03/2017",
      description: "Has extensive experience working in Salesforce: generating custom reports, modifying accounts, and creating custom viewpoints. " +
                    "Wrote and helped design RSD’s workload management Google Sheet, which has over 1000 lines of code. " +
                    "Programmed several Google sheets for multiple departments within the company to help augment gaps within existing processes to improve efficiency. " +
                    "Worked with AutoCAD and Google SketchUp to build 2D and 3D models to assist customers with understanding their more difficult quotes."
    },{
      employer: "SAFC Biosciences",
      title: "DPM Manufacturing Tech I",
      location: "Lenexa, KS",
      dates: "01/2014 - 05/2015",
      description: "Was responsible for: manufacturing high quality Dry Powder Media used by major pharmaceutical companies,  " +
                   "assembling and disassembling equipment in multiple configurations(Production/Cleaning/Drying), adhering to " +
                   "pharmaceutical-grade manufacturing protocols(cGMP), as well as using the Agile methods of Lean and Kanban in our processes."
    }, {
      employer: "UPS",
      title: "Front-Line Supervisor",
      location: "Lenexa, KS",
      dates: "08/2008 - 01/2014",
      description: "Was responsible for training newly hired employees in the skills and safety knowledge needed to excel. " +
                    "Successfully trained 7 employees who demonstrated the skills necessary to be promoted to a Front Line Supervisor position" +
                    " in 16 months as a Training Supervisor. " +
                    "Supervised 17 employees, managed their pay, start and end times, and was responsible for the quality of their work. " +
                    "Was employed at UPS for 5.5 years. Spent 2008-2011 working as an hourly loader, and 2011-2014 as a supervisor."
    }
  ]
};

var education = {
  schools: [
    {
      name: "JCCC",
      location: "Overland Park, KS",
      degree: "EMT Certificate (State and National)",
      dates: "2012-2013",
      url: "http://www.jccc.edu/academics/health/emergency-medical-science/",
      majors: ["Emergency Medical Technician"]
    },{
      name: "University of Kansas",
      location: "Lawrence, KS",
      degree: "N/A",
      dates: "2007-2008",
      url: "https://engr.ku.edu/",
      majors: ["Engineering-Undeclared"]
    }
  ],
  onlineCourses: [
    {
      title: "Udacity Front-End Web Developer Nanodegree",
      school: "Udacity",
      dates: "04/2017-Present",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },{
      title: "PVOL203: PV System Fundamentals (Battery-Based)",
      school: "Solar Energy International",
      dates: "01/2017",
      url: "https://www.solarenergy.org/courses/solar-training-pv-system-fundamentals-battery-based-online/"
    },{
      title: "PVOL101: Solar Electric Design and Installation (Grid-Direct)",
      school: "Solar Energy International",
      dates: "11/2015",
      url: "https://www.solarenergy.org/courses/solar-training-solar-electric-design-and-installation-grid-direct-online/"
    }
  ]
};

var projects = {
  projects: [
    {
      title: "Github",
      images: ["images/github-400small.jpg",
               "images/github-700med.jpg 700w",
               "images/github-1000large.jpg 1000w"],
      url: "https://www.github.com/N8Sayer",
      dates: "2017",
      description: "This is my personal Github Repo"
    },{
      title: "RSD Dashboard",
      images: ["images/rsd-dashboard-400small.jpg",
               "images/rsd-dashboard-700med.jpg 700w",
               "images/rsd-dashboard-1000large.jpg 1000w"],
      url: "https://docs.google.com/spreadsheets/d/1UN1_8w5Z4S-UoX7C4GitsPihCCSLXmxqDEeexdSKfGo/edit?usp=sharing",
      dates: "2016",
      description: ["This document managed workflow, tracked statistics, and managed daily job assignments"]
    }
  ]
};

bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

  $("#header").prepend(formattedRole,formattedName);
  $("#header").append(formattedBiopic,formattedWelcomeMessage);
  $("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var x=0;x<bio.skills.length;x++) {
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[x]);
      $("#skills").append(formattedSkill);
    }
  }
};

work.display = function () {
  for (var x=0;x<work.jobs.length;x++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[x].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[x].title);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[x].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[x].location);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[x].description);

    $(".work-entry:last").append(formattedEmployer.concat(formattedTitle),formattedDates,formattedLocation,formattedDescription);
  }
};

projects.display = function() {
  for (var x=0;x<projects.projects.length;x++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[x].title).replace('#',projects.projects[x].url);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[x].dates);
    var formattedImage = "";
    for (var y=0;y<projects.projects[x].images.length;y++) {
      if (y === 0) {
        formattedImage = HTMLprojectImage.replace("%small%",projects.projects[x].images[y]);
      }
      else if (y === 1) {
        formattedImage = HTMLprojectImage.replace("%med%",projects.projects[x].images[y]);
      }
      else if (y === 2) {
        formattedImage = HTMLprojectImage.replace("%large%",projects.projects[x].images[y]);
      }
    }
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[x].description);

    $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,formattedImage);
  }
};

education.display = function () {
  for (var x=0;x<education.schools.length;x++) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%",education.schools[x].name).replace("#",education.schools[x].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[x].degree);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[x].location);
    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[x].dates);
    var tempMajors = "";
    for (var y=0;y<education.schools[x].majors.length;y++) {
      if (y < education.schools[x].majors.length -1) {
        tempMajors += education.schools[x].majors[y] + ", ";
      }
      else {
        tempMajors += education.schools[x].majors[y];
      }
    }
    var formattedMajors = HTMLschoolMajor.replace("%data%",tempMajors);

    $(".education-entry:last").append(formattedName.concat(formattedDegree),formattedLocation,formattedDates,formattedMajors);
  }

  $(".education-entry:last").append(HTMLonlineClasses);
  for (var z=0;z<education.onlineCourses.length;z++) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[z].title).replace("#",education.onlineCourses[z].url);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[z].school);
    formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[z].dates);

    $(".education-entry:last").append(formattedTitle.concat(formattedSchool),formattedDates);
  }
};

bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);
//$("#main").append(internationalizeButton);
