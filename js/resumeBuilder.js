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
		"location": "Stanford, CA"
	},
	"welcomeMessage": "Stay hungry. Stay foolish.",
	"skills": [
		"Computer Vision", "Machine Learning", "Face Recognition", "Image Processing",
		"Virtual Reality", "Electronics", "Embedded Programming", "C", "C++", "Python",
		"Java", "HTML", "JavaScript", "Markdown", "SQL", "Matlab", "LaTeX", "Linux",
		"Bash", "Git"
	],
	"bioPic": "images/me.jpg"
};

function inName(name) {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

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

	$("#main").append(internationalizeButton);
	$("#mapDiv").append(googleMap);
}

var work = {
	"jobs": [
		{
			"employer": "zSpace, Inc.",
			"title": "Software Engineer Internship",
			"location": "Sunnyvale, CA, US",
			"dates": "June 2015 - September 2015",
			"description": "Developed real-time 3D computer vision algorithms in C++ and Matlab for the zSpace virtual reality platform.",
			"url": "http://zspace.com/"
		},
		{
			"employer": "Stanford University",
			"title": "Research Assistant",
			"location": "Stanford, CA, US",
			"dates": "September 2014 - January 2015",
			"description": "Proposed a novel approach for pose estimation. See project 'Pose Estimation Based on 3D Models' for details.",
			"url": "http://www.stanford.edu/"
		}
	]
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		if (work.jobs[job].url !== "") {
			formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
		}
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
			"dates": "January 2015 - March 2015",
			"description": "Proposed a full-view scene reconstruction algorithm based on Ricoh Theta fisheye camera. Developed the fisheye camera model, epipolar geometry and triangulation method. Reconstructed the 360 &deg scene with only two captures. Generalized the method to multi-camera reconstruction, also proposed a dense reconstruction approach on rectified images. Developed a Matlab GUI.",
			"images": ["images/projects/ricoh_theta.jpg", "images/projects/3dRec_1.jpg", "images/projects/3dRec_2.jpg", "images/projects/3dRec_3.jpg"
			],
			"url": "http://arxiv.org/pdf/1506.06273v1.pdf"
		},
		{
			"title": "Pose Estimation Based on 3D Models",
			"dates": "September 2014 - January 2015",
			"description": "Supervised by professor Leo Guibas. Aimed to estimate the pose of an object in the image. Designed a pose estimation algorithm based on 3D shape models; refined the algorithm by iteratively learn from classification results and in turn improve classification algorithm; tested on rendered image dataset and real image dataset; achieved 96% and 89% accuracy respectively.",
			"images": ["images/projects/chair_result.gif", "images/projects/ShapeNet.jpg", "images/projects/render_patch.jpg", "images/projects/hog_patch.jpg"
			],
			"url": "http://arxiv.org/pdf/1506.06274v1.pdf"
		},
		{
			"title": "Gender Classification Based on Face Analysis",
			"dates": "February 2014 - June 2014",
			"description": "Designed a local feature-based gender classification pipeline: image preprocessing – local features extraction (SIFT, SURF, FAST, etc.) – visual Bag-of-Words model – general classification (SVM & Random Forest). Programmed in Python with OpenCV & scikit-learn; improved the algorithm by applying spatial pyramid and synthesizing features; achieved a state-of-the-art classification accuracy on The Images of Groups Dataset and LFW database.",
			"images": ["images/projects/gender.gif", "images/projects/gender.jpg", "images/projects/genderFeats.jpg"
			],
			"url": ""
		},
		{
			"title": "Robot Programming",
			"dates": "August 2013",
			"description": "Intended to design an obstacle avoidance algorithm for robot car with microcontroller ATmega328; designed the algorithm, programmed in C on Arduino platform, conducted field test.",
			"images": ["images/projects/robot.gif", "images/projects/robot.jpg",
			],
			"url": ""
		},
		{
			"title": "Driver Fatigue Detection Based on Face Recognition",
			"dates": "June 2013 - December 2013",
			"description": "Intended to detect drivers' fatigue using webcam. Based on face tracking, implemented feature extraction and Bayesian Network algorithm; built the Bayesian Network model for fatigue, realized training and inference algorithm in Matlab/C++; conducted simulating experiments & created the training dataset; and wrote draft thesis in latex.",
			"images": ["images/projects/fatigue.gif", "images/projects/fatigueExp.jpg"
			],
			"url": "http://www.ee.buaa.edu.cn/xumfiles/itrack.htm"
		}
	]
};

