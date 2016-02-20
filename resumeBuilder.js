


var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};
var projects = {
	"projects": [
	{
		"title" : "<a href=''>Sample Project 1</a>",
		"dates" : "2016",
		"description" : "This is my resume builder Project.This is my resume builder Project.This is my resume builder Project.This is my resume builder Project.This is my resume builder Project.",
		"images" : [
		"images/fry.jpg"
		]
	},
	{
		"title" : "<a href=''>Sample Project 2</a>",
		"dates" : "2016",
		"description" : "This is my resume builder Project.This is my resume builder Project.This is my resume builder Project.This is my resume builder Project.This is my resume builder Project.",
		"images" : [
		"images/fry.jpg"
		]
	}
	]
}

// contacts i misspelled as contact and it broke google maps(tough bug to solve).
var bio = {
	"name": "Dan",
	"role": "Junior Web Developer",
	"welcome_msg": "Welcome to my code.",
	"contacts": {
		"mobile": "250-307-6272",
		"email": "tinahelf@jedi-clan.com",
		"github": "Danscode",
		"twitter": "@johndoe",
		"blog": "<a href=''>Dan's Blog</a>",
		"location": "Vernon, BC"
	},
	"welcome" : "Welcome to my Java script resume builder.",

	"skills": ["Programmer", "Designer", "Developer"
	],
	"biopic": ["images/me.jpg"
	]
}

var education = {
	"schools" : [
	{
			"name" : "Okanagan College",
			"location" : "Vernon, BC",
			"degree" : "Math Upgrade",
			"majors" : ["Math 72"],
			"dates" : "2014 2015",
			"url" : "www.okanagan.bc.ca"
	},
	{
			"name" : "Some school",
			"location" : "Nashville, TN",
			"degree" : "Some degree",
			"majors" : ["Some major"],
			"dates" : "2014 2015",
			"url" : "www.okanagan.bc.ca"
	}
	],
	"online" : [
	{
		"title" : "Intro to Programming Nanodegree",
		"school" : "Udacity",
		"dates" : "2015 2016",
		"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	},
	{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2016",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"dates" : "2016",
		"url" : "https://www.udacity.com/courses/ud804"
	}

	]
}

var formattedName = HTMLheaderName.replace(
	"%data%", "Dan Weatherbee");
var formattedRole = HTMLheaderRole.replace(
	"%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#education").append(HTMLschoolStart);
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
$("#lets-connect").append(googleMap);
// Note the school variable represents an index and returns a number.
// Then we use it in the rest of the statements(no magic numbers).

education.display = function() {
	for (school in education.schools) {

		formattedSchoolName = HTMLschoolName.replace
		("%data%", education.schools[school].name);

		formattedSchoolDegree = HTMLschoolDegree.replace
		("%data%", education.schools[school].degree);
		$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);

		formattedSchoolDates = HTMLschoolDates.replace
		("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedSchoolDates);

		formattedSchoolLocation = HTMLschoolLocation.replace
		("%data%", education.schools[school].location);
		$(".education-entry").append(formattedSchoolLocation);

		formattedSchoolMajors = HTMLschoolMajor.replace
		("%data%", education.schools[school].majors);
		$(".education-entry").append(formattedSchoolMajors);
	}
	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.online) {
		formattedOnlineTitle1 = HTMLonlineTitle.replace
		("%data%", education.online[course].title);

		formattedOnlineSchool1 = HTMLonlineSchool.replace
		("%data%", education.online[course].school);

		formattedOnlineDates1 = HTMLonlineDates.replace
		("%data%", education.online[course].dates);

		formattedOnlineUrl1 = HTMLonlineURL.replace
		("%data%", education.online[course].url);

		$(".education-entry:last").append(formattedOnlineTitle1 + formattedOnlineSchool1 +
		  formattedOnlineDates1 + formattedOnlineUrl1);
	}
}

education.display()

bio.display = function() {

	formattedBioName = HTMLcontactGeneric.replace
	("%data%", bio.name);

	formattedMobile = HTMLmobile.replace
	("%data%", bio.contacts.mobile);

	formattedEmail = HTMLemail.replace
	("%data%", bio.contacts.email);

	formattedTwitter = HTMLtwitter.replace
	("%data%", bio.contacts.twitter);

	formattedGithub = HTMLgithub.replace
	("%data%", bio.contacts.github);

	formattedLocation = HTMLlocation.replace
	("%data%", bio.contacts.location);

	formattedBlog = HTMLblog.replace
	("%data%", bio.contacts.blog);

	$("#topContacts").append(formattedLocation +
	 formattedGithub + formattedTwitter + formattedEmail +
	  formattedMobile + formattedBioName + formattedBlog);

	formattedBiopic = HTMLbioPic.replace
	("%data%", bio.biopic);

	formattedWelcome = HTMLwelcomeMsg.replace
	("%data%", bio.welcome);

	$("#header").append(formattedBiopic +
		formattedWelcome);

	if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {

	formattedSkill = HTMLskills.replace
	("%data%", bio.skills[skill]);

	$("#skills").append(formattedSkill);
	}
}
}

bio.display()

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		formattedEmployer = HTMLworkEmployer.replace
		("%data%", work.jobs[job].employer);

		formattedTitle = HTMLworkTitle.replace
		("%data%", work.jobs[job].title);

		formattedEmployerTitle = formattedEmployer +
		 formattedTitle;

		formattedDates = HTMLworkDates.replace
		("%data%", work.jobs[job].dates);

		formattedDescription = HTMLworkDescription.replace
		("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle + formattedDates +
			formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		formattedTitle = HTMLworkTitle.replace
		("%data%", projects.projects[project].title);

		formattedDates = HTMLprojectDates.replace
		("%data%", projects.projects[project].dates);

		formattedDescription = HTMLprojectDescription.replace
		("%data%", projects.projects[project].description);

		if (projects.projects[project].images.length > 0) {
			formattedImage = HTMLprojectImage.replace
			("%data%", projects.projects[project].images);

			$(".project-entry:last").append(formattedTitle +
				formattedDates + formattedDescription + formattedImage);
		}
	}
}

projects.display()

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
function inName() {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}
// $("#main").append(internationalizeButton);
// $("#mapDiv").append(googleMap);

