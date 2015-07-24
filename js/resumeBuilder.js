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
	"Co-op": [
		{
			"Name" : "Suncor",
			"Date" : "May 2014 - Sep 2014",
			"title" : "Process Safety Information Specialist Co-op Student",
			"City" : "Calgary, AB"
		},
		{
			"Name" : "Suncor",
			"Date" : "Aug 2012 - Dec 2013",
			"title" : "Engineering Co-op Student",
			"City" : "Calgary, AB"
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

var formattedName = HTMLheaderName.replace("%data%", bio.me[0].Name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.me[0].role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



