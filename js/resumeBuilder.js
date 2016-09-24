// All the html maupulaitons goes here in the resumeBuilder.js




var bio ={
	"name" : "Hemant Kumar",
	"role" : "Front End Web Developer | Business Analyst",
	"contacts":{
		"email" : "hemantkumar@me.com",
		"twitter": "@hmntkmr",
		"github": "hmntkmr",
		"location": "Ottawa ON",
		"linkedin" : "goo.gl/4TPnJS",
		"facebook": "hmntkmr"
		},
	"pictureURL" : "https://scontent-lga3-1.xx.fbcdn.net/t31.0-8/11048630_10203222638121233_23658384074188916_o.jpg",

	"welcomeMessage" : "Are you looking for an awesome person who can customize your webiste and do some analysis for your business.",
	
	"skills": ["Design", "Teaching", "Data Analysis", "Programming", "Visual Analysis", "Web Development",  "Business Intelligence"]
};

bio.display = function(){
	
	var urls = {
		"facebook" :"http://www.facebook.com/hmntkmr",
		"twitter" :"http://www.twitter.com/hmntkmr",
		"instagram" :"http://www.instagram.com/hmntkmr",
		"github": "http://www.github.com/hmntkmr",
		"mail": "mailto:hemantkumar@me.com?Subject=Hello%20Hemant",
		"linkedin": "https://www.linkedin.com/in/hmntkmr"
	};

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

	$("#footerContacts:last").addClass("white-text").append("<a href='"+urls.github+"'><i class='fa fa-github-alt fa-3x'></i></a>");
	$("#footerContacts:last").addClass("white-text").append("<a href='"+urls.linkedin+"'><i class='fa fa-linkedin fa-3x'></i></a>");

	$("#footerContacts:last").addClass("white-text").append("<a href='"+urls.facebook+"'> <i class='fa fa-facebook fa-3x'></i></a>");
	$("#footerContacts:last").addClass("white-text").append("<a href='"+urls.twitter+"'><i class='fa fa-twitter fa-3x'></i></a>");
	$("#footerContacts:last").addClass("white-text").append("<a href='"+urls.mail+"'><i class='fa fa-envelope fa-3x'></i></a>");
	$("#footerContacts:last").addClass("white-text").append("<a href='"+urls.instagram+"'><i class='fa fa-instagram fa-3x'></i></a>");

	$("img").addClass('img-circle').addClass('img-responsive');
	$("#header").addClass('orange-text');
	$("a").css('color', 'white');

};


var education = {
 
 "schools": [{
		"name": "Algonquin College",
		"location": "Ottawa, ON",
		"degree": "Interactive Media Management",
		"majors" : "Web Design and Development",
		"dates": "2015",
		"url": "http://www.AlgonquinCollege.com"
    },
    {
    	"name": "Algonquin College",
		"location": "Ottawa, ON",
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

  ],
  "titles" :
		[{
			"title" : "Programming for Everybody (Python)",
			"school": "Coursera",
			"dates" : "August, 2014",
			"url"	: "http://goo.gl/5oDSAI" 
		},
		{
			"title" : "Introduction to Computer Programming, Part I",
			"school": "edX",
			"dates" : "September, 2014",
			"url"	: "http://goo.gl/6WbNHe" 
		},
		{
			"title" : "Introduction to Linux",
			"school": "edX",
			"dates" : "August, 2015",
			"url"	: "http://goo.gl/dVpsvT" 
		},
		{
			"title" : "Introduction to Bootstrap",
			"school": "edX",
			"dates" : "August 2015",
			"url"	: "http://goo.gl/UgQcoQ" 
		},
		{
			"title" : "Foundation of Programming: Fundamentals",
			"school": "Lynda.com",
			"dates" : "May 2016",
			"url"	: "http://goo.gl/0QcgEp" 
		},
		{
			"title" : "JavaScript Essential Training",
			"school": "Lynda.com",
			"dates" : "November 2016",
			"url"	: "http://goo.gl/IWcvt7" 	
		},
		{
			"title" : "JavaScript and JSON",
			"school": "Lynda.com",
			"dates" : "May 2015",
			"url"	: "http://goo.gl/vE7Xx3" 	
		},
		{
			"title" : "Intro to HTML and CSS",
			"school": "Udacity",
			"dates" : "May 2016",
			"url"	: "https://goo.gl/gt62Fb" 	
		}]
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
    
	// onlineEducation starts
    
    $('.education-entry:last').append(HTMLonlineClasses);

    for (var i = 0; i < education.titles.length; i++) {
    	
    	var onlinetitle = HTMLonlineTitle.replace('%data%',education.titles[i].title);
    	onlinetitle.replace('#',education.titles[i].url);
    	
    	var onlineSchool = HTMLonlineSchool.replace('%data%', education.titles[i].school);
    	$('.education-entry:last').append(onlinetitle + onlineSchool);
    	
    	var onlineDates = HTMLonlineDates.replace('%data%',education.titles[i].dates);
    	$('.education-entry:last').append(onlineDates);
    	
    	var onlineURL = HTMLonlineURL.replace('%data%', education.titles[i].url).replace('#', education.titles[i].url);
    	$('.education-entry:last').append(onlineURL);

    }
}


// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';


var work = {
	"jobs":
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

	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formatterworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$(".work-entry:last").append(formattedEmployer + formattedworkTitle);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formatterworkDescription);

	}
}

