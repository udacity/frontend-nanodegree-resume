



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
    "welcomeMessage" : "Using my strong skillset, tenacity and determination in the role of Front End Web Developer to delivery the best Possible Digital experiences for customers in line with, (and exceeding) their expectations",
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

$("#header").prepend(formattedName, formattedRole);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
$("#header").append(formattedBiopic);
$("#header").append(formattedwelcomeMsg);
$("#header").append(HTMLskillsStart);

var skillSet = ['HTML5', 'CSS3', 'JS', 'BootStrap', 'GitHub', 'Agile', 'Prince II'];
var numSkills = skillSet.length;
var x=0;
for (var x = 0; x < numSkills; ++x) {
    var formattedSkills = HTMLskills.replace("%data%",skillSet[x]);
    $("#skills-h3").append(formattedSkills);
    console.log(skillSet[x]);
}


// work history created for Quiz all resume sections. JSON lint validated
var work = {
    "jobs": [{
        "title": "Project Manager",
        "employer" : "ING Belgium",
        "dates" : "2011-2016",
        "location" : "Brussels",
        "description" : "responsible for the effective delivery of strategic, Legal and commercial projects in line with the goals of ING"
    },{
        "title": "Project Manager e-business",
        "employer" : "Avnet Technology Solutions",
        "dates" : "2004-2011",
        "location" : "Brussels",
        "description" : "responsible for the maintenance, monitoring and growth of the Avnet European e-business offering"
    },{
        "title": "Business Process Manager",
        "employer" : "Avnet Technology Solutions",
        "dates" : "2002-2004",
        "location" : "Brussels",
        "description" : "Business Process Manager"
    },{
        "title": "Sales Support Manager",
        "employer" : "Avnet Technology Solutions",
        "dates" : "2000-2002",
        "location" : "Brussels",
        "description" : "Sales Support Manager"
    },{
        "title": "Purchaser",
        "employer" : "Bytech Systems",
        "dates" : "1996-2000",
        "location" : "Bracknell, UK",
        "description" : "Purchaser, IBM and Intel Server products"
    },{
        "title": "Engineering Draughtsman",
        "employer" : "Dynamic Logic",
        "dates" : "1991-1996",
        "location" : "Bracknell, UK",
        "description" : "Engineering Draughtsman"
    },{
        "title": "Estate Agent",
        "employer" : "Romans",
        "dates" : "1989-1991",
        "location" : "Crowthorne, UK",
        "description" : "Estage Agent"
    }]
}
// Json Lint Validated


// // education object (using bracket [] notation)
// var education = {}
//     education["name"] = "Bracknell and Wokingham College";
//     education["years"] = "Sept 91 - May 93";
//     education["city"] = "Bracknell";

// var formattedPosition = HTMLworkTitle.replace("%data%", work["position"]);
// var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);

$("#workExperience").append(work.position);
$("#education").append(education.name);

// education history created for Quiz all resume sections. JSON lint validated
var education = {
    "schools": [{
        "name": "Udacity",
        "city": "Mountain View, CA, US",
        "degree": "NanoDegree",
        "subject": "Front End Web Development",
        "date": 2016
    }, {
        "name": "QRP International",
        "city": "Brussels, BE",
        "degree": "Certification",
        "subject": "Prince II Practioner",
        "date": 2014
    }, {
        "name": "Bracknell and Wokingham College",
        "city": "Bracknell, Berks, UK",
        "degree": "BTEC 1st",
        "subject": "Electro-Mechanical Engineering",
        "date": 1993
    }]
}

// projects history created for Quiz all resume sections. JSON lint validated
var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "Fully responsive online Portfolio",
        "images": "http://jcwd.github.io/build_portfolio_site/"
    }, {
        "title": "Hometown News",
        "dates": "2016",
        "description": "Responsive news blog",
        "images": "http://jcwd.github.io/The_hometown_app/"
    }]
}
