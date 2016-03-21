/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace('%data%', 'Jane Doette');
var formattedRole = HTMLheaderRole.replace('%data%', 'Web Developer');

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var work = {
    "jobs": [
        {
            "employer": "ABC Software",
            "title": "Software Engineer",
            "location": "Toronto, ON, Canada",
            "dates": "Sep 2010-current",
            "description": "Design and implementing projects from a given requirements"
        },
        {
            "employer": "Super Secure Software",
            "title": "Software Engineer",
            "location": "Calgary, AL, Canada",
            "dates": "Jan 2008 - Sep 2010",
            "description": "Design and implementing part of a big computer security project"
        },
        {
            "employer": "Medical Software Company",
            "title": "Software Engineer",
            "location": "Budapest, Hungary",
            "dates": "Jan 2005 - Aug 2008",
            "description": "Design and implementing projects in medical equipment area"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "P1: Build a Portfolio Site",
            "dates": 2015,
            "description": "Portfolio website is built from mockup design",
            "images": ["http://www.featurepics.com/FI/Thumb300/20110504/Electronic-Circuit-Plate-1867067.jpg"]
        },
        {
            "title": "P2: Online Resume",
            "dates": 2016,
            "description": "Implementing online resume using JavaScript and jQuery",
            "images": ["http://www.asiasl.com/en/images/sf26.jpg"]
        }
    ]
};

projects.display = function(){
    projects.projects.forEach(function(project){
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        $('.project-entry:last').append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        $('.project-entry:last').append(formattedDates);

        var formattedDesc = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedDesc);

        project.images.forEach(function(image){
            var formattedImage = HTMLprojectImage.replace('%data%', image);
            $('.project-entry:last').append(formattedImage);
        });
    });
}

var bio = {
    "name": "Jane Doette",
    "role": "Web Developer",
    "welcomeMessage": "Hello World!",
    "contacts": {
        "mobile": "+1 (289) 000-0000",
        "email": "jane.doette@gmail.com",
        "github": "janedoette",
        "twitter": "@janedoette",
        "location": "Toronto, ON, Canada"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Awesomeness", "Teleportation"],
    "biobPic": "http://example.com/jane-doette/biopic.jpeg"
};

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

if(bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; ++i){
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkill);
    }
}

function displayWork(){
    work.jobs.forEach(function(job){
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        $('.work-entry:last').append(formattedEmployer + formattedTitle);
        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        $('.work-entry:last').append(formattedLocation);
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        $('.work-entry:last').append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(formattedDescription);
    });
}

displayWork();
projects.display();

$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});

$('#main').append(internationalizeButton);

function inName(name){
    if(typeof name != 'undefined'){
        var nameArray = name.trim().split(" ");
    } else {
        var nameArray = $('#name').text().trim().split(" ");
    }

    var first = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    var last = nameArray[1].toUpperCase();
    var retValue = first + ' ' + last;
    if(typeof name == 'undefined'){
        $('#name').text(first + ' ' + last);
    }
    return retValue;
}

