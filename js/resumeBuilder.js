var work={
	"jobs":[
		{
			"employer":"Emdeon",
			"title":"Software Engineer",
			"location":"Nashville, TN",
			"dates":"2007-2015",
			"description":"software development"
		},
		{
			"employer":"American Standard",
			"title":"Programmer/Analyst",
			"location":"Nashville, TN",
			"dates":"2001-2006",
			"description":"software development"
		}
	]
};

var projects={
	"projects":[
		{
			"title":"American Standard Website",
			"dates":"2004-2006",
			"description":"Developed the American Standard Leasing website.",
			"images":["http://www.americanstandardair.com/etc/designs/irco-asa-us-en/_jcr_content/contentpage/masthead/headerLogoImage.img.png/x1386877603560.png.pagespeed.ic.DZsNaccOC7.png","http://www.americanstandardair.com/content/irco-asa/us/en/products/heating-and-cooling/air-conditioners/platinum-zv-air-conditioning-.img.png/1434659686121.jpg"]
		},
		{
			"title":"Emdeon Assistant",
			"dates":"2007-2015",
			"description":"Developed the Emdeon Assistant website.",
			"images":["https://upload.wikimedia.org/wikipedia/en/b/bb/Emdeon.png"]

		}
	]
};

var bio={
	"name":"Scott Michael",
	"role":"Web Developer",
	"contacts":{
		"mobile":"615-555-5555",
		"email":"scottmichael2@gmail.com",
		"github":"scottmichael2",
		"twitter":"@scottmichael2",
		"location":"Hermitage, TN"
	},
	"picture":"images/fry.jpg",
	"message":"Welcome to my online resume!",
	"skills":["HTML"," JavaScript"," jQuery"]
};

var education={
	"schools":[
		{
			"name":"Florida Southern College",
			"location":"Lakeland, FL",
			"degree":"BS",
			"majors":["Computer Science"],
			"dates":2000,
			"url":"http://www.flsouthern.edu/home.aspx"
		},
		{
			"name":"University of Phoenix",
			"location":"Phoenix, AZ",
			"degree":"MS",
			"majors":["Computer Information Systems"],
			"dates":2007,
			"url":"http://www.phoenix.edu/"
		}
	],
	"onlineCourses":[
		{
			"title":"Intro to JavaScript",
			"school":"Udacity",
			"date":2015,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var formattedWork = formattedEmployer + formattedTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
		
		$(".work-entry:last").append(formattedWork);
	}
};
work.display();

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
	
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedProjectDates = HTMLworkDates.replace("%data%",projects.projects[project].dates);
		var formattedProjectDescription = HTMLworkDescription.replace("%data%",projects.projects[project].description);
		
		var formattedProjectImages="";
		if (projects.projects[project].images.length>0){
			for (image in projects.projects[project].images){
				formattedProjectImages += HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);		
			}
		}
		
		var formattedProject = formattedTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages;
		
		$(".project-entry:last").append(formattedProject);
	}
};
projects.display();

education.display = function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedSchoolUrl = HTMLschoolURL.replace("%data%",education.schools[school].url);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		//majors
		var formattedSchoolMajors="";
		for (major in school.majors){
			formattedSchoolMajors += HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
		}
		var formattedSchool = formattedSchoolName + formattedSchoolDegree + 
								formattedSchoolDates + formattedSchoolUrl + 
								formattedSchoolLocation + formattedSchoolMajors
								
		$(".education-entry:last").append(formattedSchool);
	}
	
	if (education.onlineCourses.length>0){
		//$("#education").append(HTMLonlineClasses);
		$(".education-entry:last").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses){
			var formattedSchoolTite = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
			var formattedSchoolName = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			var formattedSchoolDate = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
			var formattedSchoolUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);

			var formattedOnlineSchool=formattedSchoolTite+formattedSchoolName+formattedSchoolDate+formattedSchoolUrl;
			
			$(".education-entry:last").append(formattedOnlineSchool);
		}
	}
};
education.display();

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
var formattedPic=HTMLbioPic.replace("%data%",bio.picture);
var formattedWelcome=HTMLwelcomeMsg.replace("%data%",bio.message);
var formattedSkills=HTMLskills.replace("%data%",bio.skills);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#mapDiv").append(googleMap);

