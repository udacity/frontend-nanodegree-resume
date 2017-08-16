/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
	"name": "Ziyi Wang",
	"role": "Student",
	"contactInfo": {
		"mobile": "18618106397",
		"email": "wonziyi@126.com",
		"github": "comusr",
		"location": "Beijing"
	},
	"welcomeMessage": "Hello World",
	"skills": ["Matlab","Machine Learning","C","HTML"],
	"biopic": "images/fry.jpg",
	"display": function (){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").prepend(formattedName, formattedRole, formattedBiopic, formattedWelcomeMsg);

		var formattedMobile = HTMLmobile.replace("%data%",bio.contactInfo.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contactInfo.location);
		$("#topContacts, #footerContacts").prepend(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

		if (bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);

			bio.skills.forEach(function (skill){
				var formattedSkill = HTMLskills.replace("%data%", skill);
				$("#skills").append(formattedSkill);
			})
		};

	}
}
bio.display();

var work = {
	"jobs": [
	{
		"title": "Deliver boy",
		"employer": "Google",
		"location": "Beijing",
		"dates": "2017.7-Now",
		"description": "Deliver staffs"
	},
	{
		"title": "Machine Learning Developer",
		"employer": "中科院",
		"location": "Beijing",
		"dates": "2016.7-2017-8",
		"description": "Use Matlab detecting blink rate"
	}
	],
	"display":  function() {
		work.jobs.forEach(function (job){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedLocation  = HTMLworkLocation.replace("%data%", job.location);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description)

			$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
		});
	}
};
work.display();

var education = {
	"schools": [
	{
		"name": "USTB",
		"city": "Peking, CN",
		"degree": "Bechalor",
		"dates": "2015.8-2019.6",
		"major": ["Mathmetic","Pilot Class of Science"]
	},
	{
		"name": "UCSD",
		"city": "San Diego, CA, US",
		"degree": "Exchange",
		"dates": "2017.9-2018.6",
		"major": ["Mathmetic"]
	}
	],
	"onlineCourses": [
	{
		"title": "front-end nanodegree",
		"school": "Udacity",
		"dates": "2017.5-2017.8",
		"url": "https://cn.udacity.com"
	},
	{
		"title": "Machine Learning",
		"school": "Coursera",
		"dates": "2015.12-2016.3",
		"url": "https://www.coursera.org"
	}
	],
	"display": function(){
		education.schools.forEach(function (school){
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", school.name);
			var formattedDegree =  HTMLschoolDegree.replace("%data%",school.degree);
			var formattedNameDegree = formattedName + formattedDegree;
			var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",school.city);

			$(".education-entry:last").append(formattedNameDegree,formattedDates,formattedLocation);

			if (school.major.length > 0){
				school.major.forEach(function (major){
					var formattedMajor = HTMLschoolMajor.replace("%data%", major);

					$(".education-entry:last").append(formattedMajor);				});
			}
		});
		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses)
			
			education.onlineCourses.forEach(function (course){
				$("#education").append(HTMLschoolStart);

				var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
				var formattedTitleSchool = formattedTitle + formattedSchool;
				var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
				var formattedUrl = HTMLonlineURL.replace("%data%",course.url);

				$(".education-entry:last").append(formattedTitleSchool, formattedDates, formattedUrl);
		}) 
		};
	}
};
education.display();

var projects = {
	"projects": [{
            "title": "Web page collection",
            "dates": "2017.5-2017.5",
            "description": "Design a portfolio site",
            "images": ["images/1.jpg", "images/1.jpg"]
        },
        {
            "title": "Web page collection",
            "dates": "2017.5-2017.5",
            "description": "Design a portfolio site",
            "images": ["images/1.jpg", "images/1.jpg"]
        }
    ],
    "display": function(){
    	projects.projects.forEach(function (project){
    		$("#projects").append(HTMLprojectStart);

    		var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
    		var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
    		var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
    		
    		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

    		if(project.images.length > 0){
    			project.images.forEach(function (image){
    				var formattedImage = HTMLprojectImage.replace("%data%",image);

    				$(".project-entry:last").append(formattedImage);
    			})
    		};
    	})
    } 
};
projects.display();

$("#mapDiv").append(googleMap);

