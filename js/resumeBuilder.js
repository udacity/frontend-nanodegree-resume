var bio = {
	"name":"Sebastian Farago",
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
	"bioPic":"images/fry.jpg",
	"display":function()
	{
		var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
		var formattedHeaderRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
		
		$("#header").append(formattedHeaderName).append(formattedHeaderRole).append(formattedBioPic);
		
		var formattedHTMLMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedHTMLEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedHTMLTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedHTMLLocation = HTMLlocation.replace("%data%",bio.contacts.location);

		$("#header").append(formattedHTMLMobile).append(formattedHTMLEmail).append(formattedHTMLTwitter).append(formattedHTMLLocation);	

	}
}

bio.display();

var education = 
{
	"schools":
	[
		{
			"name":"Ivan Saric Technical High School",
			"location":"Subotica",
			"degree":"Traffic Engeneering",
			"majors":["Traffic Engeneering"],
			"dates": 2000,
			"url":"http://www.tehnickaskolasubotica.edu.rs/index.php/en/"
		},
		{
			"name":"Megatrend University",
			"location":"Subotica",
			"degree":"International Bussines",
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
		
	],
	"display":function()
	{	

		$("#education").append(HTMLschoolStart);
		
		
		for(item in education.schools)
		{	
			
			var formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[item].name);
			var formattedSchoolDegree= HTMLschoolMajor.replace("%data%",education.schools[item].majors);
			
			
			$(".education-entry").append(formattedSchoolName);
			$(".education-entry").append(formattedSchoolDegree);
		}

		$(".education-entry").append(HTMLonlineClasses);

		for(item in education.onlineCourses)
		{
			var formattedonlineTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[item].title);
			var formattedonlineSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[item].school);
			var formattedonlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[item].dates);
			var formattedonlineURL= HTMLonlineURL.replace("%data%",education.onlineCourses[item].url);

			$(".education-entry").append(formattedonlineTitle);
			$(".education-entry").append(formattedonlineSchool);
			$(".education-entry").append(formattedonlineDates);
			$(".education-entry").append(formattedonlineURL);
		}

			
	}
}

education.display();

var work = 
{
	"jobs":
	[
		{
		"employer":"First Beat Media",
		"location":"Subotica",
		"title":"Ad Management Administrator",
		"dates":"2013-2015",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio quam, luctus nec risus eget, vulputate tempus arcu. Duis fringilla sem non risus pellentesque aliquet."
		},
		{
		"employer":"Port Data",
		"location":"Subotica",
		"title":"Database Administrator",
		"dates":"2011-2013",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio quam, luctus nec risus eget, vulputate tempus arcu. Duis fringilla sem non risus pellentesque aliquet."
		},
		{
		"employer":"Various Service Industry jobs",
		"location":"United States",
		"title":"Server",
		"dates":"2013-2015",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio quam, luctus nec risus eget, vulputate tempus arcu. Duis fringilla sem non risus pellentesque aliquet."
		}
	],
	"display":function()
	{

		if (bio.skills.length > 0)
		{
	
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
}

work.display();
	
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

projects.display();





$("#main").append(internationalizeButton);

function inName(name){
	var changed = name.split(" ");
	
	//var first = changed[0].slice(0,1).toUpperCase()+changed[0].slice(1,changed[0].length).toLowerCase()+" "+changed[1].toUpperCase();
	console.log(first);
}

//inName("Jovan Farago");

//function display()
	
$("#mapDiv").append(googleMap);

			
			


		






		





