/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // bio Object
var bio = {
	"name" : "David Vite",
	"role" : "Computer Engineer",
	"contact" : {
		"mobile": "3853754728",
		"email": "viteh.david@gmail.com",
		"github": "vite21",
		"twitter": "vite_22",
		"location" : "Provo, Utah",
		"blog": "davidvite.com"
	},
	"bioPic": "images/profile.jpg",
	"welcomeMessage": "Thanks for visiting",
	"skills": ["Mexican", "Awesomeness","Super Humble"]
	}


// replacing holder for the data in bio object
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole= HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic= HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMessage= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

var formattedContactInfo= [];
formattedContactInfo.push(HTMLmobile.replace("%data%",bio.contact.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%",bio.contact.email));
formattedContactInfo.push(HTMLgithub.replace("%data%",bio.contact.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%",bio.contact.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%",bio.contact.location));



// Appending the formatted info from bio object to indexHTML
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

$("#header").appendHTMLkillsStart;

	if(bio.skills.length >0 ){
		$("#header").append(HTMLskillsStart);
		var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
	};

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


// education object
var education={
	"schools":[
		{
			"name": "Universidad Nacional Autonoma de Mexico",
			"location": "Mexico city",
			"degree": "BS",
			"majors": ["Computer Engineer"],
			"dates": 2009,
			"url": "https://www.unam.mx/"
		},
		{
			"name": "Brigham Young University",
			"location": "Provo, Utah",
			"degree": "Training",
			"majors": ["English"],
			"dates": 2014,
			"url": "http://www.elc.byu.edu/"
		}
	],

 	"onlineCourses": [
	 	{
	 		"school": "Udacity",
	 		"title": "Frond End Nanodegree",
	 		"dates": "December",
	 		"url": "https://www.udacity.com/nanodegree"

	 	}
 	]
}

// replacing holder with data in education object
// school Universidad NAcional Autonoma de Mexico
var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedschoolDegree= HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedschoolDates= HTMLschoolDates.replace("%data%",education.schools[0].dates);
var formattedschoolLocation= HTMLschoolLocation.replace("%data%",education.schools[0].location);
var formattedschoolMajor= HTMLschoolMajor.replace("%data%",education.schools[0].majors);
// Brigham Young University



// Appending the formatted info from bio object to indexHTML

$("#education").append(formattedschoolName);
$("#education").append(formattedschoolDegree);
$("#education").append(formattedschoolDates);
$("#education").append(formattedschoolLocation);
$("#education").append(formattedschoolMajor);




// work object
var work={
	"jobs": [
		{
			"employer":"Academy for Creating Enterprise",
			"title": "Executive Assistant",
			"location": "Mexico City",
			"dates": "2011",
			"description":"Planned agendas and conducted the classes of an entrepernurship course"

		},
		{
			"employer":"Missionary Training Center",
			"title": "Web Developer",
			"location": "Provo, Utah",
			"dates": "2015",
			"description":"Workig in a full stack environtment developing in Angular JS and learning JavaScript."
		},
		{
			"employer":"Missionary Training Center",
			"title": "Quality Assurance",
			"location": "Provo, Utah",
			"dates": "2015",
			"description":"Assured quality web application on new features of an online chat application found at Mormon.org wich is exposed to 650,000 users per month. "
		}
	]

}

function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle= formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	}
}
function locationizer(work_obj){
	var locationArray=[];

	for(job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
};


displayWork();

$(document).click(function(loc) {
var x= loc.pageX;
var y= loc.pageY;
logClicks(x,y);
});


var projects={
	"projects":[
		{
			"title":"Responsive Website",
			"dates": "Yesterday",
			"description": "This project was really helpfull to understand the priniples behind responsive design, the use libraries and the use of Grunt",
			"images":[
				{
				"projecimg1": "images/project1-1.jpg",
				"projecimg2": "images/project1-2.jpg"
				}
			]
		},
		{
			"title":"Resume",
			"dates": "Yesterday",
			"description": "This project was really helpfull to understand the how to use JSON, and review some principles of JavaScript",
			"images":[
				{
				"projecimg1": "images/project2-1.jpg",
				"projecimg2": "images/project2-2.jpg"
				}
			]
		}
	]

}
//
//
//
//
//
//
//
//
var worldTime={
  "country":[
  {
    "name": "Mexicoo",
    "hour": "20",
  },
  {
    "name":"USA",
     "hour": "21"
 }
 ]
}

function worldHour(_worldTime_obj){
  var worldHourArray= [];
  for(hour in _worldTime_obj.country){
    var newhour=_worldTime_obj.country[hour].hour;
    worldHourArray.push(newhour);
  }
  return worldHourArray;

}
console.log(worldHour(worldTime));
//
//
//
//
//

// Practice returning and array with description of everyproject
function projectDescription(description_projects){
	var descriptionArray =[];

	for( description in description_projects.projects){
		var newDescription = description_projects.projects[description].description;
		descriptionArray.push(newDescription);
	}
	return descriptionArray;
}
console.log(projectDescription(projects));
// replacing the placeholder with data in project object.
var formattedprojectTitle= HTMLprojectTitle.replace("%data%", projects.projects[0].title);

// appending the data to the HTML
$("#projects").append(formattedprojectTitle);


console.log(bio);
console.log(education);
console.log(locationizer(work));