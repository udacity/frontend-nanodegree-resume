


var bio = {
	"name":"Sebastian",
	"role":"Front End Web Developer",
	"contacts":{
					"mobile":"+381692234440",
					"email":"sebastianffarago@gmail.com",
					"github":"sebastianff",
					"twitter":"sebastianfarago",
					"location":"Subotica"
				},
	"welcomeMessage":"Welcome to my portfolio",
	"skills":[
	"HTML","CSS","Javascriot","Github","Wordpress"
	],
	"bioPic":"images/photo.jpg"
}

var education = 
{
	"schools":
	[
		{
			"name":"Ivan Saric Technical High School",
			"city":"Subotica",
			"majors":["Traffic Engeneering"],
			"dates": 2000,
			"url":"http://www.tehnickaskolasubotica.edu.rs/index.php/en/"
		},
		{
			"name":"Megatrend University",
			"city":"Subotica",
			"majors":["International Bussines"],
			"dates": 2004,
			"url":"http://www.megatrend-edu.net/"

		},

	],
	"onlineCourses":
	[	
		{
			"title":"Front-End Development  Nanodegree",
			"school":"Udacity",
			"dates":"2014-2015",
			"url":"https://teamtreehouse.com"
		},
		{
			"title":"Front-End Web Development",
			"school":"Treehouse",
			"dates":"2014-2015",
			"url":"https://teamtreehouse.com"
		},
		{
			"title":"Wordpress Development",
			"school":"Treehouse",
			"dates":"2014-2015",
			"url":"https://teamtreehouse.com"
		},
		{
			"title":"PHP Development",
			"school":"Treehouse",
			"dates":"2014-2015",
			"url":"https://teamtreehouse.com"
		}
		
	]
}

var work = 
{
	"jobs":
	[
		{
		"employer":"First Beat Media",
		"title":"Ad Management Administrator",
		"dates":"2013-2015",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio quam, luctus nec risus eget, vulputate tempus arcu. Duis fringilla sem non risus pellentesque aliquet."
		},
		{
		"employer":"Port Data",
		"title":"Database Administrator",
		"dates":"2011-2013",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio quam, luctus nec risus eget, vulputate tempus arcu. Duis fringilla sem non risus pellentesque aliquet."
		},
		{
		"employer":"Various Service Industry jobs",
		"title":"Server",
		"dates":"2013-2015",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio quam, luctus nec risus eget, vulputate tempus arcu. Duis fringilla sem non risus pellentesque aliquet."
		}
	]
	
}

var projects = 
{
	"projects":
	[
		{
		"title":"Portfolio Project",
		"dates":"2015",
		"description":"Created a project for my future portfolio",
		"images":["",""]
		}
	],
	"display":function()
	{
		$("#projects").append(HTMLprojectStart);

		for(item in projects.projects)
		{

		var formatedTitle = HTMLprojectTitle.replace("%data%",projects.projects[item].title);
		var formatedDates = HTMLprojectDates.replace("%data%",projects.projects[item].dates);
		var formatedDescription = HTMLprojectDescription.replace("%data%",projects.projects[item].description);
		var formatedImage = HTMLprojectImage.replace("%data%",projects.projects[item].image);
		
		$(".project-entry").append(formatedTitle);
		$(".project-entry").append(formatedDates);
		$(".project-entry").append(formatedDescription);
		$(".project-entry").append(formatedImage);
		

		}

	}


}

function displayWork(){

if (bio.skills.length > 0){
	
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(formattedSkill);
	}
for (jobs in work.jobs)
{	
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[jobs].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[jobs].title);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[jobs].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[jobs].description);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
	
}
}

displayWork();


$("#main").append(internationalizeButton);

function inName(name){
	var changed = name.split(" ");
	
	//var first = changed[0].slice(0,1).toUpperCase()+changed[0].slice(1,changed[0].length).toLowerCase()+" "+changed[1].toUpperCase();
	console.log(first);
}

//inName("Jovan Farago");

//function display()
	

projects.display();

$("#mapDiv").append(googleMap);



function formattingVars(varName,varSub,appending)
{
	formattedVar = varName.replace("%data%",varSub);
	$(appending).append(formattedVar);

}

formattingVars(HTMLheaderName,"Sebastian Farago","#header");
formattingVars(HTMLheaderRole,"Front End Web Developer","#header");

