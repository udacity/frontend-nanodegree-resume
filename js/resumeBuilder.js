
var bio={
  name:"Xin Wang",
  role:"Web Developer",
  contacts:
  { mobile:"571-214-5200",
    email:"wx1031@gmail.com",
    github:"https://github.com/wxnono",
    location:"Ashburn,VA"
  },
  welcomeMessage:"Thanks",
  skills:["HTML","CSS","JavaScript","JQuery","ASP.NET","Sql Server"],
  biopic:"images/The_Simpsons.jpg"

};

bio.display=function(){
  var formattedName=HTMLheaderName.replace("%data%",bio.name);
  var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
  var pic=HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").prepend(formattedName);
  $(formattedRole).insertAfter($("#name"));
  $.each(bio.contacts,function(key,value){
    var formattedcontact=HTMLcontactGeneric.replace("%contact%",key).replace("%data%",value);
   $("#topContacts").append(formattedcontact);
  });
  bio.skills.forEach(generateSkills);
  $(pic).insertAfter($("#topContacts"));
};

var education={
  schools:[
    {name:"George Washington University",
     startdate:"2010",
     location:"Washington D.C",
     degree:"Master of Science",
     majors:["Electrical Engineering"],
     dates:"2010-2012",
     url:"https://www.gwu.edu/"
  },
    {name:"NANJING UNIVERSITY OF AERONAUTICS AND ASTRONAUTICS",
     startdate:"2005",
     location:"Nanjing,China",
     degree:"Bachelor of Science",
     majors:["Electrical Engineering"],
     dates:"2005-2009",
     url:"http://iao.nuaa.edu.cn/"
  }],
  onlineCourses:[
    {title:"Frontend Web Development",
     school:"Udacity",
     dates:"Current",
     url:"https://udacity.com"}
  ]

};

education.display=function(){
  education.schools.forEach(generateSchools);
};

var work={
  jobs:[
    {employer:"Welocalize",
     title:"Software Developer",
     location:"Frederick,MD",
     dates:"In Progress",
     description:"Service Desk, Deployment, QA"
   },
    {employer:"ABeyon",
     title:"Software Developer",
     location:"Fairfax,VA",
     dates:"2012-2013",
     description:"ASP.NET, SharePoint"
  }]
};

work.display=function(){
work.jobs.forEach(generateWorkExperience);
};

var projects={
  projects:[  {title:"Sample1",
   dates:"2010-2013",
   description:"Some of this,Some of that",
   images:"images/image1.jpg"
    },
  {title:"Sample2",
   dates:"2011-2014",
   description:"Awesome1,Awesome2",
   images:"images/image2.jpg"
}]};

projects.display=function(){
  projects.projects.forEach(generateProjects);
}

function generateSkills(skill){
 var formattedskills=HTMLskills.replace("%data%",skill);
$(formattedskills).insertAfter($("#topContacts"));

};


function generateSchools(school){
 var schoolname= HTMLschoolName.replace("%data%",school.name);
 var location=HTMLschoolLocation.replace("%data%",school.location);
 var schooldates=HTMLschoolDates.replace("%data%",school.dates);
 var deg=HTMLschoolDegree.replace("%data%",school.degree);
 var item=school;
 var result=""
 item.majors.forEach(function(element){
return result+=element;
 })
 var maj=HTMLschoolMajor.replace("%data%",result);

 $("#education").append(HTMLschoolStart).append(schoolname).append(location).append(schooldates).append(deg).append(maj);
};


function generateWorkExperience(job){
 var employername= HTMLworkEmployer.replace("%data%",job.title);
 var location=HTMLworkLocation.replace("%data%",job.location);
 var workdates=HTMLworkDates.replace("%data%",job.dates);
 var description=HTMLworkDescription.replace("%data%",job.description);
 $("#workExperience").append(HTMLworkStart).append(employername).append(location).append(workdates).append(description);
};

function generateProjects(project){
 var projectname= HTMLprojectTitle.replace("%data%",project.title);
 var projectdates=HTMLprojectDates.replace("%data%",project.dates);
 var description=HTMLworkDescription.replace("%data%",project.description);
 var projectimage=HTMLprojectImage.replace("%data%",project.images);
 //var
 $("#projects").append(HTMLprojectStart).append(projectname).append(projectdates).append(description).append(projectimage);
};

bio.display();
education.display();
work.display();
projects.display();
