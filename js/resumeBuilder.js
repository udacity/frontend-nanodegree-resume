/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append(funThoughts);
//var Name="Jinwook Lee";
//var role="Electrical Engineer in Training";

var education =	{
	"school": [
		{
			"Name" : "University of British Columbia",
			"Degree":"Applied Science",
			"Year" : "2010-2015",
			"City" : "Vancouver, BC",
			"Major" : "Electrical Engineering"
		}],
	"online":[{
			"Name" : "Udacity Online Course",
			"Year" : 2015,
			"City" : "Vancouver, BC",
			"Major" : "Front-End Engineering"
		}]
}

var work = {
	"Coop": [
		{
			"Name" : "Suncor Energy",
			"Date" : "May 2014 - Sep 2014",
			"Title" : "Process Safety Information Specialist Co-op Student",
			"City" : "Calgary, AB",
			"Description": ["- Validated hundreds of engineering tags from Major Projects for Asset Data Life-Cycle Project","- Supported and coordinated with document controllers for InSitu Project Closeout","- Undertook electrical maintenance projects for Suncor Co-op Presentation","- Trained co-op students working on Asset Data Life-Cycle Project and Project Closeout"]
		},

		{
			"Name" : "Suncor Energy",
			"Date" : "Aug 2012 - Dec 2013",
			"Title" : "Engineering Co-op Student",
			"City" : "Calgary, AB",
			"Description": ["- Facilitated the successful closeout of multiple turned over projects",
			   "- Coordinated with cross-functional teams to support project closeout",
			   "- Created a dynamic detailed closeout log to support the development of project closeout model",
			   "- Compiled Project Closeout Month End Stewardship Reports for various OPP areas",
			   "- Generated active revisions, redline, project document reports to assist project closeout",
			   "- Trained and assisted any new personnel supporting the Project Closeout Initiative",
			   "- Reviewed over a thousand asbuilt drawings and utilizing AutoCad to improve the quality of asbuilt drawings",
			   "- Assisted project leads with creating and updating project execution plan, project charters, and gate review presentation"]
		}
		
	]
}

var bio = {
	"me": [
		{
			"Name" : "Jinwook Lee",
			"email": "jinwook.lee365@gmail.com",
			"github": "zbef3825",
			"role": "Electrical Engineer-in-Training",
			"City": "Vancouver, BC",
			"skills" : ["Electrical Engineering", "Web Developer", "Project Management"],
			"contact_info": "587-215-2332"
		}
	]
}

var project = {
	"school": [
		{
			"Name" : "Energy Management Android App",
			"Date" : "Sep 2014 - Apr 2015",
			"role" : "Project Manager",
			"Description": ["- Coordinated between a client and capstone team of four students to identify the scope of work for Home Intelligence Awareness Platform",
"- Tracked milestones, schedules, and budgets to ensure capstone project is on target",
"- Conducted a proposal presentation to demonstrate the feasibility of prototypes and to recommend the optimal solution",
"- Received a highly positive performance review in project management by stakeholders and instructor; received A grade"
		]
		},{
			"Name" : "UBC Electric Car",
			"Date" : "Jan 2012 – Apr 2012",
			"role" : "Junior Battery Engineer",
			"Description": ["- Investigated shunt and hall's effect current sensors to measure high current for electric cars",
"- Recommended reasonable current sensors using triple bottom line assessment",
"- Analyzed old BMS (Battery Management System) to replace with a new BMS"
		]
		},{

			"Name" : "Coin Operated Karaoke Machine",
			"Date" : "Mar 2011",
			"role" : "Production Engineer",
			"Description": ["- Designed a coin sorter and a change dispenser mechanism for a karaoke machine",
"- Created prototypes of the mechanisms for simulation and verification",
"- Experienced in planning, producing, debugging, and optimizing the mechanisms for the karaoke machine to run efficiently with high reliability and easy maintenances"
		]
		},{
			"Name" : "RC Sensor Game Controller with AI System",
			"Date" : "Jan 2011",
			"role" : "Software Engineer",
			"Description": ["- Designed an AI system for various Atari games using 8051 Microcontrollers",
"- Experienced in operating LCD module for various purposes",
"- Designed an UI of AI system for non-technical users and efficient debugging"
		]
		}
	] 
}
/*
$("#main").append(bio.contact_info);
$("#main").append(work["position"]);
$("#main").append(education.school);
*/



/* Don't need this part for final project. This tells where users have clicked in the page at console box.
$(document).click(function(loc) {
  console.log("X: " + loc.pageX + " Y: " + loc.pageY);
});
*/


