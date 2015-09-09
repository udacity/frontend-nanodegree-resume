var bio = {
  'name': 'Daniel Burdick',
  'age': 29,
  'role': 'Web-Dev',
  'biopic': 'images/fry.jpg',
  'contacts': {
    'mobile': '206-817-8312',
    'email': 'burdick.daniel@gmail.com',
    'github': 'http://github.com/burdiick',
    'location': 'Bothell, WA'
  },
  'skills': ['HTML', 'CSS', 'Javascript', 'Objective-C', 'Swift', 'Java', 'Clojure!!', 'C#', 'C++', 'C', 'BASIC', 'Assembly'],
  'welcomeMessage': 'Welcome to my online resume! It is built with love, in javascript.'
};

var work = {
  'jobs': [{
    'employer': 'Vanguard Constuction Services',
    'title': 'Managing Member',
    'location': 'Seattle, WA',
    'dates': {
      'start': '2010',
      'end': '2015'
    },
    'description': 'Purchase and remodel homes. Determin Scope of work. Hire and manage subcontractors. Perform general carpentry and finish work to complete job.'
  }, {
    'employer': 'Graham Contracting',
    'title': 'Project Site Coordinator',
    'location': 'Seattle, WA',
    'dates': {
      'start': '2007',
      'end': '2010'
    },
    'description': 'Manage setup and maintanence of on site trailer. Make all purchases for the job site and file POs. Assist with Change Orders. Perform record keeping for all documents on site.'
  }]
};

var education = {
  'schools': [{
    'name': 'Lake Washington Technical College',
    'location': '11605 132nd Ave NE, Kirkland, WA 98034',
    'degree': 'BA',
    'majors': 'Electronics Technology',
    'dates': '2012-2013',
    'url': 'http://www.lwtech.edu/'
  }],
  'onlineCourses': [{
    'school': 'Udacity',
    'title': 'Front-end Web Development',
    'dates': '2015-Present',
    'url': 'http://www.udacity.com'
  }]
};

education.display = function () {
  $('#education').append(HTMLschoolStart);

  education.schools.forEach(function (school) {
    $('.education-entry').append(replaceData(HTMLschoolName, school.name));
    $('.education-entry').append(replaceData(HTMLschoolDegree, school.degree));
    $('.education-entry').append(replaceData(HTMLschoolDates, school.dates));
    $('.education-entry').append(replaceData(HTMLschoolLocation, school.location));
    $('.education-entry').append(replaceData(HTMLschoolMajor, school.majors));
  });

  education.onlineCourses.forEach(function (school) {
    $('.education-entry').append(replaceData(HTMLonlineClasses, school.name));
    $('.education-entry').append(replaceData(HTMLonlineTitle, school.school));
    $('.education-entry').append(replaceData(HTMLonlineSchool, school.school));
    $('.education-entry').append(replaceData(HTMLonlineDates, school.dates));
  });
};

var projects = {
  'projects': [{
    'title': 'Portfolio',
    'dates': 'July, 2015',
    'description': 'A simple portfolio project with a focus on responsive programming principles.',
    'image': ''
    },
    {
      'title': 'Resume',
      'dates': 'July, 2015',
      'description': 'This webpage! A javascript/jquery primer on manipulating the DOM.',
      'image': ''
    }]
};

projects.display = function () {
  projects.projects.forEach(function (project) {
    $('#projects').append(HTMLprojectStart);
    $('.project-entry').append(replaceData(HTMLprojectTitle, project.title));
    $('.project-entry').append(replaceData(HTMLprojectDates, project.dates));
    $('.project-entry').append(replaceData(HTMLprojectDescription, project.description));
    $('.project-entry').append(replaceData(HTMLprojectImage, project.image));
  });
};

// Header content
displayHeader();

// Work experiance content
displayWork();

projects.display();

education.display();

function replaceData(object, data) {
  return object.replace('%data%', data);
}

function displayHeader() {
  $('#header').prepend(replaceData(HTMLheaderRole, bio.role));
  $('#header').prepend(replaceData(HTMLheaderName, bio.name));
  $('#topContacts').append(replaceData(HTMLmobile, bio.contacts.mobile));
  $('#topContacts').append(replaceData(HTMLemail, bio.contacts.email));
  $('#header').append(replaceData(HTMLbioPic, bio.biopic));
  $('#header').append(replaceData(HTMLwelcomeMsg, bio.welcomeMessage));

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
      $('#skills').append(replaceData(HTMLskills, bio.skills[i]));
    }
  }
}

function displayWork() {
  if (work.jobs.length > 0) {
    for (var i = 0; i < work.jobs.length; i++) {
      $('#workExperience').append(HTMLworkStart);

      $('.work-entry:last').append(replaceData(HTMLworkEmployer, work.jobs[i].employer));
      $('.work-entry:last').append(replaceData(HTMLworkTitle, work.jobs[i].title));
      $('.work-entry:last').append(replaceData(HTMLworkDates, work.jobs[i].dates.start + ' to ' + work.jobs[i].dates.end));
      $('.work-entry:last').append(replaceData(HTMLworkLocation, work.jobs[i].location));
      $('.work-entry:last').append(replaceData(HTMLworkDescription, work.jobs[i].description));
    }
  }
}

$('#main').append(internationalizeButton);

function inName() {
  var splitName = bio.name.trim().split(' ');
  return splitName[0] + ' ' + splitName[1].toUpperCase();
}

$('#mapDiv').append(googleMap);
