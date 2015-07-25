var bio = {
	"name" : "name",
	"role" : "role",
	"contacts" : {
		"mobile" : "mobile",
		"email" : "email",
		"twitter" : "twitter",
		"github" : "github",
		"blog" : "blog",
		"location" : "Los Angeles, CA"
		},
	"images" : "images/fry.jpg",
	"welcomeMessage" : "welcome Message",
	"skills" : ["skill", "skill", "skill", "skill"]
};

var education = {
  "schools": [
    {
	  "name": "name",
	  "location": "Los Angeles, CA",
	  "degree": "degree",
	  "major": "major",
	  "dates" : 2014,
    },
    {
	  "name": "name",
	  "location": "Los Angeles, CA",
	  "degree": "degree",
	  "major": "major",
	  "dates" : 2014,
    }
  ],
  "onlineCourses": [
    {
	  "title": "title",
	  "school": "Udacity",
	  "dates" : 2015,
	  "url": "http://udacity.com"
    }
  ]
}


var work = {
  "jobs": [
    {
      "employer" : "employer",
      "title" : "title",
      "location" : "Los Angeles, CA",
      "dates" : "date - date",
      "description" : "description"
    },
    {
      "employer" : "employer",
      "title" : "title",
      "location" : "Los Angeles, CA",
      "dates" : "date - date",
      "description" : "description"
    }
  ]
}

var projects = {
  "projects": [
	{
	  "title" : "title",
	  "dates" : "date to date",
	  "description" : "description",
	  "images" : [
	  	"images/197x148.gif",
	  	"images/197x148.gif"
	  ]
	},
	{
	  "title" : "title",
	  "dates" : "date to date",
	  "description" : "description",
	  "images" : [
	  	"images/197x148.gif",
	  	"images/197x148.gif"
	  ]
	},
	{
	  "title" : "title",
	  "dates" : "date to date",
	  "description" : "description",
	  "images" : [
	  	"images/197x148.gif",
	  	"images/197x148.gif"
	  ]
	}
  ]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.images);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(formattedMobile);
	$("#header").append(formattedEmail);
	$("#header").append(formattedTwitter);
	$("#header").append(formattedGithub);
	$("#header").append(formattedBlog);
	$("#header").append(formattedLocation);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(formattedBioPic);
}

bio.display();

bio.skills.display = function() {
	if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1])
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2])
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3])
	$("#skills").append(formattedSkill);
	}
}

bio.skills.display();

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(
			formattedEmployerTitle);
		$(".work-entry:last").append(
			formattedDate);
		$(".work-entry:last").append(
			formattedLocation);
		$(".work-entry:last").append(
			formattedDescription);
	}
}

work.display();

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		$(".education-entry:last").append(
			formattedName);
		$(".education-entry:last").append(
			formattedLocation);
		$(".education-entry:last").append(
			formattedDates);
		$(".education-entry:last").append(
			formattedMajor);
		$(".education-entry:last").append(
			formattedDegree);
	}

	for(course in education.onlineCourses) {
		$("#education").append(HTMLonlineCourses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(
			formattedOnlineTitle);
		$(".education-entry:last").append(
			formattedOnlineSchool);
		$(".education-entry:last").append(
			formattedOnlineDates);
		$(".education-entry:last").append(
			formattedOnlineURL);
		// NEED TO MOVE THESE UNDER THE H3 FOR ONLINE COURSES
	}
}

education.display();

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
			var newLocation = work_obj.jobs[job].location;
			locationArray.push(newLocation);
	}
	return locationArray;
}

//console.log(locationizer(work));

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#map-div").append(googleMap);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

