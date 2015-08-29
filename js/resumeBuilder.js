var bio = {
	"name": "Chuiwen Ma",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "650-796-0930",
		"email": "chuiwenm@stanford.edu",
		"github": "machuiwen",
		"linkedin": "chuiwenma",
		"twitter": "",
		"blog": "",
		"location": "Stanford, CA, US",
	},
	"welcomeMessage": "Stay hungry. Stay foolish.",
	"skills": [
		"Software Engineering", "Computer Vision", "Machine Learning",
		"Virtual Reality", "Image Processing", "Electronics", 
		"Embedded Programming", "C", "C++", "Java", "Python", "HTML", 
		"JavaScript", "Matlab", "LaTeX", "Linux", "Bash", "Git"
	],
	"bioPic": "images/me.jpg"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	$("#topContacts").append(formattedLinkedin);
	$("#footerContacts").append(formattedLinkedin);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
}

var work = {
	"jobs": [
		{
			"employer": "zSpace, Inc.",
			"title": "Software Engineer Internship",
			"dates": "June 2015 - Present",
			"description": "foo"
		},
		{
			"employer": "Uber",
			"title": "Driver",
			"dates": "July 2015 - Present",
			"description": "foo"
		}		
	]
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

var project = {
	"projects": [
		{
			"title": "3D Reconstruction from Full-view Fisheye Camera",
			"dates": "March 2015",
			"description": "Proposed a full-view scene reconstruction algorithm based on Ricoh Theta fisheye camera. Developed the fisheye camera model, epipolar geometry and triangulation method. Reconstructed the 360 degree scene with only two captures. Generalized the method to multi-camera reconstruction, also proposed a dense reconstruction approach on rectified images. Developed a Matlab GUI.",
			"images": [ "images/me.jpg"
			],
			"report": "http://arxiv.org/pdf/1506.06273v1.pdf",
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Stanford University",
			"location": "Stanford, CA, US",
			"degree": "MS",
			"majors": ["EE"],
			"GPA": 4.0,
			"dates": "2014 - 2016",
			"url": "http://www.stanford.edu"
		},
		{
			"name": "Beihang University",
			"location": "Beijing, China",
			"degree": "BA",
			"majors": ["EE"],
			"GPA": 3.92,
			"dates": "2010 - 2014",
			"url": "http://ev.buaa.edu.cn"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

project.display = function() {
	for (proj in project.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
		$(".project-entry:last").append(formattedDescription);

		if (project.projects[proj].images.length > 0) {
			for (image in project.projects[proj].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", project.projects[proj].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

bio.display();
work.display();
project.display();

$("#mapDiv").append(googleMap);