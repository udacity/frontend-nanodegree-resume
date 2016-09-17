/*
  Bio Object
 */

var bio = {
  'name': 'Christian Miguel Acuña',
  'role': 'iOS and Front-end Web Developer',
  'contacts': {
    'mobile': '(909) 529-1451',
    'email': 'mailto:cacuna0828@gmail.com',
    'github': 'https://github.com/christian-acuna/',
    'location': 'Nanjing, China',
  },
  'welcomeMessage': 'Welcome to my site!',
  'biopic': 'images/pic01.jpg',
  'skills': ['Coding', 'HTML5', 'CSS3',
    'Ruby', 'iOS'],
  'fontAwesome': ['fa-code', 'fa-html5', 'fa-css3', 'fa-diamond', 'fa-mobile']
};

bio.display = function() {
  $('#header-main').append(HTMLheaderName.replace("%data%", bio.name));
  $('#header-main').append(HTMLheaderRole.replace("%data%", bio.role));
  $('#footerContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
  $('#footerContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
  $('#bioPic').prepend(HTMLbioPic.replace('%data%', bio.biopic));
  if (bio.skills.length > 0) {
    $('#skills-header').append(HTMLskillsHeader);
    $('#skills-header').after(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var skillToAppend = HTMLskills.replace("%data%", bio.skills[i]);
      skillToAppend = skillToAppend.replace('%icon%', bio.fontAwesome[i]);
      $('#skills').append(skillToAppend);
    }
  }
};

bio.display();

/*
  Education Object
 */

 var education = {
   "schools": [{
     "name": "Nanjing University",
     "location": "Nanjing, China",
     "degree": "N/A",
     "majors": "N/A",
     "dates": "2015-2016",
     "url": "http://www.nju.edu.cn/english/"
  }],
   "onlineCourses": [
     {
       "title": "JavaScript Syntax",
       "school": "Udacity",
       "dates": 2016,
       "url": "http://www.udacity.com/course/ud804"
     }
   ]
 };

// TODO: add display function

/*
  Work Object
 */
var work = {
  "jobs": [
    {
      "title": "Fulbright Researcher",
      "employer": "Fulbright",
      "dates": "2015-2016",
      "location": "Nanjing, China",
      "description": "Implemented  first version of iOS app using Swift and submitted it to Apple’s WWDC Student Scholarship"
    },
    {
      "title": "User Interface Designer",
      "employer": "Wai Chinese",
      "dates": "2015",
      "location": "Pasadena, California",
      "description": "Collaborated remotely with product manager to design the web user interface for an AngularJS app"
    }
  ]
};

work.display = function() {
  var workArray = work.jobs;
  for (var job in workArray) {
    if (workArray.hasOwnProperty(job)) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", workArray[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", workArray[job].title);
      var formattedDates = HTMLworkDates.replace("%data%", workArray[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%",workArray[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%",workArray[job].description);
      $('.work-entry:last').append(formattedEmployer + formattedTitle);
      $('.work-entry:last').append(formattedLocation);
      $('.work-entry:last').append(formattedDates);
      $('.work-entry:last').append(formattedDescription);
    }
  }
};



var project = {
  "projects": [
    {
      "title": "Lens of China",
      "dates": "March 2016",
      "description": "iOS app using Swift and submitted it to Apple’s WWDC Student Scholarship",
      images: ['N/A'] // TODO: add images
    }
  ]
};

project.display = function() {
  $('#projects').append(HTMLprojectStart);
  var projectsArray = projectObject.projects;
  for (var project in projectsArray) {
    if (projectsArray.hasOwnProperty(project)) {
      $('#projects').append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projectsArray[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%",projectsArray[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%",projectsArray[project].description);
      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);
    }
  }
};

// project.display();

var inName = function(name) {
  name = name.trim().split(' ');
  name[1] = name[1].toUpperCase();
  name[0] = name[0][0] + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
};

// $('#main').append(internationalizeButton);



$(document).click(function(loc) {
  /* Act on the event */
  logClicks(loc.pageX, loc.pageY);
});

$('#mapDiv').append(googleMap);


// $('#main').append(bio.role);
// $('#main').append(bio.contactInfo);
// $('#main').append(bio.bioPic);
// $('#main').append(bio['welcome-message']);
// $('#main').append(bio.skills);
// $('#main').append(work.position);
// $('#main').append(education.city);
