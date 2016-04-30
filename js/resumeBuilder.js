/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
  "name" : "Jessica Park",
  "role" : "Software Engineer",
  "contacts" : {
		"mobile" : "415-602-9974",
 	 	"email" : "jessjhpark@gmail.com" ,
 	 	"github" : "github.com/jeehaepark",
  	"twitter" : "@tinklejess",
  	"location" : "San Francisco"
  },
  "welcomeMessage" : "I am a mathematics graduate who is transitioning to Computer Science via Hack Reactor Core's software engineering accelerated program at MakerSquare, a JavaScript-focused programming school in San Francisco, CA. I focus on front-end development in JavaScript/HTML/CSS, using technologies such as Node.js and Express, libraries such as jQuery, D3, and Bootstrap, and most front-end MVC frameworks with a specialization in Angular.js. Other parts of the stack that I'm strong include git, Postgres, MongoDB, MySQL, and tools such as Gulp, Grunt, Mocha, Chai and Karma. Other things I dabble in: statistics, social impact, full-stack development, classical music (violin)",
  "skills" : ["JavaScript","node.js","express.js","AngularJS","PostgreSQL","MongoDB"],
  "biopic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAASbAAAAJGYzY2UxZGE3LWZiNTEtNDQyZC1iNmIyLTRhZDA0Y2Y5OTRlMg.jpg",
  "display" : function(){}
 };

 var education = {
  "schools": [
	  {  "name" : "MakerSquare",
	  "location" : "San Francisco",
	  "degree" : "Advanced Software Engineering Immersive",
	  "majors" : ["JavaScript"],
	  "dates": "2016",
	  "url" : "http://www.makersquare.com/" },
	  {  "name" : "Diablo Valley College",
	  "location" : "Pleasant Hill",
	  "degree" : "Associate Degree",
	  "majors" : ["mathematics"],
	  "dates": "2012-2015",
	  "url" : "http://www.dvc.edu/" }],
	"onlineCourses": [{
		"title" : "Front-End Web Developer Nanodegree",
  	"school" : "Udacity",
  	"date" : "2016",
  	"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"}],
	"display": function(){}
 };

 var work = {
 	"jobs": [{
  	"employer": "Diablo Valley College" ,
    "title": "Math Tutor",
    "location": "Pleasant Hill, CA",
    "dates": "2013 ‐ 2015",
    "description": "Taught problem‐solving and critical thinking skills for multivariable calculus and statistics to hundreds of students." 
 	},{
  	"employer": "Upward Bound" ,
    "title": "Mentor",
    "location": "Concord, CA",
    "dates": "2014",
    "description": "Mentored high school students providing not only school work assistance, but 1:1 support, motivation, and to critically analyze and plan their futer and academic careers." 
 	}], 
  "display": function(){}
 };