// The work object definition
var work = {
    "jobs": [
        {
            "employer": "ABC Software",
            "title": "Software Engineer",
            "location": "Toronto, ON, Canada",
            "dates": "Sep 2010-current",
            "description": "Design and implementation of software projects to satisfy given requirements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum faucibus feugiat. Praesent malesuada a dolor ut iaculis. Proin sollicitudin, nisi eget fringilla feugiat, est tortor tincidunt orci, vel tristique orci neque at justo. Ut commodo feugiat augue at cursus. Pellentesque augue tellus, bibendum at convallis eget, molestie id enim. Cras tristique tortor id quam pulvinar vestibulum. Integer lectus justo, porttitor sit amet mollis eu, eleifend quis dui. Nam ut tellus luctus, vestibulum odio vel, sollicitudin mauris. Vestibulum tempus metus ac fringilla ornare. Nulla laoreet ante enim, non elementum sem bibendum id. Phasellus id interdum magna. Pellentesque at suscipit magna, et tincidunt urna. Aliquam faucibus semper augue, nec dapibus odio rhoncus vel. Sed semper diam mi, ac elementum lectus malesuada ut."
        },
        {
            "employer": "Mobile Payments Solution",
            "title": "Software Engineer",
            "location": "Calgary, AL, Canada",
            "dates": "Jan 2008 - Sep 2010",
            "description": "Design and development software projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum faucibus feugiat. Praesent malesuada a dolor ut iaculis. Proin sollicitudin, nisi eget fringilla feugiat, est tortor tincidunt orci, vel tristique orci neque at justo. Ut commodo feugiat augue at cursus. Pellentesque augue tellus, bibendum at convallis eget, molestie id enim. Cras tristique tortor id quam pulvinar vestibulum. Integer lectus justo, porttitor sit amet mollis eu, eleifend quis dui. Nam ut tellus luctus, vestibulum odio vel, sollicitudin mauris. Vestibulum tempus metus ac fringilla ornare. Nulla laoreet ante enim, non elementum sem bibendum id. Phasellus id interdum magna. Pellentesque at suscipit magna, et tincidunt urna. Aliquam faucibus semper augue, nec dapibus odio rhoncus vel. Sed semper diam mi, ac elementum lectus malesuada ut."
        },
        {
            "employer": "Healthcare Equipment Software",
            "title": "Software Engineer",
            "location": "Montreal, QC, Canada",
            "dates": "Jan 2005 - Aug 2008",
            "description": "Design and development highly-reliable software to be used in medical equipment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum faucibus feugiat. Praesent malesuada a dolor ut iaculis. Proin sollicitudin, nisi eget fringilla feugiat, est tortor tincidunt orci, vel tristique orci neque at justo. Ut commodo feugiat augue at cursus. Pellentesque augue tellus, bibendum at convallis eget, molestie id enim. Cras tristique tortor id quam pulvinar vestibulum. Integer lectus justo, porttitor sit amet mollis eu, eleifend quis dui. Nam ut tellus luctus, vestibulum odio vel, sollicitudin mauris. Vestibulum tempus metus ac fringilla ornare. Nulla laoreet ante enim, non elementum sem bibendum id. Phasellus id interdum magna. Pellentesque at suscipit magna, et tincidunt urna. Aliquam faucibus semper augue, nec dapibus odio rhoncus vel. Sed semper diam mi, ac elementum lectus malesuada ut."
        }
    ]
};

// Add display function to the work object
work.display = function displayWork(){
    var workExperience = $('#workExperience');
    work.jobs.forEach(function(job){
        workExperience.append(HTMLworkStart);
        var workEntryLast = $('.work-entry:last');
        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        workEntryLast.append(formattedEmployer + formattedTitle);
        workEntryLast.append(HTMLworkLocation.replace('%data%', job.location));
        workEntryLast.append(HTMLworkDates.replace('%data%', job.dates));
        workEntryLast.append(HTMLworkDescription.replace('%data%', job.description));
    });
};

// The projects object definition
var projects = {
    "projects": [
        {
            "title": "P1: Build a Portfolio Site",
            "dates": 2015,
            "description": "Portfolio website is built from mockup design",
            "images": ["images/p1-portfolio-sample-1-scaled.png",
                       "images/p1-portfolio-sample-2-scaled.jpg",
                       "images/p1-portfolio-sample-3-scaled.jpg"]
        },
        {
            "title": "P2: Online Resume",
            "dates": 2016,
            "description": "Implementing online resume using JavaScript and jQuery",
            "images": ["images/p2-portfolio-sample-1-scaled.jpg",
                       "images/p2-portfolio-sample-2-scaled.jpg",
                       "images/p2-portfolio-sample-3-scaled.jpg"]
        },
        {
            "title": "P3: ",
            "dates": 2016,
            "description": "Implementing online resume using JavaScript and jQuery",
            "images": ["images/p3-portfolio-sample-1-scaled.jpg",
                       "images/p3-portfolio-sample-2-scaled.jpg",
                       "images/p3-portfolio-sample-3-scaled.jpg",]
        }
    ]
};

