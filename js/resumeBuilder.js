// From earlier exercises

// $("#main").append("Mark Weigel");

// var awesomeThoughts = 'I am Mark and I am AWESOME!';
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

var bio = {
	"name" : "Mark Weigel",
	"role" : "Web Developer",
	"contactInfo" : {
		"mobile" : "267-603-2621",
		"email" : "mark@weigel.site",
		"twitter" : "https://twitter.com/markweig",
		"github" : "https://github.com/mrkjesus2",
		"blog" : "http://weigel.site",
		"location" : "Philadelphia"
	},
	"pictureUrl" : "images/Profile.jpg",
	"welcomeMessage" : "This is a test message",
	"skills" : [
		"linux", "logical thought", "javascript soon"
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// These should be replaced with a couple of for loops?
var formattedSkillsOne = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkillsTwo = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkillsThree = HTMLskills.replace("%data%", bio.skills[3]);


var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedGithub = HTMLtwitter.replace("%data%", bio.contactInfo.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPic);
$("#header").append(formattedMessage);
$("#header").append(HTMLskillsStart);

$("#skills").append(formattedSkillsOne);
$("#skills").append(formattedSkillsTwo);
$("#skills").append(formattedSkillsThree);