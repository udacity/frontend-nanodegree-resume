///////////////////////////
// Where the JSON's live //
///////////////////////////

// TODO: fill the objects with real information
// TODO: Make it pretty and add cool functionality
var bio = {
	"name" : "Mark Weigel",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "267-603-2621",
		"email" : "mark@weigel.site",
		"github" : "https://github.com/mrkjesus2",
		"twitter" : "https://twitter.com/markweig",
		"location" : "Philadelphia, PA",
		"blog" : "http://weigel.site"
	},
	"welcomeMessage" : "This is a test message",
	"skills" : [
		"linux", "logical thought", "javascript soon"
	],
	"picURL" : "images/Profile.jpg"
};

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "2015",
			"description": "The first project at Udacity focusing on Responsive Design",
			"images": ["images/portfolio-1.png", "images/portfolio-2.png"]
		},{
			"title": "Resume",
			"dates": "2015",
			"description": "The second project at Udacity focusing on Introductory Javacript/Jquery",
			"images": ["images/resume-1.png", "images/resume-2.png"]
		}
		// ,{
		// 	"title": "Project #",
		// 	"dates": "Fill-YEAR",
		// 	"description": "A cute little description",
		// 	"images": ["url1", "url2"]
		// }
	]

};

var work = {
	"jobs": [
		{
			"employer": "Rattle Clack Entertainment",
			"title": "Audio/Visual Technician",
			"location": "Pitsburgh, PA",
			"dates": "June 2014 - Preset",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
		},{
			"employer": "Amis Trattoria",
			"title": "Server",
			"location": "Philadelphia, PA",
			"dates": "July 2012 - Present",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
		},{
			"employer": "South Philadelphia Tap Room",
			"title": "Manager/Bartender",
			"location": "Philadelphia, PA",
			"dates": "1900-1901",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
		},{
			"employer": "Caribou Cafe",
			"title": "General Manager",
			"location": "Philadelphia, PA",
			"dates": "1900-1901",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
		},{
			"employer": "Comedy Cellar",
			"title": "Server",
			"location": "New York, NY",
			"dates": "1900-1901",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
		},{
			"employer": "Timberlodge Steakhouse",
			"title": "Head Bartender",
			"location": "Roseville, MN",
			"dates": "1900-1901",
			"description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
		}
	]
	// These should probably be part of work history
	// 	{
	// 		"name": "Vestals",
	// 		"description": "Band stuff"
	// 	},{
	// 		"name": "September's Child",
	// 		"description": "Band stuff"
	// 	},{
	// 		"name": "Smashed Cat Studios",
	// 		"description": "Studio stuff"
	// 	}
	// ]
};

var education = {
	"schools": [
		{
			"name" : "Normandale Community College",
			"location" : "Bloomington, MN",
			"degree" : "Nope",
			"majors" : ["Engineering Prereqs"],
			"dates" : "200",
			"url" : "Put your course info here"
		},{
			"name" : "University of Minnesota",
			"location" : "Minneapolis,MN",
			"majors" : ["Liberal Arts", "Music"],
			"degree" : "nope",
			"dates": "200",
			"url" : "Put your course info here"
		},{
			"name" : "Cooper High School",
			"location" : "Plymouth, MN",
			"majors" : ["College Prep"],
			"degree" : "College Prep",
			"dates": "1998",
			"url" : "Put your course info here"
		}
	],
	"onlineCourses": [
		{
			"title" : "Front-End Nanodegree",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com/"
		},{
			"title" : "Front-End Nanodegree",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com/"
		}
	]
};

