

//******************** VARIABLES \ OBJECS ************************************************
// declaration of object bio
		var bio = 
     	{
     		"name": "Ducarmel Zephyr",
     		"role": "Web Developer",
     		"contacts": { 
     				"mobile": "613 501 0347",
     				"email": "rodchild@gmail.com",
     				"github": "@rodchild",
     				"location": "Ottawa ON",
     				},
     		"WelcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
     		"skills": ["Linux", "HTML", "Javascript", "CSS"],
     		"biopic": "images/fry.jpg",
     		
     	};


//declaration of object work
     	var work = 
     	{ 
     		"jobs":
     		[
     			{ 
     				employer: "Revel",
     				title: "Programer", 
     				location: "Atlantic city",    			
     				dates: "2011 - 2013",
     				description : "Builds software applications, follows coding standards. Communicates continually with the client and project teams. Translates designs and style guides provided by the UI/UX team into functional user interfaces. Ensuring cross browser compatibility and performance. Manipulates text and graphics to produce consistent presentation across all browser platforms."
     	    	
     	    	},

     	    
     	    	{ 
     	    	employer: "Defence ministry of Canada",
     			title: "Programer",     			
     			location: "Montreal",
     			dates: "2010 - 2011",
     			description : "Data table creation and stored procedures with MS SQL Server 2005. Convert existing MS Access applications into .NET applications using C#. Participate in the design of new applications. Program and debug an order management application."
     	     	},

     	     	{ 
     			
     			employer: "Forum economique de Verdun",
     			title: "Web developer",
     			location: "Montreal",
     			dates: "2009 - 2010",
     			description : "Develop a set of web sites for the organization. The PHP language has been used with Joomla, a content manager and EasyPHP." 
				
     	     	},

     	     	{ 
     	     	employer: "ADP",
     			title: "Technical support",
     			location: "Roselansd, NJ",
     			dates: "2006 - 2009",     			
     			description : "Install operating systems and appropriate software. Provide solutions to users hardware and software problems. Perform maintenance and updating of websites. Offer solutions to complex technical problems. Return defective products to vendors or technician for repair. Write technical documentation."
							  
				
     	     	}
     	    ]
     	};
     		
//declaration of object education
     		var education = 
     		{
     			
     			"schools": 
     			[
     				{
     					"name": "Universite Laval",
     					"location": "Quebec",
     					"degree": "Bacc",
     					"majors": ["CS"],
     					"dates": 2013,
     					"url": "http://ulaval.com",
     					
    				
     				},

                	{ 
                		"name": "College Bois de Boulogne",
     					"location": "Montreal",
     					"degree": "Certificate",
     					"majors": ["CS"],
     					"dates": 2000,
     					"url": "http://bdeb.qc.ca/",
     					  				
     		 		}
     			],

     			"onlineCourses":
     			[ 
         			{

         				"title": "Introduction to Linux",
         				"school": "EDX",
         				"date" : 2014,
         				"url": "https://www.edx.org/"
         		 	},

         		 	{

         				"title": "Introduction to HTML AND CSS",
         				"school": "Udacity",
         				"date": 2015,
         				"url": "https://www.udacity.com/"
         		 	},

         		 	{

         				"title": "Introduction to javascript",
         				"school": "Udacity",
         				"date": 2015,
         				"url": "https://www.udacity.com/"
         		 	}
         		]
     		 
     		};


//declaration of object projects
     	var projects = 
     	{
     		"myProjects": 
     		[
     			{
     				"title": "Orange Udacity Mug",
     				"dates": 2015,
     				"description": " ",
     				"image": ["images/udacityMockup.jpg"]
     			}

              
     		]
     	};
     		
     		

 //function display of object bio    	

		bio.display = function()
        { 
     		var formattedName = HTMLheaderName.replace("%data%", bio.name);
     		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     		$("#header").prepend(formattedRole);
     		$("#header").prepend(formattedName);

     	
     		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
     		$("#topContacts").append(formattedMobile);
     		var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
     		$("#topContacts").append(formattedEmail);
     		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
     		$("#topContacts").append(formattedGithub);
     		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
     		$("#topContacts").append(formattedLocation);

     		

     		var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
     		$("#header").append(formattedbioPic);

     		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
     		$("#header").append(formattedMessage);

     		if(bio.skills.length > 0)
     		{

     			$("#header").append(HTMLskillsStart);
     			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
     			$("#skills").append(formattedSkill);
     			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
     			$("#skills").append(formattedSkill);
     			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
     			$("#skills").append(formattedSkill);
     			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
     			$("#skills").append(formattedSkill);
                
        
     			}
     	}

//function display footer
       function displayFooter(contact)
        {

            $('#footerContacts').append(HTMLmobile.replace("%data%", contact.mobile));
            $('#footerContacts').append(HTMLemail.replace("%data%", contact.email));
            $('#footerContacts').append(HTMLtwitter.replace("%data%", contact.github));
            $('#footerContacts').append(HTMLtwitter.replace("%data%", contact.location));

        }


//function display of object work

		work.display = function()
        {   
     		for(job in work.jobs)
     		{
     			$("#workExperience").append(HTMLworkStart);
     			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
     			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
     			var formattedEmployerTitle = formattedEmployer + formattedTitle; 
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedWorkLocation);
  				$(".work-entry:last").append(formattedEmployerTitle);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedDates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);

     		}
     	}
//function to normalize the name
     	function inName(name)
     	{
     		name = name.trim().split();
     		name[1] = name[1].toUpperCase();
     		
     		name[0] = name[0].slice(0,1).toUpperCase();
     		name[0].slice(1).toLowerCase();
  		
     		return name[0] + "" + name[1];
     	}


//function display of object projects

		projects.display = function()
		{
			for(project in projects.myProjects)
			{
				$("#projects").append(HTMLprojectStart);
     			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.myProjects[project].title);
     			var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.myProjects[project].dates);
     			$(".project-entry:last").append(formattedProjectTitle);
     			$(".project-entry:last").append(formattedProjectDate);
     			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.myProjects[project].description);
     			$(".project-entry:last").append(formattedProjectDescription);
     			
     			if(projects.myProjects[project].image.length > 0)
     			{
     				for(image in projects.myProjects[project].image)
     				{
     					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.myProjects[project].image[image]);
     					$(".project-entry:last").append(formattedProjectImage);
     				}
     			}

			}

		}

//function display of object education

		education.display = function()
		{
            
			for(school in education.schools)
			{
				
     			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                $("#education").append(HTMLschoolStart);
     			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

     			
                var formattedSchoolDate = HTMLprojectDates.replace("%data%", education.schools[school].dates);
                $(".education-entry:last").append(formattedSchoolDate);


                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                $(".education-entry:last").append(formattedSchoolLocation);


     			var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
     			$(".education-entry:last").append(formattedSchoolMajors);
     			
     		}
     			$("#education").append(HTMLonlineClasses);
     			$("#education").append(HTMLschoolStart);

     			for(course in education.onlineCourses)
				{
					var formattedOnlineClassTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    var formattedOnlineClassSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				    $(".education-entry:last").append(formattedOnlineClassTitle.replace("%courseUrl%", education.onlineCourses[course].url) + formattedOnlineClassSchool );
					
					var formattedOnlineClassDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
					$(".education-entry:last").append(formattedOnlineClassDate);
					
				}
			

		}

//calling of the functions

		bio.display();
        displayFooter(bio.contacts);
		work.display();
		projects.display();
		education.display();
		$("#mapDiv").append(googleMap);
     		



