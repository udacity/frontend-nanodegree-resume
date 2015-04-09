var work = {
  "jobs": [
  {
    "employer": "Visma",
    "title": "Technician",
    "location": "Herlev",
    "year": "2010",
    "description": "Cash register software with warehouse inclusion Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae libero nisi, culpa illum a dolorum iste quaerat atque aspernatur rem, sapiente. Vitae fuga ipsa sunt cumque adipisci quibusdam et, impedit!"
  },
  {
    "employer": "Aadalens Privatskole",
    "title": "IT Ninja",
    "location": "Ishøj",
    "year": "2012",
    "description": "Anything remotely technical, i was responsible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quis reiciendis itaque officia recusandae quisquam possimus totam nisi, voluptate eligendi voluptates, autem aspernatur soluta id aperiam saepe, rem, reprehenderit architecto."
  },
  {
    "employer": "Self Employed",
    "title": "Web Developer",
    "location": "Nepal",
    "year": "2015",
    "description": "Starting out as front-end developer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus provident sed quas, voluptate voluptas quis atque officiis? Ex quis illo quam eveniet dolore dolores eligendi, hic labore, necessitatibus, porro voluptas?"
  }
  ]
};
var projects = {
  "projects": [
  {
    "title": "High rise building in Gibraltar",
    "year": "2006",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio doloribus blanditiis ea asperiores voluptatum repellat labore placeat, aliquid libero! orem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio doloribus blanditiis ea asperiores voluptatum repellat labore placeat, aliquid libero!",
    "images":["http://placehold.it/150x100", "http://placehold.it/150x100", "http://placehold.it/150x100"]
  },
  {
    "title": "TestProject",
    "year": "2008",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio doloribus blanditiis ea asperiores voluptatum repellat labore placeat, aliquid libero! orem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio doloribus blanditiis ea asperiores voluptatum repellat labore placeat, aliquid libero!",
    "images":["http://placehold.it/150x100", "http://placehold.it/150x100", "http://placehold.it/150x100"]
  }]
};
var bio = {
    "name": "Jan Dahl-Madsen",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my story Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, illum!",
    "contacts": {"mobile": "+977 9813018651", "email": "161076@gmail.com", "github": "jsdm", "twitter": "@janmadsen", "location": "Kathmandu"},
    "skills": ["HTML5", "Javascript", "CSS", "Design"],
    "biopic": "images/fry.jpg"
  };
var education = {
  "schools": [
  {
  "name": "Bygge Teknisk Hojskole",
  "location": "Copenhagen N",
  "degree": "Building Technician",
  "year": "2000",
  "major": "Buildings"
  },
  {
    "name": "TEC copenhagen",
    "location": "Frederiksberg",
    "degree": "IT Engineer",
    "year": "2008",
    "major": "IT"
  }
  ],
    "onlineCourse": [
    {
      "title": "HTML & CSS",
      "school": "codecademy",
      "year": "2014",
      "url": "www.codecademy.com"
    },
    {
      "title": "Front-end Web Development nano degree",
      "school": "Udacity",
      "year": "2015",
      "url": "www.udacity.com"
    }]
};
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
    var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    var formattedYear = HTMLschoolDates.replace("%data%", education.schools[edu].year);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
    $(".education-entry:last").append(formattedName + formattedDegree);
    $(".education-entry:last").append(formattedCity);
    $(".education-entry:last").append(formattedYear);
    $(".education-entry:last").append(formattedMajor);

  }
  $(".education-entry:last").append(HTMLonlineClasses);
  for (var onl in education.onlineCourse) {
    var onlTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[onl].title);
    var onlSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[onl].school);
    var onlYear = HTMLonlineDates.replace("%data%", education.onlineCourse[onl].year);
    var onlUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[onl].url);
    $(".education-entry:last").append(onlTitle + onlSchool);
    $(".education-entry:last").append(onlYear);
    $(".education-entry:last").append(onlUrl);
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

formattedSkills = bio.skills;
formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
formattedWlcmMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWlcmMsg);
$("#header").append(HTMLskillsStart);
for(var skl in bio.skills){
  formattedSkills = HTMLskills.replace("%data%", bio.skills[skl]);
  $("#header").append(formattedSkills);
}

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
