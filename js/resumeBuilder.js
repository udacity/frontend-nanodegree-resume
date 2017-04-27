/*
This is empty on purpose! Your code to build the resume will go here.
 */


var formattedName = HTMLheaderName.replace("%data%","Satoe Yokoyama");
var formattedRole = HTMLheaderRole.replace("%data%","Aspiring Data Scientist");

$("#header").append(formattedName);
$("#header").append(formattedRole);
var  skills = ["Laugh","Arts","Programming","Tango"];
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
      "description" : "We provided a solution to reduce the stigma on STEM education among middle schoolers by creating a website to explore the field related to their interests.",
      "images":{}
    },
     {
       "title":"Social Media Use and Depression",
       "date" : "Mar 2017 ~ May 2017",
       "description" : "A survey was conducted to know the impact of social media use on individual's mental health. This project was started in PSYCH 101 at UC Berkeley as an individual project for the class.",
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
  $("#header").append(HTMLskillsStart);
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
