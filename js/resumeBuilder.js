/*
This is empty on purpose! Your code to build the resume will go here.
 */
// -------------------------------------------------------------------------------------
// here we are creating new variables, and replacing '%data%' with our actual info
// formattedName & formattedRole are generic variables from the helper.js file that are ours to manipulate

var bio = {
	"name": "SJ Rim",
	"role": "Web Developer",
	"contactInfo": {
		"phone": "267-401-9777",
		"email": "rim.seungjoon@gmail.com"
		},
	"biopic": "../images/profile.jpg",
	"welcomeMessage": "YOOOOOOOO",
	"skills": [
		"HTML",
		"CSS",
		"JavaScript"
		],
	"contacts": {
		"mobile": 2674019777,
		"email": "rim.seungjoon@gmail.com",
		"github": "github.com/seungjoonrim",
		"location": "Philadelphia, PA"
	}
};

var work = {
	"jobs": [
		{
			"employer": "Jacobs Engineering Group",
			"title": "Intern",
			"location": "Arlington, VA",
			"dates": "Summer of 2016",
			"description": "AutoCAD Civil 3D, Microstation, Infrastructure Design"
		},
		{
			"employer": "Urban, LTD",
			"title": "Intern",
			"location": "Chantilly, VA",
			"dates": "Summer of 2015",
			"description": "AutoCAD Civil 3D, Land Development, Site Layout"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Virgnia Tech",
			"city": "Blacksburg, VA",
			"degree": "BA",
			"major": ["Civil/Environmental Engineering"]
		},
		{
			"name": "Seoul National University",
			"city": "Seoul, South Korea",
			"degree": "Study Abroad",
			"major": ["Civil/Environmental Engineering"]
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Zombies",
			"dates": "Fall 2016",
			"description": "Adventure-based game built with Python."
		},
		{
			"title": "Resume 1.0",
			"dates": "Spring 2017",
			"description": "First web-page, my online resume."
		},
		{
			"title": "Resume 2.0",
			"dates": "Summer 2017",
			"description": "Second web-page, second version of my online resume."
		}
	]
}

// $("#main").append(bio.name);
// $("#main").append(bio.role);
