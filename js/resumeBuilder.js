

var work = {
	"jobs": [
	{
		"employer" : "Self-Employed",
		"titles" : "Consultant",
		"location" : "Bangkok, Thailand",
		"dates" : "2013-2015",
		"description" : "Marketing, business strategy and analytics"
	},
	{
		"employer" : "Gotham Direct Inc.",
		"titles" : "Strategist/Analyst",
		"location" : "New York, NY, USA",
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
	"role" : "Front End Web Dev",
	"welcomeMessage" : "Hi I am David, learning to program.",
	"skills" : ["marketing", "digital", "development", "majom"],
	"contacts" : 
	{
		"mobile": "06202510931",
	 	"email" : "teradav@gmail.com",
	  	"github" : "github.com/Terka889",
	   	"twitter" : "twitter.com/iterka",
	    "location" : "Budapest, Hungary"}
	   
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
	"onlinecourses": [
	{
		"school" : "Udacity",
		"title" : "Front End Nanodegree",
		"dates" : "2015",
		"url" : "https://www.udacity.com/course/nd001"
	}
]
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



//Header

bio.display = function () {

//Name, Role, Pic, Welcome
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$('#header').append(formattedPic);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

//skills
if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$('#skills').append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$('#skills').append(formattedSkill);

};

//contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
};

bio.display();


work.display = function () {
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
};
work.display();


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
projects.display();


education.display = function(){
for (edu in education.schools) {
	$("#education").append(HTMLschoolStart);   
		var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[edu].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].city);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].date);
	
 
	$(".education-entry:last").append(formattedSchoolname);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDate);
    $(".education-entry:last").append(formattedMajor);
    $(".education-entry:last").append(formattedSchoolLocation);
	}

for (onl in education.onlinecourses) {	
$("#education").append(HTMLonlineClasses); 
$("#education").append(HTMLschoolStart); 
		var formattedOnlineSchoolname = HTMLonlineSchool.replace("%data%", education.onlinecourses[onl].school);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[onl].title);
		var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlinecourses[onl].dates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[onl].url);

	$(".education-entry:last").prepend(formattedOnlineSchoolname);
	$(".education-entry:last").prepend(formattedonlineTitle);
    $(".education-entry:last").append(formattedonlineDate);
    $(".education-entry:last").append(formattedonlineURL);
};};
education.display();


$('#mapDiv').append(googleMap);



$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

logClicks(x,y);
});


//internationalizer


function inName(name) {
    var finalName = name;
    // Your code goes here!
    var splits = name.split(' ', 2);
    var first = splits[0].toLowerCase();
    var last = splits [1];
    
    var firstNameFL = first[0].toUpperCase() + first.slice(1);

    finalName = firstNameFL +" "+ last.toUpperCase();
    // Don't delete this line!
    return finalName;
};

$('#main').append(internatonalizeButton)




