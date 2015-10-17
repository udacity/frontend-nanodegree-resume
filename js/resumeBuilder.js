var bio = {
    "name": "Juan Meza",
    "role": "Front End Developer",
    "welcomeMessage": "Welcome To my Resume, Enjoy!",
    "contacts": {
        "mobile": "(408)669-253-9544",
        "email": "jrmeza514@gmail.com",
        "github": "jrmeza514",
        "twitter": "@jrmeza514",
        "location": "San Jose, CA"
    },
    "skills": [
        "HTML5",
        "CSS",
        "JavaScript",
        "PHP5",
        "SQL",
        "JAVA"
    ],
    "bioPic": "images/fry.jpg"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
    var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
    var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
    var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
    var formattedGithub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
    var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
    $.each(bio["skills"], function(index, currentSkill) {
        var formattedSkill = HTMLskills.replace("%data%", currentSkill);
        $("#skills").append(formattedSkill);
    });
};
var work = {
    "jobs": [{
        "employer": " Target Corporation",
        "title": "Stockroom Team Member",
        "location": "Cottle Rd, San Jose, CA",
        "dates": "2014 to Present",
        "description": "Maintaining Accurate Inventory of Store Merchandise"
    }, {
        "employer": " Target Corporation",
        "title": "Truck Unload Team Member",
        "location": "San Jose, CA",
        "dates": "2014 to 2015",
        "description": "Unload Incoming Trucks with new Merchandise"
    }]
};
work.display= function() {
    for (var currentJob = 0; currentJob < work["jobs"].length; currentJob++) {
        $("#workExperience").append(HTMLworkStart);
        currentEntry = $(".work-entry")[currentJob];
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][currentJob]["employer"]);
        var formattedWorkTitlte = HTMLworkTitle.replace("%data%", work["jobs"][currentJob]["title"]);
        var formattedWrkDates = HTMLworkDates.replace("%data%", work["jobs"][currentJob]["dates"]);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work["jobs"][currentJob]["location"]);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work["jobs"][currentJob]["description"]);

        $(currentEntry).append(formattedWorkEmployer);
        $(currentEntry).append(formattedWorkTitlte);
        $(currentEntry).append(formattedWrkDates);
        $(currentEntry).append(formattedWorkLocation);
        $(currentEntry).append(formattedWorkDescription);
    }
};
var education = {
    "schools": [{
        "name": "Santa Teresa High School",
        "location": "Santa Teresa Highschool ,San Jose, CA",
        "degree": "GED",
        "major": ["High School Diploma"],
        "dates": "2010-2014",
        "url": "http://santateresa.esuhsd.org"
    }, {
        "name": "West Valley College",
        "location": "West Valley College, Saratoga, CA",
        "degree": "AA",
        "major": ["Web and Mobile Design"],
        "dates": "2014-Present",
        "url": "http://www.westvalley.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Development Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com"
    }]
};
education.display = function() {
    $.each(education["schools"], function(index, currentSchool) {
        $("#education").append(HTMLschoolStart);
        var currentEntry = $(".education-entry")[index];
        var formattedSchoolName = HTMLschoolName.replace("%data%", currentSchool["name"]);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", currentSchool["degree"]);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", currentSchool["dates"]);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", currentSchool["major"]);
        var fomattedSchoolLocation = HTMLschoolLocation.replace("%data%", currentSchool["location"]);

        $(currentEntry).append(formattedSchoolName + formattedSchoolDegree);
        $(currentEntry).append(fomattedSchoolLocation);
        $(currentEntry).append(formattedSchoolDates);
        $(currentEntry).append(formattedSchoolMajor);


    });
    $("#education").append(HTMLonlineClasses);
    $.each(education["onlineCourses"], function(index, currentCourse) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", currentCourse["title"]);
        var currentEntry = $(".education-entry")[education["schools"].length + index];
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", currentCourse["school"]);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", currentCourse["dates"]);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", currentCourse["url"]);

        $(currentEntry).append(formattedOnlineTitle + formattedOnlineSchool);
        $(currentEntry).append(formattedOnlineDates);
        $(currentEntry).append(formattedOnlineUrl);
    });

};

var projects = {
    "projects": [{
        "title": "Intereactive Resume",
        "dates": "2015",
        "description": "Online Resume as Part of my Web Portfolio",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif", "images/197x148.gif"],
        "link": "index.html"
    }]
};
projects.display = function() {
        $.each(projects["projects"], function(index, currentProject) {
            var formattedProject = HTMLprojectStart;
            $("#projects").append(formattedProject);
            currentEntry = $(".project-entry")[index];
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", currentProject["title"]);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", currentProject["dates"]);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", currentProject["description"]);

            $(currentEntry).append(formattedProjectTitle);
            $(currentEntry).append(formattedProjectDates);
            $(currentEntry).append(formattedProjectDescription);

            $.each(currentProject["images"], function(index, value) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", value);
                $(currentEntry).append(formattedProjectImage);
            })
        });
    }
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);