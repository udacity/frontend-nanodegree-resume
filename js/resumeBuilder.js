var bio = {
	"name" : "Ante Rukavina",
	"role" : "Web Developer",
	"contacts" : {
		"mobile":"0955346356",
		"email":"ante.rukavina87@gmail.com",
		"github":"aruki87",
		"location": "Crikvenica, CRO"
	},
	"welcomeMessage" : "Welcome to my bio page.",
	"skills" : ["python", "C++", "HTML", "CSS"],
	"biopic"	 : "images/biopic.jpg"
	
};

var education = {
	"schools":[
	{
		"name": "University of Rijeka",
		"location": "Rijeka, CRO",
		"degree": "BSc",
		"majors": ["Electrical Engineering"],
		"dates": "2011 - 2014",
		"url": "http://www.riteh.uniri.hr/"
	}
		],
	
	"onlineCourses": [
	{
		"title": "Intro to Programming",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	},

	{
		"title": "Make an interactive website",
		"school": "Codeacademy",
		"date": "2015",
		"url": "https://www.codecademy.com/en/skills/make-an-interactive-website"
	},

	{
		"title": "HTML & CSS",
		"school": "Codeacademy",
		"date": "2015",
		"url": "https://www.codecademy.com/learn/web"
	},

	{
		"title": "JavaScript",
		"school": "Codeacademy",
		"date": "2015",
		"url": "https://www.codecademy.com/learn/javascript"
	}
		]
};

var work = {
	"jobs":[
	{
		"employer": "Zagreb Institute of Archeology",
		"title": "Archeological dig worker",
		"location": "Crikvenica, CRO",
		"dates": "2007",
		"description": "Archeological works were done on the location of a roman ceramic factory in the ancient" +
		"settlement of Add Turres.<br>Work consisted mostly of menial tasks including a lot of careful digging" +
		"and cleaning archeological artifacts."
	}
		]
};

                                                                                                                        
var projects = {
	"projects":[
	{
		"title": "Solving sudoku puzzles by using evolutionary algorithms",
		"dates": "2014",
		"description": "For this project I created a computer program which" +
		"utilises evolutionary algorithms to find solutions for" +
		" sudoku puzzles.<br>I have also created graphs of algorithms preformance and compared it" + 
		" to other algorithms such as'brute force' and 'exact cover' algorithm."+
		"<br>The code for this project is written in python.",
		"images": ["images/graph1.png","images/graph2.png"]
	}
		]
};





//Displays name, role, profile picture, welcome message, contacts and skills.
bio.display= function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedMobileContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmailContact = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocationContact = HTMLlocation.replace("%data%", bio.contacts.location);
	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts").append(formattedMobileContact);
	$("#topContacts").append(formattedEmailContact);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocationContact);
	$("#footerContacts").append(formattedMobileContact);
	$("#footerContacts").append(formattedEmailContact);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocationContact);

	if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
		for (i = 0; i < bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
			}
		}
}

//Displays information about previous education and completed online courses
education.display= function(){
	for (var school of education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedSchoolURL = HTMLschoolURL.replace("%data%", school.url);
		var formattedSchoolURL = formattedSchoolURL.replace("#", school.url);
		
		$(".education-entry:last").append(formattedSchoolName +formattedSchoolDegree );
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
		$(".education-entry:last").append(formattedSchoolURL);
	}

	$("#education").append(HTMLonlineClasses);
	for (var course of education.onlineCourses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formattedOnlineDate = HTMLonlineDate.replace("%data%", course.date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
		var formattedOnlineURL = formattedOnlineURL.replace("#", course.url);

		$(".online-entry:last").append(formattedOnlineTitle +formattedOnlineSchool);
		$(".online-entry:last").append(formattedOnlineDate);
		$(".online-entry:last").append(formattedOnlineURL);
		}
}

//Displays work information such as: employer, title, work-location, dates and work description.
work.display= function(){
	for (var job of work.jobs){
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


//Displays projects history.
projects.display= function(){ 
			for (var project of projects.projects){
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



bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);