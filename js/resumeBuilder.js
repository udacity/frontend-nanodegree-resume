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
      "major" : "Mechanical"
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
      "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer" : "TiBAO",
      "title" : "manwork",
      "dates" : "2015",
      "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects = {
  "projects" :[
    {
      "title" : "blog",
      "dates" : "2017.7",
      "description" : "try",
      "images" : "images/blog.jpg"
    },
    {
      "title" : "blog",
      "dates" : "2017.7",
      "description" : "try",
      "images" : "images/panda.jpg"
    }
  ]
};

var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$('#header').prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedmobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedtwitter);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedbioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMsg);

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

work.jobs.forEach(function(job){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkStart.replace("%data%",job.dates);
  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
  $(".work-entry:last").append(formattedDescription);
});

projects.projects.forEach(function(project){
  $("#projects").append(HTMLprojectStart);
  var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
  $(".project-entry:last").append(formattedProjectTitle);
  var formattedProjectDate = HTMLprojectDates.replace("%data%",project.dates);
  $(".project-entry:last").append(formattedProjectDate);
  var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
  $(".project-entry:last").append(formattedProjectDescription);
  var formattedImages = HTMLprojectImage.replace("%data%", project.images);
  $(".project-entry:last").append(formattedImages);
});


education.schools.forEach(function(school){
  $("#education").append(HTMLschoolStart);
  var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
  $(".education-entry").append(formattedSchoolName);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
  $(".education-entry").append(formattedSchoolDegree);
  var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
  $(".education-entry").append(formattedSchoolDates);
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
  $(".education-entry").append(formattedSchoolLocation);
  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
  $(".education-entry").append(formattedSchoolMajor);
});

education.onlineCourses.forEach(function(onlineCourse){
  $(".education-entry").append(HTMLonlineClasses);
  var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
  $(".education-entry").append(formattedonlineTitle);
  var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
  $(".education-entry").append(formattedonlineSchool);
  var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
  $(".education-entry").append(formattedonlineDates);
  var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
  $(".education-entry").append(formattedonlineURL);
});

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

  logClicks(x,y);// 在此处编写你的代码
});
