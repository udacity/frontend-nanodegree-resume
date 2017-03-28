/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "contacts": {
        "mobile": "917-555-5555",
        "email": "johndoe@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "New York"
    },
    "welcomeMessage": "Welcome to my online resume.",
    "skills": [
        "HTML", "CSS", "Javascript", "jQuery"
    ],
    "biopic": "images/fry.jpg",
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
               $("#header").append(formattedSkills);
            });
        }
    }
};

var education = {
    "schools": [
        {
            "name": "test",
            "location": "test1",
            "degree": "2",
            "majors": "3",
            "dates": "xxxx-xxxx"
        }
    ],
    "onlineCourses": [
        {
            "title": "ph",
            "school": "ph",
            "dates": "xxxx-xxxx",
            "url": "http://www.example.com"
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
            "employer": "placeholder",
            "title": "placeholder",
            "location": "placeholder",
            "dates": "xxxx-xxxx",
            "description": "placeholder"
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
            "title": "Sample Project 1",
            "dates": "xxxx-xxxx",
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

bio.display();
education.display();
work.display();
projects.display();