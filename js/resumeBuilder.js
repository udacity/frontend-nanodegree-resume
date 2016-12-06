
/*
    Header
*/

var name = "Steven Miles";
var role = "Front-End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", " " + role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*
    Bio
*/

var skills = ["programming (java, HTML, javascript, css, php, sql)", "web design", "software testing"];

var contact =
{
    "phone" : "612 360 1087",
    "email" : "semiles@msn.com",
    "github" : "howardjmn",
    "location" : "Minneapolis"
}

var bio =
{
    "name" : name,
    "role" : role,
    "contact" : contact,
    "biopic" : "images/cover.jpg",
    "welcomeMessage" : "Hello World!",
    "skills" : skills
}

if (bio.skills.length > 0)
{
    $("#header").append(HTMLskillsStart);

    for (var skill = 0; skill < bio.skills.length; skill++)
    {
        $("#skills-h3").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

/*
    Work
*/

var work =
{
    "jobs":
    [
        {
            "title" : "Software Tester",
            "employer" : "Thomson Reuters",
            "dates" : "2006 - 2014",
            "location" : "Eagan, MN",
            "description" : "developed automated test suites for Westlaw Next backend applications"
        },
        {
            "title" : "Software Developer",
            "employer" : "Target Corp.",
            "dates" : "1998 - 2006",
            "location" : "Minneapolis, MN",
            "description" : "developed web sites to allow internal users to track EDI documents, and external web sites to allow Target trading partners to set up EDI protocols."
        },
        {
            "title" : "Software Developer",
            "employer" : "3M Corp.",
            "dates" : "1991 - 1998",
            "location" : "St. Paul, MN",
            "description" : "Wrote code to translate EDI documents (such as Purchase Orders and Invoices) from formats sent by trading partners to formats used by 3M internal systems."
        }
    ]
}

displayWork(work.jobs);


/*
    Education
*/

var education =
{
    "schools":
    [
        {
            "name" : "De Paul University",
            "dates" : "1975 - 1979",
            "location" : "Chicago, IL",
            "degreeDates" : 1979,
            "major" : ["Computer Science", "Mathematics"]
        }
    ]
    ,"onlineCourses":
    [
        {
            "title" : "Front-End Web Developer",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
        }
    ]
}

var project =
{
    "projects":
    [
        {
            "title" : "Title?",
            "dates" : "Dates?",
            "description" : "Description?",
            "images" : []
        }
    ]
}

/**
    Functions
*/

function displayWork(jobs)
{
    for (var job = 0; job < work.jobs.length; job++)
    {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append
            (HTMLworkEmployer.replace("%data%", jobs[job].employer) +
             HTMLworkTitle.replace("%data%", jobs[job].title) +
             HTMLworkDates.replace("%data%", jobs[job].dates) +
             HTMLworkLocation.replace("%data%", jobs[job].location) +
             HTMLworkDescription.replace("%data%", jobs[job].description));
    }
}

$(document).click(function(loc)
{
  logClicks(loc.pageX, loc.pageY);
})