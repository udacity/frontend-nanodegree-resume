var name = "Sameera C.";
var role = "Frontend Developer"

var formattedName = HTMLheaderName.replace ("%data%", name);
var formattedRole = HTMLheaderRole.replace ("%data%", role);
var formattedSkills = null;


$('#header').prepend (formattedRole);
$('#header').prepend (formattedName);


var skills = ["Programing", "Designing", "JS", "ReactJS"];



var bio = {
	"bioPicture": "images/fry.jpg",
	"name": formattedName,
	"role": formattedRole,
	"skills": skills,
	"contacts": {
		"mobile": '123-456-7890',
		"email": 'c.a.sameera@gmail.com'
	},
	"welcomeMessage": "Hey, this is my welcome message"
}

if (bio.skills.length > 0) {
	$("#header").append (HTMLskillsStart);
	skills.forEach (function (item) {
		formattedSkills = formattedSkills + ' ' + HTMLskillsStart.replace ("%data%", item);
	});

	$('#skills').append (formattedSkills);

}
