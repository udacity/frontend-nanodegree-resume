/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name" class ="name col-md-6 col-xs-6">%data%</h1>';
var HTMLheaderRole = '<span class="purpleRole col-md-6 col-xs-12">%data%<hr></span>';

var HTMLcontactStart = '<h3 class="headerHeads contactInfo" class="col-md-12 col-xs-12">Contact Information:</h3>';
var HTMLmobile = '<li class="contactInfo col-md-6 col-xs-12"><span class="blue-text">mobile</span><span class="mintGreen-text">%data%</span></li>';
var HTMLemail = '<li class="contactInfo col-md-6 col-xs-12"><span class="blue-text">email</span><span class="mintGreen-text">%data%</span></li>';
var HTMLtwitter = '<li class="contactInfo col-md-6 col-xs-12"><span class="blue-text">twitter</span><span class="mintGreen-text">%data%</span></li>';
var HTMLgithub = '<li class="contactInfo col-md-6 col-xs-12"><span class="blue-text">github</span><span class="mintGreen-text">%data%</span></li>';
var HTMLblog = '<li class="contactInfo col-md-6 col-xs-12"><span class="blue-text">blog</span><span class="mintGreen-text">%data%</span></li>';
var HTMLlocation = '<li class="contactInfo col-md-6 col-xs-12"><span class="blue-text">location</span><span class="mintGreen-text">%data%</span></li>';

/*change footer text color*/
var HTMLcontactGenericftr = '<li class="col-md-12 col-xs-12"><span class="turquoise-text">%contact%</span><span class="mintGreen-text">%data%</span></li>';
var HTMLmobileftr = '<li class="flex-item"><span class="turquoise-text">mobile</span><span class="mintGreen-text">%data%</span></li>';
var HTMLemailftr = '<li class="flex-item"><span class="turquoise-text">email</span><span class="mintGreen-text">%data%</span></li>';
var HTMLtwitterftr = '<li class="flex-item"><span class="turquoise-text">twitter</span><span class="mintGreen-text">%data%</span></li>';
var HTMLgithubftr = '<li class="flex-item"><span class="turquoise-text">github</span><span class="mintGreen-text">%data%</span></li>';
var HTMLblogftr = '<li class="flex-item"><span class="turquoise-text">blog</span><span class="mintGreen-text">%data%</span></li>';
var HTMLlocationftr = '<li class="flex-item"><span class="turquoise-text">location</span><span class="mintGreen-text">%data%</span></li>';

var HTMLbioPic = '<div col-md-6 col-xs-6"><img src="%data%" class= "biopic"></div>';
var HTMLWelcomeMsg = '<div class="welcome-message col-md-12">%data%</div>';

var HTMLskillsStart = '<h3 class="headerHeads turquoiseH3 col-md-12 col-xs-12">Skills at a Glance:</h3><ul id="skills"></ul>';
var HTMLskills = '<li class="skills col-md-3 col-xs-12"><span class="mintGreen-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h3 class= "turquoiseH3">%data%';
var HTMLworkTitle = ' - %data%</h3>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<p class="location-text">%data%</p>';
var HTMLworkDescription = '<li class= "listElement">%data%</li>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<h3 class = "turquoiseH3">%data%</h3>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<li class= "listElement">%data%</li>';

var HTMLprojectLink ='<a class ="linkName" href = %data% target="_blank">Link to Project</a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolHeader = '<h3 class ="turquoiseH3"><div class= "educationHeaders">School</div></h3>';
var HTMLschoolName = '<h4 class = "classInfo">%data%';
var HTMLschoolDegree = '- %data%</h4>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLschoolDates = '<div class="date-text">%data%';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class= "listElement">Major: %data%</div>';

var HTMLonlineClasses = '<h3 class= "turquoiseH3"><div class= "educationHeaders">Online Classes</div></h3>';
var HTMLonlineTitle = '<h4 class= "classInfo">%data%';
var HTMLonlineSchool = ' - %data%</h4>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<a class= "classInfo" href="#">%data%</a>';
//added these var to reflect my custom properties in online schools
var HTMLonlineCourses = '<li class="listElement">%data%</li>';
var HTMLcourseLink ='<a class ="linkName" href = %data% target="_blank">Link to Courses</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(bio.name) || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});

function initializeMap() {

}


