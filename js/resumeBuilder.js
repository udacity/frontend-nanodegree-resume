// Define the bio object
var bio = {
	name: 'Toni Rib',
	role: 'Front End Web Developer',
	contacts: {
		email: 'tonimarierib@gmail.com',
		phone: '612-670-6397',
		github: 'tonirib',
		linkedin: 'http://linked.com/in/ToniRib',
		location: 'Denver, CO'},
	welcomeMessage: 'Welcome to my resume!',
	skills: ['HTML', 'CSS', 'JavaScript', 'R', 'Git', 'GitHub','Visual Basic',
	'Perl', 'MATLAB', 'Ruby', 'Snowboarding', 'Running Long Distances'],
	bioPic: 'images/cathat.jpg'
};

// Define the educatino object
var education = {
	schools:
		{
			name: 'USC',
			location: 'Los Angeles, CA',
			degree: 'BS',
			majors: 'Astronautical Engineering',
			dates: '2007 - 2011',
			url: 'www.usc.edu'
		},
	onlineCourses: [
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
	]
};

// Define the work object
var work = {
	jobs: [
		{
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
	]
};

// Define the project object
var project = {
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
	]
};
// Add the contact info
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.phone);
$('#header').prepend(formattedMobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
$('#header').prepend(formattedEmail);


// Add name and role to the header of the page
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

// Add biopic to the header of the page
var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
$('#header').prepend(formattedBioPic);

// Add welcome message to the header of the page
var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
$('#header').append(formattedMsg);


/* Check whether there are skills in the bio object and display skills
 if there are */
if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
		$('#skills').append(formattedSkill);
	}
}

// Loop through each job in the work object, format, and append to page
function displayWork() {
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

// Call the displayWork function to add previous jobs to the page
displayWork();

// locationizer function
function locationizer(work_obj) {
	var locationArray = [];

	for (var job in work_obj.jobs) {
		locationArray.push(work_obj.jobs[job].location);
	}

	return locationArray;
}

// Add the project display method
project.display = function() {
	for (var entry in project.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', project.projects[entry].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', project.projects[entry].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', project.projects[entry].description);
		$('.project-entry:last').append(formattedDescription);

		if (project.projects[entry].images.length > 0) {
			for (var image in project.projects[entry].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', project.projects[entry].images[image]);
				$('.project-entry:last').append(formattedImage);
			}

		}
	}
}

// call the project display method
project.display();

// Show the map
// $('#mapDiv').append(googleMap);