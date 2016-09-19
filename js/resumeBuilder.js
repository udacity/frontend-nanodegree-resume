// All the html maupulaitons goes here in the resumeBuilder.js


// var name = "Hemant Kumar";
// var role = "Full Stack Developer | Business Analyst";

// var skills = ["Programming", "Business Analysis" ,"Business Intelligence", "Photoshop", "Web Development", "Teaching" ];
// var formattedName = HTMLheaderName.replace("%data%", name);

// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $('#header').prepend(formattedRole);
// $("#header").prepend(formattedName);

// $("#main").append(skills);


var bio ={
	"name" : "Hemant Kumar",
	"role" : "Front End Web Developer | Business Analyst",
	"contacts":{
		"email" : "hemantkumar@me.com",
		"twitter": "@hmntkmr",
		"github": "hmntkmr",
		"location": "Ottawa ON",
		"linkedin" : "goo.gl/4TPnJS"
	},
	"pictureURL" : "https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/11048630_10203222638121233_23658384074188916_o.jpg",

	"welcomeMessage" : "Are you looking for an awesome person who can customize your webiste and do some analysis for your business.",
	
	"skills": ["Design", "Teaching", "Data Analysis", "Programming", "Web Development",  "Business Intelligence"]
};

bio.display = function(){
	
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage))
	$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++) {
	      
	      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	      $("#skills").append(formattedSkill);
	    }	
};


var education = {
 
 "schools": [{
		"name": "Algonquin College",
		"location": "Ottaw, ON",
		"degree": "Interactive Media Management",
		"majors" : "Web Design and Development",
		"dates": "2015",
		"url": "http://www.AlgonquinCollege.com"
    },
    {
    	"name": "Algonquin College",
		"location": "Ottaw, ON",
		"degree": "Business Intelligence System Infrastructure",
		"majors" : "Business and Data Analysis",
		"dates": "2016",
		"url": "http://www.AlgonquinCollege.com"
    },
    {
    	"name": "Panjab University",
      	"location": "Chandigarh, UT",
      	"degree": "Bachelor of Computer Applications",
      	"majors" : "Computer Science",
      	"dates": "2014",
      	"url": "http://www.puchd.ac.in"	
    }

  ]
};


education.display = function(){
	for(var i = 0; i < education.schools.length; i++){
	 $("#education").append(HTMLschoolStart);
      
 
      var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
      formattedName.replace("#", education.schools[i].url);
      
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      $(".education-entry:last").append(formattedName + formattedDegree);

	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(formattedLocation);
      
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry:last").append(formattedSchoolDates);

      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(formattedMajors);
    }   

}

// variable for work

// var HTMLworkStart = '<div class="work-entry"></div>';
// var HTMLworkEmployer = '<a href="#">%data%';
// var HTMLworkTitle = ' - %data%</a>';
// var HTMLworkDates = '<div class="date-text">%data%</div>';
// var HTMLworkLocation = '<div class="location-text">%data%</div>';
// var HTMLworkDescription = '<p><br>%data%</p>';

var work = {
	"exp":
	[
		{
			"employer": "Self Employed",
			"title": "Web Developer",
			"dates": "2014 - Present",
			"location": "Ottawa ON",
			"description": "<li>Assisting in Designing and developing entire business website for the company</li><li>Maintaining active conversation with the team to ensure website met the business needs</li> <li>Sketched wireframes, prototyped concepts, created UI designs Assisted in development of back end features in Ruby on Rails</li><li> Researched industry trends and websites to provide top quality design Workflow tools included: HTML, CSS, Bootstrap, jQuery, Angular.js, and Git</li>"
			
		},

		{
			"employer": "Self Employed",
			"title": "Tutor",
			"dates": "2010 - 2014",
			"location": "Chandigarh UT",
			"description": "<li>Devised interactive and diverse ways of helping high school students to learn Mathematics and Science </li><li>Followed students’ progress by creating weekly evaluations and by ensuring open communications with the parents</li>"
		},

		{
			"employer": "Self Employed",
			"title": "Web Developer",
			"dates": "2010 - 2014",
			"location": "Chandigarh UT",
			"description": "<li>Communicated directly with clients to establish project parameters and wrote proposals</li><li>Developed stunning websites using HTML, CSS and JavaScript</li><li>Built user-interactive web pages using jQuery plugins AJAX, JSON, AngularJS and JavaScript</li><li>Rapid development of marketing landing pages under high pressure</li><li>Assisted in the monitoring and reporting on website traffic and performance</li><li>Created HTML email and newsletters for email marketing campaigns monitored Google Analytics</li>"

		}
	]

};

