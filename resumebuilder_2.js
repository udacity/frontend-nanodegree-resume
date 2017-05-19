/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var myname="Varun Vasudev";
 var myrole="Oracle Developer";
 
 var formattedName=HTMLheaderName.replace("%data%",myname);
 var formattedRole=HTMLheaderRole.replace("%data%", myrole);
 
var bio={
    "name": "Varun Vasudev",
    "role": "Oracle Developer",
    "contacts": {
		"mobileno":1234567890,
		"email" : "varun@gmail.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "Rockville"
    },
	"welcome": "Hello",
    "bioPic":"Images/mypic.jpg",
    "skills" :["awesomeness","developer", "sleeping", "invisibility"]
};

var education={
	"schools":[
		{
			"name": "VTU",
			"location":"Bangalore",
			"degree": "BE"
			"majors": "Telecommunication",
			"dates": 2005,
			"url": "https://example.com"
		},
		{
			"name": "MIT",
			"location":"Cambridge",
			"degree": "MS"
			"majors": "CS",
			"dates": 2008,
			"url": "https://example.com"
		}
	]
,
"onlineCourses" : [
	{
		"title": "JavaScript Syntax",
		"school": "udacity",
		"dates": 2017,
		"url": "https://example.com"
	}
	]
}
;
var work={
	"jobs": [
		{
			"employer":"Comp A",
			"title": "Engineer",
			"dates": "2016 - Present",
			"description": "Hello Comp A"
		},
		{
			"employer":"Comp B",
			"title": "Engineer",
			"dates": "2010 - 2016",
			"description": "Hello Comp B"
		}
	]
};


$("#main").append(work["position"]);
$("#main").append(education.name);

*/


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
  

 
