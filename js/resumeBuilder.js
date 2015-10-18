var data = "%data%";
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
    var formattedName =
        HTMLheaderName.replace(data, bio.name);
    var formattedRole =
        HTMLheaderRole.replace(data, bio.role);
    var formattedMobile =
        HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail =
        HTMLemail.replace(data, bio.contacts.email);
    var formattedTwitter =
        HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedGithub =
        HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation =
        HTMLlocation.replace(data, bio.contacts.location);
    var formattedBioPic =
        HTMLbioPic.replace(data, bio.bioPic);
    var formattedWelcomeMsg =
        HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(
        formattedRole,
        formattedName
    );
    $("#topContacts").append(
        formattedMobile,
        formattedEmail,
        formattedTwitter,
        formattedGithub,
        formattedLocation
    );
    $("#header").append(
        formattedBioPic,
        formattedWelcomeMsg,
        HTMLskillsStart
    );
    $("#footerContacts").append(
        formattedMobile,
        formattedEmail,
        formattedTwitter,
        formattedGithub,
        formattedLocation
    );
    $.each(bio.skills, function(index, currentSkill) {
        var formattedSkill =
            HTMLskills.replace(data, currentSkill);
        $("#skills").append(formattedSkill);
    });
};
var work = {
    "jobs": [{
        "employer": " Target Corporation",
        "title": "Stockroom Team Member",
        "location": "Cottle Rd, San Jose, CA",
        "dates": "2015",
        "description": "Maintaining Accurate Inventory of Store Merchandise"
    }, {
        "employer": " Target Corporation",
        "title": "Truck Unload Team Member",
        "location": "San Jose, CA",
        "dates": "2015",
        "description": "Unload Incoming Trucks with new Merchandise"
    }]
};
work.display = function() {
    $.each(work.jobs, function(index, currentJob) {
        $("#workExperience").append( HTMLworkStart );
        currentEntry = $(".work-entry:last");
               var formattedWorkEmployer =
            HTMLworkEmployer.replace( data, currentJob.employer );
        var formattedWorkTitlte =
            HTMLworkTitle.replace( data, currentJob.title );
        var formattedWrkDates =
            HTMLworkDates.replace( data, currentJob.dates );
        var formattedWorkLocation =
            HTMLworkLocation.replace( data, currentJob.location );
        var formattedWorkDescription =
            HTMLworkDescription.replace( data, currentJob.description );

        $(currentEntry).append(
            formattedWorkEmployer,
            formattedWorkTitlte,
            formattedWrkDates,
            formattedWorkLocation,
            formattedWorkDescription
        );
    });
};
var education = {
    "schools": [{
        "name": "Santa Teresa High School",
        "location": "Santa Teresa Highschool ,San Jose, CA",
        "degree": "GED",
        "major": ["High School Diploma"],
        "dates": "2014",
        "url": "http://santateresa.esuhsd.org"
    }, {
        "name": "West Valley College",
        "location": "West Valley College, Saratoga, CA",
        "degree": "AA",
        "major": ["Web and Mobile Design"],
        "dates": "2015",
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
    $.each(education.schools , function(index, currentSchool) {
        $("#education").append(HTMLschoolStart);
        var currentEntry = $(".education-entry")[index];
        var formattedSchoolName =
            HTMLschoolName.replace(data, currentSchool.name);
        var formattedSchoolDegree =
            HTMLschoolDegree.replace(data, currentSchool.degree);
        var formattedSchoolDates =
            HTMLschoolDates.replace(data, currentSchool.dates);
        var formattedSchoolMajor =
            HTMLschoolMajor.replace(data, currentSchool.major);
        var fomattedSchoolLocation =
            HTMLschoolLocation.replace(data, currentSchool.location);

        $(currentEntry).append(formattedSchoolName + formattedSchoolDegree);
        $(currentEntry).append(fomattedSchoolLocation);
        $(currentEntry).append(formattedSchoolDates);
        $(currentEntry).append(formattedSchoolMajor);


    });
    $("#education").append(HTMLonlineClasses);
    $.each(education.onlineCourses, function(index, currentCourse) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle =
            HTMLonlineTitle.replace(data, currentCourse.title);
        var currentEntry =
            $(".education-entry")[education.schools.length + index];
        var formattedOnlineSchool =
            HTMLonlineSchool.replace(data, currentCourse.school);
        var formattedOnlineDates =
            HTMLonlineDates.replace(data, currentCourse.dates);
        var formattedOnlineUrl =
            HTMLonlineURL.replace(data, currentCourse.url);

        $(currentEntry).append(
            formattedOnlineTitle + formattedOnlineSchool,
            formattedOnlineDates,
            formattedOnlineUrl
        );
    });

};

var projects = {
    "projects": [{
        "title": "Intereactive Resume",
        "dates": "2015",
        "description": "Online Resume as Part of my Web Portfolio",
        "images": [
            "images/197x148.gif",
            "images/197x148.gif",
            "images/197x148.gif",
            "images/197x148.gif"
        ],
        "link": "index.html"
    }]
};
projects.display = function() {
    $.each(projects.projects, function(index, project) {
        $("#projects").append(HTMLprojectStart);
        currentEntry = $(".project-entry")[index];
        var formattedProjectTitle =
            HTMLprojectTitle.replace(data, project.title);
        var formattedProjectDates =
            HTMLprojectDates.replace(data, project.dates);
        var formattedProjectDescription =
            HTMLprojectDescription.replace(data, project.description);

        $(currentEntry).append(
            formattedProjectTitle,
            formattedProjectDates,
            formattedProjectDescription
        );

        $.each(project.images, function(index, value) {
            var formattedProjectImage =
                HTMLprojectImage.replace(data, value);
            $(currentEntry).append(formattedProjectImage);
        });
    });
}
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);