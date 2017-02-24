var bio = {
	"name": "LISA BRONWYN",
	"role": "Web Developer",
	"contacts": {
		"email": "lisa@lisabronwyn.com",
		"github": "lisabronwyn",
		"twitter": "@lisabronwyn",
		"location": "San Francisco"
	},
	"picture": "images/Untitled2.png",
	"welcomeMessage": "I'm currently a software development apprentice at Learners Guild in Oakland, CA",
	"skills": ["HTML5", "CSS3", "Software Development", "WordPress", "Responsive Website Design"]
};

var work = {
	"jobs": [
		{
			"employer": "Learners Guild",
			"title": "Software Development Apprentice",
			"location": "Oakland, CA",
			"datesWorked": "September 2016 - July 2017",
			"description": "10-month, full-time, intensive web developer training program. We focus on full-stack JS skills and project/apprentice-based learning. We've been working on teams with experienced developers and fellow learners to build web applications.",
		},
		{
			"employer": "The Art of Resale",
			"title": "Founder",
			"location": "San Francisco Bay Area",
			"datesWorked": "April 2015 - present",
			"description": "Freelance writing and web design with a passion for WordPress development. All things resale. Published blogs for a variety of resale apps."
		},
		{
			"employer": "Adecco USA at Google Express",
			"title": "Store Operations Lead",
			"location": "Mountain View, CA",
			"datesWorked": "October 2013 - April 2015",
			"description": "Managed teams of 5-25 Store Operators. Worked closely with in-store managers and employees for ongoing product/process feedback. Worked to integrate operations processes, troubleshoot issues, report feedback to Fulfillment Leads. Collaborated with design team to test new operational processes. Provided key insights and quality feedback. Worked with Field Operations Lead to manage hardware for in-store processes. Proven track record in reduction of transfers and rejections of store orders for small to high volume merchants. Trained a rotating team of store operators to accomplish business objectives by ensuring efficient product flow and fulfilling 10000+ orders per month for same-day delivery service."
		},
	]
};

var education = {
	"schools": [
		{ "name": "Learners Guild",
			"datesAttended": "2016-2017",
			"location": "Oakland, CA",
			"studied": "Full-Stack Software Engineering",
			"url": "http:/www.learnersguild.org"
		}
	],
	"onlineCourses": [
		{ "school": "Team Treehouse",
			"title": "JavaScript, Design, Database, and App Development Tutorials",
      "completed": "February 2017",
			"url": "https://www.teamtreehouse.com"
		},
		{ "school": "Udacity",
			"title": "JavaScript Basics",
			"completed": "February 2017",
			"url": "//classroom.udacity.com/courses/ud804"
		},
		{ "school": "FreeCodeCamp",
			"title": "Front-End Development Certification",
			"completed": "Ongoing",
			"url": "https://www.freecodecamp.com"
		},
		{ "school": "Front-End Masters",
			"title": "JavaScript, Front-End, and Design Tutorials",
      "completed": "Ongoing",
			"url": "https://www.frontendmasters.com"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "JavaScript Calculator",
			"datesWorked": "February 2017",
			"description": "Created a calculator with JavaScript",
			// "images": ["images"],
			"url": "https://github.com/lisabronwyn/shivering-tarantula-calculatorbenchmark-150"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').series({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
	});
});

// $("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
