/*
-SECTION 1- This section defines resume data as objects that gets appended to
index.html in the next section
 */

var bio = {
  'name': 'Gelee Royale',
  'role': 'Frontend development for the hive',
  contacts: {
    'mobile': 888666,
    'email': 'em@il.com',
    'github': 'BBBB',
    'twitter': 'Hexagonia',
    'location': 'Queens Hive'
  },
  'welcomeMessage': 'Hi, I am a viscous liquid, produced by bees to feed the queen bee of their hive.',
  'biopic': '/images/fry.jpg',
  skills: [
    'nourishing',
    'non-perishable',
    'delicious'],

  display: function () {
    var userName = HTMLheaderName.replace('%data%', bio.name);
    var userRole = HTMLheaderRole.replace('%data%', bio.role);
    var contacts = HTMLcontactGeneric.replace('%data%', bio.contacts);
    var contactsMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var contactsEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var contactsGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var contactsTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var contactsLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var welcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    var bioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').prepend(userRole);
    $('#header').prepend(userName);
    $('#topContacts').append(contactsMobile);
    $('#topContacts').append(contactsEmail);
    $('#topContacts').append(contactsGithub);
    $('#topContacts').append(contactsTwitter);
    $('#topContacts').append(contactsLocation);
    $('#header').append(welcomeMessage);
    $('#header').append(bioPic);
    $('#header').append(HTMLskillsStart);
    var skillsList = [];
    bio.skills.forEach(function (formattedSkills, index) {
      formattedSkills = HTMLskills.replace('%data%', bio.skills[index]);
      skillsList.push(formattedSkills);
    })
    $('#skills').append(skillsList);
  }
}

var work = {
  jobs:
  [{'employer': 'The Queenbee',
    'title': 'Frontend development for the hive',
    'location': 'Droneobia',
    'dates': '1971-1988',
    'description': 'The Queenbee relied heavily upon me.'
  },

    {'employer': 'Ambrosia',
      'title': 'Nectar of the Gods',
      'location': 'Olymp',
      'dates': '1990-1998',
      'description': 'I was chosen to be the sole food of the gods.'
    }],

  display: function () {
    var jobList = [];
    work.jobs.forEach(function (item, index) {
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[index].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[index].title);
      var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[index].location);
      var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[index].dates);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[index].description);
      jobList.push(formattedEmployer, formattedTitle, formattedLocation, formattedWorkDates, formattedDescription);
    })
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry').append(jobList);
  }
}

var projects = {
  projects:
  [{'title': 'Teaching the drones',
    'dates': '1999-2000',
    'description': 'It was a jolly time!',
    'images': ['images/197x148.gif', 'images/197x148.gif']
  },

    {'title': 'Building a better hive',
      'dates': '2001-2008',
      'description': 'Here we learned the true meaning of one-for-all!',
      'images': ['images/197x148.gif', 'images/197x148.gif']
    }],

  display: function () {
    var projectList = [];
    var formattedImages = [];
    projects.projects.forEach(function (item, index) {
      var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[index].title);
      var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[index].dates);
      var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[index].description);
      projectList.push(formattedTitle, formattedDates, formattedDescription);
      projects.projects[index].images.forEach(function (image, number) {
        formattedImages = HTMLprojectImage.replace('%data%', projects.projects[index].images[number]);
        projectList.push(formattedImages);
      })
    })
    $('#projects').append(HTMLprojectStart);
    $('.project-entry').append(projectList);
  }
}

var education = {
  schools:
  [{'name': 'Beeschool',
    'location': 'Beenopia',
    'degree': 'Bachelor',
    'majors': ['Viscosity', 'Taste'],
    'dates': '1917-1925'
  },

    {'name': 'Beeniversity',
      'location': 'Hivesville',
      'degree': 'Master of Honey',
      'majors': ['Nourishment', 'Quality'],
      'dates': '1927-1932'
    }],

  onlineCourses:
  [{'title': 'Beedasity',
    'school': 'Beenopia',
    'dates': '1935-1940',
    'url': 'http://udacity.com'
  },

    {'title': 'Beedasity',
      'school': 'Hivesville',
      'dates': '1942-1956',
      'url': 'http://udacity.com'
    }],

  display: function () {
    var schoolList = [];
    var coursesList = [];

    education.schools.forEach(function (item, index) {
      var formattedName = HTMLschoolName.replace('%data%', education.schools[index].name);
      var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[index].location);
      var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[index].degree);
      var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[index].majors);
      var formattedDates = HTMLschoolDates.replace('%data%', education.schools[index].dates);
      schoolList.push(formattedName, formattedLocation, formattedDegree, formattedMajors, formattedDates);
    })
    $('#education').append(HTMLschoolStart);
    $('.education-entry').append(schoolList);

    education.onlineCourses.forEach(function (item, index) {
      var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[index].title);
      var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[index].school);
      var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[index].dates);
      var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[index].url);
      coursesList.push(formattedTitle, formattedSchool, formattedDates, formattedURL);
    })
    $('.education-entry').append(HTMLonlineClasses);
    $('.education-entry').append(coursesList);
  }
}

var displayMap = function () {
  $('#mapDiv').append(googleMap);
}

/*
-SECTION 2- This section calls the display functions on the individual resume objects
*/
bio.display();
work.display();
projects.display();
education.display();
displayMap();
