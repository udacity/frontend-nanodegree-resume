// Object 1
var bio = {
	"name": "Hulk",
	"role": "demolition expert",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "hulk_1962@email.com",
		"github": "github.com/hulk1962",
		"twitter": "twitter.com/r33l_hulk",
		"location": "Malibu, California"
	},
	"welcomeMessage": '"What can Hulk do for you?"',
	"skills": ["&checkmark;&nbsp; Smash evil doers", "&checkmark;&nbsp; Crush alien hordes", "&checkmark;&nbsp; Pummel projects"],
	"biopic": "https://farm1.staticflickr.com/549/20166468218_2cf1342748.jpg",
	"display": function() {
		var fmtName = HTMLheaderName.replace("%data%", bio.name);
		var fmtRole = HTMLheaderRole.replace("%data%", bio.role);
		var fmtMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var fmtEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var fmtGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var fmtTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var fmtLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var fmtMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		var fmtPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").prepend(fmtRole);
		$("#header").prepend(fmtName);
		$("#topContacts").append(fmtMobile, fmtEmail, fmtGithub, fmtTwitter, fmtLocation);
		$("#footerContacts").append(fmtMobile, fmtEmail, fmtGithub, fmtTwitter, fmtLocation);
		$("#header").append(fmtPic);
		$("#header").append(fmtMsg);
		$("#header").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			var fmtSkills = HTMLskills.replace("%data%", bio.skills[skill]);

			$("#skills").append(fmtSkills);
		}
	}
};


// Object 2
var education = {
	"schools": [
		{
			"name": "California Institute of Technology",
			"location": "Pasadena, California",
			"degree": "Ph.D.",
			"majors": ["Nuclear Physics"],
			"dates": "1976",
			"url": "#"
		},
		{
			"name": "Harvard University",
			"location": "Cambridge, Massachusetts",
			"degree": "M.S.",
			"majors": ["Nuclear Physics", "Biochemistry"],
			"dates": "1975",
			"url": "#"
		},
		{
			"name": "University of New Mexico",
			"location": "Albuquerque, New Mexico",
			"degree": "B.S.",
			"majors": ["Physics", "Mathematics", "Microbiology"],
			"dates": "1972-1974",
			"url": "#"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Developer",
			"school": "Udacity",
			"date": "2015",
			"url": "#"
		},
		{
			"title": "Action Film Choreographer",
			"school": "Marvel Edx",
			"date": "2013",
			"url": "#"
		}
	],
	"display": function () {

		if (education.schools) {
			var schools = education.schools;

			for (var school in schools) {
				$("#education").append(HTMLschoolStart);
				var schoolAndDegree = HTMLschoolName.replace("%data%", schools[school].name)
													.replace("%url%", schools[school].url);
				schoolAndDegree += HTMLschoolDegree.replace("%data%", schools[school].degree);
				var fmtDates = HTMLschoolDates.replace("%data%",  schools[school].dates);
				var fmtMajors = HTMLschoolMajor.replace("%data%", schools[school].majors.join(", "));
				var fmtLocation = HTMLschoolLocation.replace("%data%",  schools[school].location);

				$(".education-entry:last").append(schoolAndDegree, fmtDates, fmtLocation, fmtMajors);
			}
		}

		if (education.onlineCourses) {
			var eCourses = education.onlineCourses;

			$("#education").append(HTMLonlineClasses);

			for (var course in eCourses) {
				$("#education").append(HTMLschoolStart);

				var titleAndSchool = HTMLonlineTitle.replace("%data%", eCourses[course].title)
													.replace("%url%", eCourses[course].url);
				titleAndSchool += HTMLonlineSchool.replace("%data%", eCourses[course].school)

				var fmtDate = HTMLonlineDates.replace("%data%", eCourses[course].date);

				// TO INSTRUCTOR: I'm not sure why this is needed, so I put the url
				// in the school name hotlink.
// 					var fmtUrl = HTMLonlineURL.replace("%data%", eCourses[course].url)
// 											  .replace("%url%", eCourses[course].url);

				$(".education-entry:last").append(titleAndSchool, fmtDate);
			}
		}
	}
};


// Object 3
var work = {
	"jobs":[
		{
			"employer": "The Avengers",
			"title": "Adventurer",
			"location": "Manhattan, New York City",
			"dates": "1984-2013",
			"description": "Subdued aggressive clientele from other dimensions and times."
		},
		{
			"employer": "University of California, Los Angeles",
			"title": "Custodian",
			"location": "Los Angeles, California",
			"dates": "1980-83",
			"description": "Cleaned and maintained research labs around campus grounds."
		},
		{
			"employer": "United States Defense Department",
			"title": "Researcher",
			"location": "Classified",
			"dates": "1978-79",
			"description": "Designed and oversaw construction of experimental Gamma Bomb."
		}
	],
	"display": function() {

		for (var i=0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);

			var fmtEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var fmtTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var empTitle = fmtEmployer + fmtTitle;
			var fmtDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var fmtLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var fmtDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			$(".work-entry:last").append(empTitle, fmtDates, fmtLocation, fmtDescription);
		}
	}
};


// Object 4
var projects = {
	"projects":[
		{
			"title": "Avengers NYC Project",
			"dates": "2012",
			"description": "Hulk with some help of sidekicks successfully repelled invasion of New York City by demi-god Loki and some extraterrestrial aliens.",
			"images": ["https://farm1.staticflickr.com/497/20166422760_c41aafe657.jpg", "https://farm1.staticflickr.com/282/20166469918_270f33f507.jpg", "https://farm1.staticflickr.com/318/20328217206_2f1cc233df.jpg"]
		},
		{
			"title": "Hulk Action Series",
			"dates": "1978-82",
			"description": "Hulk played eponymous hero in quest of finding cure for dreaded Bruce Banner disease.",
			"images": ["https://farm1.staticflickr.com/549/20328215316_8c738aae3e.jpg", "https://farm1.staticflickr.com/278/20345981832_26fcbb76f4.jpg", "https://farm1.staticflickr.com/431/19731811484_64a1867915.jpg"]
		}
	],
	"display": function() {

		for (var i=0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);

			var fmtTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var fmtDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var fmtDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(fmtTitle, fmtDates, fmtDescription);

			for (var img in projects.projects[i].images) {
				var fmtImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);

				$(".project-entry:last").append(fmtImage);
			}
		}
	}
};


// Animates the navigation menu on page load
$("nav").animate({
	width: "50px"
}, 1500);

// Displays or hides the navigation menu
$("nav, nav li").click(function() {
	if ($("nav").css("width") === "50px") {
		$("nav").animate({
			width: "200px"
		});
		$("nav ul").css({
			"display": "block",
			"position": "absolute",
			"z-index": "1",
			"top": "52px",
			"padding-bottom": "10px",
			"width": "200px",
			"background-color": "#000000"
		});

	} else {
		$("nav").animate({
			width: "50px"
		});
		$("nav ul").css("display", "none");
	}
});


// Modular functions
bio.display();
work.display();
projects.display();
education.display();


// Displays Google Map
$("#mapDiv").append(googleMap);