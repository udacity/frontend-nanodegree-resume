var bio = {
  name : "Dylan Craig",
  role : "Developer",
  contacts : {
    mobile : "571-527-9980",
    email : "dylan.m.craig21@gmail.com",
    github: "dylanmc21",
    twitter : "@dylancraig10",
    location : "South Riding"
  },
  welcomeMessage : "Welcome to my Resume!",
  skills : ["Awesomeness", "Android", "iOS", "Front End Web"],
  biopic : "images/fry.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub= HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMsg);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      }
    }
  }
};

var education = {
  schools: [
    {
      name: "Freedom High School",
      location: "South Riding",
      degree: "Advanced Diploma",
      majors: ["Computer Science"],
      dates: "September 2011 - June 2015",
      url: "https://www.lcps.org/fhs"
   }
 ],
 onlineCourses: [
   {
      title: "Front End Web Development Nanodegree",
      school: "Udacity",
      dates: "Feburary 2017 - Current",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   }
 ],
  display: function() {
    education.schools.forEach(function(element) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", element.name);
      $(".education-entry:last").append(formattedName);

      var formattedDegree = HTMLschoolDegree.replace("%data%", element.degree);
      $(".education-entry:last").append(formattedDegree);

      var formattedDates = HTMLschoolDates.replace("%data%", element.dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", element.location);
      $(".education-entry:last").append(formattedLocation);

      element.majors.forEach(function(major) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedMajor);
      });
    });

    $(".education-entry:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(element) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", element.title);
      $(".education-entry:last").append(formattedTitle);

      var formattedDates = HTMLonlineDates.replace("%data%", element.dates);
      $(".education-entry:last").append(formattedDates);

      var formattedUrl = HTMLonlineURL.replace("%data%", element.url);
      $(".education-entry:last").append(formattedUrl);

      var formattedSchool = HTMLonlineSchool.replace("%data%", element.school);
      $(".education-entry:last").append(formattedSchool);
    });
  }
};

var work = {
  jobs: [
    {
      employer: "DMOB",
      title: "Mobile Developer",
      location: "Chantilly",
      dates: "September 2015 - Current",
      description: "Building iOS and Android apps for different products."
    },
    {
      employer: "Udacity",
      title: "Course Developer",
      location: "Mountain View, CA",
      dates: "Feb 2014 - September 2015",
      description: "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      employer: "LearnBIG",
      title: "Software Engineer",
      location: "Seattle, WA",
      dates: "May 2013 - Jan 2014",
      description: "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      employer: "LEAD Academy Charter High School",
      title: "Science Teacher",
      location: "Nashville, TN",
      dates: "Jul 2012 - May 2013",
      description: "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ],
  display: function() {
    work.jobs.forEach(function(element, index, array) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", element.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", element.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedLocation = HTMLworkLocation.replace("%data%", element.location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDates = HTMLworkDates.replace("%data%", element.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", element.description);
      $(".work-entry:last").append(formattedDescription);
    });
  }
};

var projects = {
  projects: [
    {
      title: "Udacity Project",
      dates: "March 2017 - Current",
      description: "This project.",
      images: ["images/fry.jpg"]
    }
  ],
  display: function() {
    projects.projects.forEach(function(element) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", element.title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", element.dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", element.description);
      $(".project-entry:last").append(formattedDescription);

      if (element.images.length > 0) {
        element.images.forEach(function(innerElement) {
          var formattedImage = HTMLprojectImage.replace("%data%", innerElement);
          $(".project-entry:last").append(formattedImage);
        });
      }
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

// function locationizer(work_obj) {
//   var locationArray = [];
//   work_obj.jobs.forEach(function(element) {
//     locationArray.push(element.location);
//   });
//   return locationArray;
// }