// Add display function to the projects object
projects.display = function(){
    var projectsElm = $('#projects');
    projects.projects.forEach(function(project){
        projectsElm.append(HTMLprojectStart);
        var projectEntryLast = $('.project-entry:last');
        projectEntryLast.append(HTMLprojectTitle.replace('%data%', project.title));
        projectEntryLast.append(HTMLprojectDates.replace('%data%', project.dates));
        projectEntryLast.append(HTMLprojectDescription.replace('%data%', project.description));
        project.images.forEach(function(image){
            projectEntryLast.append(HTMLprojectImage.replace('%data%', image));
        });
    });
};

// The bio object definition
var bio = {
    "name": "Jane Doette",
    "role": "Web Developer",
    "welcomeMessage": "Hello World! Lorem ipsum dolor sit amet",
    "contacts": {
        "mobile": "+1 (289) 000-0000",
        "email": "jane.doette@gmail.com",
        "github": "janedoette",
        "twitter": "@janedoette",
        "blog": "janedoette.blogspot.ca",
        "location": "Toronto, ON, Canada"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Awesomeness", "Teleportation"],
    "bioPic": "images/fry.jpg"
};

// Add display function to the bio object
bio.display = function(){
    var header = $('#header');
    header.prepend(HTMLheaderRole.replace('%data%', 'Web Developer'));
    header.prepend(HTMLheaderName.replace('%data%', 'Jane Doette'));
    header.append(HTMLbioPic.replace('%data%', bio.bioPic));
    header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    // display top contacts
    var topContacts = $('#topContacts');
    topContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    topContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
    topContacts.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    topContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
    //topContacts.append(HTMLblog.replace('%data%', bio.contacts.blog));
    topContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));

    if(bio.skills.length > 0){
        header.append(HTMLskillsStart);
        var skills = $('#skills');
        bio.skills.forEach(function(skill){
            skills.append(HTMLskills.replace('%data%', skill));
        });
    }

    // display contacts in footer
    var footerContacts = $('#footerContacts');
    footerContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    footerContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
    footerContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
    footerContacts.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    footerContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));
};


// The education object definition
var education = {
    "schools": [
        {
            "name": "Ontario Technology University",
            "location": "Toronto, ON, Canada",
            "degree": "B.SC. in Computer Science",
            "majors": ["Computer Science"],
            "dates": "2001-2005",
            "url": "http://www.example.com/university-website"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/wiki/ud304-nd"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/wiki/ud804-nd"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/wiki/ud245-nd"
        }
    ]
};

// Add display function to the education object
education.display = function(){
    var educationElm = $('#education');
    education.schools.forEach(function(school){
        educationElm.append(HTMLschoolStart);
        var educationEntryLast = $('.education-entry:last');
        var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
        var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
        educationEntryLast.append(formattedSchoolName + formattedDegree);
        educationEntryLast.append(HTMLschoolLocation.replace('%data%', school.location));
        educationEntryLast.append(HTMLschoolDates.replace('%data%', school.dates));
        school.majors.forEach(function(major){
            educationEntryLast.append(HTMLschoolMajor.replace('%data%', major));
        });
    });

    educationElm.append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse){
        educationElm.append(HTMLschoolStart);
        var educationEntryLast = $('.education-entry:last');
        var formattedTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
        educationEntryLast.append(formattedTitle + formattedSchool);
        educationEntryLast.append(HTMLonlineDates.replace('%data%', onlineCourse.dates));
        educationEntryLast.append(HTMLonlineURL.replace('%data%', onlineCourse.url));
    });
}

// Call objects display functions and add Google map
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);


// The code below add the internationalize button and inName function
//$('#main').append(internationalizeButton);
//function inName(name){
//    if(typeof name != 'undefined'){
//        var nameArray = name.trim().split(" ");
//    } else {
//        var nameArray = $('#name').text().trim().split(" ");
//    }
//
//    var first = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
//    var last = nameArray[1].toUpperCase();
//    var retValue = first + ' ' + last;
//    if(typeof name == 'undefined'){
//        $('#name').text(first + ' ' + last);
//    }
//    return retValue;
//}

