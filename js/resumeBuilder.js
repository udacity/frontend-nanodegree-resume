

var name = "Steven Miles";
var role = "Front-End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", " " + role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

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
    "contacts" : contact,
    "biopic" : "images/cover.jpeg",
    "welcomeMessage" : "Hello World!",
    "skills" : skills
}

bio.display = function()
{
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.phone));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    if (bio.skills.length > 0)
    {
        $("#header").append(HTMLskillsStart);

        for (var skill = 0; skill < bio.skills.length; skill++)
        {
            $("#skills-h3").append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
    }
}

bio.display();

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

work.display = function()
{
    for (var job = 0; job < work.jobs.length; job++)
    {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append
            (HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
             HTMLworkTitle.replace("%data%", work.jobs[job].title) +
             HTMLworkDates.replace("%data%", work.jobs[job].dates) +
             HTMLworkLocation.replace("%data%", work.jobs[job].location) +
             HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

work.display();


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
            "major" : "Computer Science",
            "minor" : "Mathematics"
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


education.display = function()
{
    for (school = 0; school < education.schools.length; school++)
    {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);

        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
        $(".education-entry:last").append(formattedSchoolMinor);
    }

    if (education.onlineCourses.length > 0)
    {
        $("#education").append(HTMLonlineClasses);

        for (course = 0; course < education.onlineCourses.length; course++)
        {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].completed);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
}

education.display();

var projects =
{
    "projects":
    [
        {
            "title" : "Project Title 1",
            "dates" : "2016 - 2016",
            "description" : "Project Description 1.  This is a much longer description with many more words.",
            "images" : ["images/cubsProject1.jpeg"]
        },
        {
            "title" : "Project Title 2",
            "dates" : "2015 - 2015",
            "description" : "Project Description 2",
            "images" : ["images/cubsProject2.jpg"]
        }
    ]
}

projects.display = function()
{
    for (var project = 0; project < projects.projects.length; project++)
    {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append
            (HTMLprojectTitle.replace("%data%", projects.projects[project].title) +
             HTMLprojectDates.replace("%data%", projects.projects[project].dates) +
             HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        for (var image = 0; image < projects.projects[project].images.length; image++)
        {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
    }
}

projects.display();

/**
    Functions
*/


function inName()
{
    var names = bio.name.split(" ");

    if (names.length > 1)
    {
        return names[0] + " " + names[1].toUpperCase();
    }

    return "Name not found";
}

$(document).click(function(loc)
{
    logClicks(loc.pageX, loc.pageY);
})