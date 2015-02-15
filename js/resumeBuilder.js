// var name = "Alexandr";
// var role = "Software QA Engineer";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedName);
// $("#header").append(formattedRole);

var bio = {
	"name" : "Alexandr",
	"role" : "Software Testing and Development",
	"contacts" : {
		"mobile": "093-850-1637",
        "email": "alexgrischuk@gmail.com",
        "github": "alexandr-g",
        "twitter": "@samlabTV",
        "location": "Kyiv, Ukraine"

	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
	    "skills": [
	        "awesomeness", " delivering things", " cryogenic sleep", " saving the universe"
	    ],
	    "bioPic": "images/fry.jpg"
};	

function prependToHeader(what, how) {
    $("#header").prepend( how.replace("%data%", what) );
}

function appendToResume(what, how, where) {
    $(where).append( how.replace("%data%", what) );
}

prependToHeader(bio.role, HTMLheaderRole);
prependToHeader(bio.name, HTMLheaderName);
appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
appendToResume(bio.contacts.twitter, HTMLtwitter, "#topContacts");
appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.bioPic, HTMLbioPic, "#header");
appendToResume(bio.welcomeMessage, HTMLWelcomeMsg, "#header");
$("#header").append(HTMLskillsStart);
appendToResume(bio.skills, HTMLskills, "#skills");
