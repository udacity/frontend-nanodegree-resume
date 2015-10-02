
var bio={
 	"name" : "Jung-Wook Park",
 	"role" : "Software Engineer",
 	"contacts" : {
		"mobile" : "010-7532-3961",
 		"email"  : "wookiecookie87@gmail.com",
 		"github" : "wookiecookie87",
 		"location" : "Seoul"
 	},
 	"welcomeMessage" : "Welcome to Wookiecookie world",
 	"skills" : ["Front-End developing", "Being funny", "Making friends in five-minutes", "Fast biker"],
 	"bioPic" : "https://pbs.twimg.com/profile_images/1258413406/Macchu_400x400.jpg"
 };



var work={
 	"jobs" : [
 		{
 		"employer" : "Yullin Technology",
	 	"location" : "Bundang, SeongNam",
	 	"dates" : "7 months",
	 	"title" : "Software Engineer",
	 	"description" : "A project to install labroratory information management system for Kpetro,"+
	 	"an institution what checks and regulates petrolume products’ quality and distribution in Korea"+
		"Implemented an automated system that transfers handwritten data into digital data using Digital Pen, "+
		"a device that converts handwritings into digital texts. "+
		"Contructed a database interface to stabilize data transfer"+
		 "and filter out data from Digital Pen to enhence the accuracy."
	 	},
	 	{
 		"employer" : "Breeze Studio",
 		"location" : "Jongno, Seoul",
 		"dates" : "4 months",
 		"title" : "Software Engineer",
 		"description" : "Front end Web Developer"+                                                                   
			"Responsible for UI/UX and other front end developing of mobile web application."+
			"Coded front end framework to be used in the many projects that Breeze Studio delivers."+
			"Currently developing a machine learning library to be used for the companies’ e-commerce solution."
	 	}
 	],
 };

var projects={
	"projects" : [
	 	{
 		"title" : "Laboratory Information Management System",
 		"location" : "Bundang, SungNam",
 		"description" : "Digital Pen",
 		"dates" : "7months"
	 	},
	 	{
 		"title" : "Beatname",
 		"location" : "Suwon, Korea",
 		"description" : "Mobile Front End",
 		"dates" : "3months"
	 	}
 	]
};






var education ={
 	"schools":[
 		{
		"name" : "Formham University",
		"location" : "Bronx, NY",
		"degree" : "BS",
		"major" : "Mathematics",
		"date" : "2008 - 2013",
		"url" : "www.fordham.edu"
 		}
 	],
 	"onlineCourse":[
 		{
		"title" : "Machine Learning",
		"school" : "Coursera",
		"dates" : "11 weeks",
		"url" : "www.ccoursera.edu"
 		},
 		{
		"title" : "Git and Github",
		"school" : "Udacity",
		"dates" : "2 weeks",
		"url" : "www.Udacity.edu"
 		},
 		{
		"title" : "Basic Javascript",
		"school" : "Udacity",
		"dates" : "2 weeks",
		"url" : "www.Udacity.edu"
 		}
 	]
 };

bio.display = function(){
	var headerName = HTMLheaderName.replace("%data%", bio.name);
	var headerRole = HTMLheaderRole.replace("%data%", bio.role);
	var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var loc = HTMLlocation.replace("%data%", bio.contacts.location);
	
	$("#topContacts, #footerContacts").append(mobile);
	$("#topContacts, #footerContacts").append(email);
	$("#topContacts, #footerContacts").append(github);
	$("#topContacts, #footerContacts").append(loc);

	$("#header").prepend(headerRole);
	$("#header").prepend(headerName);
	$("#header").append(bioPic);
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(var i = 0; i < bio.skills.length; i++){
			var skill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(skill);
			
		}
	}
};

education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var name = HTMLschoolName.replace("%data%", education.schools[school].name);
		var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(name+degree);
		var dates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$(".education-entry:last").append(dates);
		var loc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(loc);
		var major = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(major);
	}

	$("#education").append(HTMLonlineClasses);

	for(course in education.onlineCourse){
		
		$("#education").append(HTMLschoolStart);

		var title = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
		var school = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
		$(".education-entry:last").append(title+school);

		var dates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
		$(".education-entry:last").append(dates);
		
		var url = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
		$(".education-entry:last").append(url);

	}
};


work.display = function(){
	for(job in work.jobs){
	 	$("#workExperience").append(HTMLworkStart);
	 	var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	 	var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	 	var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	 	//var loc = HTMLworkLcoation.replace("%data%", work.jobs[job].location);
	 	var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	 	$(".work-entry:last").append(employer + title);
	 	$(".work-entry:last").append(dates);
	 	//$(".work-entry:last").append(loc);
	 	$(".work-entry:last").append(description);
	 }
};

projects.display = function(){
	for(project in projects.projects){
	 	$("#projects").append(HTMLprojectStart);
	 	var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	 	var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	 	//var loc = HTMLworkLcoation.replace("%data%", work.jobs[job].location);
	 	var description = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	 	$(".project-entry:last").append(title);
	 	$(".project-entry:last").append(dates);
	 	//$(".work-entry:last").append(loc);
	 	$(".project-entry:last").append(description);
	 }
};

bio.display();	
work.display();
projects.display();
education.display();



function inName(name){
	name = name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);
$("#map-div").append(googleMap);