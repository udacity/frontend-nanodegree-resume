// work data object
var work = {
    "jobs": [{
        "employer": "Mercer Consulting",
        "title": "Implementation Services Project Manager",
        "location": "Philadelphia, PA",
        "dates": "August 2016 - Present",
        "description": "Project management of implementation and bug-fix work queue for pension administration software"
    },
    {
        "employer": "Mercer Consulting",
        "title": "Implementation Services Team Leader",
        "location": "Philadelphia, PA",
        "dates": "September 2014 - July 2016",
        "description": "Pension administration software programmer"
    }, {
        "employer": "Towers Watson",
        "title": "Calculation Programmer",
        "location": "Philadelphia, PA",
        "dates": "2013 - September 2014",
        "description": "Pension administration software programmer"
    },
    {
        "employer": "Towers Watson",
        "title": "Defined Benefits Analyst",
        "location": "Southfield, MI",
        "dates": "2011 - 2013",
        "description": "Defined benefits pension administration"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        // Append work entry
        $("#workExperience").append(HTMLworkStart);

        // Append employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%",
            job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",
            job.title);
        // Employer and title are part of same element, concatenate
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        // Append location, formatted dates, job description
        var formattedLocation = HTMLworkLocation.replace("%data%",
            job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%",
            job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%",
            job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

// projects data object
var projects = {
    "projects": [{
        "title": "title 1",
        "dates": "2016",
        "description": "description 1",
        "images": [
            "images/fry.jpg", "images/fry.jpg"
        ]
    }, {
        "title": "title 2",
        "dates": "2016",
        "description": "description 2",
        "images": [
            "images/fry.jpg", "images/fry.jpg"
        ]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",
            project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",
            project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",
            project.description);
        $(".project-entry:last").append(formattedDescription);

        // loop through image array, if images present
        if (project.images.length > 0) {
            project.images.forEach(function(entry) {
                var formattedImage = HTMLprojectImage.replace("%data%", entry);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

// Create bio object to contain biographical info.
var bio = {
    "name": "Josef Mirante",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(360) 540 0952",
        "email": "josef.mirante@gmail.com",
        "github": "josef-mirante",
        "twitter": "",
        "location": "Philadelphia, PA"
    },
    "welcomeMessage": "Great news everybody!",
    "skills": ["communication", "organization", "collaboration"],
    "biopic": "images/fry.jpg"
};

bio.display = function() {
    // Prepend name and role
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    // Append contact info
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    if(bio.contacts.twitter.length > 0) {
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
    }
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    // Append pic and welcome message
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    // Append skills title and skills
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

// Create education object.
var education = {
    "schools": [{
        "name": "University of Washington",
        "location": "Seattle, WA",
        "degree": "Bachelor of Science",
        "majors": ["Mathematics"],
        "dates": "2006 - 2008",
        "url": "https://www.washington.edu"
    }, {
        "name": "Everett Community College",
        "location": "Everett, WA",
        "degree": "Associate of Science",
        "majors": ["Math and Science Emphasis"],
        "dates": "2004 - 2006",
        "url": "https://www.everettcc.edu/"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedName + formattedDegree;
        formattedNameDegree = formattedNameDegree.replace("#", school.url);
        $(".education-entry:last").append(formattedNameDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);

        school.majors.forEach(function(major) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedMajor);
        });
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        formattedTitleSchool = formattedTitleSchool.replace("#", course.url);
        $(".education-entry:last").append(formattedTitleSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedURL);
    });
};



// run display functions
bio.display();
work.display();
projects.display();
education.display();

// add a map to page
$("#mapDiv").append(googleMap);