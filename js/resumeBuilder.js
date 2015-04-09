var work = {
  "jobs": [
  {
    "employer": "Visma",
    "title": "Technician",
    "location": "Herlev",
    "year": "2010",
    "description": "Cash register software with warehouse inclusion"
  },
  {
    "employer": "Aadalens Privatskole",
    "title": "IT Ninja",
    "location": "Ishøj",
    "year": "2012",
    "description": "Anything remotely technical, i was responsible"
  },
  {
    "employer": "Self Employed",
    "title": "Web Developer",
    "location": "Nepal",
    "year": "2015",
    "description": "Starting out as front-end developer"
  }
  ]
};
var projects = {
  "projects": [
  {
    "title": "High rise building in Gibraltar",
    "year": "2006",
    "images":["http://placehold.it/100x100", "http://placehold.it/100x100", "http://placehold.it/100x100"]
  }]
};
var bio = {
    "name": "Jan Dahl-Madsen",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my story",
    "contacts": {"mobile": "+977 9813018651", "email": "161076@gmail.com", "github": "jsdm", "twitter": "@janmadsen", "location": "Kathmandu"},
    "skills": ["HTML5", "JS", "CSS", "Design"],
    "biopic": "images/me.png"
  };
var education = {
  "schools": [
  {
  "name": "Bygge Teknisk Hojskole",
  "location": "Copenhagen N",
  "degree": "Building Technician",
  "year": "2000",
  "url": "www.bth.dk"
  },
  {
    "name": "TEC copenhagen",
    "location": "Frederiksberg",
    "degree": "IT Engineer",
    "year": "2008",
    "url": "www.tec.dk"
  }
  ]};
  // var "onlineCourses" = {
  //   "onlineCourse": [
  //   {
  //     "title": "HTML & CSS",
  //     "school": "codecademy",
  //     "Year": "2014",
  //     "url": "www.codecademy.com"
  //   },
  //   {
  //     "title": "Front-end Web Development nano degree",
  //     "school": "Udacity",
  //     "Year": "2015",
  //     "url": "www.udacity.com"
  //   }]
  // }
var workArray = [];
function locationizer(work) {
    for (var loc in work.jobs){
        var locadd = work.jobs[loc].location;
        workArray.push(locadd);
    }
    return workArray;
}

function displayWork(){
for(var job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);

var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].year);
$(".work-entry:last").append(formattedDates);

var formattedDescriptipn = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescriptipn);
}
}
displayWork();

function displayEducation(){
  for (var edu in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
    var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    var formattedYear = HTMLschoolDates.replace("%data%", education.schools[edu].year);
    var formattedURL = HTMLschoolMajor.replace("%data%", education.schools[edu].url);
    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedCity);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedYear);
    $(".education-entry:last").append(formattedURL);

  }
}
displayEducation();

projects.display = function() {
  for(var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].year);
    $(".project-entry:last").append(formattedDates);

    var formattedDescriptipn = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescriptipn);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();

$("#mapDiv").append(googleMap);

var formattedName = bio.name;
var formattedRole = bio.role;
formattedMobile = bio.contacts.mobile;
formattedEmail = bio.contacts.email;
formattedTwitter = bio.contacts.twitter;
formattedGithub = bio.contacts.github;
formattedLocation = bio.contacts.location;
formattedBioPic = bio.biopic;
formattedWlcmMsg = bio.welcomeMessage;
formattedSkills = bio.skills;
formattedName = HTMLheaderName.replace("%data%", formattedName);
formattedRole = HTMLheaderRole.replace("%data%", formattedRole);
formattedMobile = HTMLmobile.replace("%data%", formattedMobile);
formattedEmail = HTMLemail.replace("%data%", formattedEmail);
formattedTwitter = HTMLtwitter.replace("%data%", formattedTwitter);
formattedGithub = HTMLgithub.replace("%data%", formattedGithub);
formattedLocation = HTMLlocation.replace("%data%", formattedLocation);
formattedBioPic = HTMLbioPic.replace("%data%", formattedBioPic);
formattedWlcmMsg = HTMLWelcomeMsg.replace("%data%", formattedWlcmMsg);
formattedSkills = HTMLskills.replace("%data%", formattedSkills);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedBioPic);
$("#topContacts").append(formattedWlcmMsg);
$("#topContacts").append(formattedSkills);

var interName = bio.name;
function inName(interName){
  var nname = interName;
  var n = nname.lastIndexOf(" ");
  var firstReturn = nname.slice(0,n);
  var lastReturn = nname.slice(n+1);
  firstReturn = firstReturn.toLowerCase();
  lastReturn = lastReturn.toUpperCase();
  var finalName = firstReturn + " " + lastReturn;
  return finalName;
}
$("#main").append(internationalizeButton);
