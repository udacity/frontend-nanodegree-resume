/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var name = "Maksim Shepin";
//var role = "Web developer";
//var formatedName = HTMLheaderName.replace("%data%", name);
//var formatedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").append(formatedName);
//$("#header").append(formatedRole);
var work={
	"jobs":[
		{
		"employer":"CNPC",
		"title": "IT eng",
		"location": "Turkmenistan",
		"dates": "2009",
		"description" : "It support job"
		},
		{
		"employer":"HPE",
		"title": "VOIP eng",
		"location": "MD",
		"dates": "2015",
		"description" : "VOIP telephony support job"
		}
	]
};
var projects = {
		"projects":[
		{
		"title":"portfolio",
		"dates": "2015",
		"description" : "My portfolio",
		"image": "image URL"
		},
		{
		"title":"onlineResume",
		"dates": "2015",
		"description" : "My resume",
		"image": "image URL"
		}
	]

};
var bio = {
	"name": "Maksim Shepin",
	"role": "web developer",
	"welcomeMessage": "welcome to my page",
	"contacts": {
		"mobile":"240-671-2573",
		"email": "shepin.maksim@gmail.com",
		"github": "github",
		"twitter" :"@twitter",
		"location": "Gaithersburg. MD"
	},
	"skills": ["awesome", "experienced", "cool", "handy"],
	"bioPic": "images/fry.jpg"
};

var education ={
	"schools": [
		{
			"name": "bauman",
			"location": "Moscow",
			"degree": "BA",
			"majors": "Engeneering",
			"dates": "dates",
			"url": "url"
		},

		{	"name": "Rosnou",
			"location": "Moscow",
			"degree": "BA",
			"majors": "CompSience",
			"dates": "dates",
			"url": "url"
		}
	],
	"onlineCourses":[
		{
			"title": "Udacity",
			"school": "onlineCourses",
			"dates": "dates",
			"url": "url"
		},
		{
			"title": "Coursera",
			"school": "onlineCourses",
			"dates": "dates",
			"url": "url"
		}
	]

};


//$("#main").append("<img src=" +bio.pictureUrl+">");
//$("#main").append(education.schools[1].name);