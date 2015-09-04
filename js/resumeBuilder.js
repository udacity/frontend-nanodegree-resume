
//Variable declarations

//Name and Role
var name = "Elvis Hedji";
var role = "Front-end developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

//Bio
var bio = {
		"name": name + "<br /> ",
		'pic': '<img src= images/linkedin.jpg>',
		"role": "Front-end developer" + "<br /> ",
		'welcomeMessage': 'Hello and welcome to my active online resume, here you can find my work experience, projects and contact details.',
	'contact':
	{
	'email': ' ehedji@gmail.com',
	'twitter': 'toucheism',
	'cell': '(202) 302 - 7107',
	'git': 'toucheism'

	},
	'skills': {
		'html': 'HTML',
		'css': 'CSS',
		'msOffice': 'MS Office',
		'cs6': 'CS6',
	}
};

//Work
var work= {
	"jouons":
	{
		"employer": "Jouons Inc",
		"position": "Operations Officer, and Co-founder",
		"location": "Washington, D.C",
		"dates": "2009 - Present",
		"description": "Jouons Soccer is a youth sports development nonprofit, based in Washington D.C that focuses on developing a holistic athlete while neutralizing the economic barriers through fundraising and community outreach programs"
	},
	"bbt":{
		"employer": "Branch Banking and Trust Company",
		"position": "Floating Teller",
		"location": "Washington, D.C",
		"dates": "2011 - 2012",
		"description": "BB&T is a leading conservative financial institution headquratered in North Carolina, with branches all along the East coast and southwest."
	}
};


//Education
var education = {
	"schools":{
		"name": "Davis & Elkins College",
		"location": "Elkins, WV",
		"major": ["Marketing"," Fashion"],
		"dates": "Graduated 2011",
		"url": "Http://www.DEWV.edu"
		},

	"onlineCourses":
		{
		"name": "Udacity",
		"city": "Washington, D.C",
		"course": "Front-end web developer",
		"dates": "2015",
		"url": "http://www.udacity.com"}
		};


//projects

var projects ={
	"project1":
	{
		"title": "Project One title",
		"dates": "project one date",
		"description": "project one description"
	},

	"images": {
		"image1": '<img src= "http://www.placehold.it/100x100">',
		"image2": '<img src= "http://www.placehold.it/100x100">',
		"image3": '<img src= "http://www.placehold.it/100x100">'

	}
};


//Append & Prepend

//Header
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append("<br /> ");


//Bio
$("#main").append(bio.pic + "<br /> ");
$("#main").append(bio.role + "<br /> ");
$("#main").append(bio.welcomeMessage + "<br /> ");
$("#main").append('email: ' + bio.contact.email + "<br /> ");
$("#main").append('twitter: ' + bio.contact.twitter + "<br /> ");
$("#main").append('cell: ' + bio.contact.cell + "<br /> ");
$("#main").append('git: ' + bio.contact.git + "<br /> ");
$("#main").append('<br />');
//Skills
$("#main").append('+' + bio.skills.html + "<br /> ");
$("#main").append('+' + bio.skills.css + "<br /> ");
$("#main").append('+' + bio.skills.msOffice + "<br /> ");
$("#main").append('+' + bio.skills.cs6 + "<br /> ");
$("#main").append('<br />');

//Education - Schools
$("#main").append(education.schools.name + "<br /> ");
$("#main").append(education.schools.location + "<br /> ");
$("#main").append(education.schools.major + "<br /> ");
$("#main").append(education.schools.dates + "<br /> ");
$("#main").append(education.schools.url + "<br /> ");
$("#main").append('<br />');

//Education - Online courses
$("#main").append(education.onlineCourses.name + "<br /> ");
$("#main").append(education.onlineCourses.city + "<br /> ");
$("#main").append(education.onlineCourses.course + "<br /> ");
$("#main").append(education.onlineCourses.dates + "<br /> ");
$("#main").append(education.onlineCourses.url + "<br /> ");
$("#main").append('<br />');

//Work - Jouons
$("#main").append(work.jouons.employer + "<br /> ");
$("#main").append(work.jouons.position + "<br /> ");
$("#main").append(work.jouons.location + "<br /> ");
$("#main").append(work.jouons.dates + "<br /> ");
$("#main").append(work.jouons.description + "<br /> ");
$("#main").append('<br />');

//Work-BB&T
$("#main").append(work.bbt.employer + "<br /> ");
$("#main").append(work.bbt.position + "<br /> ");
$("#main").append(work.bbt.location + "<br /> ");
$("#main").append(work.bbt.dates + "<br /> ");
$("#main").append(work.bbt.description + "<br /> ");
$("#main").append('<br />');

//Projects
$("#main").append(projects.project1.title + "<br /> ");
$("#main").append(projects.project1.dates + "<br /> ");
$("#main").append(projects.project1.description + "<br /> ");
$("#main").append(projects.images.image1 + "<br /> ");
$("#main").append(projects.images.image2 + "<br /> ");
$("#main").append(projects.images.image3 + "<br /> ");



//Titles
//$("#main").append(HTMLskillsStart + "<br /> ");
//$("#main").append(HTMLworkStart + "<br /> ");
//$("#main").append(HTMLskillsStart + "<br /> ");
//$("#main").append(HTMLskillsStart + "<br /> ");


