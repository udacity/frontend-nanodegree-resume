
var bio =({
	"name":	"Black Maggot",
	"role": "Maggot Identification Provider",
	"contacts": {	"mobile": "Ph: 0428 887 776",
					"location": "Outer Barcoo",
					"twitter": "@blackMaggot",
					"gitHub": "blackMaggot",
					"email": "maggot.muncher@outer.barcoo.com"
				},
	"bioPic": "images/GreenEye.jpg",
	"welcomeMessage": "Greetings Life Forms",
	"skills": ["Maggot Detector", "Inspector", "Boot Sniffer", "Livestock Counter"]
});

var education=({
	"schools": [{
		"name": "Wilcannia Tek",
		"city": "Wilcannia",
		"degree": "Ferral Pig Wrestling",
		"majors": ["CS"],
		"dates": 2000,
		"url": "http://wildhog.com.au"
	},
	{
		"name": "Tennant Creek Grammer",
		"city": "Tennant Creek",
		"degree": "Imperial Pint Skolling",
		"majors": ["OD"],
		"dates": 1988,
		"url": "http://snakeale.com.au"
	}],
	"onlineCourses": [
		{
			"tile": "Home made explosives",
			"school": "Chucka Booom",
			"dates": 1999,
			"url": "http://chuckabooom.com.au"
		}
	]
});

var work = {
	"jobs": [
		{
			"employer": "Joe's Fishing Supplies",
			"title": "Worm Tester",
			"dates": "Jan 1990 - 1995",
			"description": "It was the worm testers job to sample the worms and see if they were still fresh enough to use as bait."

		},
		{
			"employer": "Mario's Pizza Bar",
			"title": "Delivery Driver",
			"dates": "Jan 1995 - 1998",
			"description": "The delivery driver drove the delivery van."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project One",
			"dates": 1999,
			"description": "So far I've only made small explosives",
			"images": ["https://image1.com", "https://image2.com"]
		}
	]
}

projects.display = function(){
	console.log("Projects len ");
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}	
		}
	}
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedBioPic);
$("#header").append(formattedName);
$("#header").append(formattedRole);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);

projects.display();