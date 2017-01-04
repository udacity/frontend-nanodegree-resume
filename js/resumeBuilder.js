
var defaultPlaceholder = "%data%";
var urlPlaceholder = "#";

var subject = "Steven Miles";
var role = "Front-End Web Developer";

/*
    Bio
*/

var skills = ["programming (java, HTML, javascript, css, php, sql)", "web design", "software testing"];

var formattedName = populateDefaultTag(HTMLheaderName, subject);
var formattedRole = populateDefaultTag(HTMLheaderRole, " " + role);

var contact =
{
    "mobile" : "612 360 1087",
    "email" : "semiles@msn.com",
    "github" : "howardjmn",
    "twitter" : "",
    "location" : "Minneapolis"
};

var bio =
{
    "name" : subject,
    "role" : role,
    "contacts" : contact,
    "biopic" : "images/cover.jpeg",
    "welcomeMessage" : "Hello World!",
    "skills" : skills
};

bio.display = function()
{
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#mapDiv").append(googleMap);

    $("#header").append(populateDefaultTag(HTMLbioPic, bio.biopic));

    displayIfPopulated("#topContacts", HTMLmobile, bio.contacts.mobile);
    displayIfPopulated("#topContacts", HTMLemail, bio.contacts.email);
    displayIfPopulated("#topContacts", HTMLgithub, bio.contacts.github);
    displayIfPopulated("#topContacts", HTMLtwitter, bio.contacts.twitter);
    displayIfPopulated("#topContacts", HTMLlocation, bio.contacts.location);

    displayIfPopulated("#footerContacts", HTMLmobile, bio.contacts.mobile);
    displayIfPopulated("#footerContacts", HTMLemail, bio.contacts.email);
    displayIfPopulated("#footerContacts", HTMLgithub, bio.contacts.github);
    displayIfPopulated("#footerContacts", HTMLtwitter, bio.contacts.twitter);
    displayIfPopulated("#footerContacts", HTMLlocation, bio.contacts.location);

    if (bio.skills.length > 0)
    {
        $("#header").append(HTMLskillsStart);

        for (var skill = 0; skill < bio.skills.length; skill++)
        {
            displayIfPopulated("#skills", HTMLskills, bio.skills[skill]);
        }
    }
};


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
            "url" : "http://thomsonreuters.com/en.html",
            "dates" : "2006 - 2014",
            "location" : "Eagan, MN",
            "description" : "developed automated test suites for Westlaw Next backend applications"
        },
        {
            "title" : "Software Developer",
            "employer" : "Target Corp.",
            "url" : "https://corporate.target.com/careers/career-areas/human-resources",
            "dates" : "1998 - 2006",
            "location" : "Minneapolis, MN",
            "description" : "developed web sites to allow internal users to track EDI documents, and external web sites to allow Target trading partners to set up EDI protocols."
        },
        {
            "title" : "Software Developer",
            "employer" : "3M Corp.",
            "url" : "http://www.3m.com/3M/en_US/company-us/",
            "dates" : "1991 - 1998",
            "location" : "St. Paul, MN",
            "description" : "Wrote code to translate EDI documents (such as Purchase Orders and Invoices) from formats sent by trading partners to formats used by 3M internal systems."
        }
    ]
};

work.display = function()
{
    for (var job = 0; job < work.jobs.length; job++)
    {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append
            (populateDefaultTag(replaceUrl(HTMLworkEmployer, work.jobs[job].url), work.jobs[job].employer) +
             populateDefaultTag(HTMLworkTitle, work.jobs[job].title) +
             populateDefaultTag(HTMLworkDates, work.jobs[job].dates) +
             populateDefaultTag(HTMLworkLocation, work.jobs[job].location) +
             populateDefaultTag(HTMLworkDescription, work.jobs[job].description));
    }
};


/*
    Education
*/

var education =
{
    "schools":
    [
        {
            "name" : "De Paul University",
            "location" : "Chicago, IL",
            "degree" : "Bachelor of Science",
            "majors" : ["Computer Science", "Mathematics"],
            "dates" : "1975 - 1979",
            "url" : "https://www.depaul.edu/Pages/default.aspx"
        }
    ],"onlineCourses":
    [
        {
            "title" : "Front-End Web Developer",
            "school" : "Udacity",
            "dates" : "2016",
            "url" : "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
        }
    ]
};


