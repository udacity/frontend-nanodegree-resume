/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
 "name": "AUSTIN KALKINS",
 "role": "Programmer and Web Developer",
 "contacts": {
   "mobile": "(907)821-3771",
   "email": "heartofnova@gmail.com",
   "twitter": "@wibelda",
   "github": "luna-nova",
   "location": "Seattle, WA"
 },
 "welcomeMessage": "Greetings and Salutations! - Fargoth",
 "skills": ["Composition", "Design", "Programming"],
 "biopic": "./images/ahhart.jpg",
 "display": "function() {}"
}

var education = {
 "schools": [
   {
     "name": "Ketchikan High School",
     "location": "Ketchikan, AK",
     "degree": "N/A",
     "majors": "N/A",
     "dates": 2011,
     "url": "http://khs.kgbsd.org/Page/397"
   }
 ],
 "onlineCourses": [
   {
     "title": "Shaping Up With AngularJS",
     "school": "Code School",
     "date": 2015,
     "url": "https://www.codeschool.com/courses/shaping-up-with-angular-js"
   },
   {
     "title": "Building Blocks of NodeJS",
     "school": "Code School",
     "date": 2015,
     "url": "https://www.codeschool.com/courses/real-time-web-with-node-js"
   }
 ],
 "display": "function() {}"
}

var work = {
  "jobs": [
    {
      "employer": "Year Up Puget Sound",
      "title": "Student/Intern",
      "location": "Seattle, WA",
      "dates": "9/2015 - 8/2016",
      "description": "Business training program focusing on computer science and programming."
    },
    {
      "employer": "Wayward Coffeehouse",
      "title": "Barista",
      "location": "Seattle, WA",
      "dates": "11/2014 - 9/2015",
      "description": "Made espresso drinks as well as sandwiches in a geek-themed coffeehouse."
    },
    {
      "employer": "The Point",
      "title": "Front Counter Manager",
      "location": "Ketchikan, AK",
      "dates": "9/2011 - 10/2014",
      "description": "Trained new employees and managed front counter while making espresso drinks."
    }
  ],
  "display": "function() {}"
}

var projects = {
  "projects": [
    {
      "title": "hypertext",
      "dates": "6/2015 - 8/2015",
      "description": "Speed typing text game!",
      "images": ["./images/hypertext-main.png"]
    }
  ],
  "display": "function() {}"
}

var formatHTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
var formatHTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
var formatHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formatHTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
var formatHTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
var formatHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
var formatHTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);

var formatHTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
var formatHTMLbioPic = HTMLbioPic.replace('%data%', bio.biopic);
var formatHTMLskills;

var formatHTMLworkEmployer,
    formatHTMLworkTitle,
    formatHTMLworkDates,
    formatHTMLworkLocation,
    formatHTMLworkDescription;

var formatHTMLprojectTitle,
    formatHTMLprojectDates,
    formatHTMLprojectDescription,
    formatHTMLprojectImage;

var formatHTMLschoolName,
    formatHTMLschoolDegree,
    formatHTMLschoolDates,
    formatHTMLschoolLocation,
    formatHTMLschoolMajor;

var formatHTMLonlineTitle,
    formatHTMLonlineSchool,
    formatHTMLonlineDates,
    formatHTMLonlineURL;

$("#header").prepend(formatHTMLheaderRole);
$("#header").prepend(formatHTMLheaderName);

$("#topContacts").append(formatHTMLmobile);
$("#topContacts").append(formatHTMLemail);
$("#topContacts").append(formatHTMLtwitter);
$("#topContacts").append(formatHTMLgithub);
$("#topContacts").append(formatHTMLlocation);

$("#header").append(formatHTMLwelcomeMsg);
$("#header").append(formatHTMLbioPic);
$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++) {
  formatHTMLskills = HTMLskills.replace('%data%', bio.skills[i]);
  $("#header").append(formatHTMLskills);
}

for (var i = 0; i < work.jobs.length; i++) {
  $("#workExperience").append(HTMLworkStart);
  formatHTMLworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
  formatHTMLworkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
  $(".work-entry:last").append(formatHTMLworkEmployer + formatHTMLworkTitle);

  formatHTMLworkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
  $(".work-entry:last").append(formatHTMLworkDates);

  formatHTMLworkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
  $(".work-entry:last").append(formatHTMLworkLocation);

  formatHTMLworkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
  $(".work-entry:last").append(formatHTMLworkDescription);
}

for (var i = 0; i < projects.projects.length; i++) {
  $("#projects").append(HTMLprojectStart);

  formatHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
  $(".project-entry:last").append(formatHTMLprojectTitle);

  formatHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
  $(".project-entry:last").append(formatHTMLprojectDates);

  formatHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
  $(".project-entry:last").append(formatHTMLprojectDescription);

  for (var k = 0; k < projects.projects[i].images.length; k++) {
    formatHTMLprojectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[k]);
    $(".project-entry:last").append(formatHTMLprojectImage);
  }
}

for (var i = 0; i < education.schools.length; i++) {
  $("#education").append(HTMLschoolStart);

  formatHTMLschoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
  formatHTMLschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
  $(".education-entry:last").append(formatHTMLschoolName + formatHTMLschoolDegree);

  formatHTMLschoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
  $(".education-entry:last").append(formatHTMLschoolDates);

  formatHTMLschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
  $(".education-entry:last").append(formatHTMLschoolLocation);

  formatHTMLschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
  $(".education-entry:last").append(formatHTMLschoolMajor);
}

$("#education").append(HTMLonlineClasses);

for (var i = 0; i < education.onlineCourses.length; i++) {
  $("#education").append(HTMLschoolStart);

  formatHTMLonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
  formatHTMLonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
  $(".education-entry:last").append(formatHTMLonlineTitle + formatHTMLonlineSchool);

  formatHTMLonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
  $(".education-entry:last").append(formatHTMLonlineDates);

  formatHTMLonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
  $(".education-entry:last").append(formatHTMLonlineURL);
}

$("#footerContacts").append(formatHTMLmobile);
$("#footerContacts").append(formatHTMLemail);
$("#footerContacts").append(formatHTMLtwitter);
$("#footerContacts").append(formatHTMLgithub);
$("#footerContacts").append(formatHTMLlocation);

$("#mapDiv").append(googleMap);
