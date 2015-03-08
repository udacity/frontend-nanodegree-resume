var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picUrl);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedPicture);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

if (bio.skills.length > 0) {
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

var bio = {
  "name": "Daniel Stuart",
  "role": "Co-Founder & Chief Product Officer",
  "contacts": {
    "email": "dancstuart@gmail.com",
    "github": "danstuart",
    "twitter": "@danstuart",
    "location": "Guelph, Ontario, Canada"
  },
  "welcomeMessage": "welcome to my resume",
  "skills": [
    "management", "design", "HTML", "CSS", "Javascript", "Ruby on Rails", "Slim"
  ],
  "picUrl": "images/me.jpg"
};

function displayWork() {
	for (job in work.jobs) {
		// create new div for work experience
	  $("#workExperience").append(HTMLworkStart);
	  //concat employer and title
	  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	  var formattedEmployerTitle = formattedEmployer + formattedTitle;

	  $(".work-entry:last").append(formattedEmployerTitle);

	  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	  $(".work-entry:last").append(formattedDates);

	  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	  $(".work-entry:last").append(formattedDescription);

	  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	  $(".work-entry:last").append(formattedLocation);
	}
}

displayWork();

var work = {
  "jobs": [
    {
      "employer": "Bidvine",
      "title": "Chief Product Officer",
      "location": "London, Waterloo",
      "dates": "2014-2015",
      "description": "Co-founder and CPO of Bidvine - a Techstars London 2014 company. Bidvine is the fast, free way to get competing quotes from local service professionals."
    },
    {
      "employer": "AdGear",
      "title": "VP Business Development",
      "location": "Toronto",
      "dates": "2013-2014",
      "description": "Ran sales from strategy through to selling."
    },
    {
      "employer": "LivingSocial",
      "title": "Senior Director Canada",
      "location": "Toronot",
      "dates": "2012-2013",
      "description": "Local sales management and country-level strategy."
    }
  ]
};

for (project in projects) {
  $("#projects").append(HTMLprojectStart);

  var formatTitle = HTMLprojectTitle.replace("%data%", projects.project[0].title);
  $("#projects").append(formatTitle);
}

var projects = {
  "projects": [
    {
      "title": "Bidvine site plan",
      "dates": "2014",
      "description": "Mapped out the needs, goals, flows, etc etc for the site blah blah before we told anyone that it might be something or some such.",
      "images": "https://www.bidvine.com/assets/professional-b3bd36320f42ca74f2b9ce2b9ce26a2b.jpg"
    }
  ]
};

for (school in education.schools) {

  var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
  $(".education-entry:last").append(formattedNameDegree);


  var formattedSchoolDates = HTMLschoolDegree.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchoolDates);

  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedSchoolLocation);

  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedSchoolMajor);
}
$(".education-entry:last").append(HTMLonlineClasses);
for (online in education.onlineCourses) {
  var formattedOnlineTittle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
  var formattedOnlineTitleSchool = formattedOnlineTittle + formattedOnlineSchool;
  $(".education-entry:last").append(formattedOnlineTitleSchool);
}

var education = {
  "schools": [
    {
      "name": "Wilfrid Laurier University",
      "location": "Waterloo, ON, CA",
      "degree": "Hons. BA",
      "majors": ["English Literature", "History"],
      "dates": "1992-1996",
      "url": "http://wlu.ca/"
    },
    {
      "name": "D'Youville College",
      "location": "Buffalo, NY, USA",
      "degree": "Master's Degree",
      "majors": ["Adolescence Education"],
      "dates": "2001-2002",
      "url": "http://www.dyc.edu/"
    },
    {
      "name": "University of Toronto",
      "location": "Toronto, ON, CA",
      "degree": "Master's Degree",
      "majors": ["Education: Curriculum, Teaching and Learning"],
      "dates": "2005-2006",
      "url": "http://www.utoronto.ca/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Lean Six Sigma",
      "school": "Villinova University",
      "dates": "2009",
      "url": "http://www.villanovau.com/resources/six-sigma/lean-six-sigma-certification/"
    },
    {
      "title": "Frontend Web Developer Nanodegree",
      "school": "Udemy",
      "dates": "2015",
      "url": "https://www.udacity.com/course/nd001"
    }
  ]
};

$(document).click(function(loc)) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
