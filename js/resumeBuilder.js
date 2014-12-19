// "work" object
var work= {
	"jobs":
	[
		{
			"employer": "Hawthorne Medical Analytics",
			"title": "Software Architect",
			"location": "Portland OR",
			"dates_worked": "November 2014- Ongoing",
			"description": "Design and Coordinate Mobile+Web App Implementation"
		},
		{
			"employer": "Michael Isaacs Photography LLC",
			"title": "Photographer, Owner",
			"location": "Seattle WA, Portland OR",
			"dates_worked": "2006-2013",
			"description":""	
		},
		{
			"employer": "Self-Employed",
			"title": "Writer",
			"location": "Phoenix AZ, Seattle WA",
			"dates_worked": "2003-2008",
			"description":"Literature, Fiction"	
		},
		{
			"employer": "Department of Computer Science, UC Santa Barbara",
			"title": "Teaching Fellow and Research Assitant",
			"location": "Goleta, CA",
			"dates_worked": "2000-2003",
			"description":"BioInformatics Research, Course Instructor & Assistant"	
		}
	]
}

var projects={
	"projects":
	[
		{
			"title":"",
			"dates worked":"",
			"description":"",
			"images":[]
		},
		{
			"title":"",
			"dates worked":"",
			"description":"",
			"images":[]
		}
	]
}

var bio={
			name: "Michael Isaacs",
			role: "Programmer",
			contacts: {
							mobile:"480-235-7437",
							email:"michael.isaacs@gmail.com", 
							github:"misaacs",
							twitter: "@mickeyrpi",
							location: "Portland OR"
						},	
			pictureURL: "images/fry.jpg",
			skills: ["HTML","CSS","JavaScript"],
			welcomeMessage:"Greetings"
		}

var formattedName= HTMLheaderName.replace("%data%",bio.name);
var formattedRole= HTMLheaderRole.replace("%data%",bio.role);

//Adding to 'header' tag
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Adding Contact Information----->>>>>>>>
HTMLmobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(HTMLmobile);

HTMLemail= HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(HTMLemail);

HTMLgithub= HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(HTMLgithub);


HTMLtwitter= HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(HTMLtwitter);

HTMLworkLocation= HTMLworkLocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(HTMLworkLocation);

// Image Added
HTMLbioPic= HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append(HTMLbioPic);

//Welcome message
HTMLWelcomeMsg= HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(HTMLWelcomeMsg);

//Set groundwork for HTML skills list- generate enclosing <ul> tags
$("#header").append(HTMLskillsStart);

//generate a list of skill items
for (var index=0; index< bio.skills.length; ++index)
{
	var HTMLnextSkill= HTMLskills.replace("%data%",bio.skills[index]);
	$("#skills").append(HTMLnextSkill);    //adding next skill
}

//	"education" object/
var education={
	"schools":
	[
    	{
        	"name": "Loyola College",
        	"dates attended": "1994-1997",
        	"location": "Chennai India",
        	"major": ["Computer Science"],
        	"degree": "BS",
        	"url": "http://www.loyolacollege.edu/"
    	},
    	{
        	"name": "Anna University",
        	"dates attended": "1997-2000",
        	"location": "Chennai India",
        	"major": ["Computer Science"],
        	"degree":"Masters",
        	"url": "http://cs.annauniv.edu/" 
    	},
    	{
        	"name": "UC Santa Barbara",
        	"dates attended": "2000-2003",
        	"location": "Santa Barbara CA",
        	"major": "Computer Science",
        	"degree":"PhD [Unfinished]",
        	"url": "https://www.cs.ucsb.edu/"
    	}
	],

	"online courses":
	[
		{
			"school": "Coursera, University of Pennsylvania",
			"dates attended": 2013,
			"title": "Networked Life",
			"url":"" 
		},

		{
			"school": "edX (BerkeleyX, UC Berkeley)",
			"dates attended": 2014,
			"title": "Introduction to Statistics: Descriptive Statistics & Probability",
			"url":"" 		
		},
		
		{
			"school": "Udacity",
			"dates attended": 2014,
			"title": "Introduction to HTML and CSS",
			"url":""
		},

		{
			"school": "Udacity",
			"dates attended": 2014,
			"title": "How to Use Git and GitHub",
			"url":""
		},

		{
			"school": "Udacity",
			"dates attended": 2014,
			"title": "Javascript Basics",
			"url":""
		}
/*		,

		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "Introduction to jquery",
			"url":""
		},

		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "HTML 5 Canvas",
			"url":"" 
		},

		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "Object Oriented Javascript",
			"url":""
		},

		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "Introduction to AJAX",
			"url":""
		},

		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "UX Design for Mobile Developers",
			"url":""
		},
		
		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "Mobile Web Development",
			"url":"" 
		},
		
		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "Website Performance Optimization",
			"url":""
		},

		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "HTML 5 Game Development: Building High Performance Web Apps",
			"url":"" 
		},

		{
			"school": "Udacity",
			"dates attended": 2015,
			"title": "Developing Scalable Apps with Java",
			"url":""
		}
*/	]
}

$("#workExperience").append(HTMLworkStart);		//new division class="work-entry"
$(".work-entry").append(work["job_position"]);	//

$("#education").append(HTMLschoolStart);    // Add a new <div> "education-entry"
$(".education-entry").append(education["name"]);


console.log(work);
console.log(education);