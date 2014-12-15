var work = {
  "jobs":[
  {
    "employer":"AT&T",
    "title":"designer",
    "location":"Dallas, TX",
    "dates":"2006-now",
    "description":"U-verse designer"
  },
  {
    "employer":"Guideworks",
    "title":"designer",
    "location":"Tulsa, OK",
    "dates":"2004-2006",
    "description":"Comcast designer"
  }
  ]
};

var projects = {
  "projects":[
  {
    "title":"project1",
    "dates":"1992-1998",
    "description":"something",
    "images":["images/fry.jpg","images/fry.jpg"]
  }
  ]
}

var bio = {
  "name":"Robert Coldwell",
  "role":"Designer",
  "welcomeMessage":"Hello there!",
  "contacts":{
    "mobile":"210-542-8258",
    "email":"robert@icoldwell.com",
    "github":"rcoldwell",
    "twitter":"",
    "location":"Dallas, TX"
  },
  "bioPic":"images/me.jpg",
  "skills":["designer","coder"]
};

var education = {
  "schools":[
  {
    "name":"Tokyo School of Fine Arts",
    "location":"Tokyo, Japan",
    "degree":"",
    "majors":[],
    "dates":"1995-1998",
    "url":""
  }
  ],
  "onlineCourses":[
  {
    "title":"",
    "school":"",
    "dates":"",
    "url":""
  }
  ]
};

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
}

function displayWork(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
  }
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});

function locationizer(work_obj){
  var locationarray = [];
  for(var job in work_obj.jobs){
    locationarray.push(work_obj.jobs[job].location);
  }
  return locationarray;
}

locationizer(work);

$("#main").append(internationalizeButton);

function inName(name){
  var names = name.split(" ");
  return names[0] + " " +names[1].toUpperCase();
}

projects.display = function () {
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
    for(image in projects.projects[project].images){
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[image]));
    }
  }
}

projects.display();

$("#mapDiv").append(googleMap);