var project = {
	"projects":[
	{
		"startDate": "Feb 3, 2015",
		"title" : "Panoramic Postcard Mailer",
		"url" : "Some URL",
		"description" : "Layout and designed my first self-promotional marketing piece. This piece is to help identify me and my services to potential clients. This design can also be used as a template for future projects. It will include both sides of the card.",
		"imageSource" : "images/project1.0.jpg",
		"topic": "design",
		"includes": "Adobe Photoshop"

	},
	{
		"startDate": "Apr 14, 2015",
		"title" : "Typhographical Poster",
		"url" : "Some URL",
		"description" : "At a design studio I work for, I have been given a project to work on. I am suppose to design a poster based on a client’s subject matter. The tool of choice is Adobe Illustrator. This project has only one small caveat. I can only use type glyphs for graphical representation, layout and design.",
		"imageSource" : "images/glbl-recs.jpg",
		"topic": "design",
		"includes": "Adobe Illustrator"


	},
	{
		"startDate": "Feb 23, 2015",
		"title" : "Scalleywags!",
		"url" : "project-folder/scallywags/index.html",
		"description" : "Goal : Re-create the Photoshop Mock-up as closely as possible!",
		"imageSource" : "images/assignment3-Cut.jpg",
		"topic": "Web",
		"includes": "Adobe Illustrator"

	},
	{
		"startDate": "Mar 10, 2015",
		"title" : "jquery Demo",
		"url" : "project-folder/jquerryDemo/index.html",
		"description" : "Install and customize up to three jQuery plugins into a single “demo”. You get points based on successful installation and customization or using different images and/or css.",
		"imageSource" : "http://vignette3.wikia.nocookie.net/howtoprogram/images/9/93/JQuery.png/revision/latest?cb=20130423012006",
		"topic": "web",
		"includes": "HTML, CSS, JavaScript, jQuery"

	},
	{
		"startDate": "May 25, 2015",
		"title" : "Infographic Poster",
		"url" : "project-folder/infoGraphic/infoGraphicPoster.pdf",
		"description" : "Used Adobe Illustrator for creating vector poster on Large Hydron Collider",
		"imageSource" : "images/infoGraphicPoster.jpg",
		"topic": "web",
		"includes": "Adobe Illustrator"


	},
	{
		"startDate": "Apr 20, 2015",
		"title" : "Magazine Layout and Design",
		"url" : "project-folder/mag/Breakfast.pdf",
		"description" : "Used Adobe Indesign for creating layout and mock up of a magazine",
		"imageSource" : "images/mag.png",
		"topic": "Design",
		"includes": "Adobe Indesign"

	}
	]
}

project.display = function(){

	
	
	for (var i = 0; i < project.projects.length; i++) {

		$("#projects").append(HTMLprojectStart);
		
		// var topic = project.projects[i].topic.charAt(0).toUpperCase() + project.projects[i].topic.slice(1);
		
		// topic = HTMLprojectType.replace('%data%', topic);
		
		// var date = HTMLprojectDates.replace("%data%", project.projects[i].startDate);
		// var name = HTMLprojectTitle.replace("%data%", project.projects[i].title).replace("#", project.projects[i].url); 
		// var desc = HTMLprojectDescription.replace("%data%", project.projects[i].description);
		// var img = HTMLprojectImage.replace("%data%", project.projects[i].imageSource);
		// var skill = HTMLprojectSkills.replace("%data%", project.projects[i].includes);
		
		
		// $(".project-entry:last").append(name);
		// $(".project-entry:last").append(date);
		// $(".project-entry:last").append(topic);	
		// $(".project-entry:last").append(desc);
		// $(".project-entry:last").append(skill);
		// $(".project-entry:last").append(img);

		var topic = project.projects[i].topic.charAt(0).toUpperCase() + project.projects[i].topic.slice(1);
		
		var top = HTMLprojectType.replace('%data%', topic);
		
		var date = HTMLprojectDates.replace("%data%", project.projects[i].startDate);
		var name = HTMLprojectTitle.replace("%data%", project.projects[i].title).replace("#", project.projects[i].url); 
		var desc = HTMLprojectDescription.replace("%data%", project.projects[i].description);
		var img = HTMLprojectImage.replace("%data%", project.projects[i].imageSource);
		var skill = HTMLprojectSkills.replace("%data%", project.projects[i].includes);
		
		var container = $("#projects").addClass('container').addClass('row');
		container.append(HTMLprojectStart);
		// $("#projects").addClass('container');
		$(".project-entry").addClass('col-md-4 col-xs-12');

		// if(topic == 'Design'){
			$(".project-entry:last").append(name);
			$(".project-entry:last").append(date);
			$(".project-entry:last").append(top);	
			$(".project-entry:last").append(desc);
			$(".project-entry:last").append(skill);
			$(".project-entry:last").append(img);
		// }
	}
}
	
// adding map here
$("#mapDiv").append(googleMap);


bio.display();
project.display();
education.display();
work.display();