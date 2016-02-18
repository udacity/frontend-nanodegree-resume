
//below is JSON nested information for the different resume sections (object literal notation)

var bio = {
	'name' : 'Jamey Stiling',
	'role' : 'Web Developer and Engineer',
	'welcome': 'Welcome to my Resume Page!  I am looking for an exicting opportunity to put my Front-End Development Skills to use.',
	'contacts': {
		'email': ' jastiling@gmail.com',
		'phone': ' 707-386-9032',
		'github': ' @Rufagus',
		'twitter': '#notwitteraccount',
		'location': ' Sherman Oaks,CA',
		'blog': 'Blog Coming Soon!'
	},
	'skills' : [
		'HTML', ' CSS', ' JavaScript', ' Programming', ' Automation', ' Sensors'
	],
	'bioPic': 'images/mepic.jpg',
	'display':'function'
}


var work = {
	'jobs': [
		{
		'title': 'Web Developer',
		'employer': 'Freelance',
		'dates': 'Current',
		'location': 'Los Angeles, CA',
		'description':"Front End Web Developer.  Bringing designs to life with HTML, CSS, and JavaScipt."
		},
		{
		'title': 'Automation Engineer',
		'employer':'Process Automation Solutions',
		'dates': '2015-Current',
		'location': 'Thousand Oaks, CA',
		'description':'Design, programming, and testing of industrial process automation systems for the biotech industry'
		},

		{
		'title': 'Sales Engineer',
		'employer': 'ifm efector',
		'dates': '2014-2015',
		'location': 'Cypress, CA',
		'description': ' Develop a thorough understanding of the customer’s business model and machine and application requirements to determine the best fit for ifm efector solutions and overall return on investment.  Conquer application challenges in the design room as well as on the plant floor.'
		},

		{
		'title': 'Applications Engineer',
		'employer': 'Lin Engineering',
		'dates': '2012-2013',
		'location': 'Morgan Hill,CA',
		'description':'Creatively analyze complex, vague, and difficult customer electrical and mechanical engineering requirements through drawings, plans or other information to develop and prepare a detailed proposal, which describes: type of equipment needed, price, delivery time and financial terms for the product.'
		}

	]
}


var education = {
	'schools': [
		{
		'name': 'California State University, Chico',
		'location': 'Chico,CA,US',
		'degree': 'BS',
		'majors': ['Mechatronic Engineering'],
		'dates': '2009',
		'url': 'string'
		},
		{
		'name': 'University of California, Davis',
		'location': 'Davis,CA,US',
		'degree': 'MS',
		'majors': ['Mechanical and Aeronautical Engineering'],
		'dates': '2012',
		'url': 'string'
		}
	],
	'onlineCourses': [
		{
		'title':'JavaScript Basics',
		'school': 'Udacity',
		'dates': '2015',
		'url': 'https://www.udacity.com/course/ud804'
		},
		{
		'title':'Intro to HTML and CSS',
		'school': 'Udacity',
		'dates': '2015',
		'url': 'https://www.udacity.com/course/ud304'
		},
		{
		'title':'Responsive Web Design Fundamentals',
		'school': 'Udacity',
		'dates': '2015',
		'url': 'https://www.udacity.com/course/ud893'
		},
		{
		'title':'Responsive Images',
		'school': 'Udacity',
		'dates': '2015',
		'url': 'https://www.udacity.com/course/ud882'
		},
		{
		'title':'How to Use Git and GitHub',
		'school': 'Udacity',
		'dates': 'In Progress',
		'url': 'https://www.udacity.com/course/ud775'
		}
	],

}

var projects = {
	'projects':[
		{
		'title': 'Portfolio-Site',
		'dates':'August 2015',
		'description':'A list of projects',
		'images': [
			'images/project1_pic1.jpg'
		]
		},
		{
		'title': 'My Second Project',
		'dates':'TBD',
		'description':'TBD',
		'images': [
			'images/fry.jpg'
		]
		}
  ],
}


//replace %data% placeholder in helper.js with actual data

//bio section function below

bio.display = function() {

//Role and Name
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
$('#header').prepend(formattedRole);
var formattedName = HTMLheaderName.replace('%data%',bio.name);
$('#header').prepend(formattedName);

//biopic section
var formattedBioPic = HTMLbioPic.replace('%data%',bio.bioPic);
$('#header').append(formattedBioPic);

//contacts section
var formattedPhone = HTMLmobile.replace('%data%',bio.contacts.phone);
$('#topContacts').append(formattedPhone);
$('#footerContacts').append(formattedPhone);
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
$('#topContacts').append(formattedEmail);
$('#footerContacts').append(formattedEmail)
var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
$('#topContacts').append(formattedTwitter);
$('#footerContacts').append(formattedTwitter);
var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
$('#topContacts').append(formattedGithub);
$('#footerContacts').append(formattedGithub);
var formattedBlog = HTMLblog.replace('%data%',bio.contacts.blog)
$('#topContacts').append(formattedBlog);
$('#footerContacts').append(formattedBlog);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
$('#topContacts').append(formattedLocation);
$('#footerContacts').append(formattedLocation);

//welcome message
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcome);
$('#header').append(formattedWelcomeMsg);

//skills section
$('#header').append(HTMLskillsStart);
var sklen = bio.skills.length;
for (var i = 0; i < sklen; i++) {
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
	$('#skills').append(formattedSkill);
}

}
bio.display();


//Education section display function below
education.display=function(){
	var edlen = education.schools.length;
	for (var i = 0; i < edlen; i++) {
		$('#education').append(HTMLschoolStart)
		var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%',education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools[i].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',education.schools[i].majors);
		var formattedEducation = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation +formattedSchoolMajor;
		$('.education-entry:last').append(formattedEducation);
	}

	$('#education').append(HTMLonlineClasses);

	var edulen = education.onlineCourses.length;
	for (var i = 0; i < edulen; i++) {
		$('#education').append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[i].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[i].school);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%',education.onlineCourses[i].dates);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%',education.onlineCourses[i].url);
		var formattedOnline = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates +formattedOnlineURL;
		$('.education-entry:last').append(formattedOnline);
	}
}
education.display();

//work display function below
work.display=function() {
	var joblen = work.jobs.length;
	for (var i = 0; i < joblen; i++) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[i].title);
		var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[i].location);
		var formattedDate = HTMLworkDates.replace('%data%',work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[i].description);
		var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription;
		$('.work-entry:last').append(formattedJob);
	}
}
work.display();


//Projects display function (encapsulated within the projects object)
projects.display = function(){
	$('#projects').append(HTMLprojectStart);
	for (project in projects.projects){
		var formattedTitle = HTMLprojectTitle.replace('%data%',projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace('%data%',projects.projects[project].dates);
		$('.project-entry:last').append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace('%data%',projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		for(image in projects.projects[project].images){
		var formattedImages = HTMLprojectImage.replace('%data%',projects.projects[project].images[image]);
		$('.project-entry:last').append(formattedImages);
		}
	}
}
projects.display();

//see map
$('#mapDiv').append(googleMap);

//collect x and y click values and passes them to logClicks(x,y)

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});


//TODO: addition of the internationalizebutton to main div.

// $('#main').append(internationalizeButton);
// function inName(){

// 	var nameArray = bio.name.split(' ');
// 	nameArray[1]= nameArray[1].toUpperCase();
// 	nameArray[0]= nameArray[0].slice(0,1).toUpperCase()+ nameArray[0].slice(1).toLowerCase()
// 	var newName = nameArray[0] + ' ' + nameArray[1];

// 	return newName;
// }

