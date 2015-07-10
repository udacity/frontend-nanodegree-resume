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
			'inspections and ensuring all processes are followed.'
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
			images:['images/portfolio_small.jpg',
			'images/portfolio_large.jpg']
		},
		{
			title: 'Insomniacs Waking Dream Blog',
			dates: 'July 2015 - present',
			description: 'Personal online blog about life and' +
			' changing careers.',
			images: 'images/blog.jpg'
		}
	]
};

/* Check whether there are skills in the bio object and display skills
 if there are */
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

// Loop through each job in the work object, format, and append to page
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formattedJobEmployer + formattedJobTitle);

	var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDatesWorked);

	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLocation);

	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);
}
