/*
This is empty on purpose! Your code to build the resume will go here.
 */

// skills, jobs, projects, project images, schools and onlineCourses arrays

var bio = {};

bio.name = "Carol Cabral";
bio.role = "Web Developer";
bio.contact = {
    mobile : "+55 83 999083780",
    email : "carolzinhacabral@gmail.com",
    github : "carolinass",
    twitter : "carolinas_",
    location : "Toronto, ON"
};
bio.pic = "images/carol.jpg";
bio.welcomeMsg = "Yo, dude!"
bio.skills = [ "Delivering things", "Seriously funny", "Hard working" ];
bio.workExp = [
    {
        employer : "Virtus / Valid",
        title : "Mid-Level Web Developer",
        workDates : "Sep/2015 - current",
        location : "Campina Grande, PB",
        desc : "Web development using Java, MongoDB, AngularJS, HTML, CSS, SASS and Gulp."
    },
    {
        employer : "Analytics Lab / HP",
        title : "Junior Data Analyst",
        workDates : "Jan/2015 - Sep/2015",
        location : "Campina Grande, PB",
        desc : "IT solutions for urban mobility; Project financed by Hewlett Packard Brasil."
    }
];
bio.projects = [
    {
        title : "Gift Cheaters",
        dates : "2015",
        desc : "GiftCheaters is an Android app that uses Facebook data to recommend gifts to friends based on their likes in different categories, such as Books, Films and Music. Selected as Startup project for Campus Party Recife 4.",
        img : "images/giftcheaters.jpg"
    },
    {
        title : "PP Quando?",
        dates : "2015",
        desc : "'PPQuando?'' is a project created in less than 48 hours for the III Hackfest Analytics competition that examines the styles of the participating bands of the São João of Campina Grande, in order to inform citizens and tourists which music style is prevalent in each day of the festival.",
        img : "images/ppquando.jpg"
    }
];
bio.education = [
    {
        name : "Universidade Federal de Campina Grande",
        degree : "Bachelor of Science",
        dates : "2015",
        location : "Campina Grande, PB",
        major : "Computer Science"
    }
];
bio.onlineClasses = [
    {
        title : "Front-End Web Developer Nanodegree",
        school : "Udacity",
        dates : "2016",
        url : "http://udacity.com"
    }
];

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
HTMLmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
HTMLemail = HTMLemail.replace("%data%", bio.contact.email);
HTMLgithub = HTMLgithub.replace("%data%", bio.contact.github);
HTMLtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
HTMLlocation = HTMLlocation.replace("%data%", bio.contact.location);
HTMLbioPic = HTMLbioPic.replace("%data%", bio.pic);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#topContacts").append(HTMLmobile);
$("#topContacts").append(HTMLemail);
$("#topContacts").append(HTMLgithub);
$("#topContacts").append(HTMLtwitter);
$("#topContacts").append(HTMLlocation);

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);

$("#header").append(HTMLbioPic);
$("#header").append(HTMLwelcomeMsg);

var addSkills = function () {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach( function( item ) {
        $("#header").append(HTMLskills.replace("%data%", item));
    });
};

addSkills();

var addWorkExp = function () {
    bio.workExp.forEach( function (item) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", item.employer));
        $(".work-entry:last").append(HTMLworkTitle.replace("%data%", item.title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", item.workDates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", item.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", item.desc));
    } );
};

addWorkExp();

var addProjects = function () {
    bio.projects.forEach( function (item) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append( HTMLprojectTitle.replace("%data%", item.title) );
        $(".project-entry:last").append( HTMLprojectDates.replace("%data%", item.dates) );
        $(".project-entry:last").append( HTMLprojectDescription.replace("%data%", item.desc) );
        $(".project-entry:last").append( HTMLprojectImage.replace("%data%", item.img) );
    } );
};

addProjects();

var addOnlineClasses = function () {
    $("#education").append(HTMLonlineClasses);
    bio.onlineClasses.forEach( function (item) {
        $("#education").append(HTMLschoolStart);
        $('.education-entry:last').append( HTMLonlineTitle.replace("%data%", item.title) );
        $('.education-entry:last').append( HTMLonlineSchool.replace("%data%", item.school) );
        $('.education-entry:last').append( HTMLonlineDates.replace("%data%", item.dates) );
        $('.education-entry:last').append( HTMLonlineURL.replace("%data%", item.url) );
    } );
};

var addEducation = function () {
    bio.education.forEach( function (item) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append( HTMLschoolName.replace("%data%", item.name) );
        $(".education-entry:last").append( HTMLschoolDegree.replace("%data%", item.degree) );
        $(".education-entry:last").append( HTMLschoolDates.replace("%data%", item.dates) );
        $(".education-entry:last").append( HTMLschoolLocation.replace("%data%", item.location) );
        $(".education-entry:last").append( HTMLschoolMajor.replace("%data%", item.major) );
    } );
    addOnlineClasses();
};

addEducation();

$("#mapDiv").append(googleMap);

