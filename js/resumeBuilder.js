/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
  "name" : "Pedro Souza",
  "role" : "Full Stack Web Developer",
  "contacts" : {
    "mobile" : 917 794 3994,
    "email" : "posouza@gmail.com",
    "github" : "github.com/posouza",
    "location" : "Astoria, NY"
  },
  "welcomeMessage" : "Welcome PS Ful Stack Web Developement!",
  "skills" : [
    "Ruby on Rails", "Node.Js", "Javascript", "React.Js"
  ],
  "biopic" : "images/fry.jpg",
  "display": function(){
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
    var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGit + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGit + formattedLocation);
    $("#header").append(formattedBiopic + formattedWelcome);

    if (this.skills.length > 0){
      $("#header").append(HTMLskillsStart);
      for (var skill in this.skills){
        if (this.skills.hasOwnProperty(skill)) {
          var formattedSkills= HTMLskills.replace("%data%", this.skills[skill]);
          $("#skills").append(formattedSkills);
        }
      }
    }
    $("#mapDiv").append(googleMap);
  }
};

var education = {
  "schools" : [
    {
      "name" : "Western Governors University",
      "location": "Salt Lake City,UT USA",
      "degree" : "B.S. Software Development",
      "majors" : ["Software Development"],
      "dates": "2017-Present",
      "url": "Wgu.com"
    },
    {
      "name" : "Le Wagon",
      "location" : "São Paulo, Brazil",
      "degree" : "Full Stack Ruby on Rails Developer",
      "majors" : ["Ruby on Rails"],
      "dates" : "2017",
      "url": "lewagon.com"
    },
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2017-Present",
      "url" : "www.udacity.com"
    }
  ],
  "display": function(){
    var formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor, formattedUrl;
    for (var school in this.schools){
      if (this.schools.hasOwnProperty(school)) {
        $("#education").append(HTMLschoolStart);
        formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
        formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
        formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
        formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
        formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
      }
    }
    $("#education").append(HTMLonlineClasses);
    for (var course in this.onlineCourses){
      if (this.onlineCourses.hasOwnProperty(course)) {
        $("#education").append(HTMLschoolStart);
        formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
        formattedName = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
        formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
        formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
        $(".education-entry:last").append(formattedTitle + formattedName + formattedDates + formattedUrl);
      }
    }
  }
};


var work = {
  "jobs" : [{
    "employer": "Equinix Data Centers",
    "title": "Linux System Admin",
    "location": "Rio de Janeiro, RJ",
    "dates": "2014-2016",
    "description": "Setup, manage, and maintain various Linux based IT servers (hardware, operating systems), Virtual servers, Storage sub-systems, Monitoring and Backup Infrastructure. Support issues like network TCP/IP, Internet application, Firewall, LoadBalance, WebProxy and network security."
  },{
    "employer": "012 Global Inc",
    "title": "Network Support Engineer",
    "location": "Boca Raton FL, USA",
    "dates": "2010-2013",
    "description": "Responsible for support of SIP, RTP, UDP and TCP/IP protocols using Linux and Wireshark. Troubleshoot and isolate network issues and coordinate problem resolution. Responsible to install,configure and troubleshoot network, hardware and software issues for in house team members. "
  },{
    "employer": "Citigroup",
    "title": "Client Support Services",
    "location": "Tampa FL, USA",
    "dates": "2007-2010",
    "description": "Responsible for the daily processing and support of Brazilian and Mexican/Latam Settlements for Citigroup global client base. Provided software and front end support to all Citi’s global client base."
    },{
      "employer": "Dendrite International",
      "title": "Network Technical Support",
      "location": "Bedminster NJ, USA",
      "dates": "2003-2006",
      "description": "Provided effective and consistent technical phone support for Pharmaceutical Companies like,Pfizer, Bristol-Myers Squibb, Fujisawa and others. Responsible for site setup activities to first time users including connectivity, hardware and software."
  }],
  "display": function(){
    var formattedWorkEmployer, formattedWorkTitle, formattedWorkDates, formattedWorkDescription;
    for (var job in this.jobs){
      if (this.jobs.hasOwnProperty(job)) {
        $("#workExperience").append(HTMLworkStart);
        formattedWorkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
        formattedWorkTitle =  HTMLworkTitle.replace("%data%", this.jobs[job].title);
        formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
        formattedWorkDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkDescription);
      }
    }
  }
};

var projects = {
  "projects": [{
    "title": "Advalori",
    "dates": "2017",
    "description": "Built a finance platform for SMEs to pre-finance their open invoices in 10 days: www.advalori.com",
    "images": [
      "images/fry.jpg"
    ]
  }],
  "display": function(){
    for(var project in this.projects){
      if (this.projects.hasOwnProperty(project)) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
        var formattedImage = "";
        if (this.projects[project].images.length > 0){
          for(var image in this.projects[project].images){
            if (this.projects[project].images.hasOwnProperty(image)) {
              formattedImage = formattedImage + HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
            }
          }
        }
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
      }
    }
  }
};

display([bio, projects, work, education]);

function display(elements){
  if (elements.length > 0){
    for (var element = 0; element < elements.length; element++){
      elements[element].display();
    }
  }
}

// $("#main").append(internationalizeButton);

// function inName(name){
//   var names = name.trim().split(" ");
//   var firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
//   var lastName = names[1].toUpperCase();

//   return firstName + " " + lastName;
// }
