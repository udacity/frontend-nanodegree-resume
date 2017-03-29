 var work = 
 {
 	"jobs": [
 	{
 		"employer" : "Place Taker Company",
 		"title" : "web developer",
 		"location" : "The City",
 		"dates" : "2013 - Present",
 		"description" : "Full stack web development"
 	}],

 	// display function of work
 	display: function()
 	{
 		for (job in work.jobs)
 		{
 			$("#workExperience").append(HTMLworkStart);
 			$(".work-entry:last").append(HTMLworkEmployer.replace
 				("%data%", work.jobs[job].employer) + 
 				HTMLworkTitle.replace
 				("%data%", work.jobs[job].title));
 			$(".work-entry:last").append(HTMLworkDates.replace
 				("%data%", work.jobs[job].dates));
 			$(".work-entry:last").append(HTMLworkDescription.replace
 				("%data%", work.jobs[job].description));
 		}
 	}
 };

 var projects = 
 {
 	"projects" : [
 	{
 		"title" : "Project A",
 		"dates" : "2013 - 2014",
 		"description" : "development of web applications: this is a sample description...",
 		"images" : ["images/197x148.gif", "images/197x148.gif", 
 					"images/197x148.gif", "images/197x148.gif",
 					"images/197x148.gif"]
 	},
 	{
 		"title" : "Project B",
 		"dates" : "2014 - 2016",
 		"description" : "development of web back end: this is another sample description...",
 		"images" : ["images/197x148.gif", "images/197x148.gif",
 					"images/197x148.gif", "images/197x148.gif",
 					"images/197x148.gif"]
 	}],

 	// display function of projects
 	display: function()
 	{
 		projects.projects.forEach(function(element)
 		{
 			$("#projects").append(HTMLprojectStart);
 			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", element.title));
 			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", element.dates));
 			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", element.description));
 			if (element.images.length > 0)
 			{
 				for (image in element.images)
 				{
 					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", element.images[image]));
 				}
 			}
 	    })
 	}
 };

 var bio = 
 {
 	"name" : "John Doe",
 	"role" : "Full Stack Web Developer",
 	"contacts" : 
 	{
 		"mobile" : "111-222-3456",
 		"email" : "john.doe@gmail.com",
 		"github" : "JohnDoe",
 		"twitter" : "@JohnDoe",
 		"location" : " City"
 	},
 	"welcomeMessage" : "Hello! Welcome to John Doe's resume page! This is a sample message...",
 	"skills" : ["Python", "Java", "JavaScript", "HTML", 
 	            "CSS", "JSON", "mySQL", "markdown"],
 	"bioPic" : "images/fry.jpg",

 	// display function of biography.
 	display: function()
 	{
 		// Banner information
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#main").append(internationalizeButton);
		
		// Header - Contact Information
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

		// Header - Other Parts
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		// Header - Skills
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(element)
		{
			$("#skills").append(HTMLskills.replace("%data%", element));
		}); 
 	}
 };

 var education =
 {
 	"schools":[{
 		"name" : "Sample University",
		"location" : "Another City",
		"degree" : "Bachelor of Science",
		"majors" : ["Computer Science"],
		"dates" : "2014",
		"url" : "www.sample.edu"
		
	}],
 	"onlineCourses":[{
		"title" : "Basic JavaScript",
		"school" : "Udacity",
		"dates" : "2014.7",
		"url" : "www.udacity.com"
	}],

	// display function of eduction
	display: function()
	{
		for (element in education.schools)
		{
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace
				("%data%", education.schools[element].name) + 
				HTMLschoolDegree.replace
				("%data%", education.schools[element].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace
				("%data%", education.schools[element].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace
				("%data%", education.schools[element].location));

		    for (major in education.schools[element].majors)
		    {
		    	$(".education-entry:last").append(HTMLschoolMajor.replace
					("%data%", education.schools[element].majors[major]));
		    }
		}

		$("#education").append(HTMLonlineClasses);

		for (element in education.onlineCourses)
		{
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append
				(HTMLonlineTitle.replace
					("%data%", education.onlineCourses[element].title) +
				HTMLonlineSchool.replace
					("%data%", education.onlineCourses[element].school));
		    $(".education-entry:last").append
				(HTMLonlineDates.replace
					("%data%", education.onlineCourses[element].dates));
		    $(".education-entry:last").append
				(HTMLonlineURL.replace
					("%data%", education.onlineCourses[element].url));			
		}
	}
 };

 // Display all of the sections

 bio.display();
 work.display();
 projects.display();
 education.display();

 // helper function to convert name into international format
 function inName()
 {
 	var name = bio.name.split(" ");
 	var first_name = name[0].substr(0,1).toUpperCase() + 
 					 name[0].substr(1).toLowerCase();
 	var last_name = name[1].toUpperCase();
 	return first_name + ' ' + last_name;
 }
 