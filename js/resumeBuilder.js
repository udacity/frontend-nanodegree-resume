// var name = "Caden Albaugh";
// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// $("#main").append(bio.name);
// $("#main").append(work["position"]);
// $("#main").append(education.schools[0].name);
// $("#main").append(bio.skills);
// $("#main").append(bio.skills[0]);

var bio = {
	"name": "Caden Albaugh",
	"role": "Web Developer",
	contact: {
		"mobile": "319-330-1742",
		"email": "CadenAlbaugh@gmail.com",
		"GitHub": "https://github.com/ccalbaugh",
		"twitter": "@CadenAlbaugh",
		"location": "Iowa City"
	},
	"welcomeMessage": "Hey Everyone!",
	"skills": [
		"skillz"
	],
	"bioPic": "images/me.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "Albaugh PHC",
			"title": "HVAC Technician",			
			"location": "Tipton, IA",
			"datesWorked": "2013-2016",
			"description": "Just as it sounds"
		},
		{
			"employer": "Albaugh PHC",
			"title": "HVAC Technician",			
			"location": "Tipton, IA",
			"datesWorked": "2013-2016",
			"description": "Just as it sounds"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "University of Iowa",
			"location": "Iowa City",
			"degree": "BA",
			"major" : "International Studies",
			"minor" : "Portuguese",
			"graduated": "2012"
		},
		{
			"name": "Udacity",
			"location": "Online",
			"degree": "Nano Degree",
			"major" : "Front End Developer",
			"graduated": "2016"
		}	
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "01/01/0001",
			"description": "Dis is my Projekt",
			"images": [
				"ImageUrl1"
			]
		},
		{
			"title": "Sample Project 2",
			"dates": "01/01/0001",
			"description": "Dis is my Projekt",
			"images": [
				"ImageUrl2"
			]
		}
	]
}

if (bio.skills.length > 0) {
	document.getElementById('header').append()
}