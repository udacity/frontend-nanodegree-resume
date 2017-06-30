/*
This is empty on purpose! Your code to build the resume will go here.
 */


var formattedName = HTMLheaderName.replace("%data%","Satoe Yokoyama");
var formattedRole = HTMLheaderRole.replace("%data%","Aspiring Data Scientist");

$("#myInfo").append(formattedName);
$("#myInfo").append(formattedRole);
var  skills = ["JavaScript","HTML","R","Python"];
var bio = {
  "name": "Satoe Yokoyama",
  "age" : 21,
  "Occupation" : "student",
  "skills" : skills,
  "contacts":{
    "role" : "Fron-end Developer",
    "mobile" : "2064322402",
    "email" : "satoe.yokoyama@gmail.com",
    "github" : "ysbmk",
    "twitter" : "sy_naruto",
    "location" : "San Francisco"
  },
  "welcomeMessage" : "Thank you for visiting my page!",
  "bioPic" : "images/profile"
};

var work = {
  "jobs": [
    {
      "position": "Coding Instructor",
      "employer" : "Samurai Engineer Juku",
      "duration" : "May 2017 ~ ",
      "city" :"Online Tutoring",
      "description" : "One-on-one online coding lessons for Japanese with personalized materials depending on their goals.",
    },
    {
      "position": "Student Outreach Team Lead",
      "employer" : "Data Science Education Program @ UC Berkeley",
      "duration" : "Jan 2017 ~ ",
      "city" :"Berkeley, CA",
      "description" : "Product Management for the Student Outreach Team of the Data Science Education Program. ",
    },
    {
      "position": "Digital Marketing Intern",
      "employer" : "PAKT Limited",
      "duration" : "May 2016 ~ Aug 2016",
      "city" :"Hong Kong",
      "description" : "Analized its marketing strategies and suggested more. I also helped with the web design and contents creation."

    }

  ]
};

var projects = {
  "project" : [
    {
      "title":"The All Women Hackathon San Francisco",
      "date" : "Mar 18 2017",
      "description" : "Provided a solution to reduce the stigma on STEM education among middle schoolers by creating a website to explore the field related to their interests.",
      "images":{}
    },
     {
       "title":"Social Media Use and Depression",
       "date" : "Mar 2017 ~ May 2017",
       "description" : "A survey was conducted to know the impact of social media use on individual's mental health. This project was started in PSYCH 101 at UC Berkeley as an individual project for the class.",
       "images":{}
     },
      {
        "title":"Data Science for India Curricurum Design Team",
        "date" : "May 2017 ~ ",
        "description" : "Student-lead project started from University of California Berkeley to make data science education accessible to highschool and college students.",
        "images":{}
       }
  ]
};
var education = {
  "schools": [
    {
      "name" : "University of California Berkeley",
      "city" : "Berkeley, CA",
      "degree" : "BA",
      "major" : "Applied Mathematics",
      "Year" : "2015 ~ 2017",
      "graduate" : "Dec 2017",
    },
     {
       "name" : "University of Hong Kong",
       "city" : "Hong Kong",
       "degree" : "Summer School",
       "major" : "N/A",
       "Year" : "May, 2016 ~ Aug 2016",
       "graduate" : "N/A",
     },
      {
        "name" : "UDACITY",
        "city" : "Online",
        "degree" : "Front-end Developer Nanodegree",
        "major" : "Front-end",
        "Year" : "2017",
        "graduate" : "2017",
      },
      {
        "name" : "Green River College",
        "city" : "Auburn, WA",
        "degree" : "High School Certificate",
        "major" : "General Education",
        "Year" : "2013~2015",
        "graduate" : "N/A",
       }
  ]
};

$("#main").append(work["position"]);
$("#education").append(education["name"]);

if (bio.skills.length >0) {
  $("#myInfo").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);
}

function displayWork(){
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[job].city);
    $(".work-entry:last").append(formattedlocation);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].duration);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $ (".work-entry:last").append(formattedDescription);
  }}

displayWork();

for (school in education.schools){
  $("#education").append(HTMLschoolStart);
  var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
  var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
  $(".education-entry:last").append(formattedschoolName);
  var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].Year);
  $(".education-entry:last").append(formattedschoolDates);
  var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
  $(".education-entry:last").append(formattedschoolLocation);
  var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
  $(".education-entry:last").append(formattedschoolMajor);
};

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  locClicks(x,y);
})

function locationizer(work_obj) {
  var locationArray =[];
  for (job in work_obj.jobs){
    var newlocation = work_obj.jobs[job].location;
    locationArray.push(newlocation);
  }
  return locationArray;
 }

$("#main").append(locationizer(work));

function inaName(name){
  name = name.trim().split("");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0]= name[0].sloce(0,1).toUpperCase()
          + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

for (item in projects.project) {
  $("#projects").append(HTMLprojectStart);

  var formattedPTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
  $(".project-entry:last").append(formattedPTitle);
  var formattedPDate = HTMLprojectDates.replace("%data%", projects.project[item].date);
  $(".project-entry:last").append(formattedPDate);
  var formattedPDesc = HTMLprojectDescription.replace("%data%",projects.project[item].description);
  $(".project-entry:last").append(formattedPDesc);};

/*  if (projects.project[item].images.length >0){
    for (img in projects.project[item].images){
      var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[img]);
      $(".project-entry:last").append(formattedImage);
    }
  }*/
