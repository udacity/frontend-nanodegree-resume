/*/*
This is empty on purpose! Your code to build the resume will go here.
 */



 /*var awesomeThoughts = "Awesome";
 var new1 =  awesomeThoughts.replace("Awesome","Fun");
 console.log(new1);*/

/* var name = "Aziz Khilawala";
 var role = "User Experience Desginer & Developer";
 var formattedName = HTMLheaderName.replace("%data%",name);
 var formattedRole = HTMLheaderRole.replace("%data%",role);
 var picture = "images/solo.jpg"
 var biopic = HTMLbioPic.replace("%data%",picture);
var mobileNumber = "+91-9930816776";
var mobileInfo = HTMLcontactGeneric.replace("%data%",mobileNumber).replace("%contact%","Contact Me");
var welcome = "Hello Humans, feel free to explore the story of my life";
var welcomeMessage = HTMLwelcomeMsg.replace("%data%",welcome);*/


/*$("#header").append(slicing('audacity'));*/
 /*audacity Udacity*/

/*var skills = ["HTML","CSS","JavaScript"];
skills = skills.join(" , ");
var skillsInfo = HTMLskills.replace("%data%",skills);*/
 /*function slicing(stringName){
 	var firstChar = stringName.slice(1,2);

 	var upper = firstChar.charAt(0).toUpperCase();

 	var fullString = upper + stringName.slice(2);
 	return fullString;
 }*/

 //created object called bio using object literal notation; object literal notation can be identified by curly braces {}
 /*var bio = {
 	"name" : formattedName,
 	"role" : formattedRole,
 	"contact" : {
 		 "mobile" : mobileInfo,
 		 "email": "azizkhilawala@gmail.com",
 		 "twitter": "@azizkhilawala",
 		 "github": "https://github.com/azizkhilawala",
 		 "blog": "www.aziz.khilawala.com",
 		 "location": "Mumbai , India"
 	},
 	"picture" : biopic,
 	"welcomeMessage" : welcomeMessage,
 	"skills" : skillsInfo
 };

 $("#header").prepend(bio.welcomeMessage);
 $("#header").prepend(bio.role);
 $("#header").prepend(bio.name);
 $("#header").prepend(bio.picture);

 $("#topContacts").prepend(bio.contact.mobile);
 $("#topContacts").prepend(HTMLemail.replace("%data%",bio.contact.email));
 $("#topContacts").prepend(HTMLtwitter.replace("%data%",bio.contact.twitter));
 $("#topContacts").prepend(HTMLgithub.replace("%data%",bio.contact.github));
 $("#topContacts").prepend(HTMLblog.replace("%data%",bio.contact.blog));
 $("#topContacts").prepend(HTMLlocation.replace("%data%",bio.contact.location));

 $("#topContacts").prepend(HTMLskillsStart);
 $("#skills").prepend(bio.skills);

var work = new Object();

work.jobPosition = "Consultant";
work.employer = "Quinnox Consultany Services";
work.city = "Mumbai";
work.yearsWorked = "1.5 years";

var education = new Object();

education["lastSchool"] = "M.H Saboo Siddik College of Engineering";
education["yearsAttended"] = "August 2010 -  June 2014";
education["schoolCity"] = "Mumbai";

$("#workExperience").prepend(HTMLworkStart);
$("#workExperience").append(HTMLworkTitle.replace("%data%",work.jobPosition));

$("#education").prepend(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%",education["lastSchool"]));

var school = {
	"junior" : [{
		"name" : "St Peter's school",
		"city": "Mumbai",
		"degree" : "ICSE",
		"major" : ["Science","Maths"]
	},
			{
		"name" : "M.H Saboo Siddik COE",
		"city" :"Mumbai",
		"degree" : "Bachelor of Engineering",
		"major" : "Computer Science"
	}
]
};
*/

//1. work object
var work = {

	"jobs" : [
	{
		"employer" : "Quinnox Consultany Services",
		"title" : "Consultant",
		"location" : "Mumbai, India",
		"dates" : "August 2014 to Present",
		"description" : "Working for a client named Waste Management(WM) Inc. In the first year, I worked in production support under the OCS project (Onboard Computing System). Later shifted to development project named OPUS (Opeations Performance and Utility System). Currently working as a UI / Java / Support resource in OPUS. In a nutshell, Worked as a developer on various applications. Also Provided L2 & L3 support. Fixed user interface fixes to enhance the usability of the applications."
	},
	{
		"employer" : "Tata Institute of Fundamental Research (TIFR)",
		"title" : "Project Intern",
		"location": "Mumbai, India",
		"dates" : "March 2013 - March 2014",
		"description" : "Developed a web application used to manage the class B-IPv4 network and associated subnets at TIFR."
	}
	]

};


