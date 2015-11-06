//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["architecture", "reading", "programming", "inquiring"]

var bio = {
	"name" : "Renzo Wouters",
	"role" : "Enterprise Architect",
	"contact_info" : "Papaverlaan 53, Moerkapelle",
	"picture_URL" : "https://media.licdn.com/media/AAEAAQAAAAAAAAHXAAAAJGExZmJlMDgxLWQ2YmMtNDc2Ni1hODBhLTYwN2YwNDc5ZGFhNw.jpg",
	"welcome" : "Hello, I am very cool",
	"skills" : skills
}


$("#header").prepend(HTMLskills.replace("%data%", bio.skills));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture_URL));
$("#header").prepend(HTMLcontactGeneric.replace("%data%", bio.contact_info));
$("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcome));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));