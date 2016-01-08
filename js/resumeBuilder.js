/** =======================================     Bio    ======================================= **/
var bio = {
    "name": "JAIR MANOSALVA",
    "role": "web Developer",
    "contacts": {
        "mobile": "3008288485",
        "email": "yayomanosalva@gmail.com",
        "github": "yayomanosalva",
        "twitter": "@yayomanosalvaah",
        "location": "Barranquilla"
    },
    "welcomeMsg": "Welcome to my resume, find out who I am and what my skills",
    "biopic": "images/yayo.jpg",
    "skills": ["Javascript", "HTML", "CSS", "self learning", "Stress control", "Awesome"]
};
bio.display = function () {
    'use strict';
    var formattedName;
    formattedName = HTMLheaderName.replace("%data%", "Jair Manosalva");
    var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    /** ===================     Contacts    =================== **/
    var mobile = HTMLmobile.replace("%data%", "3008288485");
    $('#header #topContacts').append(mobile);
    $('#footerContacts').append(mobile);
    var email = HTMLemail.replace("%data%", "yayomanosalva@gmail.com");
    $('#header #topContacts').append(email);
    $('#footerContacts').append(email);
    var twitter = HTMLtwitter.replace("%data%", "@yayomanosalvaah");
    $('#header #topContacts').append(twitter);
    $('#footerContacts').append(twitter);
    var github = HTMLgithub.replace("%data%", "yayomanosalva");
    $('#header #topContacts').append(github);
    $('#footerContacts').append(github);
    var blog = HTMLblog.replace("%data%", "jairmanosalva.tk");
    $('#header #topContacts').append(blog);
    var location = HTMLlocation.replace("%data%", "Barranquilla");
    $('#header #topContacts').append(location);
    $('#footerContacts').append(blog);
    var biopic = HTMLbioPic.replace("%data%", "images/yayo.jpg");
    $('#header').append(biopic);
    var welcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome to my resume, find out who I am and what my skills");
    $('#header').append(welcomeMsg);
    /** ===================     skills    =================== **/
    var skills = HTMLskills;
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $('#skills').append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $('#skills').append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $('#skills').append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $('#skills').append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $('#skills').append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $('#skills').append(formattedSkill);
    }
};
bio.display();
/** =======================================     work 1   ======================================= **/
var work = {
    "jobs": [{
        "employer": "Red5g",
        "title": "web design",
        "dates": "August 2015 - today",
        "location": "Barranquilla",
        "description": "Web design and development with php"
    }, {
        "employer": "MR GOMA TIRES",
        "title": "Web Developer",
        "dates": "January 2014 - April 2014",
        "location": "Barranquilla",
        "description": "Web design and development with ASP.NET and C # technology. Update and implementation of the mrgomatires.com page, CSS3 design, liaison with complementary pages, sliders, modal, with bootstraps frameworks 3 and accessories in jquery and JavaScript. January 2014"
    }]
};
work.display = function () {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $('.work-entry:last').append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $('.work-entry:last').append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $('.work-entry:last').append(formattedDescription);
    }
    $('#workExperience').append(work.employer);
};
work.display();
/** =======================================     projectStart    ======================================= **/
var projects = {
    "projects": [{
        "title": "web design FINSOCIAL",
        "dates": "2015",
        "description": "Web design and development with PHP HTML5 CSS3 JavaScript",
        "images": ["images/finsocial.png", "images/finsocial.png"]
    }, {
        "title": "web design mrgomatires",
        "dates": "2014",
        "description": "Web design and development with ASP c# & Backbone.js",
        "images": ["images/mrgomatires.png", "images/mrgomatires.png"]
    }]
};
//display code here
projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (image in projects.projects[project].images) {
            var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImages);
        }
    }
};
projects.display();
/** =======================================     education    ======================================= **/   
var education = {
    "schools": [{
        "name": "Universidad Simon Bolivar",
        "degree": "Systems Engineer",
        "dates": "2009",
        "location": "Barranquilla",
        "majors": ["Engineer"]      
    }, {
        "name": "Colegio christophoro colombo",
        "degree": "bechiller",
        "dates": "1997",
        "location": "Barranquilla",
        "majors": ["Bachiller"]
    }],
    "onlineCourses": [{
        "title": "Front-End Developer Nanodgree",
        "school": "Udacity",
        "dates": 2015,
        "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1950678559/m-1936858588"
    }]
};
education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,formattedSchoolDates, formattedSchoolLocation);
        for (major in education.schools[school].majors) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("#",education.onlineCourses[course].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url).replace("#",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineUrl);
    }
};
education.display();
/** =======================================     google Map    ======================================= **/
/** =======================================     Internationalize Names Solution    ======================================= **/
function inName(name) {
    'use strict';
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
//var izeButton = internationalizeButton;
$('#mapDiv').append(internationalizeButton);
//var Map = googleMap;
$('#mapDiv').append(googleMap);
//$('#main').append(internationalizeButton);
/** =======================================     funcion para un quiz    ======================================= **/
function locationizer(work_obj) {
    'use strict';
    var locationArray = [];
    locationArray.forEach(function (work_obj) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
        console.log(work_obj);
    });
    return locationArray;
}
console.log(locationizer(work));
console.log(internationalizeButton);
/** =======================================     ejercicio    ======================================= /
    var jair = {}
    jair.job = " desarrollo";
    var makeCourse = function(){
        //make a course
        console.log(" haz un curso");
    }
    var course = 0;
    while (jair.job === " desarrollo"){
        makeCourse();
        course = course + 1;
        if (course === 10) {
            jair.job = "eres especialista";
        };
    }
    console.log(jair.job);
/** =======================================     ejercicio    ======================================= **/
