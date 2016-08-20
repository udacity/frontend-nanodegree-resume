// work data object
var work = {
	"jobs": [{
		"employer": "Mercer Consulting",
		"title": "Implementation Services Team Leader",
		"location": "Philadelphia, PA",
		"dates": "2014 - 2016",
		"description": "team lead for pension software implementation"
	}, {
		"employer": "Towers Watson",
		"title": "Calculation Developer",
		"location": "Philadelphia, PA",
		"dates": "2011 - 2014",
		"description": "Implemented pension software code"
	}]
};

// projects data object
var projects = {
	"projects": [{
		"title": "title 1",
		"dates": "dates 1",
		"description": "description 1",
		"images": [
			"image url 1", "image url 2"
		]
	}, {
		"title": "title 2",
		"dates": "dates 2",
		"description": "description 2",
		"images": [
			"image url 3", "image url 4"
		]
	}]
};

// Create bio object to contain biographical info.
var bio = {
	"name": "Josef Mirante",
	"role": "Web Developer",
	"welcomeMessage": "Great news everybody!",
	"bioPic": "images/fry.jpg",
	"contacts": {
		"mobile": "(360) 540 0952",
		"email": "josef.mirante@gmail.com",
		"github": "josef.mirante",
		"twitter": "nobody",
		"location": "Philadelphia"
	},
	"skills": ["red hair", "rapier-like wit", "humbleness"]
};

// Create education object.
var education = {
	"schools": [{
		"name": "University of Washington",
		"location": "Seattle, WA",
		"degree": "BS",
		"dates": "2006 - 2008",
		"majors": ["Mathematics"]
	}, {
		"name": "Everett Community College",
		"location": "Everett, WA",
		"degree": "AA",
		"dates": "2004 - 2006",
		"majors": ["Math and Science Emphasis"]
	}]
};

// Append data to html
// Append skills
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedHeaderName);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

}

// Append work
for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

}