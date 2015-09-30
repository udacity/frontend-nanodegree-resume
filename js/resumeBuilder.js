
 var bio={
 	"name" : "Jung-Wook Park",
 	"role" : "Software Engineer",
 	"contacts" : {
 		"mobile" : "010-7532-3961",
 		"email"  : "wookiecookie87@gmail.com",
 		"github" : "wookiecookie87",
 		"location" : "Seoul"
 	},
 	"welcomeMessage" : "Welcome to Wookiecookie world",
 	"skills" : ["Front-End developing", "Being funny", "Making friends in five-minutes"],
 	"bioPic" : "https://pbs.twimg.com/profile_images/1258413406/Macchu_400x400.jpg"
 }

var headerName = HTMLheaderName.replace("%data%", bio.name);
var headerRole = HTMLheaderRole.replace("%data%", bio.role);
var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var loc = HTMLlocation.replace("%data%", bio.contacts.location);
if(bio.skills.length > 0){
	//var skill = bio.skills.join(" ");
	$("#header").append(HTMLskillsStart);
}


$("#header").prepend(headerRole);
$("#header").prepend(headerName);

$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(github);
$("#topContacts").append(loc);
 var education ={
 	"schools":[
 		{
 			"name" : "Formham University",
 			"location" : "New York City",
 			"degree" : "BS",
 			"major" : ["Economics", "Mathematics"],
 			"date" : "2008 - 2013",
 			"url" : "www.fordham.edu"
 		}
 	],
 	"onlineCourse":[
 		{
 			"title" : "Machine Learning",
 			"school" : "Coursera",
 			"dates" : "11 weeks",
 			"url" : "www.ccoursera.edu"
 		},
 		{
 			"title" : "Git and Github",
 			"school" : "Udacity",
 			"dates" : "2 weeks",
 			"url" : "www.Udacity.edu"
 		},
 		{
 			"title" : "Basic Javascript",
 			"school" : "Udacity",
 			"dates" : "2 weeks",
 			"url" : "www.Udacity.edu"
 		}

 	]
 }	
 var work={
 	"jobs" : [
 		{
	 		"employer" : "Yullin Technology",
		 	"location" : "Seoul",
		 	"dates" : "7 months",
		 	"title" : "Software Engineer"
	 	},
	 	{
	 		"employer" : "Breeze Studio",
	 		"location" : "Seoul",
	 		"dates" : "4 months",
	 		"title" : "Software Engineer"
	 	}
 	],
	"project" : [
	 	{
	 		"title" : "Labratoy Information Management System",
	 		"location" : "Bundang",
	 		"description" : "Digital Pen",
	 		"dates" : "7months"
	 	},
	 	{
	 		"title" : "Beatname",
	 		"location" : "Seoul",
	 		"description" : "Mobile Front End",
	 		"dates" : "3months"
	 	}
 	]
 }

