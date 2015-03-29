/*
bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
*/
var bio =
	{
		"name": "Junior Báez",
		"role": "Programmer",
		"welcomeMessage": "No hay lugar como tu hogar(Host: 127.0.0.1)",
		"picture": "images/fry.jpg",
		"contacts":
			{
                "mobile": "1-849-354-0421",
                "email": "juniorbaez01@gmail.com",
                "github": "jrbaez01",
                "twitter": "@jrbaez01",
                "location": "Dominican Republic"
			},
		"skills":
			[
                "Programming",
                "Disigner",
                "Frontend",
                "Buen Entendedor"
			],
		"appendBio":
			function () {
				$("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
				$("#header").prepend(HTMLheaderName.replace("%data%", this.name));
				$("#header").append(HTMLbioPic.replace("%data%", this.picture));
				$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

				var formattedContacts =	HTMLtwitter.replace("%data%", this.contacts.twitter) +
										HTMLgithub.replace("%data%", this.contacts.github) +
										HTMLemail.replace("%data%", this.contacts.email) +
										HTMLmobile.replace("%data%", this.contacts.mobile) +
										HTMLlocation.replace("%data%", this.contacts.location);

				$("#topContacts").append(formattedContacts);
				$("#footerContacts").append(formattedContacts);

				if (this.skills.length > 0) {
					$("#header").append(HTMLskillsStart);

					for (skill in this.skills) {
						$("#skills").append(HTMLskills.replace("%data%", this.skills[skill]));
					}
				}
			}
	};


/*
work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.
*/
var work =
	{
		"jobs":
            [
                {
                    "employer": "Imprenta KR",
                    "title": "Designer",
                    "location": "San Juan, Dominican Republic",
                    "dateWorked": "2013-2014",
                    "description": "I was a designer there."
                }
            ],
		"appendJobs":
			function () {
				for (var i = 0; i < this.jobs.length; i++) {
					$("#workExperience").append(HTMLworkStart);

					var formattedJob = 	HTMLworkEmployer.replace("%data%",this.jobs[i].employer)+
										HTMLworkTitle.replace("%data%",this.jobs[i].title)+
										HTMLworkLocation.replace("%data%",this.jobs[i].location)+
										HTMLworkDates.replace("%data%",this.jobs[i].dateWorked)+
										HTMLworkDescription.replace("%data%",this.jobs[i].description);

					$(".work-entry:last").append(formattedJob);
				}
			}
	};


/*
projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.
*/
var projects =
	{
		"project":
		[
			{
		 		"title":"My first project",
				"dateWorked":"2015",
				"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"images":
					[
						"images/197x148.gif",
						"images/197x148.gif"
					]
			}
		],
		"appendProjects":
			function() {
				for (var i = 0; i < this.project.length; i++) {
					$("#projects").append(HTMLprojectStart);

					var formattedProject = 	HTMLprojectTitle.replace("%data%", this.project[i].title)+
											HTMLprojectDates.replace("%data%", this.project[i].dateWorked)+
											HTMLprojectDescription.replace("%data%", this.project[i].description);

					for (var j = this.project[i].images.length - 1; j >= 0; j--) {
						formattedProject += HTMLprojectImage.replace("%data%", this.project[i].images[j]);
					}

					$(".project-entry:last").append(formattedProject);
				}
			}
	};


/*
education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/
var education =
	{
		"schools":
		[
			{
		 		"name":"UASD",
				"location":"San Juan de la Maguana, Dominican Republic",
				"degree":"Science Computer",
				"date":"2017",
				"website":"%Info here%",
				"majors":
					[
						"Software developing"
					]
			}
		],

		"onlineCourse":
		[
			{
		 		"title":"Intro to HTML and CSS",
				"school":"Udacity",
				"date":"2015",
				"website":"udacity.com"
			},
            {
		 		"title":"Javascript Basics",
				"school":"Udacity",
				"date":"2015",
				"website":"udacity.com"
			},
            {
		 		"title":"Git and Github",
				"school":"Udacity",
				"date":"2015",
				"website":"udacity.com"
			}

		],
		"appendEducation":
			function() {
				for (var i = 0; i < this.schools.length; i++) {
					$("#education").append(HTMLschoolStart);

					var formattedSchool= HTMLschoolName.replace("%data%", this.schools[i].name)+
											HTMLschoolDegree.replace("%data%", this.schools[i].degree)+
											HTMLschoolDates.replace("%data%", this.schools[i].date)+
											HTMLschoolLocation.replace("%data%", this.schools[i].location);

					for (var j = 0; j < this.schools[i].majors.length; j++) {
						formattedSchool += HTMLschoolMajor.replace("%data%", this.schools[i].majors[j]);
					}

					$(".education-entry:last").append(formattedSchool);
				}

	            $("#education").append(HTMLonlineClasses);

	            for (var i = 0; i < this.onlineCourse.length; i++) {
	                $("#education").append(HTMLschoolStart);

	                var formattedCourse =   HTMLonlineTitle.replace("%data%", this.onlineCourse[i].title) +
	                                        HTMLonlineSchool.replace("%data%", this.onlineCourse[i].school) +
	                                        HTMLonlineDates.replace("%data%", this.onlineCourse[i].date) +
	                                        HTMLonlineURL.replace("%data%", this.onlineCourse[i].website);
	                $(".education-entry:last").append(formattedCourse);
	            }

			}

	};

//this looks like methods in JAVA
bio.appendBio();
work.appendJobs();
projects.appendProjects();
education.appendEducation();

$("#mapDiv").append(googleMap);
