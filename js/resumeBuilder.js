// End of Javascript Lesson 1 Code Assignment


var bio = {
	"name": "George Fischer",
	"role": "Web Developer",
	"welcomeMessage": "Welcome to My Resume",
	"contacts":
		{
			"mobile": "801-555-5555",
			"email": "geosynchronous@mac.com",
			"github": "https://Geosynchronous.github.io",
			"twitter": "geo-twitter",
			"location": "Salt Lake City"
		},
	"skills":[
			"Front-End Web",
			"Courseware",
			"Physics",
			"Electronics",
			"Instrumentation"
	],
	"bioPic": "images/me.jpg"
}


// Examples of how to print in browser window.
// Remove later.

// $("#main").append(bio["name"]);
// $("#main").append(bio.role);


var education = {
	"schools": [
		{
			"name": "University of Utah",
			"location": "Salt Lake City, UT, US",
			"degree": "BS",
			"majors": ["Biology"],
			"dates": 1977,
			"url": "http://www.utah.edu/"
		},
		{
			"name": "University of Utah",
			"city": "Salt Lake City, UT, US",
			"degree": "MS",
			"majors": ["Physics"],
			"dates": 1980,
			"url": "http://www.utah.edu/"
		},
		{
			"name": "University of Utah",
			"city": "Salt Lake City, UT, US",
			"degree": "Education Certification",
			"majors": ["Secondary School Instructor"],
			"dates": 1984,
			"url": "http://www.utah.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com/courses/all"
		}
	]
}

// Remove later.
// $("#main").append(education.schools[0].major);


var work = {
	"jobs":[
		{
			"employer": "City Academy Charter School",
			"title": "Engineering Teacher",
			"location": "Salt Lake City, Utah",
			"dates": "2013 - 2014",
			"description": "Taught Digital Electronics & Engineering Design with 3D CAD"
		},
		{
			"employer": "Home",
			"title": "Domestic Engineer",
			"location": "Salem, Utah",
			"dates": "1995 - 2013",
			"description": "Did the Mr. Mom thing in a semi-rural location."
		},
		{
			"employer": "Math Department, University of Utah",
			"title": "LAN Coordinator",
			"location": "Salt Lake City, Utah",
			"dates": "1993 - 1995",
			"description": "Assisted Network Administrator serving users & infrastructure."
		},
		{
			"employer": "Wasatch Educations Systems",
			"title": "Courseware Developer",
			"location": "Salt Lake City, Utah",
			"dates": "1986 - 1993",
			"description": "Developed physics and adult education courseware."
		},
		{
			"employer": "Park City High School",
			"title": "Physics & Biology Teacher",
			"location": "Park City, Utah",
			"dates": "1985 - 1986",
			"description": "Taught Phyics and Biology."
		},
		{
			"employer": "Wasatch Education Systems",
			"title": "Programmer",
			"location": "Salt Lake City, Utah",
			"dates": "1984 - 1985",
			"description": "Programmed biology courseware and simulations."
		},
		{
			"employer": "National Solar Observatory",
			"title": "Physics Intern",
			"location": "Sunspot, New Mexico",
			"dates": "Summer 1984",
			"description": "Designed solar tracking data loggers for worldwide survey."
		},
		{
			"employer": "Quartex",
			"title": "Research Engineer",
			"location": "Salt Lake City, Utah",
			"dates": "1983",
			"description": "R&D for crystal oscillator technologies."
		},
		{
			"employer": "Eaton Kenway",
			"title": "Electrical Engineer",
			"location": "Salt Lake City, Utah",
			"dates": "1982",
			"description": "Storage-retrieval robot development and configuration."
		},
		{
			"employer": "Physics, University of Utah",
			"title": "Electrical Engineer",
			"location": "Salt Lake City, Utah",
			"dates": "1981",
			"description": "Finished Cosmic Ray Research work on Fly's Eye Project."
		},
		{
			"employer": "Physics, University of Utah",
			"title": "Teaching Assistant",
			"location": "Salt Lake City, Utah",
			"dates": "1978 - 1981",
			"description": "Taught graduate level analog & digital electronics. and computer interfacing labs."
		},
		{
			"employer": "University of Utah",
			"title": "Research Assistant",
			"location": "Salt Lake City, Utah",
			"dates": "1974 - 1980",
			"description": "Worked in chemistry, molecular biology, biochemistry and physics labs."
		}
	]
}

var projects = {
	"projects":[
		{
			"title": "",
			"dates": "",
			"description": "",
			"images":[
				"https://geosynchronous/github.io"
			]
		},
		{
			"title": "",
			"dates": "",
			"description": "",
			"images":[
				"https://geosynchronous/github.io"
			]
		},
		{
			"title": "",
			"dates": "",
			"description": "",
			"images":[
				"https://geosynchronous/github.io"
			]
		}
	]
}

// This code added from beginning of Lesson 2

$("#header").append(HTMLheaderName);

if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
}


// Begin work on displaying category info to resume page

$("#workExperience").append(HTMLworkStart);

for (job in work.jobs) {

 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}

    // for(var i = 0; i < 9; i++) { console.log(i); }
    //   console.log(HTMLskillsStart);