// resumeBuilder.js 
// Written by Renee Cooper 2015
// Udacity Front-End Web Dev Nanodegree
// **************************************
//
// resume content and display functions
// these rely on objects in helper.js

// Biographical info
var bio = {
    "name": "Renee Cooper",
    "role": " ~ Software Engineer Extraordinaire ~ ",
    "contacts": {
        "email": "reneemillercooper@gmail.com",
        "mobile": "425-890-8698",
        "github": "hotdiggitydogz",
        "location": "Seattle, WA"
    },
    "picture": "images/me.jpg",
    "welcome" : "Come bask in my awesomeness...",
    "skills": ["Automation", "C#", "UI/UX", "SQL", "Testing", "Data Analysis"],
    display : function () {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").append(HTMLWelcomeMsg.replace("%data%", "     "));
        $("#header").append(HTMLbioPic.replace("%data%", bio.picture));

        // We'll fade these in on a timer for visual emphasis
        if (bio.skills.length !== 0) {
            $("#header").append(HTMLskillsStart.replace(getSkillsHeader(), ""));
            $("#skills").append("");
        }
        
    }, // end display function

    displayWelcome: function () {
        $("#welcome").hide();
        document.getElementById("welcome").innerHTML = bio.welcome;
        $("#welcome").fadeIn();
        setTimeout(bio.clearWelcome, 5000);
    },

    clearWelcome : function () {
        document.getElementById("welcome").innerHTML = "   ";
    },

    // called on a delay for emphasis
    displaySkills: function () {
        var skillsHeader = getSkillsHeader();
        $("#skillsH3").hide();
        document.getElementById("skillsH3").innerHTML = skillsHeader;
        $("#skillsH3").fadeIn(1000);
        $("#skills").hide();
        for (i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i])).fadeIn(2000);
        }
    }

}; // end bio object

// Temporarily remove text from the skills header; we'll fade this in later
var getSkillsHeader = function () {
    var htmlSkillsHeader = HTMLskillsStart;
    var startIndex = htmlSkillsHeader.indexOf('>');
    var endIndex = htmlSkillsHeader.indexOf('<', startIndex);
    return HTMLskillsStart.slice(startIndex + 1, endIndex);
}
// Employment history
var work = {
    "history": [
        {
            "position": "Senior Software Engineer",
            "employer": "Microsoft, Outlook Shipping Excellence",
            "dates": "July 2014 - Nov 2014",
            "location": "Redmond, WA",
            "description": "Data analysis - automation monitoring - SQL querying - Excel reporting"
        },
        {
            "position": "Senior SDET",
            "employer": "Microsoft, User Experience and Outlook Calendar",
            "dates": "Sept 2003 - July 2014",
            "location": "Redmond, WA",
            "description": "Test automation writing and refactoring in C#, monitoring, reporting, in depth feature testing, automation infrastructure and tools, globalization, coordination with teams overseas, cross-team collaboration"
        },
        {
            "position": "Test Lead / Test Manager",
            "employer": "Microsoft, Office Complex Scripts",
            "dates": "October 1997 - August 2003",
            "location": "Redmond, WA",
            "description": "Led/managed teams in globalization and localization testing of Office applications.  Drove international sufficiency testing across Office teams. collaborated with international teams and vendors overseas"
        }
    ],
    display: function () {
        if (work.history.length !== 0) {
            for (job in work.history) {
                $("#workExperience").append(HTMLworkStart);

                var employer = HTMLworkEmployer.replace("%data%", work.history[job].employer);
                var jobTitle = HTMLworkTitle.replace("%data%", work.history[job].position);
                $(".work-entry:last").append(employer + " " + jobTitle);

                var workDates = HTMLworkDates.replace("%data%", work.history[job].dates);
                $(".work-entry:last").append(workDates);

                var workLocation = HTMLworkLocation.replace("%data%", work.history[job].location);
                $(".work-entry:last").append(workLocation);

                var workDescription = HTMLworkDescription.replace("%data%", work.history[job].description);
                $(".work-entry:last").append(workDescription);

            }
        }
    } // end work display
}; // end work object

