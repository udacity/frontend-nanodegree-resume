/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("David")
 //var awesomeThoughts = "I am David and I am AWESOME!"
 //console.log(awesomeThoughts)
 //var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
 //$("#main").append(funThoughts)
// var name = "David VAUQUELIN"
// var formattedName = HTMLheaderName.replace("%data%", name)
// var role = "Java Developper"
// var formattedRole = HTMLheaderRole.replace("%data%", role)
// var skills = ["Java", "JavaEE", "Swing", "Prototype", "JavaFX", "JavaScript", "Python"]
// $("#header").prepend(formattedRole)
// $("#header").prepend(formattedName)
// var slicedString = "U".concat("audacity".slice(2));
// console.log("sliced string ", slicedString);
 var bio = {
	"name": "DV",
	"role": "Analyst Developper",
	"contacts": {
		"mobile": "da.vauk06@gmail.com",
		"email": "da.vauk06@gmail.com",
		"github": "da.vauk06@gmail.com",
		"twitter": "da.vauk06@gmail.com",
		"github": "da.vauk06@gmail.com",
		"location": "da.vauk06@gmail.com"
	},
	"welcomeMessage": "Computer is the network",
	"skills": [
		"Java", "Java/Swing", "JavaFX", "JavaScript", "Python", "Parallel/Distributed Algorithm", "Machine Learning Algorithm"
	],
	"bioPic": "images/dv.png"
 }
 
 var work = {
	"jobs": [
		{
			"employer": "Telecom Company",
			"title": "Java/Python Developer",
			"location": "Mougins, France",
			"dates": "August 2015-Now",
			"description": "Work with ETL Python Frameword to inject data into Cassandra."
		},
		{
			"employer": "National power supply company Lab",
			"title": "Analyst/Developer Java",
			"location": "Clamart, France",
			"dates": "February 2014-June 2015",
			"description": "Evolution on Java EE application to visualize and analyse multidimensional data sets of electrical power production/consumption.<br/>Development of robot to download electrical power consumption/production from diverse providers."
		},
		{
			"employer": "TAS",
			"title": "Analyst/Developer Java",
			"location": "Cannes, France",
			"dates": "September 2013 - February 2014",
			"description": "Graph and report visualization and generation."
		},
		{
			"employer": "TUS",
			"title": "Analyst/Developer Java GUI",
			"location": "Cannes, France",
			"dates": "September 2013 - February 2014",
			"description": "Design of GUI representing helicopter command panel used for training and simulation."
		},
		{
			"employer": "TAS",
			"title": "Analyst/Developer Java",
			"location": "Cannes, France",
			"dates": "September 2013 - February 2014",
			"description": "Graph and report visualization and generation."
		},
		{
			"employer": "TAS",
			"title": "Analyst/Developer Java",
			"location": "Cannes, France",
			"dates": "September 2013 - February 2014",
			"description": "Graph and report visualization and generation."
		}
	]
 };
 
 var projects = {
	"projects": [
		{
			"title": "Cassandra Manager",
			"dates": "2015",
			"description": "Blablabla Cassandra Manager",
			"images": []
		},
		{
			"title": "Market Lab",
			"dates": "2014",
			"description": "Blablabla Market Lab",
			"images": []
		}
	]
 }
 
 var education = {
	"schools": [
		{
			"name": "University of Technology Sydney",
			"location": "Sydney, Australia",
			"degree": "BA",
			"graduation": 2004,
			"major": ["Electrical Engineering"],
			"url": ""
		},
		{
			"name": "Central College",
			"location": "Sydney, Australia",
			"degree": "BA",
			"graduation": 2001,
			"major": ["Computing"],
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": ""
		},
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": ""
		}
	]
 }
 
 if (bio.skills.length > 0) {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkills);
 }
 
 function displayWork() {
	 for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
		$(".work-entry:last").append(formattedDescription);
	 }
 }
 
 displayWork();
 
 projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
 }
 
 $(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
 });
 
 function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
 }
 
 $("#main").append(internationalizeButton);
 
 
