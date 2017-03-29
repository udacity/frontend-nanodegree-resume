/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Rohan Rose",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "rrose3@live.com",
        "github": "rrose3",
        "twitter": "@rrose319",
        "location": "New York"
    },
    "welcomeMessage": "Welcome to my online resume.",
    "skills": [
        "HTML", "CSS", "Javascript", "jQuery"
    ],
    "biopic": "images/fry.jpg", //ToDO: replace image
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
        $("#topContacts, #footerContacts").append(formattedContacts);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        if (bio.skills.length > 0){
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function (skill) {
               var formattedSkills = HTMLskills.replace("%data%", skill);
               $("#skills").append(formattedSkills);
            });
        }
    }
};

var education = {
    "schools": [
        {
            "name": "TCI College of Technology",
            "location": "New York, New York",
            "degree": "Associate",
            "majors": "Networking",
            "dates": "2008-2010"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com"
        }
    ],
    display: function () {
        education.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry:last").append(formattedSchoolName);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedSchoolMajors);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);
        });

        education.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            $(".education-entry:last").append(formattedOnlineTitle);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedOnlineUrl);
        })
    }
};

var work = {
    "jobs": [
        {
            "employer": "Chefs' Warehouse",
            "title": "Inventory Control",
            "location": "Bronx, New York",
            "dates": "2012-Present",
            "description": "Performs daily cycle count of warehouse inventory. Completes daily reports which include but not limited to, Short Product Report, Expiration Date Report, Large Adjustment Report, Negative Inventory Report, Negative Weight Report and any inventory related issues that arise."
        }
    ],
    display: function () {
        work.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);

            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedWorkDates);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    }
};

var projects = {
    "projects": [
        {
            "title": "Build a Portfolio Site",
            "dates": "2017",
            "description": "in progress",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ],
    display: function () {
        projects.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);

            if (project.images.length > 0){
                project.images.forEach(function (image) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedProjectImage);
                });
                }
            });
        }
};

/* Internationalize Button */
function inName (name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " "+name[1];
}

$("#main").append(internationalizeButton);

/* Google Map */
$("#mapDiv").append(googleMap);


bio.display();
education.display();
work.display();
projects.display();