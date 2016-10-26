
var bio = {
"name" : "Darko Antic",
"role" : "Web Developer",
"contacts" : {
  "mobile" : "+43 650 750 30 35",
  "email" : "antic.darko@gmail.com",
  "github"  : "dragidare",
  "twitter" : "@dragidare",
  "location" : "Vienna, Austria"
},

"welcomeMessage" : "Work hard dream big",
"skills" : ["JS", "HTML5", "CSS3" ],
"biopic" : "images/darko.jpg"

};

  var work = {
      "jobs": [
          {
              "employer" : "MAKITA Werkzeug Ges.m.b.H",
              "title" : "Web developer / Data analyst",
              "location" : "Vienna, Austria",
              "dates" : "Since 04/2015",
              "description" : "Implementation of IT strategy and consolidation within the whole group.Project management of global ERP implementation and process optimization.Responsible for the development of future solutions for Makita Austria. Continuous improvement and optimization of existing applications. Implementation of individual solutions, in close cooperation with the managers, the finance department and the global IT team in Japan. Reporting, system administration, and user support"
          },
          {
              "employer" : "MAKITA Werkzeug Ges.m.b.H",
              "title" : "Software / Web developer",
              "location" : "Vienna, Austria",
              "dates" : "04/2011 – 10/2014",
              "description" : "Support, maintenance and further development of the web portal and a responsive version of the online catalog (PHP, JavaScript) • Design and development of a platform for presentation and searching technical documentation (PHP, JavaScript) Design and development of newsletters, micro sites, Intern web and Windows applications. (PHP, JavaScript, Perl, Python, Delphi)"
          },
          {
              "employer" : "MAKITA Werkzeug Ges.m.b.H",
              "title" : "Software / Web developer",
              "location" : "Vienna, Austria",
              "dates" : "08/2010 – 04/2011",
              "description" : "Responsible for creating catalogs for 12 countries. Implementation of a number of sophisticated, international database publishing projects. implementation of a SQL-XML system and the backend optimization for the various online / web / print concepts. Self-development of some web design with focus on UI / UX, CMS development for a multi-lingual web platform. (PHP, MySQL, DB2, HTML, XML, SQL, InDesign)"
          },
          {
              "employer" : "Top Speed Media House",
              "title" : "Deputy Editor",
              "location" : "Belgrade, Serbia",
              "dates" : "10/2004 – 06/2008",
              "description" : "Journalist, marketing competence, automotive market analysis with editorial responsibility for the car magazine and the television show named TopSpeed (incl. Personnel responsibility)"
          }
      ]
  }
  var projects = {
      "projects" : [
          {
              "title" : "TimeGate (PHP, JS, HTML5, Jquery, AJAX)",
              "dates_worked" : "Summer 2013",
              "description" : "Endproject @SAE school, time traveling agency, selfmade CMS, fullstack",
              "images" : ["images/timegate.jpg"]
          },
          {
              "title" : "crkva.at (PHP, JS, HTML5, Wordpress)",
              "dates_worked" : "2014 -2016",
              "description" : "produkt management, front-end development, Wordpress",
              "images" : ["images/crkva.jpg"]
          },
          {
              "title" : "NUCE Webdesign (PHP, JS, HTML5, Bootstrap)",
              "dates_worked" : "2016 to now",
              "description" : "produkt management, front-end development",
              "images" : ["images/nuce.jpg"]
          }
      ]
  };

var education = {
    "schools": [
        {
            "name" : "SAE Institute Wien",
            "location": "Vienna, Austria",
            "degree": "Diploma",
            "majors" : ["Webdesign & Development"],
            "dates_attended": "10/2011 – 11/2013",
            "url": "http://www.sae.edu/"
        },
        {
            "name" : "Vienna University of Technology",
            "location": "Vienna, Austria",
            "degree": "No degree",
            "majors" : ["Mechanical engineering studies"],
            "dates_attended": "10/2009 – 11/2011",
            "url": "http://www.tuwien.edu/"
        },
        {
            "name" : "University of Belgrade",
            "location": "Belgrade, Serbia",
            "degree": "No degree",
            "majors" : ["Mechanical engineering studies"],
            "dates_attended": "07/1997 – 06/2003",
            "url": "http://www.masfak.edu/"
        }
        ],

    "onlineCourses":[
      {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "June 2016 - present",
      "url": "https://www.udacity.com/course/nd001"
  },
        {
            "title": "M101JS: MongoDB for Node.js Developers",
            "school": "MongoDB University",
            "dates_attended":"Dec 09, 2014",
            "url":"https://university.mongodb.com/courses/10gen/M101JS/2014_October/syllabus"
        },{
            "title": "Learn ReactJS by Building a Game",
            "school": "Udemy",
            "dates_attended":"Oct 10, 2015",
            "url":"https://www.udemy.com/draft/602592/learn/v4/"
        },
        {
            "title": "Learning Node.js LiveLessons",
            "school": "Udemy",
            "dates_attended":"Mar 03, 2015",
            "url":"https://www.udemy.com/draft/245036/learn/v4/"
        },
        {
            "title": "JavaScript: Understanding the Weird Parts",
            "school": "Udemy",
            "dates_attended":"Oct 28, 2015",
            "url":"https://www.udemy.com/draft/602592/learn/v4/"
        },
        {
            "title": "Learn and Understand AngularJS",
            "school": "Udemy",
            "dates_attended":"Nov 12, 2015",
            "url":"https://www.udemy.com/learn-angularjs/learn/v4/overview"
        },
        {
            "title": "Introduction to Computer Science and Programming Using Python",
            "school": "MITx",
            "dates_attended":"Feb 19, 2014",
            "url":"https://courses.edx.org/courses/MITx/6.00.1-x/1T2014/info"
        }]
};



work.display = function(){
for (job in work.jobs) {
  $('#workExperience').append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);


    $("#header").append(formattedBioPic);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates_worked);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    })

};

education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates_attended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);


        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }


};

bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);

/* first block

var formattedName =
    HTMLheaderName.replace("%data%" , bio.name);
$('#header').prepend(formattedName);

var formattedRole =
    HTMLheaderRole.replace("%data%", bio.role);
$('#header').append(formattedRole);

var formattedBioPic =
    HTMLbioPic.replace("%data%", bio.biopic);
$('#header').prepend(formattedBioPic);

var formattedEmail =
    HTMLemail.replace("%data%", bio.contacts.email);
$('#header').append(formattedEmail);

var formattedMobile =
    HTMLmobile.replace("%data%", bio.contacts.mobile);
$('#header').append(formattedMobile);

var formattedGithub =
    HTMLgithub.replace("%data%", bio.contacts.github);
$('#header').append(formattedGithub);

var formattedTwitter =
    HTMLtwitter.replace("%data%", bio.contacts.twitter);
$('#header').append(formattedTwitter);

var formattedLocation =
    HTMLlocation.replace("%data%", bio.contacts.location);
$('#header').append(formattedLocation);


var formattedMessage =
    HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$('#header').append(formattedMessage);

var formattedSkills =
    HTMLskills.replace("%data%", bio.skills);
    $('#header').append(HTMLskillsStart);
$('#header').append(formattedSkills);


var work = {};
work.position = "Web Developer";
work.employer = "Makita";
work.years = 0.3;

var education = {};
education["name"] = "SAE Wien";
education["years"] = "2011-2013";
education["city"] = "Vienna, Austria";

$("#main").append(work["position"]);
$("#main").append(education.name);



education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates_attended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);;
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};


 */
