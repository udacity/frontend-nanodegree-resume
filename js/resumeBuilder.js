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

    }
};

var education = {
    "schools": [
        {
            "name": "ph",
            "location": "ph",
            "degree": "ph",
            "majors": "ph",
            "dates": "xxxx-xxxx",
            "url": "http://www.example.com"
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
                "images/fry.jpg",
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
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", project.image);
                    $(".project-entry:last").append(formattedProjectImage);
                });
                }
            });
        }
};

bio.display();
work.display();
projects.display();