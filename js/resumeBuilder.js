// TODO: convert the 4 objects to JSON format and run them through the JSON linter
/* TODO: Check out template and update school & class titles to replace # with the
		 correct URL, then see if you can delete the actual url display */

// Define the bio object based on the given template
var bio = {
	name: 'Toni Rib',
	role: 'Front End Web Developer',
	contacts: {
		email: 'tonimarierib@gmail.com',
		phone: '612-670-6397',
		github: 'tonirib',
		twitter: '@leelaeltigre',
		location: 'Denver, CO'},
	welcomeMessage: 'Welcome to my resume!',
	skills: ['HTML', 'CSS', 'JavaScript', 'R', 'Git', 'GitHub','Visual Basic',
	'Perl', 'MATLAB', 'Ruby', 'Snowboarding', 'Running Long Distances'],
	bioPic: 'images/cathat.jpg',
	display: function() {
		/* This function uses jQuery to modify the index.html file using
		data from the bio object. Main information is added to the header div,
		while contact information is added to topContacts and footerContacts */

		// Add welcome message to the header of the page
		var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#header').prepend(formattedMsg);

		// Add the contact info to the header and footer contact sections
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.phone);
		$('ul#topContacts, ul#footerContacts').prepend(formattedMobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		$('ul#topContacts, ul#footerContacts').prepend(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		$('ul#topContacts, ul#footerContacts').prepend(formattedTwitter);
		var formattedGitub = HTMLgithub.replace('%data%', bio.contacts.github);
		$('ul#topContacts, ul#footerContacts').prepend(formattedGitub);

		// Add name and role to the header of the page
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);

		// Add biopic to the header of the page
		var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
		$('#header').prepend(formattedBioPic);

		/* Check whether there are skills in the bio object and display all
		skills if there are */
		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);

			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
				$('#skills').append(formattedSkill);
			}
		}
	}
};

// Define the education object
var education = {
	schools:
		{
			name: 'University of Southern California',
			location: 'Los Angeles, CA',
			degree: 'Bachelor of Science',
			majors: 'Astronautical Engineering',
			dates: '2011',
			url: 'www.usc.edu'
		},
	onlineCourses: [
	// TODO: Update 'dates' to be date finished
	// TODO: Update title and url to be COURSES not degrees (include all Coursera)
		{
			title: 'Front End Web Development Nanodegree',
			school: 'Udacity',
			dates: 'June 2015 - present',
			url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		},
		{
			title: 'Data Science Speclization',
			school: 'Coursera',
			dates: 'January 2015 - present',
			url: 'https://www.coursera.org/specialization/jhudatascience/1'
		}
	],
	display: function() {
		// Display for the school object
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools.name);
		$('.education-entry:last').append(formattedSchoolName);

		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools.degree);
		$('.education-entry:last').append(formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools.dates);
		$('.education-entry:last').append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools.location);
		$('.education-entry:last').append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools.majors);
		$('.education-entry:last').append(formattedSchoolMajor);

		var formattedSchoolUrl = HTMLschoolURL.replace('%data%', education.schools.url);
		$('.education-entry:last').append(formattedSchoolUrl);

		// Display for the onlineCourses object
		$('#education').append(HTMLonlineClasses);

		for (var course in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
			$('.education-entry:last').append(formattedOnlineTitle);

			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
			$('.education-entry:last').append(formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
			$('.education-entry:last').append(formattedOnlineDates);

			var formattedOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
			$('.education-entry:last').append(formattedOnlineUrl);
		}
	}
};

// Define the work object
var work = {
	jobs: [
		{
			// TODO: Add to job desriptions based on actual resume.
			title: 'Senior Systems Engineer',
			employer: 'Raytheon',
			dates: 'August 2014 - present',
			location: 'Aurora, CO',
			description: 'Manage and verify requirements for science' +
			' mission data on the Joint Polar Satellite System' +
			' Common Ground System program.'
		},
		{
			title: 'System & Software Safety Engineer',
			employer: 'Raytheon',
			dates: 'June 2013 - August 2014',
			location: 'Aurora, CO',
			description: 'Ensure the safety of the system by identifying' +
			' hazards and implementing appropriate controls.'
		},
		{
			title: 'Quality Engineer',
			employer: 'Boeing',
			dates: 'October 2011 - June 2013',
			location: 'El Segundo, CA',
			description: 'Ensure quality of the satellite by performing' +
			' inspections and ensuring all processes are followed.'
		}
	],
	display: function() {
		for (var job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			var formattedJobEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var formattedJobTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			$('.work-entry:last').append(formattedJobEmployer + formattedJobTitle);

			var formattedDatesWorked = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			$('.work-entry:last').append(formattedDatesWorked);

			var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			$('.work-entry:last').append(formattedWorkLocation);

			var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			$('.work-entry:last').append(formattedWorkDescription);
		}
	}
};

// Define the project object
var projects = {
	projects: [
		{
			title: 'Portfolio Site',
			dates: 'June 2015 - July 2015',
			description: 'Online responsive portfolio created for' +
			' Udacity\'s Front End Web Developer Nanodegree.',
			images:['images/resize_portfolio_large_500.png']
		},
		{
			title: 'Insomniacs Waking Dream Blog',
			dates: 'July 2015 - present',
			description: 'Personal online blog about life and' +
			' changing careers.',
			images: ['images/resize_blog.png']
		}
	],
	display: function() {
		for (var entry in projects.projects) {
			$('#projects').append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[entry].title);
			$('.project-entry:last').append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[entry].dates);
			$('.project-entry:last').append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[entry].description);
			$('.project-entry:last').append(formattedDescription);

			if (projects.projects[entry].images.length > 0) {
				for (var image in projects.projects[entry].images) {
					var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[entry].images[image]);
					$('.project-entry:last').append(formattedImage);
				}

			}
		}
	}
};


// locationizer function
function locationizer(work_obj) {
	var locationArray = [];

	for (var job in work_obj.jobs) {
		locationArray.push(work_obj.jobs[job].location);
	}

	return locationArray;
}

// Call all of the display methods for the four main objects
// to display the content to the page
bio.display();
education.display();
work.display();
projects.display();

// Show the map
// $('#mapDiv').append(googleMap);