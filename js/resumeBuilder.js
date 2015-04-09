var bio = {
	"name": "Sherry Leung",
	"role": "Technical Program Manager",
	"contacts": {
		"email": "leung_sherry@hotmail.com",
		"mobile": "206-697-4491",
		"github": "angelwink",
		"location": "Seattle"
		},
	"picture": "images/linkedin_picture.jpg",
	"welcomeMessage": "Proven program manager and certified ScrumMaster with over 14 years"+
	" of experience in Business Intelligence and a solid background in data analytics and"+
	" architectural best practice.",
	"skills": ["Project Management","Analytics","Data Management","Solution Architecture"]
};

var work = {
"jobs": [{
	"employer": "Nordstrom",
	"title": "Technical Program Manager",
	"location": "Seattle, WA, USA",
	"datesWorked": "Apr 2004 -- current",
	"description": "Provide strategic leadership on the data and tagging program"+ 
	"for Digital Analytics Systems of Nordstrom eCommerce"
},
{	"employer": "T-Mobile",
	"title": "Sr. BI Solution Architect",
	"location": "Bellevue, WA, USA",
	"datesWorked": "Dec 2010 -- Apr 2014",
	"description": "Proven success on leading multi-phased strategic"+ 
	" projects across different functional areas (analysts,"+ 
	" developers, testers and DBAs) with mixed of vendors and FTEs"
},
{	"employer": "Sainsbury's",
	"title": "Insight Analysis Manager",
	"location": "London, UK",
	"datesWorked": "Nov 2007 -- Oct 2010",
	"description": "Managed all mannaers of analytic ouputs for Online Marketing"+
	" and Local Marketing"
},
{	"employer": "dunnhumby",
	"title": "Customer Insight Analyst Consultant",
	"location": "London, UK",
	"datesWorked": "Sep 2006 -- Nov 2007",
	"description": "Developed customer segmentation and prospect model to optimize"+
	" marketing campaign strategy"
},
{	"employer": "Lloyds TSB",
	"title": "Customer Insight Analyst",
	"location": "Bristol, UK",
	"datesWorked": "Jul 2002 -- Sep 2006",
	"description": "Supported business on various initiatives by utilizing advanced"+
	" geo-spatial analysis"
},
{	"employer": "City of Bellevue",
	"title": "GIS Analyst",
	"location": "Bellevue, WA, USA",
	"datesWorked": "Jun 2001 -- Mar 2002",
	"description": "Supported data and system migration of an entire city’s worth"+
	" of GIS data from ArcInfo 7 to ArcGIS 8"
}
]};

var education = {
"schools": [{
	"name": "University of Washington",
	"location": "Seattle",
	"degree": "BA (Geographic Information Systems)",
	"major": "Geography",
	"datesAttended": "1997 -- 2001",
	"url": "http://www.washington.edu"
},
{	"name": "Ingraham",
	"location": "Seattle",
	"degree": "High School",
	"major": "N/A",
	"datesAttended": "1994 -- 1997",
	"url": "http://ingrahamhs.seattleschools.org"
}],
"onlineCourses": [{
	"school": "Udacity",
	"title": "Front-End Web Developer Nanodegree",
	"completed": "2015",
	"url": "https://www.udacity.com/course/nd001"
}]
};

var projects = {
"projects": [{
	"title": "Unlock the Secrets in Customer Experience with Big Data Analytics",
	"datesWorked": "Oct 2013",
	"description": "A case study on predicting customer attrition utilizing text"+
	" analytics on contact center memo data",
	"images": ["images/TextAnalytics_TD_Conf.jpg"]
},
{
	"title": "Predictive Analytics Automation: Making Better Decisions Faster!",
	"datesWorked": "Oct 2012",
	"description": "An overview on how to deploy the tools, data, and process to"+
	" support the scoring automation of predictive models",
	"images": ["images/PAA_TD_Conf.png"]
}
]};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelMsg);

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

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
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


$("#mapDiv").append(googleMap);

