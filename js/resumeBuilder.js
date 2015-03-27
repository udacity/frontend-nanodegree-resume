/*
var awesomeThoughts="I am Junior and I am AWESOME";
var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
var formattedName = HTMLheaderName.replace("%data%","Junior Baez");
var formattedRole = HTMLheaderRole.replace("%data%",funThoughts)
*/
/*
bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
*/
var bio =
	{
		"name":"Junior Báez",
		"role":"Programmer",
		"welcomeMessage":"No hay lugar como tu hogar(Host: 127.0.0.1)",
		"picture":"images/fry.jpg",
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
		"appendBio": function() {
			$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
			$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
			$("#header").append(HTMLbioPic.replace("%data%",bio.picture));
			$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

			var formattedContacts =	HTMLtwitter.replace("%data%",bio.contacts.twitter)+
									HTMLgithub.replace("%data%",bio.contacts.github)+
									HTMLemail.replace("%data%",bio.contacts.email)+
									HTMLmobile.replace("%data%",bio.contacts.mobile)+
									HTMLlocation.replace("%data%",bio.contacts.location);

			$("#topContacts").append(formattedContacts);
			$("#footerContacts").append(formattedContacts);

			if (bio.skills.length>0) {
				$("#header").append(HTMLskillsStart);
				//document.getElementById("header").innerHTML=document.getElementById("header").innerHTML+HTMLskillsStart;
				for(skill in bio.skills) {
					$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
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
			"employer":"Imprenta KR",
	 		"title":"Disigner",
			"location":"San Juan, Dominican Republic",
			"dateWorked":"2013-2014",
			"description":"I was a disigner there. Education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course."
			},
			{
			"employer":"Imprenta KR",
	 		"title":"Disigner",
			"location":"San Juan, D.R.",
			"dateWorked":"2014-2015",
			"description":"I was a disigner there. Education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course."
			}
		],
		"appendJobs": function() {
			for (var i = work.jobs.length - 1; i >= 0; i--) {
				$("#workExperience").append(HTMLworkStart);
				var formattedJob = 	HTMLworkEmployer.replace("%data%",work.jobs[i].employer)+
									HTMLworkTitle.replace("%data%",work.jobs[i].title)+
									HTMLworkLocation.replace("%data%",work.jobs[i].location)+
									HTMLworkDates.replace("%data%",work.jobs[i].dateWorked)+
									HTMLworkDescription.replace("%data%",work.jobs[i].description);

				$(".work-entry:last").append(formattedJob);
			};
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
	 		"title":"%data%",
			"dateWorked":"%data%",
			"description":"%data%",
			"images":
				[
				"/images/*.jpg",
				"/images/*.jpg"
				]
			}
		]
	};


/*
education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/
var education =
	{
		"schools":
		[
			{
	 		"name":"%data%",
			"location":"San Juan de la Maguana, Dominican Republic",
			"degree":"%data%",
			"dateAttended":"%data%",
			"website":"%data%",
			"majors":
				[
				"%data list%",
				"%data list%"
				]
			}
		],

		"onlineCourse":
		[
			{
	 		"title":"%data%",
			"school":"%data%",
			"dateAttended":"%data%",
			"website":"%data%"
			}
		]
	};

bio.appendBio();
work.appendJobs();

$("#mapDiv").append(googleMap);
