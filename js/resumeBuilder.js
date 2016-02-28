var bio = {
	"name": "Connie Hirsch",
	"role": "Front End Web Developer",
	"welcomeMessage": "Is this thing on?  TAP TAP  I sure hope it's working.  This has been, what they call, a learning experience.",
	"contacts": {
		"mobile": "617 501-5763",
		"email": "connie.hirsch@gmail.com",
		"github": "ConnieHirsch",
		"twitter" : "ConnieHirsch",
		"location": "Somerville, MA"
	},
	"bioPic" :{
	"pic" : "images/watercolorSmall.jpg",
	"alt" : "A picture of me."
	},
	"skills": ["PHP", "Knitting", "Writing", "Navigation", "Demolition Derby"]
};

var work = {
	"jobs" : [
	{
		"title": "Rideshare Driver",
		"employer": "Lyft",
		"dates": "2015-2016",
		"description" : "Drives people around in a manner not entirely unlike a taxi driver, only better.",
		"location": "Boston, MA"
	},
		{
			"title": "Front End Developer",
			"employer": "Analog Devices",
			"dates": "2012-2014",
			"description" : "Developed front end for in-house resource tracking web application",
			"location": "Norwood, MA"
		},
		{
			"title" : "File Clerk",
			"employer" : "Harvard Graduate School Of Arts and Sciences",
			"dates" : "2011-2012",
			"description" : "Opened, processed, filed graduate school applications",
			"location" : "Cambridge, MA"
		},
		{
		"title": "Census Enumerator",
		"employer": "U.S Census Bureau",
		"dates": "2010-2011",
		"description" : "Went door to door contacting citizens whose census forms had not been returned.",
		"location": "Somerville, MA"
	},
	{
		"title" : "Senior Software Architect",
		"employer" : "Houghton Mifflin",
		"dates" : "1998-2008",
		"description" : "Sales and Marketing applications in Lotus Notes and SQL, IT Support",
		"location" : "Boston, MA"
	}
	]
};

function displayWork() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		//console.log(work.jobs[job].employer);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription =
			HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}

displayWork();


////////////////////////////////
//	education section         //
////////////////////////////////

var education = {
	"schools" : [
		{
			"name": "Udacity",
			"attended": "2016",
			"location": "Worcester, MA",
			"major": "Front End Web Developer",
			"degree": "Nanodegree"
		},
		{
			"name" : "American International College, Computer Career Institute",
			"attended" : "2008-2011",
			"location": "Cambridge, MA",
			"major": "Enterprise Solutions Developer/Visual Communication - Digital 3-D Design",
			"degree" : "Master Certificate"
		},
		{
			"name" : "Boston University, School of Public Communication",
			"attended" : "1977-1981",
			"location" : "Boston, MA",
			"major" : "Journalism",
			"degree" : ""
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": 2016,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

function displayEducation() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		console.log(education.schools[school].name);
		var formattedschoolName =
		HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedschoolName);

		var formattedschoolDegree =
		HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedschoolDegree);

		var formattedschoolDates =
		HTMLschoolDates.replace("%data%",education.schools[school].attended);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedschoolLocation =
		HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolMajor =
		HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedschoolMajor);

		}

	$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses)
		{
			console.log("Test: " + education.onlineCourses[onlineCourse].title);

		    $("#education").append(HTMLschoolStart);
		    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
		    $(".onlineClasses-entry:last").append(formattedTitle);
		    $(".onlineClasses-entry:last").append(formattedSchool);
		    $(".onlineClasses-entry:last").append(formattedDates);
		}
}
/*
var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";
*/


displayEducation();


////////////////////////////////
//	project section           //
////////////////////////////////


var projects = {
	"projects" : [
	{
		"title" : "Big Foo",
		"dates" : "2011",
		"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry" +
		". Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
		"unknown printer took a galley of type and scrambled it to make a type specimen book. It " +
		"has survived not only five centuries, but also the leap into electronic typesetting, remaining" +
		" essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets " +
		"containing Lorem Ipsum passages, and more recently with desktop publishing software like " +
		"Aldus PageMaker including versions of Lorem Ipsum.",
		"images" : [
			{ "pic" : "images/fry.jpg", "alt": "Alt Text" },
			{ "pic" : "images/fry.jpg", "alt": "Alt Text" }
		],
		"url" : "http://www.constancehirsch.com"
	},
		{
		"title" : "Little Bunny FooFoo",
		"dates" : "2013",
		"description" : "Lorem Ipsum is simply dummy text of the printing and" +
			"typesetting industry publishing software like Aldus PageMaker including" +
			"versions of Lorem Ipsum",
		"images" : [
			{ "pic" : "images/fry.jpg", "alt": "Alt Text" }
		],
		"url" : "http://www.constancehirsch.com"
	}
	]
};

// encapsulated Project code
function displayProject() {
	for (proj in projects.projects){

	$("#projects").append(HTMLprojectStart)
//	console.log(projects.projects[proj].title);
	var formattedprojectTitle =
		HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
	$(".project-entry:last").append(formattedprojectTitle);
	var formattedprojectDates =
		HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
	$(".project-entry:last").append(formattedprojectDates);
	var formattedprojectDescription =
		HTMLprojectDescription.replace("%data%",projects.projects[proj].description);
	$(".project-entry:last").append(formattedprojectDescription);

	if (projects.projects[proj].images.length > 0) {
		for (image in projects.projects[proj].images) {
		var formattedprojectImage =
			HTMLprojectImage.replace("%data%",projects.projects[proj].images[image].pic).replace("%datum%",projects.projects[proj].images[image].alt);
		$(".project-entry:last").append(formattedprojectImage);
		}

	}

}}


displayProject();

/////////////////
//bio section
////////////////

function displayBio() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(formattedmobile);
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedemail);
		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedgithub);
		var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedtwitter);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedlocation);


		var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic.pic).replace("%datum%", bio.bioPic.alt);
		$("#topContacts").append(formattedbioPic);

		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#topContacts").append(formattedWelcome);

		$("#topContacts").append(HTMLskillsStart);
		//console.log(bio.skills);
				var formattedSkills = "";
				if (bio.skills.length > 0) {
					for (skill in bio.skills) {
						var nextSkill = HTMLskills.replace("%data%", bio.skills[skill]);
						formattedSkills = formattedSkills.concat(nextSkill) ;
						//console.log(formattedSkills);
					}
				};
		$("#skills").append(formattedSkills);
		$("#skills").append(HTMLskillsEnd);
}

displayBio();


//////////////////////////////////
// Internationalize button work //
//////////////////////////////////

//$("#main").append(internationalizeButton);


function inName() {
  /* var name = window.name; */ /* Gives comma-separated array */
  /*  var name = bio.name;   */ /* bio.name gives space-separated array */

  var name = bio.name.trim().split(" ");
  // Turn into an array ["AlbERt" "EINstEiN"]. Trim off whitespace.
  //console.log("name: " + name);
  var firstName = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();
  // Get and change the first name;
  var lastName = name[1].toUpperCase(); // Get and change the last name;
  console.log("firstName: " + firstName);
  console.log("lastName: " + lastName);
  var oldSpelling = $('#name').text();
  var newSpelling = firstName + " " + lastName;
  $('#name').text( newSpelling );
  console.log(newSpelling);
}

// map magic
$("#mapDiv").append(googleMap);