header.display = function()	{

	var formattedName = HTMLheaderName.replace("%data%", bio.me[0].Name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.me[0].role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(HTMLskillsStart);

	if (bio.me[0].skills !== 0)	{
		

		var formattedSkills = HTMLskills.replace("%data%", bio.me[0].skills[0]);
		$("#skills").append(formattedSkills);

		formattedSkills = HTMLskills.replace("%data%", bio.me[0].skills[1]);
		$("#skills").append(formattedSkills);

		formattedSkills = HTMLskills.replace("%data%", bio.me[0].skills[2]);
		$("#skills").append(formattedSkills);

	}

	//$("#topContacts").append(HTMLcontactGeneric);
	var formattedContact = HTMLmobile.replace("%data%", bio.me[0].contact_info);
	$("#topContacts").append(formattedContact);

	var formattedContact = HTMLemail.replace("%data%", bio.me[0].email);
	$("#topContacts").append(formattedContact);

	var formattedContact = HTMLgithub.replace("%data%", bio.me[0].github);
	$("#topContacts").append(formattedContact);

	var formattedContact = HTMLlocation.replace("%data%", bio.me[0].City);
	$("#topContacts").append(formattedContact);


}

	

 workExperience.display = function()	{
 	if (work.Coop[0] !== 0)	{
		var formattedWork;
		var formattedTitle;
		var formattedcombined;
		$("#workExperience").append(HTMLworkStart);
		for (position in work.Coop) {

			formattedWork = HTMLworkEmployer.replace("%data%", work.Coop[position].Name);
			formattedTitle = HTMLworkTitle.replace("%data%", work.Coop[position].Title);
			formattedcombined = formattedWork + formattedTitle;
			$(".work-entry").append(formattedcombined);

			formattedWork = HTMLworkDates.replace("%data%", work.Coop[position].Date);
			$(".work-entry").append(formattedWork);

			formattedWork = HTMLworkLocation.replace("%data%", work.Coop[position].City);
			$(".work-entry").append(formattedWork);
			
			for (bullet in work.Coop[position].Description) {

				formattedWork = HTMLworkDescription.replace("%data%",work.Coop[position].Description[bullet]);
				$(".work-entry").append(formattedWork);

			}
			$(".work-entry").append('<br>');
			
		}
		
	}

 }

	
/* DO NOT NEED IT FOR THE FINAL PROJECT. JUST COOL FUNCTIONALITY
function internationalized() {
	var formattedName;
	var capLastName;
	var formattedNameCombined;
	var nameArray = [];
	if (english === true)	{
		formattedName = HTMLheaderName.replace("%data%", bio.me[0].Name);
		console.log(bio.me[0].Name);
		english = false;
	}
	else
	{
		nameArray = bio.me[0].Name.split(" ");
		capLastName = nameArray[nameArray.length-1].toUpperCase();
		for (numname in nameArray)
		formattedNameCombined = formattedNameCombined + nameArray[numname];
		formattedNameCombined = formattedNameCombined + capLastName;
		formattedName = HTMLheaderName.replace("%data%", formattedNameCombined);
		console.log(bio.me[0].Name);
		english = true;
	}
}
*/

projects.display = function()	{
	var formattedProject;

	$("#projects").append(HTMLprojectStart);

	for (schoolprojects in project.school) {
		formattedProject = HTMLprojectTitle.replace("%data%", project.school[schoolprojects].Name);
		$(".project-entry").append(formattedProject);

		formattedProject = HTMLprojectDates.replace("%data%", project.school[schoolprojects].Date);
		$(".project-entry").append(formattedProject);

		for (bullet in project.school[schoolprojects].Description)	{

			formattedProject = HTMLprojectDescription.replace("%data%", project.school[schoolprojects].Description[bullet]);
			$(".project-entry").append(formattedProject);

		}
		$(".project-entry:last").append("<br>");
	}
	
}

education.display = function()	{

	var formatedEducation;
	var combined;
	$("#education").append(HTMLschoolStart);

	formatedEducation = HTMLschoolName.replace("%data%", education.school[0].Name);
	combined = formatedEducation;
	formatedEducation = HTMLschoolDegree.replace("%data%", education.school[0].Degree);
	combined = combined + formatedEducation;
	$(".education-entry").append(combined);

	formatedEducation = HTMLschoolDates.replace("%data%", education.school[0].Year);
	$(".education-entry").append(formatedEducation);

	formatedEducation = HTMLschoolLocation.replace("%data%", education.school[0].City);
	$(".education-entry").append(formatedEducation);

	formatedEducation = HTMLschoolMajor.replace("%data%", education.school[0].Major);
	$(".education-entry").append(formatedEducation);

	$(".education-entry").append('<br>');


}


header.display();
workExperience.display();
projects.display();
education.display();








