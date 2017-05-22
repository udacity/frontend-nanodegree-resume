var bio = {
    "name": "Damian Galeano",
    "role": "Web Developer",
    "contacts": {
        "mobile": "300-363-8990",
        "email": "dj.damian.b@hotmail.com",
        "github": "DamianGaleano9",
        "twitter": "@Damian9",
        "location": "Medellin"
    },
    "welcomeMessage": "Welcome to my bio",
    "skills": [
        "HTML", "CSS", "DJ", "PROGRAMER"
    ],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "Programer",
            "title": "Database Developer",
            "location": "Medellin",
            "dates": 2011,
            "description": "Beginning with programming in about 2015, I based my learning on courses offered online thanks to this my skills grow every day"
        },
        {
            "employer": "DJ",
            "title": "Produccer",
            "location": "Medellin",
            "dates": 2005,
            "description": "This job changed my life and I opened many doors to meet people places feel the music"
        }
    ]
}

var project= {
    "projects": [
        {
            "title": "Her and Blossom",
            "dates": "November 2015",
            "description": "Composed music for two short films by Li Xiaofeng. Both were featured in a high-profile online event hosted by Sina",
            "images": "images/fry.jpg"
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "University of Medellin",
            "location": "Antioquia",
            "degree": "Engeneer",
            "major": "civil sengineering",
            "dates": "2007 - 2015",
            "url": "http://www.udem.edu.co/"
        },
    ],

    "onlineClasses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/"
        },
        {
            "title": "github courses",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/"
        }
    ]
}

 if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}
function displayWork() {
        for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formatedDescription);
    }
}
displayWork();  

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].image.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects.image[image]);
                $(".project-entry:last").append(formattedImage);
            }
        } 
    }
}



var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

 var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

 var skills = bio.skills;
 var formattedSkills = HTMLskills.replace("%data%", skills);
 $("#header").append(HTMLskillsStart);
 $("#skills").append(formattedSkills);
