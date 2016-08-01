

var bio = {
    "name": "Jon Collins",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "+32-483-117705",
        "email": "jon.collins71@gmail.com",
        "github": "jcwd",
        "twitter": "@JonColl09129892",
        "location": "Brussels, BE"
    },
    "welcomeMessage": "Using my strong skillset, tenacity and determination in the role of Front End Web Developer to delivery the best Possible Digital experiences for customers in line with, (and exceeding) their expectations",
    "skillSet": ["HTML5", "CSS3", "JS", "BootStrap", "GitHub", "Agile", "Prince II"],
    "bioPic": "images/jon.jpg"
    };

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var numSkills = bio.skillSet.length;
console.log (bio.skillSet.length);
var x=0;

bio.display = function() {
        $("#header").prepend(formattedName, formattedRole);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        $("#header").append(formattedBiopic);
        $("#header").append(formattedwelcomeMsg);
        }

populateSkills = function() {        
        $("#header").append(HTMLskillsStart);
        while ( x < numSkills) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skillSet[x]);
        $("#skills").append(formattedSkills);
        x++;
        }
};
        
function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    return name [0] +" "+name[1];
}
$("#main").append(internationalizeButton);

// Do not touch, everything up to here working fine.

// var work = {
//     "jobs": [{
//         "title": "Project Manager",
//         "employer": "ING Belgium",
//         "dates" : "2011-2016",
//         "location" : "Brussels",
//         "description" : "responsible for the effective delivery of strategic, Legal and commercial projects in line with the goals of ING"
//     },{
//         "title": "Project Manager e-business",
//         "employer" : "Avnet Technology Solutions",
//         "dates" : "2004-2011",
//         "location" : "Brussels",
//         "description" : "responsible for the maintenance, monitoring and growth of the Avnet European e-business offering"
//     },{
//         "title": "Business Process Manager",
//         "employer" : "Avnet Technology Solutions",
//         "dates" : "2002-2004",
//         "location" : "Brussels",
//         "description" : "Business Process Manager"
//     },{
//         "title": "Sales Support Manager",
//         "employer" : "Avnet Technology Solutions",
//         "dates" : "2000-2002",
//         "location" : "Brussels",
//         "description" : "Sales Support Manager"
//     },{
//         "title": "Purchaser",
//         "employer" : "Bytech Systems",
//         "dates" : "1996-2000",
//         "location" : "Bracknell, UK",
//         "description" : "Purchaser, IBM and Intel Server products"
//     },{
//         "title": "Engineering Draughtsman",
//         "employer" : "Dynamic Logic",
//         "dates" : "1991-1996",
//         "location" : "Bracknell, UK",
//         "description" : "Engineering Draughtsman"
//     },{
//         "title": "Estate Agent",
//         "employer" : "Romans",
//         "dates" : "1989-1991",
//         "location" : "Crowthorne, UK",
//         "description" : "Estage Agent"
//     }]
// };


// console.log (work);
// console.log (work.jobs[0].employer);

// var numWork = work.jobs.length;
// x = 0;

// if (numWork >= 0) {addWorkStart();

// function addWorkStart() {
//         var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[x].employer);
//         var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[x].title);
//         var together = formattedEmployer.concat(formattedTitle);
//         var formattedDates = HTMLworkDates.replace("%data%",work.jobs[x].dates);
//         var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[x].location);
//         var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[x].description);
//     while ( x < numWork ++) {
//         $("#workExperience").append(HTMLworkStart);
//         $("#workExperience").append(together);
//         $("#workExperience").append(formattedWorkLocation);
//         $("#workExperience").append(formattedDates);
//         $("#workExperience").append(formattedDescription);
// }

// var education = {
//     "schools": [{
//         "name": "Udacity",
//         "location": "Mountain View",
//         "degree": "NanoDegree",
//         "majors": "Front End Web Development",
//         "dates": "4/2016 - Present",
//         "url": "blabla"
//     }, {
//         "name": "QRP International",
//         "location": "Brussels",
//         "degree": "Certification",
//         "majors": "Prince II Practioner",
//         "dates": "2014",
//         "url": "blabla"
//     }, {
//         "name": "Bracknell and Wokingham College",
//         "location": "Bracknell",
//         "degree": "BTEC 1st",
//         "majors": "Electro-Mechanical Engineering",
//         "dates": "1993",
//         "url": "blabla"
//     }],
//     "onlineCourses": [{
//         "title": "Front-End Web Development",
//         "school": "Udacity",
//         "dates": "4/2016 - Present",
//         "url": "https://udacity.com"
//     }],
//         "display": function() {
//             if(education.schools.length > 0) {
//                 education.schools.forEach(function(school) {
//                     $("#education").append(HTMLschoolStart);
//                     var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);
//                     var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
//                     var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);
//                     var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
//                     $(".education-entry:last").prepend(formattedHTMLschoolName + formattedHTMLschoolDegree);
//                     $(".education-entry:last").prepend(formattedHTMLschoolLocation);
//                     $(".education-entry:last").append(formattedHTMLschoolDates + "<br />");

//                 });
//             }
//             if(education.onlineCourses.length > 0) {
//                 $("#education").append(HTMLonlineClasses);
//                 education.onlineCourses.forEach(function(onlinecourse) {
//                     $("#education").append(HTMLschoolStart);
//                     var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlinecourse.title);
//                     var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlinecourse.school);
//                     var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlinecourse.dates);
//                     var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlinecourse.url);
//                     $(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
//                     $(".education-entry:last").append(formattedHTMLonlineDates);
//                     $(".education-entry:last").append(formattedHTMLonlineURL  + "<br />");
//                 });
//             }
//         }
// };

// var projects = {
//     "projects": [{
//         "title": "Portfolio",
//         "dates": "2016",
//         "description": "Fully responsive online Portfolio",
//         "images": ["images/relax.jpg"]
//     }, {
//         "title": "Hometown News",
//         "dates": "2016",
//         "description": "Responsive news blog",
//         "images": ["images/dog.jpg"]
//     }]
// };
// projects.display = function() {
//     for (project in projects.projects) { //Lorenzo helped me see that the var needed to bedeclared in scopwe and not globally (adding the var) and that second projects needed to be added
//         $("#projects").append(HTMLprojectStart);
//         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
//         $(".project-entry:last").append(formattedTitle);
//         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
//         $(".project-emtry:last").append(formattedDates);
//         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
//         $(".project-entry:last").append(formattedDescription);
//         if (projects.projects[project].images.length > 0) {
//             for (var image in projects.projects[project].images) {
//                 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
//                 $(".project-entry:last").append(formattedImage);
//             }
//         }
//     }

// };

bio.display();
populateSkills();
// projects.display();
// education.display();

// }

// $("#mapDiv").append(googleMap);}