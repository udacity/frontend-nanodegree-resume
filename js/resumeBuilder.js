var work = {
	"jobs" : [ /* JSON data for all work experience */
		{
			"employer" : "TGI Fridays",
			"title" : "Server",
			"location" : "Tampa, FL",
			"dates" : "March 2014-present",
			"description" : "Sample Description for Fridays"
		},
		{
			"employer" : "United States Air Force Reserve",
			"title" : "Professional Officer Course",
			"location" : "Tampa, FL",
			"dates" : "Month 2013-Month 2014",
			"description" : "Sample Description for AF Reserves"
		},
		{
			"employer" : "Tia's Tex-Mex",
			"title" : "Bartender/Server",
			"location" : "Tampa, FL",
			"dates" : "August 2013-March 2014",
			"description" : "Sample Description for Tia's"
		},
		{
			"employer" : "AFROTC Field Training",
			"title" : "Cadet",
			"location" : "Montgomery, AL",
			"dates" : "June 2013-July 2013",
			"description" : "Sample Description for Field Training"
		},
		{
			"employer" : "University of South Florida",
			"title" : "Full-time student & ROTC Cadet",
			"location" : "Tampa, FL",
			"dates" : "October 2012-June 2013",
			"description" : "Sample Description for Full time student"
		},
		{
			"employer" : "HomeGoods",
			"title" : "Sales Associate",
			"location" : "Lutz, FL",
			"dates" : "August 2012-October 2012",
			"description" : "Sample Description for HomeGoods"
		},
		{
			"employer" : "Papa John's Pizza",
			"title" : "Delivery Driver",
			"location" : "Bradenton, FL",
			"dates" : "May 2011-August 2011",
			"description" : "Sample Description for Papa John's Pizza"
		},
		{
			"employer" : "TJ Maxx",
			"title" : "Customer Experience Coordinator",
			"location" : "Bradenton, FL",
			"dates" : "December 2008-August 2012",
			"description" : "Sample Description for TJ Maxx"
		}
	],
	"display" : function(){ /* function for appending content inside the work object */
			
			for(var job in work.jobs) {
			if (work.jobs.hasOwnProperty(job)) {

			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(formattedWorkEmployer.concat(formattedWorkTitle));
			var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedWorkDates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);

		}
		}
	}
};

var projects = {
	"projects" : [ /* JSON data for projects */
		/*{
			"title" : "More recent project placeholder",
			"dates" : "In progress 2",
			"description" : "In this project I did project 2 stuffs.",
			"images" : ["https://placehold.it/350x100"],
			"url" : "project.url"
		},*/
		{
			"title" : "Professional Portfolio",
			"dates" : "Month 2015",
			"description" : "I did project 1 stuffs.",
			"images" : ["images/coreykovalik_200.png"],
			"url" : "http://www.coreykovalik.com"
		}
	],
	display : function(){ /* function for appending content inside the projects object */

			for(var project in projects.projects) {
			if (projects.projects.hasOwnProperty(project)) {

				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
				$(".project-entry:last").append(formattedProjectTitle);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedProjectDates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					if (projects.projects[project].images.hasOwnProperty(image)) {
						var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						formattedProjectImage = formattedProjectImage.replace("%url%", projects.projects[project].url);
						$(".project-entry:last").append(formattedProjectImage);
					}
				}
			}
			}
			}
		}
};

var bio = { /* JSON data for biographical and contact information */
	"name" : "Corey Kovalik",
	"role" : "Junior Developer",
	"contacts" : {
		"email": "coreykovalik@gmail.com",
		"mobile": "941-504-1142",
		"github": "Immotal",
		"twitter": "@CoreyKovalik",
		"location": "Tampa, Florida",
		"twitterURL": "https://twitter.com/CoreyKovalik",
		"githubURL": "https://github.com/immotal",
		"nameURL": "http://www.coreykovalik.com"
	},
	"biopic" : "images/pictureofme.jpg",
	"welcomeMessage" : "\"Logic will get you from A to B. Imagination will take you everywhere.\"",
	"skills" : ["JavaScript","jQuery","HTML5","CSS3","Git"],
	display : function() { /* function for appending content inside the bio object */
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		formattedName = formattedName.replace("%url%", bio.contacts.nameURL);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		formattedGithub = formattedGithub.replace("%url%", bio.contacts.githubURL);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		formattedTwitter = formattedTwitter.replace("%url%", bio.contacts.twitterURL);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		formattedBiopic = formattedBiopic.replace("%url%", bio.contacts.nameURL);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);
			for (var skill in bio.skills) {
				if (bio.skills.hasOwnProperty(skill)) {
					var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
					$("#skills").append(formattedSkill);
				}
			}
		}
	}
};

var education = { /* JSON data for education information */
	"schools" : [
		{
			"name" : "University of South Florida",
			"location" : "Tampa, Florida",
			"degree" : "Bachelor of Arts Degree",
			"majors" : "Psychology",
			"dates" : "2012-2015",
			"url" : "http://www.usf.edu/"
		},
		{
			"name" : "State College of Florida",
			"location" : "Bradenton, Florida",
			"degree" : "Associate in Arts Degree",
			"majors" : "Not Applicable",
			"dates" : "2010-2012",
			"url" : "http://www.scf.edu/"
		}
	],
	"onlineCourses" : [
		{
			"school" : "Udacity (udacity.com)",
			"title" : "Front-End Web Developer Nanodegree",
			"dates" : "2015-2016",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	],
	display : function() {
		for (var school in education.schools) {
			if(education.schools.hasOwnProperty(school)) {

				$("#education").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedSchoolName.concat(formattedSchoolDegree));
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedSchoolDates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedSchoolLocation);
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedSchoolMajor);
			}
		}

		$("#education").append(HTMLonlineClasses);
		for (var online in education.onlineCourses) {
			if(education.onlineCourses.hasOwnProperty(online)) {

				$("#education").append(HTMLonlineStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
				formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[online].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
				$(".online-entry:last").append(formattedOnlineTitle.concat(formattedOnlineSchool));
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
				$(".online-entry:last").append(formattedOnlineDates);
			}
		}
	}
};

/* Display resume data */
bio.display();
work.display();
projects.display();
education.display();

/* Google Map */
$("#mapDiv").append(googleMap);

/* Button that 'internationalizes' a name by capitalizing the entire last name */
/*--disabled feature below--
function inName(name) {
  var name = bio.name.trim().split(" ");
  var firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  var lastName = name[1].toUpperCase();
  var oldSpelling = $('#name').text();
  var newSpelling = firstName + " " + lastName;
  $('#name').text( newSpelling );
}

$("#main").prepend(internationalizeButton);
--disabled feature above-- */

/* Log page clicks to console */
$(document).click(function(loc) {

	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});