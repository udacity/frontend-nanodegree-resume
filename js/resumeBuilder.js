
var bio = {
	"name": "Jo Silverton",
	"role": "Technology Consultant",
	"contacts": {
		"mobile": "+353 1 (0)87 318 6152",
		"email": "jsilverton@hotmail.com",
		"github": "jsilverton",
		"twitter": "jostwitter",
		"location": "Dublin, Ireland"
	},
	"welcomeMessage": "aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
	"skills": ["java", "making tea", "team leading", "enabling others to deliver things", "changing mind"],
	"bioPic": "images/dog140.jpg"
};

var education = {
	"schools": [
		{
			"name": "University of Warwick",
			"location": "Coventry, UK",
			"degree": "BA",
			"majors": ["Economics", "Politics"],
			"dates": 1994,
			"url": "http://www2.warwick.ac.uk"
		},
		{
			"name": "University College of London",
			"location": "London, UK",
			"degree": "MSc",
			"majors": ["Computer Science"],
			"dates": 1999,
			"url": "http://www.ucl.ac.uk/"
		}
	],
	"onlineCourses": [
		{
			"title" : "Frontend Web Developer",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "BearingPoint",
			"title": "Senior Technology Consultant",
			"location": "Dublin, Ireland",
			"dates": "April 2014-current",
			"description": "Scrum master for team for YBS project. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
		},
		{
			"employer": "Atos",
			"title": "Technologist",
			"location": "London, UK",
			"dates": "Oct 2001-Mar 2013",
			"description": "Developer, Team Lead for a number of projects. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Genesis",
			"dates": "2005-2010",
			"description": "Defra project. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
			"images": ["images/140.jpg", "images/140.jpg"]
		},
		{
			"title": "PTP",
			"dates": "2012-2013",
			"description": "Foreign & Commonwealth project. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ",
			"images": ["images/138.jpg", "images/138.jpg"]
		}
	]
};

//display bio
bio.display = new function() {

	//header
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	//contacts
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedContacts = formattedMobile
							+ formattedEmail
							+ formattedGithub
							+ formattedTwitter
							+ formattedLocation;

	$("#topContacts").append(formattedContacts);
	$("#footerContacts").append(formattedContacts);

	//image
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedImage);

	//welcome message
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	//skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		//get formatting to match example (otherwise spreads skills across single line)
		$("#skills").removeClass("flex-box");

		//add skills
		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
};

//display work
work.display = new function() {

	for(job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer
									+ formattedTitle
									+ formattedDates
									+ formattedLocation
									+ formattedDesc;

		$(".work-entry:last").append(formattedEmployerTitle);
	}
};

//display projects
projects.display = new function() {

	for (var project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		var formattedProject = formattedTitle +
								formattedDates +
								formattedDesc;

		$(".project-entry:last").append(formattedProject);

		//images
		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImg);
			}
		}
	}

};

//display education
education.display = new function() {

	//schools
	for (var school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		//create list of majors
		var majors = ""; //reset each loop, otherwise picks up previous entries
		for (var major in education.schools[school].majors) {

			//if > 1 major, add commas
			if (major > 0) { //ie count > 1
				majors = majors + ", "
			}
			majors = majors + education.schools[school].majors[major];
		}

		var formattedMajors = HTMLschoolMajor.replace("%data%", majors);

		//make header 'Major' plural if > 1 major
		if (education.schools[school].majors.length > 1) {
			formattedMajors = formattedMajors.replace("Major", "Majors");
		}

		var formattedSchool = formattedName +
								formattedDegree +
								formattedDates +
								formattedMajors;

		$(".education-entry:last").append(formattedSchool);
	}

	//online courses
	if (education.onlineCourses.length > 0) {

		$("#education").append(HTMLonlineClasses);

		for (var course in education.onlineCourses) {

			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			var formattedOnlineCourse = formattedOnlineTitle +
									formattedOnlineSchool +
									formattedOnlineDates +
									formattedOnlineURL;

			$(".education-entry:last").append(formattedOnlineCourse);
		}
	}
};

//view map
$("#mapDiv").append(googleMap);

//monitor clicks
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});