// $("div.work-entry").prepend(HTMLworkEmployer.replace("%data%",work.jobs[0].employer));
$("#workExperience").prepend(HTMLworkStart);
// $("div.work-entry>a").prepend(HTMLworkTitle.replace("%data%",work.jobs[0].title));
// $('HTMLworkEmployer').append(HTMLworkTitle.replace("%data%",work.jobs[0].title));
$("div.work-entry").prepend(HTMLworkEmployer.replace("%data%",work.jobs[0].employer));
$("#workExperience").append($("div.work-entry"));

// $("#workExperience").append(HTMLworkEmployer.replace("%data%",work.jobs[0].employer));



//2. projects object
var projects = {

	"projects" : [
	{
		"title" : "OPUS (Opeations Performance and Utility System)",
		"dates" : "Jan 2016 - Present",
		"description" : "OPUS is a platform where all proprierty WM applications data is integrated for reporting purposes",
		"images" : "images/OPUS.gif"
	},
	{
		"title" : "OCS (Onboard Computing System)",
		"dates" : "October 2014 - December 2015",
		"description" : "OCS (Onboard Computing System) is a order execution system. OCS has two primary components: the OBU and OCSD. An OBU (On-Board Unit), is a computer in the truck that runs the Route Assistant (RA) software. The RA shows all stops/tickets on a route, and the  driver uses the computer to identify specific information such as stops start and finish times, landfill times and weights, exceptions, downtimes, etc.",
		"images" : "images/OCS.png"
	},
	{
		"title" : "Perfect Steel Furniture",
		"dates" : "February 2014",
		"description":"Developed a corporate website for Perfect Steel Furniture, a known manufacturer delivering perfect steel furniture for residential and commercial use.",
		"images": "images/PSFlogo.png"
	}
	]
};

//3. bio object
var bio = {
	"name" : "Aziz Khilawala",
	"role" : "User Experience Desginer & Developer",
	"welcomeMessage" : "Hello Humans, feel free to explore the story of my life",
	"bioPic" : 'images/solo.jpg',
	"contacts" : {
		"mobile" : "91-9930816774",
		"email" : "azizkhilawala@gmail.com",
		"github" : "https://github.com/azizkhilawala",
		"twitter" : "@azizkhilawala",
		"location" : "Mumbai, India",
		"blog": "http://www.aziz.khilawala.com"
	},
		"skills" : ["HTML","CSS","JavaScript"]
};


$("#header").prepend(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
$("#header").prepend(HTMLbioPic.replace("%data%",bio.bioPic));
$("#topContacts").prepend(HTMLblog.replace("%data%",bio.contacts.blog));
$("#topContacts").prepend(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").prepend(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#topContacts").prepend(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").prepend(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#header").prepend($("#topContacts"));
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
  var skills1 =  bio.skills[0];
  $("#skills").append(HTMLskills.replace("%data%",skills1));
  skills1 = bio.skills[1];
  $("#skills").append(HTMLskills.replace("%data%",skills1));
  skills1 = bio.skills[2];
  $("#skills").append(HTMLskills.replace("%data%",skills1));
  skills1 = bio.skills[3];
}


//4. education object
var education = {
	"schools" : [
	{
		"name" : "St Peter's school",
		"location": "Mumbai",
		"degree" : "ICSE",
		"major" : "Science",
		"dates" : "March 1996 - March 2008",
		"url" : "http://www.stpetersschool.net.in"
	},
	{
		"name" : "B.J.P.C Jr College",
		"location" : "Mumbai",
		"degree" : "H.S.C",
		"major" : "Science",
		"dates" : "August 2008 - April 2010",
		"url" : "http://www.bjpci.org"
	},
	{
		"name" : "M.H Saboo Siddik COE",
		"location" :"Mumbai",
		"degree" : "Bachelor of Engineering",
		"major" : "Computer Science",
		"dates" : "August 2010 - May 2014",
		"url" : "http://www.mhssce.ac.in"
	}
],
	"onlineCourses" : [
	{
		"title" : "Food Nutrition & your Heath",
		"school" : "Open2Study.com",
		"dates" : "11th February 2014",
		"url" : "https://www.open2study.com"
	},
	{
		"title" : "Basic Physics",
		"school" : "Open2Study.com",
		"dates" : "18th March 2014",
		"url" : "https://www.open2study.com"
	},
	{
		"title" : "Responsive Web Design Fundamentals",
		"school" : "Udacity.com",
		"dates" : "November 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity.com",
		"dates" : "January 2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Discover Dev Tools",
		"school" : "https://www.codeschool.com",
		"dates" : "November 2015",
		"url" : "https://www.udacity.com"
	}
]
};
