var bio = {
  "name": "Charles Anim",
  "role": "Front-End Web Developer",
  "welcomeMsg": "Building great web solutions and innovations",
  "contacts": {
    "mobile": "<a href='tel: 860.518.0872'>860.518.0872</a>",
    "email": "<a href='mailto:charlesnapster65@gmail.com'>charlesnapster65@gmail.com</a>",
    "github": "<a href='https://github.com/napster499'>Charles Anim</a>",
    "twitter": "<a href='https://twitter.com/AtefaNapster'>@atefanapster</a>",
    "location": "<a href='#'>East Hartford, CT</a>"
  },

  "skills": ["Software Engineering", "Computer Systems Engineering",
              "Product Design", "Java", "HTML5/CSS3", "Ruby on Rails",
              "GitHub", "C#", "Leadership", "Bootsrap", "jQuery",
              "Project Management"],
  "bioPic": "images/atefa.jpg"
};
var education = {
  "schools": [
    {
     "name": "Arizona State University",
     "location": "Tempe, AZ",
     "degree": "Bachelor of Science",
     "majors": ["Computer Systems Engineering"],
     "dates": 2011,
     "url": "http://asu.edu"
    }
  ],

  "onlineCourses": [
    {
     "title": "Front-End Nanodegree",
     "school": "Udacity",
     "dates": 2015,
     "url": "http://www.udacity.com"
    },
  ]
};

var work = {
  "jobs": [
    {
     "employer": "Code Koalas",
     "title": "Java Programmer",
     "location": "Kansas City, MO",
     "dates": "2015",
     "description": "Develop and maintain mobile apps for Android and iOS. Develop applications with one code base that deploys to both Android and iOS"
    },
    {"employer": "Atefa Technologies",
     "title": "CEO",
     "location": "East Hartford, CT",
     "dates": "2009",
     "description": "Build client based solutions to improve businesses and data security."
    }
  ]
};

var projects = {
  "projects": [
    {
     "title": "Interactive Resume",
     "dates": "2015",
     "description": "This is an online resume built by implementing javascript and jQuery",
     "images": [
       "http://placekitten.com/g/250/300",
       "http://placekitten.com/g/350/300"
     ]
    },
  ]
};


bio.display = function()
{
  var role = "Front End Web Developer";
  var name = "Charles Anim";

  var formattedName = HTMLheaderName.replace("%data%", name);
  var formattedRole = HTMLheaderRole.replace("%data%", role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").prepend(formattedWelcomeMsg);

  // Adding contacts details at the top of the resume
  bio.displayContacts(true);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
  $("#header").append(formattedWelcomeMsg);
  $("#header").append(HTMLskillsStart);

  if (bio.skills.length > 0) {
    for(var skill in bio.skills){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

// Function to display contact information at the top and bottom of the resume
bio.displayContacts = function(isHeader){
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  if (isHeader) {
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
  }
  else{
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
  }
};

// Display bio related information to the resume
bio.display();

work.display = function(){
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var fromattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(fromattedLocation).append(formattedDescription);
  }
};

// Display work related information to the resume
work.display();

projects.display = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};

// Display projects related information to the resume
projects.display();

education.display = function(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;

    $(".education-entry:last").append(formattedSchoolNameAndDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    if (education.schools[school].majors.length > 0) {
      for(major in education.schools[school].majors){
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for(onlineCourse in education.onlineCourses){
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedOnlineSchoolTitle);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }
};

// Display education related information to the resume
education.display();

// Display map for where i lived and worked to the resume
$("#mapDiv").append(googleMap);

// Adding contact details at the footer of the resume
bio.displayContacts(false);

// Adding International name functionality
function inName(name){
  name = name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
