/*
  Bio Object
 */

var bio = {
  'name': 'Christian Miguel Acuña',
  'role': 'iOS and Front-end Web Developer',
  'contacts': {
    'mobile': '(909) 529-1451',
    'email': 'cacuna0828@gmail.com',
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
  $('#bioPic').prepend(HTMLbioPic.replace('%data%', bio.biopic));
  $('#contact-list').after(HTMLcontactlist);
  $('#contacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $('#contacts').append(HTMLemail.replace("%data%", bio.contacts.email));
  $('#contacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
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
  }, {
    "name": "Tsinghua University (Inter-University Program for Chinese Language Studies, UC Berkeley)",
    "location": "Beijing, China",
    "degree": "N/A",
    "majors": "Chinese",
    "dates": "Fall 2015",
    "url": "http://ieas.berkeley.edu/iup/"
 }, {
   "name": "Reed College",
   "location": "Portland, Oregon",
   "degree": "B.A.",
   "majors": "History",
   "dates": "2008-2014",
   "url": "www.reed.edu"
}, {
  "name": "Yonsei University",
  "location": "Wonju, Korea",
  "degree": "Critical Language Scholarship (CLS)",
  "majors": "Beginning Korean",
  "dates": "Summer 2013",
  "url": "http://www.clscholarship.org/languages/korean"
}, {
  "name": "Reed College",
  "location": "Portland, Oregon",
  "degree": "B.A.",
  "majors": "History",
  "dates": "2008-2014",
  "url": "www.reed.edu"
}, {
  "name": "National Taiwan University",
  "location": "Taipei, Taiwan",
  "degree": "Advanced Chinese",
  "majors": "Chinese",
  "dates": "2012-2013",
  "url": "http://iclp.ntu.edu.tw/"
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
    },
    {
      "title": "JET Program Assistant Language Teacher",
      "employer": "Iwade Board of Education",
      "dates": "2014-2015",
      "location": "Iwade City, Japan",
      "description": "Served as a cultural ambassador by creating engaging presentations on American and Chinese culture"
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
      "description": "iOS app using Swift and submitted it to Apple’s WWDC Student Scholarship. As a 2015-16 China Fulbright Student Fellow, my current research project combines my interests in art, technology, and Chinese culture. This iOS app is part of a larger research project that will combine the open cultural data of museums from around the world related to Chinese art into a new type of digital museum experience.",
      images: ['images/pic02.jpg'],
      link: 'https://christian-acuna.github.io/fend-design-mockup-portfolio/'
    }, {
      "title": "Portfolio Site",
      "dates": "September 2016",
      "description": "Replicate website from PDF design mockup in HTML and CSS. Develop a responsive website that displays optimived images, descriptions and links to portfolio projects.",
      images: ['images/pic02.jpg'],
      link: 'https://christian-acuna.github.io/fend-design-mockup-portfolio/'
    }, {
      "title": "Animal Trading Card",
      "dates": "September 2016",
      "description": "Re-create a webpage from a design prototype",
      images: ['images/pic02.jpg'],
      link: 'https://github.com/christian-acuna/fend-animal-trading-cards'
    }, {
      "title": "Mockup to Article",
      "dates": "September 2016",
      "description": "Convert a mockup of a blog article into a real website",
      images: ['images/pic02.jpg'],
      link: 'https://github.com/christian-acuna/frontend-mockup-to-article'
    }, {
      "title": "Classic Arcade Game Clone",
      "dates": "September 2016",
      "description": "Use JavaScript object-oriented programming features to implement a classic arcade game.",
      images: ['images/pic02.jpg'],
      link: '#'
    }, {
      "title": "Website Optimization",
      "dates": "September 2016",
      "description": "Optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
      images: ['images/pic02.jpg'],
      link: '#'
    }, {
      "title": "Neighborhood Map",
      "dates": "September 2016",
      "description": "Develop a single-page application featuring a map of a neighborhood you would like to visit. Add additional functionality to this application, including: map markers to identify popular locations, a search function to easily discover these locations, and a listview to support simple browsing of all locations. Research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
      images: ['images/pic02.jpg'],
      link: '#'
    }, {
      "title": "Feed Reader Testing",
      "dates": "September 2016",
      "description": "In this project, you will be learning about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as 'test-driven development' or TDD. This is when developers write tests first, before they ever start developing their application.",
      images: ['images/pic02.jpg'],
      link: '#'
    }
  ]
};

project.display = function() {
  var projectsArray = this.projects;
  for (var project in projectsArray) {
    if (projectsArray.hasOwnProperty(project)) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", projectsArray[project].title);
      // var formattedDates = HTMLprojectDates.replace("%data%",projectsArray[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%",projectsArray[project].description);
      var formattedImage = HTMLprojectImage.replace("%data%", projectsArray[project].images[0]);
      var formattedLink = HTMLprojectLink.replace("%data%", projectsArray[project].link);
      $('#projects').append(HTMLprojectStart);
      $('.spotlight:last').append(formattedImage);
      $('.spotlight:last').append(HTMLprojectContent);
      $('.content:last').append(formattedTitle);
      // $('.project-entry:last').append(formattedDates);
      $('.content:last').append(formattedDescription);
      $('.content:last').append(formattedLink);
    }
  }
};

project.display();

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
