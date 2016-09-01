/* global variable to replace %data% */
var data = "%data%";

/* defining and initializing bio data */
var bio = {
    "name": "Snehal Parate",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "717-364-0041",
        "email": "s.parate1791@gmail.com",
        "twitter": "@sne_hal_p",
        "github": "snehal1791",
        "location": "Middletown, PA 17057"
    },
    "welcomeMessage": "Welcome to My Resume",
    "skills": ["HTML", "CSS", "JavaScript", "Responsive Images"],
    "biopic": "images/profileImg.jpg"
};

/* displaying bio */
bio.display = function() {

    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace(data, bio.name);
    $("#header").prepend(formattedName);

    var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedbioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};

bio.display();

/* defining work experience */
var work = {
    "jobs": [{
            "employer": "TechMahindra Ltd.",
            "dates": "05/2013 - 11/2013",
            "title": "Associate Software Engineer",
            "location": "Pune, India",
            "description": "Part of the production support team. Provided support for 50+ online application for multiple clients. Interfaced and engaged across various teams at the time of critical issues and helped them in resolving issues"
        }, {
            "employer": "Alacrity E-Commerce Solutions Pvt Ltd",
            "dates": "06/2011 - 07/2011",
            "title": "Summer Trainee",
            "location": "Nagpur, India",
            "description": "Worked on “Comparative Analysis of different Competitors as an Online Buying Associate. Gained insight about the functioning of e-commerce."
        }

    ]
};

/* displaying work experience on the webpage */
work.display = function() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        for (job = 0; job < work.jobs.length; job++) {

            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedJobTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
            var formattedWorkDate = HTMLworkDates.replace(data, work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
            var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
            var formattedWork = formattedEmployer + formattedJobTitle + formattedWorkDate + formattedWorkLocation + formattedWorkDescription;

            $(".work-entry:last").append(formattedWork);
        }
    }
};

work.display();

/* defining education */
var education = {
    "schools": [{
        "name": "Harrisburg University",
        "degree": "Masters",
        "majors": ["Computer Technology"],
        "location": "Harrisburg, USA",
        "dates": "03/2016 - Future"
    }, {
        "name": "The Pennsylvania State University",
        "degree": "Masters",
        "majors": ["Computer Technology"],
        "location": "Harrisburg, USA",
        "dates": "01/2014 - Transfered to Harrisburg University"
    }, {
        "name": "G.H.Raisoni College of Engineering",
        "degree": "Bachelor of Engineering",
        "majors": ["Information Technology"],
        "location": "Nagpur, India",
        "dates": "08/2008 - 05/2012"
    }],

    "onlineCourses": [{
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "07/2016 - Future",
        "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "04/2016 - Future",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

/*defining projects */
var projects = {
    "projects": [{
        "title": "Attack to Win",
        "dates": "01/2014-05/2014",
        "description": "Multi user game based on Indian traditional game Dahdi. Implemented using client server architecture.",
        "images": []
    }, {
        "title": "Movies Trailer",
        "dates": "07/2016-07/20146",
        "description": "A website displaying trailer of the movies watched so far",
        "images": []
    }]
};

/* displays education and project information on the page */
education.display = function() {
    if (education.schools.length > 0) {
        for (school = 0; school < education.schools.length; school++) {

            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);

            var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
            var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);

            var formattedEducation = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation;
            $(".education-entry:last").append(formattedEducation);

            if (education.schools[school].majors.length > 0) {
                for (i = 0; i < education.schools[school].majors.length; i++) {
                    var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors[i]);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }
            }
        }
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);

        for (i = 0; i < education.onlineCourses.length; i++) {

            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);

            var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);

            var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

            $(".education-entry:last").append(formattedTitleSchool);

            var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);

            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedOnlineURL);

        }
    }
};

education.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);

        for (project = 0; project < projects.projects.length; project++) {

            var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDate = HTMLprojectDates.replace(data, projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectDate);
            var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                for (var i = 0; i < projects.projects[project].images.length; i++) {
                    var formattedProjectImages = HTMLskills.replace(data, projects.projects[project].images[i]);
                    $("#.project-entry:last").append(formattedProjectImages);
                }
            }
        }
    }
};

projects.display();

/* button to internatinalize name */
$("#main").append(internationalizeButton);

var inName = function(strName) {
    var internationalizeName = strName.split(" ");
    var firstName = internationalizeName[0].slice(0, 1).toUpperCase() + internationalizeName[0].slice(1).toLowerCase();
    var lastName = internationalizeName[1].toUpperCase();
    internationalizeName = firstName + " " + lastName;
    return internationalizeName;
};

// want to see the location! here is the map
$("#mapDiv").append(googleMap);