education.display = function()
{
    for (school = 0; school < education.schools.length; school++)
    {
        $("#education").append(HTMLschoolStart);

        var formattedDegree = populateDefaultTag(HTMLschoolDegree, education.schools[school].degree);
        displayIfPopulated(".education-entry:last", replaceUrl(HTMLschoolName, education.schools[school].url), education.schools[school].name + formattedDegree);

        displayIfPopulated(".education-entry:last", HTMLschoolLocation, education.schools[school].location);
        displayIfPopulated(".education-entry:last", HTMLschoolDates, education.schools[school].dates);

        var majorDisplay = "";

        if (education.schools[school].majors.length > 0)
        {
            for (var major = 0; major < education.schools[school].majors.length; major++)
            {
                if (major > 0)
                {
                    majorDisplay = majorDisplay + ", ";
                }

                majorDisplay = majorDisplay + education.schools[school].majors[major];
            }
        }

        displayIfPopulated(".education-entry:last", HTMLschoolMajor, majorDisplay);
    }

    if (education.onlineCourses.length > 0)
    {
        $("#education").append(HTMLonlineClasses);

        for (course = 0; course < education.onlineCourses.length; course++)
        {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineUrl = replaceUrl(HTMLonlineTitle, education.onlineCourses[course].url);
            var formattedOnlineTitle = populateDefaultTag(formattedOnlineUrl, education.onlineCourses[course].title);
            var formattedOnlineSchool = populateDefaultTag(HTMLonlineSchool, education.onlineCourses[course].school);
            var formattedOnlineDates = populateDefaultTag(HTMLonlineDates, education.onlineCourses[course].dates);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            displayIfPopulated(".education-entry:last", HTMLonlineDates, formattedOnlineDates);
        }
    }
};

var projects =
{
    "projects":
    [
        {
            "title" : "First Udacity Project - Hometown paper",
            "url": "https://htmlpreview.github.io/?https://github.com/howardjmn/HomeTown/blob/master/index.html",
            "dates" : "2016",
            "description" : "Sample newspaper webpage",
            "images" : ["images/city.png"]
        },
        {
            "title" : "Second Udacity Project - Portfolio",
            "url": "https://htmlpreview.github.io/?https://github.com/howardjmn/Portfolio/blob/master/index.html",
            "dates" : "2016",
            "description" : "Sample portfolio webpage",
            "images" : ["images/sunflower.png", "images/appify.png", "images/bokeh.png"]
        }
    ]
};

projects.display = function()
{
    for (var project = 0; project < projects.projects.length; project++)
    {
        var projectTitle = replaceUrl(HTMLprojectTitle, projects.projects[project].url);

        if (projects.projects[project].images.length === 1)
        {
            $("#projects").append(HTMLprojectStart.replace("%row%", "row"));

            $(".project-entry:last").append
                (HTMLprojectLeft +
                 populateDefaultTag(projectTitle, projects.projects[project].title) +
                 populateDefaultTag(HTMLprojectDates, projects.projects[project].dates) +
                 populateDefaultTag(HTMLprojectDescription, projects.projects[project].description) +
                 "</div>");

            $(".project-entry:last").append
                (HTMLprojectRight +
                populateDefaultTag( HTMLprojectImage, projects.projects[project].images[0]) +
                 "</div>");
        }
        else
        {
             $("#projects").append(HTMLprojectStart.replace("%row%", ""));

            $(".project-entry:last").append
                (populateDefaultTag(projectTitle, projects.projects[project].title) +
                 populateDefaultTag(HTMLprojectDates, projects.projects[project].dates) +
                 populateDefaultTag(HTMLprojectDescription, projects.projects[project].description));

            for (var image = 0; image < projects.projects[project].images.length; image++)
            {
               $(".project-entry:last").append
                    (populateDefaultTag(HTMLprojectImage, projects.projects[project].images[image]));
            }
        }
    }
};


bio.display();
work.display();
education.display();
projects.display();


/**
    Functions
*/


/**
    Update the tag/value pair at the specified page locations.  Do not display
    the tag/value pair if no value is passed.
*/
function displayIfPopulated(pageLoc, tag, value)
{
    if (value.length > 0)
    {
        $(pageLoc).append(populateDefaultTag(tag, value));
    }
}

/**
    Replace the helper.js default data placeholder with the passed value.
*/
function populateDefaultTag(tag, value)
{
    return tag.replace(defaultPlaceholder, value);
}

/**
    Replace the helper/js default URL placeholder with the passed URL.
*/
function replaceUrl(originalValue, newUrl)
{
    return originalValue.replace(urlPlaceholder, newUrl);
}