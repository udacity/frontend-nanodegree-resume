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
    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
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
            "datesWorked": 2011,
            "description": "text"
        },
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

/* var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage); */

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);
