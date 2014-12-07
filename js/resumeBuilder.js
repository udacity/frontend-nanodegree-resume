var bio = {};
var work = {};
var education = {};
var projects = {};

bio["name"] = "WRONG Udacious Student";
bio["role"] = "WRONG Web Developer";
bio["contacts"] = {
  "mobile": "WRONG 650-555-5555",
  "email": "WRONG uda@udacity.com",
  "github": "WRONG uda-city",
  "twitter": "WRONG @uda-city",
  "location": "WRONG Mountain View, CA"
}
bio["welcomeMessage"] = "Happy to be here!";
bio["skills"] = [
  "grading", "learning", "teaching", "programming"
]
bio["bioPic"] = "fry.jpg";
education["schools"] = [
  {
    "name": "WRONG Udacity University",
    "location": "WRONG Mountain View, CA",
    "degree": "WRONG PhD",
    "majors": ["CS"],
    "dates": 2015,
    "url": "http://udacity.com"
  },
  {
    "name": "WRONG Internet College",
    "location": "London, England",
    "degree": "MA",
    "majors": ["CS"],
    "dates": 2013,
    "url": "http://udacity-is-cool.com"
  }
]
education["onlineCourses"] = [
  {
    "title": "WRONG JavaScript Basics",
    "school" : "Udacity",
    "dates": 2014,
    "url": "http://www.udacity.com/course/ud804"
  }
]
work["jobs"] = [
  {
    "employer": "WRONG Coffee Makers International",
    "title": "Coffee Consumer",
    "location": "Jamaica Blue Mountains",
    "dates": "2000 BC - Future",
    "description": "I really, really like coffee."
  },
  {
    "employer": "WRONG Tea Time Territory",
    "title": "Tea Taster",
    "location": "India",
    "dates": "All the time",
    "description": "Tea is another valuable source of caffeine."
  }
]
projects["projects"] = [
  {
    "title": "WRONG The Effects of Caffeine on the Human Body",
    "dates": "1987 - Now",
    "description": "I drink caffeine and see what happens.",
    "images": [
      "fry.jpg"
    ]   
  }
]

// could create vars to save all of the complex object infos used in replace() methods
bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  // not sure why the spacing is off between contact info and contact category
  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#topContacts").append(formattedContact);
  }

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedPic);

  var formattedDescription = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedDescription);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
  }

  // needs styling, currently flows outside of header on mobile resolution
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }

  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#footerContacts").append(formattedContact);
  }

}

work.display = function() {
  for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLworkEmployer.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLworkTitle.replace("%data%", education.schools[school].degree);
    var formattedSchoolHeader = formattedSchoolName + formattedDegree;
    $(".education-entry:last").append(formattedSchoolHeader);

    //deal with majors

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    // TODO: style better
    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  }
  
  $("#education").append(HTMLonlineClasses);

  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    var formattedOnlineHeader  = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedOnlineHeader);
    
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    // TODO: style better
    var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
  }
}

bio.display();
work.display();
education.display();
projects.display();


function inName(_name) {
  var name;
  if (_name) {
    name = _name;
  } else {
    name = bio.name;
  }
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);