// Projects completed
var projects = {
    "project": [
        {
            "title": "Outlook Tenant Build Improvement",
            "dates": "July 2014 - Nov 2014",
            "description": "Data analysis and reporting to improve automation quality and build turnarounds times in an agile environment",
            "images": ["images/excel2013.png", "images/sql-server.png", "images/agile.png"]
        },
        {
            "title": "Outlook Calendar UI",
            "dates": "Nov 2012 - July 2014",
            "description": "Feature testing - C# automated tests writing, manual testing: black box, white box, performance, globalization, localizability, UI, stress, design, telemetry, configuration, privacy, accessibility",
            "images": ["images/outlook.png", "images/visual-studio-2013.png"]
        },
        {
            "title": "Office 15 UEX Automation Driver",
            "dates": "2010 - Nov 2012",
            "description": "Automation Big Kahuna",
            "images": ["images/testscripts.jpg"]
        }
    ],
    display : function () {
        for (i in projects.project) {
            $("#projects").append(HTMLprojectStart);
            var projElement = HTMLprojectTitle;
            projElement = projElement.replace("%data%", projects.project[i].title);
            $(".project-entry:last").append(projElement);

            projElement = HTMLprojectDates;
            projElement = projElement.replace("%data%", projects.project[i].dates);
            $(".project-entry:last").append(projElement);

            projElement = HTMLprojectDescription;
            projElement = projElement.replace("%data%", projects.project[i].description);
            $(".project-entry:last").append(projElement);

            projElement = "";
            for (pic in projects.project[i].images) {
                projElement += HTMLprojectImage.replace("%data%", projects.project[i].images[pic]);
            }
            $(".project-entry:last").append(projElement);
        }
    } // end projects display
}; // end projects object

// Degrees and Online classes
var education = {
    "schools": [
        {
            "name": "The Evergreen State College",
            "location": "Olympia, WA",
            "degree": "BSc",
            "dates": "1990 - 1992",
            "majors": ["General, with Software Engineering focus"],
            "url": "http://www.evergreen.edu"
        },
        {
            "name": "Ambassador College",
            "location": "Pasadena, CA",
            "degree": "AA",
            "dates": "1988 - 1990",
            "majors": ["Liberal Arts"],
            "url": "#"
        }
    ],
    "onlineCourses": [
        {
            "name": "Front-End Developer Nanodegree (In Progress)",
            "host": "Udacity",
            "date": 2015,
            "url": "http://www.udacity.com/course/nd001"
        },
        {
            "name": "e-Learning Ecologies",
            "host": "Coursera",
            "date": 2015,
            "url": "https://class.coursera.org/elearning-002"
        }
    ],
    display: function () {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var schoolName = HTMLschoolName.replace("#", education.schools[school].url);
            console.log(schoolName);
            $(".education-entry:last").append(schoolName.replace("%data%", education.schools[school].name));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
            $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors.toString()));
        }

        $("#education").append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var onlineCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
            onlineCourse = onlineCourse.replace("#", education.onlineCourses[course].url);
            onlineCourse += HTMLonlineSchool.replace("%data%", education.onlineCourses[course].host);
            $(".education-entry:last").append(onlineCourse);

            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
        }
    } // end education display
}; // end education object


// returns an array of work, school and living locations for our map
function locationizer() {
    var locations = [];
    for (job in work.history)
    {
        locations.push(work.history[job].location);
    }
    for (school in education)
    {
        locations.push(education.schools[school].location);
    }

    location.push(bio.contacts.location);
    return locations;
}

// "internationalizes" the name by capitalizing the first letter of the first name and the entire last name.
// e.g. Renee COOPER
function inName() {
    var intNames = $("#name").text().trim().split(" ");
    var firstName = intNames[0][0].toUpperCase() + intNames[0].slice(1).toLowerCase();
    var lastName = intNames[1].toUpperCase();
    return firstName + " " + lastName;
}

// populate the content on the page
$(document).ready(bio.display());
projects.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

// Delay the display of the welcome message
setTimeout(bio.displayWelcome, 2000);
setTimeout(bio.displaySkills, 2500);