

var bio = {
  "name": "Ilva Ravinska",
  "role": "Web Developer",
  "contacts": {
    "mobile": "691304229",
    "email": "ravi.ilva@gmail.com",
    "github": "raviilva",
    "location": "Luxembourg,Luxembourg"
  },
  "welcomeMessage": "My name is Ilva and I'm a Web Developer!",
  "skills": [
    "HTML", "CSS", "JavaScript", "Responsive Design", "Bootstrap"
  ],
  "bioPic": "images/Ilva.jpg"
};

bio.display = function() {

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

$("#topContacts").append(allContacts);
$("#footerContacts").append(allContacts);

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

};
bio.display();


var education = {
  "schools": [
    {
      "name": "Anglia Ruskin University",
      "location": "Cambridge, UK",
      "degree": "Bachelors of Arts",
      "major": ["International Business Management"],
      "dates": "2009-2013"
    },
    {
      "name": "Zuyd University",
      "location": "Maastricht, The Netherlands",
      "degree": "Bachelors of Arts",
      "major": ["International Business Management"],
      "dates": "2010-2011"
    }
  ],
    "onlineCourses": [
    {
      "title": "Front End Web Developer",
      "school": "Udacity",
      "dates": "2016-2017",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
}


education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedEduData = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
		$(".education-entry:last").append(formattedEduData);
	}


  for(onlineCourse in education.onlineCourses) {
    $("#education").append(HTMLonlineCourseStart);
    var formattedTitle = HTMLonlineCourseTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedSchool= HTMLonlineCourseSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    var formattedDates= HTMLonlineCourseDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
    var formattedUrl= HTMLonlineCourseUrl.replace("%data%", education.onlineCourses[onlineCourse].url);

    var formattedEduData = formattedTitle + formattedSchool + formattedDates + formattedUrl;
    $(".education-entry:last").append(formattedEduData);
  }
};
education.display();


var work = {
  "jobs": [
    {
    "employer": "RBC",
    "title": "Transfer Agent",
    "dates": "2016-present",
    "location": "Luxembourg, Luxembourg",
    "description": "Processing and validating shareholder transactions dedicated to European clients.Producing advanced shareholder reports and internal reports related to the daily Transfer Agent records in relation to compliance. Managing sensitive cash processes, ensuring that deadlines are followed."
  },
    {
    "employer": "State Street Bank",
    "title": "Transfer Agent",
    "dates": "2013-2014",
    "location": "Luxembourg,Luxembourg",
    "description": "Transfer Agent of the Investor & Distributor Services team, answering all queries received via phone, email, facsimile and post on behalf of fund clients including shareholders, brokers or financial intermediaries, as well as fund promoters and fund management companies."
  }
  ]
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedWorkData = formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription;
    $(".work-entry:last").append(formattedWorkData);
    }
};
work.display();


var projects = {
  "projects": [
    {
    "title": "Portfolio",
    "image": "images/Portfolio.jpg",
    "dates": "2016",
    "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
      }
  ]
};

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
  	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
	   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  	$(".project-entry:last").append(formattedDescription)
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
    $(".project-entry:last").append(formattedImage)

  }
};
projects.display();

$("#mapDiv").append(googleMap);




