/*
 *
 * HEADER
 *
 */

// Add 'name' and 'role' information
var formattedName = HTMLheaderName.replace("%data%","Amanda Barros de Araujo");
var formattedRole = HTMLheaderRole.replace("%data%","Front-end Web Developer");

// Append 'name' and 'role' information to the header
$("#header").prepend(
  formattedName,
  formattedRole
);

// Internationalize the name at the top
function inName(str) {
  // Transform " Name Last Name " into ["Name", "Last", "Name"]
  var name = str.trim().split(" ");
  // Internationalize FIRST NAME
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  // Internationalize LAST NAME
  for (i=1; i<name.length; i++) {
    name[i] = name[i].toUpperCase();
  }
  return name.join(" ");
}
// $("#main").prepend(internationalizeButton);

// Declare and define 'bio' object
var bio = {
  name: "Amanda de Araujo",
  role: "Front-end Web Developer",
  contacts: {
    mobile: "+55 21 969349545",
    email: "contato@cafeamanda.com.br",
    github: "cafeamanda",
    twitter: "@amandujo",
    location: "Rio"
  },
  biopic: "images/me.png",
  welcomeMessage: "Welcome to my resumé!",
  skills: ["programming", "design", "drawing","content creation", "versatility"],
  display: function() {

    // Add picture and message information
    var bioPicture = HTMLbioPic.replace("%data%",bio.biopic);
    var bioMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    // Append biopic and welcomeMessage to the header
    $("#header").append(
      bioPicture,
      bioMessage
    );

    if (bio.skills.length > 0) {

      // Append 'skills' section to the header
      $("#header").append(HTMLskillsStart);

      // Append each skill in bio.skills to the 'skills' section
      var bioSkill, bioSkillsList;
      for (i=0; i < bio.skills.length; i++) {
        bioSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(bioSkill);
      };
    }

    // Add contact information
    var contactMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var contactEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var contactTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var contactGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var contactLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    // Append 'bio' contact information to HEADER and FOOTER
    $("#topContacts, #footerContacts").append(
      contactMobile,
      contactEmail,
      contactGithub,
      contactTwitter,
      contactLocation
    );
  }
};

bio.display();

/*
 *
 * CONTENT
 *
*/

// Declare and define 'work' object
var work = {
  jobs: [
    {
      "employer": "Retec Jr",
      "title": "Director of Marketing",
      "location": "Fortaleza, Brazil",
      "dates": "2015-2016",
      "description": "Junior consulting & educational company managed by students of engineering @ Universidade Federal do Ceará."
    },
    {
      "employer": "cafeamanda.com.br",
      "title": "Freelancer",
      "location": "Rio de Janeiro, Brazil",
      "dates": "2016-present",
      "description": "Working as a freelance web designer, building websites for smaller companies in HTML5, CSS3 & JS, using popular frameworks like Bootstrap, jQuery and AngularJS. For more information, check out my portfolio on portfolio.cafeamanda.com.br."
    }
  ],
  display: function () {

    for (i=0; i<work.jobs.length; i++) {

      // Append 'work' section
      $("#workExperience").append(HTMLworkStart);

      // Add 'work' information
      var workEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
      var workTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
      var workDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
      var workLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
      var workDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

      // Append 'work' information to the 'work' section
      $(".work-entry:last").append(
        workEmployer + workTitle,
        workDates,
        workLocation,
        workDescription
      );
    }
  }
}

work.display();

// Declare and define 'projects' object
var projects= {
  projects: [
    {
      "title": "First Project",
      "dates": "2016",
      "description": "First Website Project Ever",
      "images": ["images/197x148.gif","images/197x148.gif"]
    }
  ],
  display: function() {
    for (i=0; i<projects.projects.length; i++) {
      // Append 'projects' section
      $("#projects").append(HTMLprojectStart);

      // Add 'project' information
      var projectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
      var projectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
      var projectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

      // Append 'project' information to the 'project' section
      $(".project-entry:last").append(
        projectTitle,
        projectDates,
        projectDescription
      );

      // Add 'project' images
      for (j=0; j<projects.projects[i].images.length; j++) {
        var projectImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
        $(".project-entry:last").append(projectImage);
      }
    }
  }
}

projects.display();

// Declare and define 'education' object
var education = {
  "schools": [
    {
      "name": "University of Ontario Institute of Technology",
      "location": "Oshawa, Canada",
      "degree": "B.Eng. (exchange studies)",
      "major": ["Mechanical Engineering"],
      "dates": "2014",
      "url": "https://uoit.ca"
    },
    {
      "name": "Universidade Federal do Ceará",
      "location": "Fortaleza, Brazil",
      "degree": "B.Eng. (incomplete)",
      "major": ["Renewable Energies Engineering"],
      "dates": "2011-2016",
      "url": "http://ufc.br"
    }
  ],
  "onlineCourses": [
    {
      "title": "HTML, CSS and JavaScript",
      "school": "The Hong Kong University of Science and Technology",
      "dates": "2015",
      "url": ""
    },
    {
      "title": "Front-End Web UI Frameworks and Tools",
      "school": "The Hong Kong University of Science and Technology",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "Front-End JavaScript Frameworks: AngularJS",
      "school": "The Hong Kong University of Science and Technology",
      "dates": "2016",
      "url": ""
    },
    {
      "title": "Web Foundations",
      "school": "Udacity",
      "dates": "2017",
      "url": ""
    },
    {
      "title": "Responsive Websites",
      "school": "Udacity",
      "dates": "2017",
      "url": ""
    },
    {
      "title": "JavaScript Foundations",
      "school": "Udacity",
      "dates": "2017",
      "url": ""
    },
    {
      "title": "Intermediate JavaScript",
      "school": "Udacity",
      "dates": "2017 - present",
      "url": ""
    },
    {
      "title": "Advanced Interactive Websites",
      "school": "Udacity",
      "dates": "2017 - present",
      "url": ""
    },
    {
      "title": "Multiplatform Mobile App Development with Web Technologies: Ionic",
      "school": "The Hong Kong University of Science and Technology",
      "dates": "2017 - present",
      "url": ""
    }
  ],
  display: function() {
    for (i=0; i<education.schools.length; i++) {

      // Append 'education' section
      $("#education").append(HTMLschoolStart);

      // Add 'schools' information
      var schoolName = HTMLschoolName.replace("%data%",education.schools[i].name).replace("#",education.schools[i].url);
      var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
      var schoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
      var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
      var schoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);

      // Append schools information to the education section
      $(".education-entry:last").append(
        schoolName + schoolDegree,
        schoolDates,
        schoolLocation,
        schoolMajor
      );
    };

    // Append 'education' and 'online classes' sections
    $("#education").append(
      HTMLschoolStart,
      HTMLonlineClasses
    );

    for (j = education.onlineCourses.length - 1; j >= 0; j--) {

      // Append 'education' section
      $("#education").append(HTMLschoolStart);

      // Add 'online classes' information
      var onlineCourseTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
      var onlineCourseSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
      var onlineCourseDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
      var onlineCourseURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);

      // Append 'online classes' information to the 'education' section
      $(".education-entry:last").append(
        onlineCourseTitle + onlineCourseSchool,
        onlineCourseDates,
        onlineCourseURL
      );
    }
  }
}

education.display();

$("#mapDiv").append(googleMap);
