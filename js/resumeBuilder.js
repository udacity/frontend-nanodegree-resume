//TODO: Put this in a bio object.
var formattedName = HTMLheaderName.replace('%data%', 'Zachary Evan Butterfield');
var formattedBioPic = HTMLbioPic.replace('%data%', 'images/moogle.jpg')
$('#header').append(formattedName);
$('#header').append(formattedBioPic);

const   work = {
			"jobs" : [
				{
					"employer" : "Altia Central",
					"title" : "Assistant Language Teacher",
					"location" : "Kasaoka, Okayama-ken, Japan",
					"dates" : "January 2015 - Present",
					"description" : "I teach English to school children."
				}
			]
		},
		projects = {
			"projects" : [
				{
					"title" : "memoryGame",
					"dates" : "October 2017",
					"description" : "A matching game created with JavaScript and jQuery.",
					"images" : ["images/memory.jpg"]
				}
			]
		},
		bio = {
			"name" : "Zachary Evan Butterfield",
			"role" : "Freelance Front-End Developer",
			"welcomeMessage" : "Hey there! I'm Zachary Evan Butterfield. Nice to meet you!",
			"biopic" : "images/moogle.jpg",
			"contacts" : {
				"mobile" : "999-999-9999",
				"email" : "zbutterfield@gmail.com",
				"github" : "https://github.com/lizardscruff/",
				"location" : "Satosho, Okayama-ken, Japan"
			},
			"skills" : ["HTML", "JavaScript", "Python", "CSS", "ES6", "jQuery", "JSON", "AJAX"]
		},
		education = {
			"schools": [
				{
					"name" : "Georgia Southern University",
					"location" : "Statesboro, GA, USA",
					"degree dates" : "2004 - 2008",
					"url" : "http://www.georgiasouthern.edu/",
					"majors" : ["Painting"]
				}
			],
			"onlineCourses" : [
				{
					"title" : "Introduction to Programming : Front-End Development",
					"school" : "Udacity",
					"dates" : "May - October 2017",
					"url" : "https://www.udacity.com/"
				}
			]
		}
//TODO: never use for in loops. Use the ES6 one maybe?
for(job in work.jobs){
	$('#workExperience').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
	//var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

	$('.work-entry:last').append(formattedEmployerTitle);
	$('.work-entry:last').append(formattedDates);
	//$('.work-entry:last').append(formattedLocation);
	$('.work-entry:last').append(formattedDescription);
}


if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	let formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace('%data%', bio.skills[5]);
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace('%data%', bio.skills[6]);
	$('#skills').append(formattedSkill);

	formattedSkill = HTMLskills.replace('%data%', bio.skills[7]);
	$('#skills').append(formattedSkill);
} else {
	console.log('No Skills!');
}






