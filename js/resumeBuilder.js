

var work = {
	"jobs": [
	{
		"employer" : "Self-Employed",
		"titles" : "Consultant",
		"location" : "All Over",
		"dates" : "2013-2015",
		"description" : "Marketing, business strategy and analytics"
	},
	{
		"employer" : "Gotham Direct Inc.",
		"titles" : "Strategist/Analyst",
		"location" : "New York, NY",
		"dates" : "2012-2014",
		"description" : "Advertising, Analytics, etc"
	}
	]
};


var projects = {
	"Projects": [
	{
		"title" : "Project 1",
		"date" : "2015 January",
		"description" : "The first project was really fun.",
		"images" : "http://placekitten.com/g/560/320"
	},
	{
		"title" : "Project 2",
		"date" : "2015 February",
		"description" : "The 2nd project was really fun.",
		"images" : "https://placekitten.com/g/560/320"
	}
	]
};



var bio = {
	"pic" : "https://placekitten.com/g/350/320",
	"name" : "David Tera",
	"welcomeMessage" : "Hi I am David, learning to program.",
	"skills" : ["marketing", "digital", "development", "majom"],
	"contacts" : [{
		"mobile": "0640",
	 	"email" : "teradav@gmail.com",
	  	"github" : "github.com",
	   	"twitter" : "twitter.com/iterka",
	    "location" : "Budapest, Hungary"}]
	};



var education = {
	"schools": [
	{
		"name" : "University of Glasgow",
		"city" : "Glasgow, Scotland",
		"degree" : "MA with Honours",
		"major" : " Social Sciences",
		"date" : "2008-2012",
		"url" : "http://gla.ac.uk"
	},
	{
		"name" : "University of Miami",
		"city" : "Miami, FL, USA",
		"degree" : "Exchange Year",
		"major" : " Business School",
		"date" : "2010-2011",
		"url" : "http://umiami.edu"

	}
],
	"online courses": [
	{
		"school" : "Princeton University",
		"title" : "Buddhism and Modern Psychology",
		"date" : "2014",
		"url" : "https://www.coursera.org/course/psychbuddhism"
	},
	{
		"school" : "Udacity",
		"title" : "Intro to CSS and HTML, and Javascript",
		"date" : "2015",
		"url" : "https://www.udacity.com/course/nd001"
	}
]
};

var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$('#header').append(formattedPic);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
$('#header').append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$('#skills').append(formattedSkill);
};


// this shit works below
//console.log(work.jobs[0].employer);


for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].titles);
   	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  	var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
};

var displayProjects = function (){ 
};


var countries = ["germany", "argentina", "brazil", "netherlands"];
for (cc in countries) {console.log(countries[cc])};






//loop if 
var cameron ={};
cameron.job = "course dev";

var makeCourse = function () {
	console.log("Made a course");
}

var courses = 0;
while(cameron.job === "course dev") {
	makeCourse();
	courses = courses + 1;
	if(courses === 10) {
		cameron.job = "learning specialist";
	}
}
console.log(cameron.job);


projects.display = function(){
for (pro in projects.Projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.Projects[pro].title);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.Projects[pro].date);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.Projects[pro].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.Projects[pro].images);
	    
	$(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDate);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
	};
};


$('#mapDiv').append(googleMap);


projects.display();