project.display = function() {
	for (proj in project.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
		if (project.projects[proj].url !== "") {
			formattedTitle = formattedTitle.replace("#", project.projects[proj].url);
		}
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
		},
		{
			"name": "Universidad Politécnica de Madrid",
			"location": "Madrid, Spain",
			"degree": "Exchange Student",
			"majors": ["CS"],
			"dates": "January 2014 - June 2014",
			"url": "http://www.dia.fi.upm.es/~pcr/research.html"
		},
		{
			"name": "Technische Universität München",
			"location": "Munich, Germany",
			"degree": "Summer Session",
			"majors": ["Engineering and Management"],
			"dates": "August 2013",
			"url": "http://www.tum.de/en/homepage/"

		},
		{
			"name": "University of California, Berkeley",
			"location": "Berkeley, CA, US",
			"degree": "Summer Session",
			"majors": ["Peace and Conflict Studies"],
			"GPA": 4.00,
			"dates": "July 2012",
			"url": "http://www.berkeley.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Relational Databases",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/intro-to-relational-databases--ud197"
		},
		{
			"title": "Android Development for Beginners",
			"school": "Udacity/Google",
			"dates": 2015,
			"url": "https://www.udacity.com/course/android-development-for-beginners--ud837"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{
			"title": "Intro to iOS App Development with Swift",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/intro-to-ios-app-development-with-swift--ud585"
		},
		{
			"title": "Linux Command Line Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/linux-command-line-basics--ud595"
		},
		{
			"title": "Introduction to Java, Season 1",
			"school": "iMooc",
			"dates": 2015,
			"url": "http://www.imooc.com/learn/85"
		},
		{
			"title": "Introduction to Java, Season 2",
			"school": "iMooc",
			"dates": 2015,
			"url": "http://www.imooc.com/learn/124"
		},
		{
			"title": "Machine Learning",
			"school": "Coursera",
			"dates": 2014,
			"url": "https://www.coursera.org/learn/machine-learning"
		}
	]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		if (education.schools[school].url !== "") {
			formattedName = formattedName.replace("#", education.schools[school].url);		
		}
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		if (education.onlineCourses[course].url !== "") {
			formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);		
		}
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
	}
}

bio.display();
work.display();
project.display();
education.display();

var travel = {
	"countries": [
		{
			"name": "Canada",
			"dates": "June 2015",
			"cities": ["Toronto"]
		},
		{
			"name": "Taiwan",
			"dates": "July 2014",
			"cities": ["Taipei", "Taichung City", "Chiayi City", "Kaohsiung City", "Kenting", "Hualien County"]
		},
		{
			"name": "Spain",
			"dates": "January 2014 - June 2014",
			"cities": ["Barcelona", "Valencia", "Madrid", "Toledo", "Sevilla", "Cordoba", "Granada", "Cuenca", "Salamanca", "Segovia"]
		},
		{
			"name": "Italy",
			"dates": "April 2014",
			"cities": ["Rome", "Venice", "Florence", "Pisa", "Milan"]
		},
		{
			"name": "Vatican City",
			"dates": "April 2014",
			"cities": ["Vatican City"]
		},
		{
			"name": "Switzerland",
			"dates": "April 2014",
			"cities": ["Zurich, Lucerne, Bern, Geneva"]
		},
		{
			"name": "Germany",
			"dates": "August 2013",
			"cities": ["Munich"]
		},
		{
			"name": "Austria",
			"dates": "August 2013",
			"cities": ["Salzburg"]
		},
		{
			"name": "USA",
			"dates": "",
			"cities": ["San Francisco", "Los Angeles", "Las Vegas", "Boston", "New York", "Philadelphia"]
		},
		{
			"name": "China",
			"dates": "",
			"cities": ["Urumqi", "Haikou", "Sanya", "Hong Kong", "Hangzhou", "Shanghai", "Suzhou", "Beijing", "Tianjin", "Qinhuangdao", "Shenyang", "Jinan"]
		}
	]
};