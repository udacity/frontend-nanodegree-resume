//var name = 'J Change';
//var formattedName = HTMLheaderName.replace('%data%', name);

//var role = 'Web Developer';
//var formattedRole = HTMLheaderRole.replace('%data%', role);

//$('#header').prepend(formattedRole);
//$('#header').prepend(formattedName);

var bio = {
  "name" : "J Change",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "666-888-9999",
    "email" : "s11709@foxmail.com",
    "github" : "@0711709",
    "twitter" : "no",
    "location" : "China"
  },
  "welcomeMessage" : "welcome",
  "skills" : ["html", "css", "js", "other"],
  "biopic" : "images/fry.jpg"
};

var education = {
  "schools" : [
    {
      "name" : "Northeastern University",
      "location" : "shenyang, China",
      "degree" : "bachelor",
      "dates" : "2011-2015",
      "majors" : ["Mechanical", "2"],
      "url" : "http://www.neu.edu.cn/"
    }
  ],
  "onlineCourses" : [
    {
    "title" : "Front-End Web Development ",
    "school" : "Udacity",
    "dates" : "2017",
    "url" : "https://cn.udacity.com/"
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "BaoTi",
      "title" : "workman",
      "dates" : "2015",
      "location" : "shanxi",
      "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer" : "TiBAO",
      "title" : "manwork",
      "dates" : "2015",
      "location" : "shanxi",
      "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects = {
  "projects" :[
    {
      "title" : "blog",
      "dates" : "2017.7",
      "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
      "images" : ["images/blog.jpg", "images/panda.jpg"]
    },
    {
      "title" : "blog",
      "dates" : "2017.7",
      "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
      "images" : ["images/panda.jpg", "images/blog.jpg"]
    }
  ]
};

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName, formattedRole);
  var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedmobile, formattedemail, formattedgithub, formattedtwitter, formattedlocation);
  $("#footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedtwitter, formattedlocation);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedbioPic, formattedwelcomeMsg);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
  };
}
bio.display();

work.display = function(){
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkStart.replace("%data%",job.dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location)
    var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedWorkLocation, formattedDescription);
  });
}
work.display();

projects.display = function(){
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedProjectDate = HTMLprojectDates.replace("%data%",project.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedProjectTitle, formattedProjectDate, formattedProjectDescription);
    project.images.forEach(function(image){
      var formattedImages = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedImages)
    });
  });
}
projects.display();

education.display = function(){
  education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation);
    school.majors.forEach(function(major){
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry:last").append(formattedSchoolMajor);
    });
  });

  education.onlineCourses.forEach(function(onlineCourse){
    $(".education-entry").append(HTMLonlineClasses);
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
    $(".education-entry").append(formattedonlineTitle, formattedonlineSchool, formattedonlineDates, formattedonlineURL);
  });
}
education.display();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
