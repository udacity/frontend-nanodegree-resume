//header
var name = "Heidi Slojewski";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = "Kicking ass and taking names.";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

//main
var skills = ["bruh"];
$("#main").append(skills[0]);
$("#main").append(skills.length);

var bio = {
	"name" : "",
	"role" : "",
	"contacts" : {
		"mobile" : "",
		"email" : ""
		},
	"picture" : "",
	"welcomeMessage" : "",
	"skills" : ""
};

var work = {}
work.position = "";
work.employer = "";
work.years = "";

var education = {
  "schools": [
    {
	  "name": "a",
	  "city": "a",
	  "degree": "s",
	  "major": "d"
    },
    {
	  "name": "d",
	  "city": "d",
	  "degree": "s",
	  "major": "s"
    }
  ]
}
// why won't this work??? {
  //"onlineCourses": [
   // {
	//  "name": "s",
	//  "city": "s",
	//  "degree": "s",
	//  "major": "s"
   // }
//  ]
//}