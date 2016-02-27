var bio = {
  "name": "Jess Stuart",
  "role": "Web Developer",
  "contacts": {
    "mobile": "022 014 9196",
    "email": "what.the.dickenss@gmail.com",
    "github": "http://github.com/jess-of-the-woods",
    "blog": "https://jess-of-the-woods.github.io/",
    "location": "Wellington, New Zealand"
  },
  "skills": ['Awesomeness', 'Amazingness', 'Shapeshifting'],
  "biopic": "images/profile.jpg",
  "welcome": "Welcome to my résumé!"
};

var work = {
  "jobs": [
  {
    "employer": "The Newtown Ladies Sewing Circle", 
    "title": "Head Cosmonaut",
    "location": "Wellington, New Zealand",
    "dates": "2010-2015",
    "description": "Chief Cosmonaut responsible for exploring the inner galaxies"
  },
  {
    "employer": "Fairfield Kindergarten",
    "title": "Fire-Fighter",
    "location": "Hamilton, New Zealand",
    "dates": "2022-2025",
    "description": "Putting out fires lit by children of the Kindergarten"
  }
  ]
};

var education = {
  "schools": [
    {
    "name": "Waikato Institute of Technology",
    "location": "Hamilton, New Zealand",
    "degree": "National Certificate in Computing Level 3",
    "majors": ["Computer Science", " Networking", " Programming"],
    "dates": "2004",
    "url": "http://www.wintec.ac.nz"
    },
    {
    "name": "University of Waikato",
    "location": "Hamilton, NZ",
    "degree": "Individual Paper Credits",
    "majors": ["Women's and Gender Studies", " Linguistics", " Biology"],
    "dates": "2005-2007",
    "url": "http://www.waikato.ac.nz"
    }
  ],
  "onlineCourses": [
  {
    "title": "JavaScript Syntax",
    "school": "Udacity",
    "dates": "2016",
    "url": "http://udacity.com/course/ud804"
  },
  {
    "title": "JavaScript Basics",
    "school": "Codecademy",
    "dates": "2016",
    "url": "http://codecademy.com"
  },
  {
    "title": "Processing Basics",
    "school": "Hello Processing",
    "dates": "2016",
    "url": "hello.processing.org/"
  }
  ]
}; // close education object


var projects = {
  "projects": [
  {
    "title": "JavaScript Racer Game",
    "dates": "January 2016",
    "description": "A basic 2 player racing game made with JavaScript",
    "images": ["images/js_racer.png"]
  },
  {
    "title": "Quote Generator",
    "dates": "February 2016",
    "description": "A JavaScript quote-generator made with Mahuta Hoerara-Smith",
    "images": ["images/quote-generator.png"]
  }]
};

//-------bio display function---------------

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
  
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedBlog);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedWelcome);
  $("#header").append(formattedBiopic);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    } //close for
  } // close if
};
bio.display();

//--------work display function-----------------

work.display = function () {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
};
work.display();

//-------education display function----------------

  education.display = function() {
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

      $(".education-entry:last").append(formattedName);
      $(".education-entry:last").append(formattedDegree);
      $(".education-entry:last").append(formattedMajor);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedDates);
    } //close 'for loop'

    $("#education").append(HTMLonlineClasses);
    if (education.onlineCourses.length > 0) {
      for (var onlineCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedURL); 
      } // close 'for loop'
    } // close 'if'
  }; // close function
  education.display();

//----------projects display function----------

projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (var image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      } // close 2nd 'for loop'
    } // close 'if'
  } // close first for
};
projects.display();

/*
//returns location of each job.
function locationizer(work_obj) {
    var locationArray = [];
    for (var job in work.jobs){
        newLocation = (work.jobs[job].location);
        locationArray.push(newLocation);
    }
    return locationArray;
}

console.log(locationizer(work));
*/

function inName(input) {
  var inputArray = input.split(" ");
  inputArray = inputArray[0].slice(0,1).toUpperCase() + inputArray[0].slice(1).toLowerCase() + " " + inputArray[1].toUpperCase();
    var output = String(inputArray);
//  console.log(output);
    return output; 
}

inName(bio.name);

$('internationalizeButton').click(function() {
  $("#name").replaceWith(inName(bio.name));
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);