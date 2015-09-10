//Bio

var bio = {
	'name': 'Aline Alencar',
	'role': 'Front-End Web Developer',
	'contacts': {
		'mobile': '5555555555',
		'email': 'me@gmail.com',
		'github': 'alinesobral',
		'twitter': '@me',
		'location': 'Toronto, ON'
		},
	'bioPic': 'http://i59.tinypic.com/90sncz.jpg',
	'welcome': 'Hi! My name is Aline, I\'m 23 and I live in Toronto, ON.',
	'skills': ['cooking', 'petting dogs', 'time travelling', 'saving the world'],
	'display': function() {
		var formattedheaderRole = HTMLheaderRole.replace('%data%', this.role);
		$('#header').prepend(formattedheaderRole);
		var formattedHeaderName = HTMLheaderName.replace('%data%', this.name);
		$('#header').prepend(formattedHeaderName);
		var formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);
		$('#topContacts').append(formattedMobile);
		var formattedEmail = HTMLemail.replace('%data%', this.contacts.email);
		$('#topContacts').append(formattedEmail);
		var formattedGithub = HTMLgithub.replace('%data%', this.contacts.github);
		$('#topContacts').append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace('%data%', this.contacts.twitter);
		$('#topContacts').append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace('%data%', this.contacts.location);
		$('#topContacts').append(formattedLocation);
		var formattedBioPic = HTMLbioPic.replace('%data%', this.bioPic);
		$('#header').append(formattedBioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcome);
		$('#header').append(formattedWelcomeMsg);
		//Skills
		if (this.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			for (var i=0; i<this.skills.length; i++) {
				var formattedSkill = HTMLskills.replace('%data%', this.skills[i]);
				$('#skills').append(formattedSkill);
				}
		}
		$('#topContacts').children().clone().appendTo('#footerContacts');
	},
};

//Work Experience
var work = {
	'job': [ 
		{
		'employer': 'Doctor',
		'title': 'Companion',
		'dates': 'A while ago - Present',
		'location': 'London',
		'description': 'Responsible for saving the planet Earth, among other planets, from all evil.',
		'url': 'http://www.bbc.co.uk/programmes/b006q2x0'
		},
		{
		'employer': 'University of Toronto',
		'title': 'Research Assistant',
		'dates': '2013',
		'location': 'Toronto, ON',
		'description': 'Conducted a literature and web review of human-machine interface design techniques to enable navigation in large information spaces.',
		'url': 'https://www.mie.utoronto.ca/'
		},
		{
		'employer': 'UEPA',
		'title': 'Website Administrator',
		'dates': '2011 - 2012',
		'location': 'Belem, Brazil',
		'description': 'Responsible for updating, creating posts and making style changes on websites.',
		'url': 'http://www.uepa.br/portal/index.php'
		}
	],
	'display': function() {
		for (var item in this.job) {
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', this.job[item].employer).replace('#', work.job[item].url);
			var formattedTitle = HTMLworkTitle.replace('%data%', this.job[item].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$('.work-entry:last').append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace('%data%', this.job[item].dates);
			$('.work-entry:last').append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace('%data%', this.job[item].location);
			$('.work-entry:last').append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace('%data%', this.job[item].description);
			$('.work-entry:last').append(formattedDescription);
		}
	}
};

//Projects
var projects = {
	'projects': [ 
		{
		'title': 'About me',
		'dates': 2015,
		'description': 'Project 0 of Udacity\'s Front-End Web Development Nanodegree.',
		'images': 'http://i.imgur.com/MIMNyl1.png',
		'url': 'http://codepen.io/aline/full/YXOKwP/'
		},
		{
		'title': 'Portfolio',
		'dates': 2015,
		'description': 'Project 1 of Udacity\'s Front-End Web Development Nanodegree.',
		'images': 'http://i.imgur.com/uIqvWsj.png',
		'url': 'http://alinesobral.github.io/Project-1/'
		}
	],
	'display': function() {
		for (var project in this.projects) {
			$('#projects').append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects[project].title).replace('#', projects.projects[project].url);
			$('.project-entry:last').append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
			$('.project-entry:last').append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[project].description);
			$('.project-entry:last').append(formattedDescription);
			if (this.projects[project].images.length > 0) {
				var formattedImage = HTMLprojectImage.replace('%data%', this.projects[project].images);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};

//Education
var education = {
	'schools': [
		{
		'name': 'University of Toronto',
		'degree': 'Bachelor\'s Degree',
		'dates': '2012 - 2013',
		'location': 'Toronto, ON',
		'major': 'Industrial Engineering',
		'url': 'https://www.mie.utoronto.ca/'
		},
		{
		'name': 'UEPA',
		'degree': 'Bachelor\'s Degree',
		'dates': '2010 - 2014',
		'location': 'Belém, Brazil',
		'major': 'Industrial Engineering',
		'url': 'http://www.uepa.br/portal/index.php'
		}
	],
	'onlineCourses': [
		{
			'title': 'Javascript Basics',
			'school': 'Udacity',
			'dates': 2015,
			'url': 'http://www.udacity.com/course/ud804'
		},
		{
			'title': 'How to Use Git and GitHub',
			'school': 'Udacity',
			'dates': 2015,
			'url': 'https://www.udacity.com/course/viewer#!/c-ud775-nd/'
		},
		{
			'title': 'Responsive Web Design Fundamentals',
			'school': 'Udacity',
			'dates': 2015,
			'url': 'https://www.udacity.com/course/viewer#!/c-ud893-nd'
		},
	],
	'display': function() {
		for (var school in this.schools) {
			$('#education').append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace('%data%', this.schools[school].name).replace('#', this.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace('%data%', this.schools[school].degree);
			var formattedNameDegree = formattedName + formattedDegree;
			$('.education-entry:last').append(formattedNameDegree);
			var formattedDates = HTMLschoolDates.replace('%data%', this.schools[school].dates);
			$('.education-entry:last').append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace('%data%', this.schools[school].location);
			$('.education-entry:last').append(formattedLocation);
			var formattedMajor = HTMLschoolMajor.replace('%data%', this.schools[school].major);
			$('.education-entry:last').append(formattedMajor);
		}
		$('#education').append(HTMLonlineClasses);
		for (var course in this.onlineCourses) {
			$('#education').append(HTMLonlineStart);
			var formattedTitle = HTMLonlineTitle.replace('%data%', this.onlineCourses[course].title).replace('#', education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace('%data%', this.onlineCourses[course].school);
			var formattedTitleSchool = formattedTitle+ formattedSchool;
			$('.online-entry:last').append(formattedTitleSchool);
			var formattedOnlineCoursesDates = HTMLonlineDates.replace('%data%', this.onlineCourses[course].dates);
			$('.online-entry:last').append(formattedOnlineCoursesDates);
			//var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url).replace('#', education.onlineCourses[course].url);
			//$('.education-entry:last').append(formattedURL);
		}
	}
};

//Map
$('#mapDiv').append(googleMap);

//Calling all functions
bio.display();
work.display();
projects.display();
education.display();
