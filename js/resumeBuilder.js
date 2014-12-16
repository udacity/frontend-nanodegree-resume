/*$("#main").append(["Michael Isaacs"]);
//var awesomeThoughts= "I am Mike and I am awesome";
//console.log(awesomeThoughts);
//var funThoughts= awesomeThoughts.replace("awesome","fun");
//console.log(funThoughts);
//console.log(nameChanger("eLlo therRE"))
//$("#main").append(funThoughts);
*/
var bio={
			name: "Michael Isaacs",
			role: "Programmer",
			contactInfo: {
							mobile:"480-235-7437",
							email:"michael.isaacs@gmail.com", 
							github:"misaacs",
							twitter: "@mickeyrpi",
							location: "Portland OR"
						},	
			pictureURL: "images/fry.jpg",
			skills: ["HTML","CSS","JavaScript"],
			welcomeMessage:"Greetings"
		}

var formattedName= HTMLheaderName.replace("%data%",bio.name);
var formattedRole= HTMLheaderRole.replace("%data%",bio.role);

//Adding to 'header' tag
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Adding Contact Information----->>>>>>>>
HTMLmobile= HTMLmobile.replace("%data%",bio.contactInfo.mobile);
$("#topContacts").append(HTMLmobile);

HTMLemail= HTMLemail.replace("%data%",bio.contactInfo.email);
$("#topContacts").append(HTMLemail);

HTMLgithub= HTMLgithub.replace("%data%",bio.contactInfo.github);
$("#topContacts").append(HTMLgithub);


HTMLtwitter= HTMLtwitter.replace("%data%",bio.contactInfo.twitter);
$("#topContacts").append(HTMLtwitter);

HTMLworkLocation= HTMLworkLocation.replace("%data%",bio.contactInfo.location);
$("#topContacts").append(HTMLworkLocation);

// Image Added
HTMLbioPic= HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append(HTMLbioPic);

//Welcome message
HTMLWelcomeMsg= HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(HTMLWelcomeMsg);

//Set groundwork for HTML skills list- generate enclosing <ul> tags
$("#header").append(HTMLskillsStart);

//generate a list of skill items
for (var index=0; index< bio.skills.length; ++index)
{
	var HTMLnextSkill= HTMLskills.replace("%data%",bio.skills[index]);
	$("#skills").append(HTMLnextSkill);    //adding next skill
}

