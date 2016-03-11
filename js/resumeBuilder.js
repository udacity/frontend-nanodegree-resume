
var bio = {
    "name": "Dru Martin",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "martin.dru6683@gmail.com",
        "github": "benjaminmartin05",
        "twitter": "@drumartin1",
        "location": "Nashville, TN"
    },
    "pic_url": "C:/Users/CarolinaBlue/Desktop/udacity/p.2/frontend-nanodegree-resume/images/editedMe.jpg",
    "welcomeMessage": "Developing skills for Advancement",
    "skills": ["Web Developing", "Sales", "Marketing", "Employee Training", "Management"]
}


var work = {
    "jobs": [{
        "employer": "Liggett Vector Brands",
        "title": "National Training Manager",
        "location": "Nashville, TN",
        "dates": "03.01.15-present",
        "description": "Develop new hires with sales and marketing skills to be successful in retail environments"
    }, {
        "employer": "Liggett Vector Brands",
        "title": "Retail Account Manager",
        "location": "Bowling Green, KY",
        "dates": "02.01.12-02.28.15",
        "description": "Sales and marketing in retail and wholesale environment"
    }, {
        "employer": "Golf Club of Georgia",
        "title": "Assistant Superintendent",
        "location": "Alpharetta, GA",
        "dates": "01.15.08-12.31.08",
        "description": "Management of 24 person crew over daily maintenance of 36 hole facility"
    }]
}

var education = {
    "schools": [{
        "name": "Campbell University",
        "location": "Buis Creek, NC",
        "major": "Pro Golf Mngmt",
        "dates": "08.15.01-01.01.02",
        "url": "http://www.campbell.edu/"
    }, {
        "name": "Western Kentucky University",
        "location": "Bowling Green, KY",
        "major": "Turf Mngmt",
        "dates": "01.02.01-12.07.05",
        "url": "https://www.wku.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "01.23.16-present",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Hack Reactor Remote Prep",
        "school": "Hack Reactor",
        "dates": "09.01.15-10.01.15",
        "url": "http://www.hackreactor.com/blog/hack-reactor-remote-prep-the-4-week-coding-course-for-novices"
    }]
}

var projects = {
    "project": [{
        "title": "Portfolio Page",
        "dates": "Feb 2016",
        "description": "Create a personal porfolio home page for myself",
        "images": "C:/Users/CarolinaBlue/Desktop/udacity/p.2/frontend-nanodegree-resume/images/portfolio.jpg"
    }, {
        "title": "Choose a Charity",
        "dates": "Sept 2015",
        "description": "Create a portfolio page highlighting multiple charities",
        "images": "C:/Users/CarolinaBlue/Desktop/udacity/p.2/frontend-nanodegree-resume/images/charity.jpg"
    }]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedpic = HTMLbioPic.replace("%data%", bio.pic_url);
$("#header").append(formattedpic);

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedemail);

var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedtwitter);

var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedgithub);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);




if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
};

function displayWork() {
    for (i in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

        var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedLocation, formattedDates, formattedDescription);
    }
};

displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});



function inName(string) {
    string = string.trim().split(" ");
    console.log(string);
    string[1] = string[1].toUpperCase();

    return string[0] + " " + string[1];
};

$("#main").append(internationalizeButton);

function displayProjects() {
    for (i in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
        $(".project-entry:last").append(formattedTitle);


        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images);
        $(".project-entry:last").append(formattedDates, formattedDescription, formattedImage);
    }
};

displayProjects();

function displaySchools() {
    for (i in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(formattedName, formattedLocation, formattedDates, formattedMajor);
    }
};

function displayOnlineSchools() {
    for (i in education.onlineCourses) {
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedonlineDates = HTMLschoolDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedonlineSchool, formattedonlineTitle, formattedonlineDates, formattedonlineURL);
    }
};

displaySchools();
$(".education-entry:last").append(HTMLonlineClasses);
displayOnlineSchools();

$("#mapDiv").append(googleMap);