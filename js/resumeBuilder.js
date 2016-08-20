// Create skills list and append an element to the #main div.

var skills = ["red hair", "rapier-like wit", "humbleness"];

// Create bio object to contain biographical info.
var bio = {
	name : "Josef Mirante",
	role : "Web Developer",
	mobile : "(360) 540-0952",
	email : "josef.mirante@gmail.com",
	github : "josef.mirante",
	twitter : "",
	location : "Philadelphia",
	pictureURL : "images/fry.jpg",
	skills : skills
};


// Append name and roll information to header.
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.skills[0]);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Append contact information to top contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);