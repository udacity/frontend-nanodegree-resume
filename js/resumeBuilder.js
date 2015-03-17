//Jobs worked
var work = {
  "jobs": [
    {
      "employer": "TD Bank",
      "title": "Sr. Cloud Architect",
      "location": "Toronto, Canada",
      "dates": "2014 - Present ",
      "description": "Deliver private cloud for the bank and an IT as a Service Marketplace"
    },
    {
      "employer": "Shoppers Drug Mart",
      "title": "Sr. Solutions Architect",
      "location": "North York, Canada",
      "dates": "2013 - 2014 ",
      "description": "Responsible for the Point of Sale systems architecture"
    }
  ]
};

//Display Work Experience
var displayWork = function(){
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
};

displayWork();

//Projects worked on
var projects = [
      {
        "title":"Private Cloud",
        "dates":"August 12, 2014 to September 10, 2014",
        "description":"Architect, designed and built OpenStack based Private Cloud",
        "image":"images/cloud.jpg"
      },
      {
        "title":"IT Marketplace",
        "dates":"September 12, 2014 to February 12, 2015",
        "description":"Architect, designed and built IT as a Service Marketplace using Private Cloud",
        "image":"images/marketplace.jpg"
      },
      {
        "title":"Infrastructure Upgrade",
        "dates":"January 1, 2012 to August 30, 2014",
        "description":"Infrastructure refresh for the largest electrical transmission company in North America",
        "image":"images/electric.jpg"
      }
    ];

//Bio, skills and contact Information
var bio = {
  "name":"abdi ibrahim",
  "role":"Front End Developer",
  "contactinfo" : {
  "mobile":"416-509-4565",
  "email":"abdi@ai-consulting.ca",
  "twitter":"#abdiakahalo",
  "github":"github.com/linuxus",
  "location":"Toronto, Canada"
  },
  "picture":"images/roger-smith.png",
  "welcomeMsg":"Hello fellow Front End Developers and Welcome to my personal page.",
  "skills":["Computer Network", " OpenStack", " Ceph", " HTML", " CSS", " JavaScript"]
};

//Education
var education = {
  "schools" : [
    {"name":"York University",
    "location":"Toronto, Canada",
    "majors":["Computer Science", "Math"],
    "year":"1998"
    },
    {
    "name":"Universite Louis Pasteur",
    "location":"Strasbourg, France",
    "majors":["Math", "Biology"],
    "year":"1996"
    },
    {
    "name":"Lycee de Djibouti",
    "location":"Djibouti, Djibouti",
    "majors":["Math", "Physics"],
    "year":"1993"  
    }
  ]
};

// Internationalization Button
$("#main").append(internationalizeButton);

var inName = function (name) {
  name = name.trim().split(" ");
  name = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
  //return finalName;
  return name;
};

//Displaying Bio Information
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactMobile = HTMLmobile.replace("%data%", bio.contactinfo.mobile);
var formattedContactEmail = HTMLemail.replace("%data%", bio.contactinfo.email);
var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contactinfo.twitter);
var formattedContactGitHub = HTMLgithub.replace("%data%", bio.contactinfo.github);
var formattedContactLocation = HTMLlocation.replace("%data%", bio.contactinfo.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

 
//Displaying Projects
projects.display = function(){
  for (var i=0; i < projects.length; i++){
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects[i].description));
    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects[i].image))
  }
};

projects.display();

//Displaying Education
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);


//Displaying Skills
if (bio.skills != null)
{
  $("#header").append(HTMLskillsStart);
  var i=0, skill, skills = bio.skills;
  while(skill = skills[i++]){
    $("#header").append(HTMLskills.replace("%data%", skill));
  }
}

//Contact Info
$("#topContacts").append(formattedContactMobile);
$("#topContacts").append(formattedContactEmail);
$("#topContacts").append(formattedContactTwitter);
$("#topContacts").append(formattedContactGitHub);
$("#topContacts").append(formattedContactLocation);

//Adding Map to the document
$("#mapDiv").append(googleMap);

/*$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});*/