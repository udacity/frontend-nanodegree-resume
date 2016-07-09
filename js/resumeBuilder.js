

/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#header").append();
 // $("#main").append("Jon Collins");

// variables the below should set a var called awesomethoughts and sets it to the value below
// adding console.log prints out the value of it straight away in the console on refresh.
 // var awesomeThoughts = "I am Jon and I am AWESOME!";
 // console.log(awesomeThoughts);

// to replace something in a pattern
// [string].replace([old],[new])

// var funthoughts = awesomeThoughts.replace("AWESOME", "FUN");

// this checks in the console the old value is replaced by the new value
// console.log(awesomeThoughts);
// console.log(funthoughts);

// I can then append this to somewher in the page
// $("#main").append(funthoughts);

// the below replaces placeholders in the helper.js that have already been called by index.html with actual data
// var formattedName;
// var formattedRole;
// var bio;
// var skills;

// the below creates a bio object called "bio" within the object we see the

var formattedName = HTMLheaderName.replace("%data%", "Frank Williams");
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Web Developer");
console.log(formattedName)

var bio = {
    "name" : "Jon Collins",
    "role" : "Front End Web Developer",
    "contacts": {
        "mobile" : "+32-483-117705",
        "email" : "jon.collins71@gmail.com",
        "github" : "jcwd",
        "twitter" : "@JonColl09129892",
        "location" : "Brussels"
    },
    "welcomeMessage" : "Using my strong skillset, tenacity and determination in the role of Front End Web Developer to delivery the best Possible Digital experiences for customers (both internal and external) in line with and exceeding their expectations",
    "bioPic" : "images/jon.jpg"
}


var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
var formattedBiopic = HTMLbioPic.replace("%data%", bio["bioPic"]);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);

var skills = ['HTML5', 'CSS3', 'JS', 'BootStrap', 'GitHub', 'Agile', 'Prince II'];
var numSkills = skills.length;
var x=0;
for (var x = 0; x <= numSkills; x++) {
    console.log(skills[x]);
}

var formattedskills = HTMLskills.replace("%data%",skills[x])

$("#header").prepend(formattedName, formattedRole);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
$("#header").append(formattedBiopic);
$("#header").append(formattedwelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedskills);



