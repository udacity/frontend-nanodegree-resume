/* This is a list off all the variables and objects with information */

var bio = {
	"name": "Matthew Perkins",
	"role": "Entrepreneur bad boy",
	"contacts": [ 
		{
		"mobile": "07391 449 184",
		"email": "mfperkins@gmail.com",
		"location": "London, England",
		}
	],
	"pictureURL": "http://i.imgur.com/TkwsKIw.jpg",
	"welcomeMessage": "Welcome to my incrediballs resume website", 
	"skills": ["skiing", "climbing", "coding"]
}

var work = {
	"jobs": [
		{
			"start": 2012,
			"position": "Group Product Manager",
			"employer": "The Climate Corp",
			"years": "2014-2016",
			"location": "San Francisco, CA",
			"description": "Amazing worthless job. Post-ironic pug gastropub bushwick small batch. DIY lo-fi stumptown distillery accusamus YOLO microdosing quis lumbersexual fugiat. Next level bespoke kale chips plaid man bun, laborum sint synth sartorial dolor. Stumptown wayfarers tumblr enim pickled. Banh mi est 90's ut asymmetrical. Schlitz messenger bag brunch odio echo park sartorial. Forage culpa commodo pitchfork photo booth echo park."
		},
		{	
			"start": 2012,
			"position": "CEO and Cofounder",
			"employer": "Yield Pop",
			"years": "2012-2014",
			"location": "Zurich, Switzerland",
			"description": "Gentrify VHS pug, neutra fap pitchfork butcher blue bottle. Gastropub etsy twee, kombucha brunch pug 90's. Fanny pack seitan try-hard squid kitsch. Bushwick franzen neutra four dollar toast venmo hammock, dreamcatcher knausgaard whatever. Quinoa vice four loko, chia literally neutra pitchfork poutine flannel microdosing. Kickstarter tacos polaroid tousled PBR&B. Cray portland brooklyn keffiyeh tofu."
		}
	]
}


var education = {
	"schools": [
		{
		"name": "Harvard Business School",
		"years": 2,
		"location": "Boston, MA"
		},
	{
		"name": "University of Durham",
		"years": 4,
		"location": "Durham, England"
		}
	],
	"onlineCourses": [
	{
		"name": "Udacity",
		"course": "Intro to JavaScript"
	},
	{
		"name": "CodeAcademy",
		"course": "JavaScript for Beginners"
	}
	]
}

var projects = {
	"examples": [
		{
			"employer": "The Climate Corporation",
			"name": "weather forecasting",
			"description": "Twee 3 wolf moon iPhone, locavore marfa lumbersexual viral man braid cold-pressed meh literally polaroid bushwick. Celiac artisan ethical swag, etsy offal beard actually 3 wolf moon hoodie fanny pack church-key four loko. Put a bird on it wolf fap street art knausgaard. Gochujang franzen synth, dreamcatcher echo park fixie craft beer small batch chillwave humblebrag. Austin freegan health goth fixie irony, narwhal pitchfork. Bushwick post-ironic meggings listicle, fashion axe beard tattooed selvage actually mustache austin pinterest shoreditch hammock typewriter. Freegan PBR&B YOLO fashion axe slow-carb.",
			"year": "2014"
		},
		{	
			"employer": "The Climate Corporation",
			"description": "Twee 3 wolf moon iPhone, locavore marfa lumbersexual viral man braid cold-pressed meh literally polaroid bushwick. Celiac artisan ethical swag, etsy offal beard actually 3 wolf moon hoodie fanny pack church-key four loko. Put a bird on it wolf fap street art knausgaard. Gochujang franzen synth, dreamcatcher echo park fixie craft beer small batch chillwave humblebrag. Austin freegan health goth fixie irony, narwhal pitchfork. Bushwick post-ironic meggings listicle, fashion axe beard tattooed selvage actually mustache austin pinterest shoreditch hammock typewriter. Freegan PBR&B YOLO fashion axe slow-carb.",
			"name": "overview",
			"year": "2015"
		},
		{
			"employer": "Yield Pop",
			"description": "Twee 3 wolf moon iPhone, locavore marfa lumbersexual viral man braid cold-pressed meh literally polaroid bushwick. Celiac artisan ethical swag, etsy offal beard actually 3 wolf moon hoodie fanny pack church-key four loko. Put a bird on it wolf fap street art knausgaard. Gochujang franzen synth, dreamcatcher echo park fixie craft beer small batch chillwave humblebrag. Austin freegan health goth fixie irony, narwhal pitchfork. Bushwick post-ironic meggings listicle, fashion axe beard tattooed selvage actually mustache austin pinterest shoreditch hammock typewriter. Freegan PBR&B YOLO fashion axe slow-carb.",
			"name": "R&D strategy",
			"year": "2010"
		},
		{	
			"employer": "Yield Pop",
			"description": "Twee 3 wolf moon iPhone, locavore marfa lumbersexual viral man braid cold-pressed meh literally polaroid bushwick. Celiac artisan ethical swag, etsy offal beard actually 3 wolf moon hoodie fanny pack church-key four loko. Put a bird on it wolf fap street art knausgaard. Gochujang franzen synth, dreamcatcher echo park fixie craft beer small batch chillwave humblebrag. Austin freegan health goth fixie irony, narwhal pitchfork. Bushwick post-ironic meggings listicle, fashion axe beard tattooed selvage actually mustache austin pinterest shoreditch hammock typewriter. Freegan PBR&B YOLO fashion axe slow-carb.",
			"name": "ICS Veggies",
			"year": "2011"
		}]
	}
	
/* Active code on the page starts now */

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
$("#footerContacts").prepend(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#footerContacts").prepend(formattedEmail);

if(bio.skills !== null) {

	$("#header").append(HTMLskillsStart);
	var skillsLength = (bio.skills.length -1);
	for(var x = 0; x <= skillsLength; x++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[x]);
		$("#skills").append(formattedSkills);	
	
	}
	
} else {
	console.log("no skills!");
}

var displayWork = function() {

	for(employer in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[employer].employer);
		var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[employer].position);
		var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[employer].description);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[employer].location);
		var formattedWorkYears = HTMLworkDates.replace("%data%", work.jobs[employer].years);
		
		$(".work-entry:last").append(formattedEmployer + formattedPosition);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkYears);
		$(".work-entry:last").append(formattedWorkDesc);

	}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y); 

})

$("#main").append(internationalizeButton);

var inName = function(name) {
	var newName = name.split(" ");
	newName[1] = " " + newName[1].toUpperCase();
	newName[0] = newName[0].slice(0,1).toUpperCase() + newName[0].slice(1).toLowerCase();
	return newName;

}

projects.display = function() {

	for(name in projects.examples) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.examples[name].name);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.examples[name].description);
		var formattedYear = HTMLprojectDates.replace("%data%", projects.examples[name].year);
		
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedYear);
		$(".project-entry:last").append(formattedDesc);

	}
}

projects.display();

$("#mapDiv").append(googleMap);


