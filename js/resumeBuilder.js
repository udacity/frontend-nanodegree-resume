/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Karen Dyer");
// with the varialbe declared outside the function, and the variable name used instead of the value itself.
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
var work = {
    "jobs": [{
            "title": "Web Developer  (ctrl - fn - F5 for changes)",
            "employer": "MLMIC",
            "location": "Latham, NY",
            "dates": "2013-present",
            "description": "job1 stuff I did. job1 stuff I did. job1 stuff I did. job1 stuff I did. job1 stuff I did. "
        },
        {
            "title": "LAN Administrator",
            "employer": "MLMIC",
            "location": "Syracuse, NY",
            "dates": "2003-2013",
            "description": "job2 stuff I did. job2 stuff I did. job2 stuff I did. job2 stuff I did. job2 stuff I did. "
        },
        {
            "title": "Helpdesk Administrator",
            "employer": "SIT",
            "location": "Brattleboro, VT",
            "dates": "2001-2003",
            "description": "job3 stuff I did. job3 stuff I did. job3 stuff I did. job3 stuff I did. job3 stuff I did. "
        }
    ]
};
// var formattedEmail = HTMLemailEmail.replace("%data%", work.position);
var projects = {
    "projects": [{
            "title": "MLMIC work project",
            "dates": "2017",
            "description": "in progress",
            "images": "www.imugur.com"
        },
        {
            "title": "front end project",
            "dates": "2017",
            "description": "resume",
            "images": "www.imugur.com"
        },
        {
            "title": "uDacityprogramming 101 project",
            "dates": "2015",
            "description": "website with notes from class",
            "images": "www.imugur.com"
        }
    ]
};
var education = {
    "schools": [{
            "name": "Marlboro",
            "location": "Marlboro, VT",
            "degree": "B.A.",
            "majors": ["Literature", "Political Science"],
            "dates": "1988-2000"
        },
        {
            "name": "VCU",
            "location": "Richmond, VA",
            "degree": "transferred prior to graduation",
            "majors": ["Literature", "Political Science"],
            "dates": "1985-1988"
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Web Developer",
            "school": "uDacity",
            "dates": "in progress",
            "url": "www.uDacity.com"
        },
        {
            "title": "Programming 101",
            "school": "uDacity",
            "dates": "2015",
            "url": "www.uDacity.com"
        }
    ]
};
var bio = {
    "name": "Karen Dyer",
    "role": "Web Developer",
    "contacts": [{
        "mobile": "555-555-5555",
        "email": "kdyer@mlmic.com",
        "github": "www.github.com",
        "location": "Latham, NY"
    }],
    "welcomeMessage": "Hi-ho everybodeeee",
    "skills": ["coding", "sleeping", "yoga", "writing"],
    "biopic": "www.udacity.com"
};
var footer = {
    "copywright": "&copy;Karen E. Dyer",
    "inspiration": "Site palette inspired by the ",
    "urlTxt": "Chocolate Bar Eyeshadow Palette",
    "url": "http://www.ulta.com/chocolate-bar-eyeshadow-palette?productId=xlsImpprod6330236"
};

$("#header").prepend([bio.role]);
$("#header").prepend([bio.name]);
$("#header").prepend([bio.welcomeMessage]);

$("#main").append([bio.biopic]);
$("#main").append([work.position]);
$("#main").append([work.years]);
$("#main").append([work.city]);
$("#main").append([projects.mlmic]);
$("#main").append([projects.uDacityProg]);
$("#main").append([projects.uDacityFront]);
$("#main").append([internationalizeButton]);
$("#mapDiv").append(googleMap);

var displayBio = function() {
    if (bio.skills > 0) {
        $("#header").prepend([HTMLskillsStart]);
        var formattedSkill0 = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill3 = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};
displayBio();

var displayWork = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
        $(".work-entry:last").append(formattedEmployerTitle);
        // :last will append the title to the last work-entry element created
    }
};
displayWork();

var displayEducation = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedMajor);
    }
};
displayEducation();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
// below, property method "display" is being called by this function:
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projcets[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

footer.display = function() {
    for (footer in footer.footers) {
        $("#footer").append(HTMLfooterStart);
        var footerCopywright = HTMLfooterCopywright.replace("%data%", footer.footers[footer].copywright);
        $(".footer-entry:last").append(footerCopywright);
        var footerInspiration = HTMLfooterInpiration.replace("%data%", footer.footers[footer].inspiration);
        $(".footer-entry:last").append(footerInspiration);
        var footerUrl = HTMLfooterUrl.replace("%data%", footer.footers[footer].url);
        $(".footer-entry:last").append(footerUrl);
        var footerUrlTxt = HTMLfooterUrlTxt.replace("%data%", footer.footers[footer].urlTxt);
        $(".footer-entry:last").append(footerUrlTxt);
    }
};