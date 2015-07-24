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
			"Description": "Validated hundreds of engineering tags from Major Projects for Asset Data Life-Cycle Project"

		},

		{
			"Name" : "Suncor Energy",
			"Date" : "Aug 2012 - Dec 2013",
			"Title" : "Engineering Co-op Student",
			"City" : "Calgary, AB",
			"Description": "Facilitated the successful closeout of multiple turned over projects"
		}
		
	]
}

var bio = {
	"me": [
		{
			"Name" : "Jinwook",
			"role": "Electrical Engineer-in-Training",
			"City": "Vancouver, BC",
			"skills" : ["Engineering", "Cheesing", "Gaming"],
			"contact_info": "555-5555"
		}
	]
}

var project = {
	"Capstone": [
		{
			"Name" : "Energy Management Android App",
			"Date" : "Sep 2014 - Apr 2015",
			"role" : "Project Manager",
			"grade": "A"
		}
	] 
}
/*
$("#main").append(bio.contact_info);
$("#main").append(work["position"]);
$("#main").append(education.school);
*/

displayBio();
displayWork();

function displayBio() {

	var formattedName = HTMLheaderName.replace("%data%", bio.me[0].Name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.me[0].role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	if (bio.me[0].skills !== 0)	{
		$("#header").append(HTMLskillsStart);

		var formattedSkills = HTMLskills.replace("%data%", bio.me[0].skills[0]);
		$("#skills").append(formattedSkills);

		formattedSkills = HTMLskills.replace("%data%", bio.me[0].skills[1]);
		$("#skills").append(formattedSkills);

		formattedSkills = HTMLskills.replace("%data%", bio.me[0].skills[2]);
		$("#skills").append(formattedSkills);

	}
}
function displayWork()	{

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

			formattedWork = HTMLworkDescription.replace("%data%", work.Coop[position].Description);
			$(".work-entry").append(formattedWork);

		}
	}
}





