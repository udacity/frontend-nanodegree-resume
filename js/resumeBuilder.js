//setting up the data to use
var name = "Kevin Davis";
var resumeName = HTMLheaderName.replace("%data%", name);
var role = "Software Developer";
var resumeRole = HTMLheaderRole.replace("%data%",role);
var contact = {
	"email":"kevin@kevindav.us",
	"mobile":"240-434-1531",
	"github":"https://github.com/osfan501",
	"twitter":"www.twitter.com/osfan501",
	"location":"Maryland"
}
var pictureURL = "https://pbs.twimg.com/profile_banners/38585860/1467038017/1500x500";
var resumePic = HTMLbioPic.replace("%data%",pictureURL);
var welcome = "Coming to an office near near you";
var resumeWelcome = HTMLwelcomeMsg.replace("%data%",welcome);
var skills = ["c++", "node.js", "angular.js", "MongoDB", "git"];
var resumeSkills = HTMLskills.replace("%data%",skills);

var bio = {
	"name":name,
	"role":role,
	"contact":contact,
	"pic":pictureURL,
	"welcome":welcome,
	"skills":skills
}
//adding it to page
//$("#header").prepend(resumeRole);
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);
$("#main").prepend(bio.contact.email);
$("#main").prepend(bio.contact.mobile);
$("#main").prepend(bio.contact.github);
$("#main").prepend(bio.contact.twitter);
$("#main").prepend(bio.contact.location);
$("#main").prepend(bio.pic);
$("#main").prepend(bio.welcome);
$("#main").append(bio.skills);
