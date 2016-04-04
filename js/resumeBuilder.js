/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%",'Ash Win');
var formattedRole = HTMLheaderRole.replace("%data%",'Front End Wizard');

var bio = {

	"Name": "Ash Win",
	"role": "Developer",
	"picture": "https://unsplash.it/70/70",
	"welcomeMessage": "Welcome to my Bio!",
	"skills": ["Java", "HTML/CSS", "Javascript", "Git", "Github"],

	"contacts": {
		"mobile": 4087846764,
		"email": "ashwin.raju@live.com",
		"github": "winascript",
		"twitter": "@malcolmManhanttan",
		"location": "Denver, Colorado"
	}
}

var work = {
	
	"jobs":
	[{
	"title": "Test Engineer",
    "employer": "Time Warner Cable",
    "dates": "November 2013 - present",
    "location": "Denver",
	"description": "Currently working as an automation/Manual tester in an agile environment."
	}]
	
}

var projects = {

	"project": [{
		"title": "portfolio",
		"dates": "Jan 20th - Jan 30th",
		"description": "A sample portfolio to show off my HTML/CSS skills.",
		"images": "https://unsplash.it/200/300"
	}],

	display:function(){

  for(_ in projects.project){
    $("#projects").append(HTMLprojectStart);
     
     var projectTitle = HTMLprojectTitle.replace("%data%",projects.project[_].title );
     $(".project-entry:last").append(projectTitle);

     var projectDates = HTMLprojectDates.replace("%data%",projects.project[_].dates );
     $(".project-entry:last").append(projectDates); 

     var projectDescription = HTMLprojectDescription.replace("%data%",projects.project[_].description );
     $(".project-entry:last").append(projectDescription);

     var projectImage = HTMLprojectImage.replace("%data%",projects.project[_].images);
     $(".project-entry:last").append(projectImage);
   }

}

} 

var education = {

	"schools": [{
        "name": "NCSU",
		"location": "Raleigh",
		"degree": "M.S",
		"major": "ISE",
		"dates": "August 2011 - May 2013",
		"URL": "https://www.udacity.com/me#!/"
	}, {
		"name": "Anna Univ",
		"location": "Chennai",
		"degree": "B.E",
		"major": "EEE",
		"dates": "Sept 2006 - May 2010",
		"URL": "https://www.udacity.com/me#!/"
	}],

	"onlineCourses": [{
		"title": "Oracle Certified Associate",
		"school": "Oracle University",
		"dates": "October 2015",
		"url": "https://www.youracclaim.com/badges/197c9b6f-5bb9-4c64-8e3d-cf034938f462"
	}, {
		"title": "Certified Tester Foundation level",
		"school": "ASTQB",
		"dates": "October 2015",
		"url": "http://www.astqb.org/"
	}],

	display:function(){

       $("#education").append(HTMLschoolStart);
		for( _ in education.schools){          
             var schoolName = HTMLschoolName.replace("%data%",education.schools[_].name);
             var schoolDegree = HTMLschoolDegree.replace("%data%",education.schools[_].degree);
             var schoolNameDegree = schoolName + schoolDegree;            
             $(".education-entry:last").append(schoolNameDegree);

             var schoolDates = HTMLschoolDates.replace("%data%",education.schools[_].dates);
             $(".education-entry:last").append(schoolDates);
             
             var schoolLocation = HTMLschoolLocation.replace("%data%",education.schools[_].location);
             $(".education-entry:last").append(schoolLocation);

             var schoolMajor = HTMLschoolMajor.replace("%data%",education.schools[_].major);
             $(".education-entry:last").append(schoolMajor);
		}
      
         $("#education").append(HTMLonlineClasses);  
         for( _ in education.onlineCourses){
             

             var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[_].title);
             var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[_].school);
             var onlineTitleSchool = onlineTitle + onlineSchool;
             $(".online-entry:last").append(onlineTitleSchool);

             var onlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[_].dates);
             $(".online-entry:last").append(onlineDates);

             var onlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[_].url);
             $(".online-entry:last").append(onlineURL);
        } 
       

	}
}


if(bio.skills.length > 0) {
	
	var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#header").append(mobile);

	var email = HTMLemail.replace("%data%",bio.contacts.email);
	$("#header").append(email);

    var github = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#header").append(github);
	
	var bioPic = HTMLbioPic.replace("%data%",bio.picture);
    $("#header").append(bioPic);

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


displayWork();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

function displayWork(){
for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
   }
}



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(name){

     
    console.log(name);
     name = name.trim().split(" ");

     name[1].toUpperCase();
     name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
     
     return name[0]+name[1];
}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
