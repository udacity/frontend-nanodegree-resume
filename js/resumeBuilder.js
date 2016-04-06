var bio = {
	"name" : "Ante Rukavina",
	"role" : "Web Developer",
	"contacts" : {
	"mobileNumber":"0955346356",
	"email":"ante.rukavina87@gmail.com",
	"github":"aruki87",
	"location": "Crikvenica, CRO"
},
	"pictureURL" : "images/biopic.jpg",
	"welcomeMessage" : "Welcome to my bio page.",
	"skills" : ["python", "C++", "HTML", "CSS"]
};

var work = {
	"jobs":[
	{
		"employer": "Zagreb Institute of Archeology",
		"title": "Archeological dig worker",
		"location": "Crikvenica, CRO",
		"dates": "2007",
		"description": "Archeological works were done on the location of a roman ceramic factory in the ancient settlement of Add Turres.\
		 <br>Work consisted mostly of menial tasks including a lot of careful digging and cleaning archeological artifacts."
	}
		]
};


var projects = {
	"projectList":[
	{
		"title": "Solving sudoku puzzles by using evolutionary algorithms",
		"dates": "2014",
		"description": "For this project I created a computer program which utilises evolutionary algorithms to find solutions for \
		sudoku puzzles. <br>I have also created graphs of algorithms preformance and compared it to other algorithms such as \
		'brute force' and 'exact cover' algorithm. <br>The code for this project is written in python.",
		"images": ["images/graph1.png","images/graph2.png"]
	}
		]
};



var education = {
	"schools":[
	{
		"name": "University of Rijeka",
		"degree": "BSc",
		"dates": "2014",
		"location": "Rijeka, CRO",
		"major": ["Electrical Engineering"] 
		
	}
		],
	
	"onlineCourses": [
	{
		"school": "Udacity",
		"title": "Intro to Programming",
		"dates": "2016",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	},

	{
		"school": "Codeacademy",
		"title": "Make an interactive website",
		"dates": "2015",
		"url": "https://www.codecademy.com/en/skills/make-an-interactive-website"
	},

	{
		"school": "Codeacademy",
		"title": "HTML & CSS",
		"dates": "2015",
		"url": "https://www.codecademy.com/learn/web"
	},

	{
		"school": "Codeacademy",
		"title": "JavaScript",
		"dates": "2015",
		"url": "https://www.codecademy.com/learn/javascript"
	}
		]
};

//Displays name, role, profile picture, welcome message, and skills.
bio.displayBioData= function(){
	$("#main").append(bio);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
		for (i = 0; i < bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
			}
		}
}

//Displays contacts.
bio.contacts.display= function(){
	var formattedMobileContact = HTMLmobile.replace("%data%", bio.contacts.mobileNumber);
	var formattedEmailContact = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocationContact = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobileContact);
	$("#topContacts").append(formattedEmailContact);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocationContact);
	$("#footerContacts").append(formattedMobileContact);
	$("#footerContacts").append(formattedEmailContact);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocationContact);
}

//Displays work information such as: employer, title, work-location, dates and work description.
work.display= function(){
	for (job of work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer +" "+formattedTitle;
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkDescription);
	}
	
}

//Displays information about previous education.
education.schools.display= function(){
	for (school of education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);

		$(".education-entry:last").append(formattedSchoolName +formattedSchoolDegree );
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
}

//Displays information about completed online courses.
education.onlineCourses.display= function(){
	$("#education").append(HTMLonlineClasses);
	for (course of education.onlineCourses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);

		$(".online-entry:last").append(formattedOnlineTitle +formattedOnlineSchool);
		$(".online-entry:last").append(formattedOnlineDates);
		$(".online-entry:last").append(formattedOnlineURL);
		}
}

//Displays projects history.
projects.display= function(){ 
			for (project of projects.projectList){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
			
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			for (i=0; i<project.images.length; i++){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images[i]);
				$(".project-entry:last").append(formattedProjectImage);
				}
		}
	}





bio.displayBioData();
bio.contacts.display();
work.display();
education.schools.display();
education.onlineCourses.display();
projects.display();

$("#mapDiv").append(googleMap);