//////////////////////////////////
// All of the display functions //
//////////////////////////////////
bio.display = function() {
	//Declare variables for shorter lines later
	var name, role, welcomeMsg, picURL, contacts, skills;
	var mobile, email, twitter, github, blog, location;
	var cont = bio.contacts;
	var data = '%data%';

	//Replace the given HTML with object data
	//Header info
	name = HTMLbioName.replace(data, bio.name);
	role = HTMLbioRole.replace(data, bio.role);
	welcomeMsg = HTMLbioWelcomeMsg.replace(data, bio.welcomeMessage);
	picURL = HTMLbioPicURL.replace(data, bio.picURL);

	// Contact Info
	mobile = HTMLbioMobile.replace(data, cont.mobile);
	email = HTMLbioEmail.replace(data, cont.email);
	twitter = HTMLbioTwitter.replace(data, cont.twitter);
	github = HTMLbioGithub.replace(data, cont.github);
	blog = HTMLbioBlog.replace(data, cont.blog);
	location = HTMLbioLocation.replace(data, cont.location);

	//Append the new HTML to the page
	$('#header').prepend(name, role);
	$('#header').append(welcomeMsg, picURL);
	$('#topContacts').append(mobile, email, location);
	$('#footerContacts').append(mobile, email, github, blog, twitter);

	// TODO: Can be refined?
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		bio.skills.forEach(function(skill) {
			$('#skills').append(HTMLskills.replace(data, skill));
		});
	}
};

education.display = function() {
	// School Loop to replace and append
	this.schools.forEach(function(school) {
		var name, location, degree, dates, url, majors;
		var data = '%data%';

		// Replace with object data
		url = school.url;
		name = HTMLschoolName.replace(data, school.name).replace('#', url);
		location = HTMLschoolLocation.replace(data, school.location);
		degree = HTMLschoolDegree.replace(data, school.degree);
		dates = HTMLschoolDates.replace(data, school.dates);

		// Append new HTML
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(name + degree, dates, location);
		school.majors.forEach(function(major) {
			var mjr = HTMLschoolMajors.replace(data, major);
			$('.education-entry:last').append(mjr);
		});
	});
	// Append Online Course header
	$('#education').append(HTMLonlineClasses);
	// Online Course loop to replace and append
	this.onlineCourses.forEach(function(course) {
		var title, school, dates, url;
		var data = '%data%';

		//Replace with object data
		title = HTMLonlineTitle.replace(data, course.title).replace('#', course.url);
		school = HTMLonlineSchool.replace(data, course.school);
		dates = HTMLonlineDates.replace(data, course.dates);
		url = HTMLonlineURL.replace(data, course.url).replace('#', course.url);

		//Append new HTML
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(title + school, dates, url);
	});
};

projects.display = function() {
	// Project loop to replace and append
	this.projects.forEach(function(project) {
		var title, dates, desc;
		var data = '%data%';

		// Replace HTML with object data
		title = HTMLprojectTitle.replace(data, project.title);
		dates = HTMLprojectDates.replace(data, project.dates);
		desc = HTMLprojectDescription.replace(data, project.description);

		// Append to page
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(title, dates, desc);

		// All of the above for the image array
		project.images.forEach(function(image){
			var projImage = HTMLprojectImage.replace(data, image);
			$('.project-entry:last').append(projImage);
		});
	});
};

work.display = function() {
	// Job Loop to replace and append data
	this.jobs.forEach(function(job) {
		// Declare vars for shorter lines later
		var employer, title, where, dates, desc;
		var data = '%data%';

		// Replace given HTML with data from object
		employer = HTMLworkEmployer.replace(data, job.employer);
		title = HTMLworkTitle.replace(data, job.title);
		dates = HTMLworkDates.replace(data, job.dates);
		where = HTMLworkLocation.replace(data, job.location);
		desc = HTMLworkDescription.replace(data, job.description);

		//Append the replaced HTML to the page
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(employer + title, dates, where, desc);
	});
};

////////////////////////////
// Call display functions //
////////////////////////////
bio.display();
projects.display();
work.display();
education.display();

///////////////////////////////
// Extras from the JS course //
///////////////////////////////

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

function inName() {
	var nameArray = bio.name.split(' ');
	firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	lastName = nameArray[1].toUpperCase();
	return firstName + ' ' + lastName;
}