work.display = function(){

	for (var i = 0; i < work.exp.length; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.exp[i].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.exp[i].title);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.exp[i].location);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.exp[i].dates);
		var formatterworkDescription = HTMLworkDescription.replace("%data%", work.exp[i].description);

		$(".work-entry:last").append(formattedEmployer + formattedworkTitle);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formatterworkDescription);

	}
}


// var HTMLprojectStart = '<div class="project-entry"></div>';
// var HTMLprojectTitle = '<a href="#">%data%</a>';
// var HTMLprojectDates = '<div class="date-text">%data%</div>';
// var HTMLprojectDescription = '<p><br>%data%</p>';
// var HTMLprojectImage = '<img src="%data%">';


var project = {
	"projects":[
	{
		"startDate": "Feb 3, 2015",
		"title" : "Panoramic Postcard Mailer",
		"url" : "Some URL",
		"description" : "Layout and designed my first self-promotional marketing piece. This piece is to help identify me and my services to potential clients. This design can also be used as a template for future projects. It will include both sides of the card.",
		"imageSource" : "images/project1.0.jpg",
		"topic": "design"

	},
	{
		"startDate": "Apr 14, 2015",
		"title" : "Typhographical Poster",
		"url" : "Some URL",
		"description" : "At a design studio I work for, I have been given a project to work on. I am suppose to design a poster based on a client’s subject matter. The tool of choice is Adobe Illustrator. This project has only one small caveat. I can only use type glyphs for graphical representation, layout and design.",
		"imageSource" : "images/glbl-recs.jpg",
		"topic": "design"


	},
	{
		"startDate": "Feb 23, 2015",
		"title" : "Scalleywags!",
		"url" : "project-folder/scallywags/index.html",
		"description" : "Goal : Re-create the Photoshop Mock-up as closely as possible!",
		"imageSource" : "images/assignment3-Cut.jpg",
		"topic": "Web"

	},
	{
		"startDate": "Mar 10, 2015",
		"title" : "jquery Demo",
		"url" : "project-folder/jquerryDemo/index.html",
		"description" : "Install and customize up to three jQuery plugins into a single “demo”. You get points based on successful installation and customization or using different images and/or css.",
		"imageSource" : "http://vignette3.wikia.nocookie.net/howtoprogram/images/9/93/JQuery.png/revision/latest?cb=20130423012006",
		"topic": "web"

	},
	{
		"startDate": "Some Date",
		"title" : "Infographic Poster",
		"url" : "Some URL",
		"description" : "some descripton",
		"imageSource" : "images/infoGraphicPoster.jpg",
		"topic": "web"

	}
	]
}

project.display = function(){

	
	
	for (var i = 0; i < project.projects.length; i++) {

		$("#projects").append(HTMLprojectStart);
		
		var topic = project.projects[i].topic.charAt(0).toUpperCase() + project.projects[i].topic.slice(1);
		
		topic = HTMLprojectType.replace('%data%', topic);
		
		var date = HTMLprojectDates.replace("%data%", project.projects[i].startDate);
		var name = HTMLprojectTitle.replace("%data%", project.projects[i].title).replace("#", project.projects[i].url); 
		var desc = HTMLprojectDescription.replace("%data%", project.projects[i].description);
		var img = HTMLprojectImage.replace("%data%", project.projects[i].imageSource);
		
		$(".project-entry:last").append(name);
		$(".project-entry:last").append(date);
		$(".project-entry:last").append(topic);	
		$(".project-entry:last").append(desc);
		$(".project-entry:last").append(img);

	}
}

// adding map here
$("#mapDiv").append(googleMap);


bio.display();
project.display();
education.display();
work.display();
