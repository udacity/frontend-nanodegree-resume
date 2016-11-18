/*
This is empty on purpose! Your code to build the resume will go here.
 */

// skills, jobs, projects, project images, schools and onlineCourses arrays

var bio = {};

bio.name = "Carol Cabral";
bio.role = "Web Developer";
bio.contacts = {
    mobile: "+55 83 999083780",
    email: "carolzinhacabral@gmail.com",
    github: "carolinass",
    twitter: "carolinas_",
    location: "Toronto, ON"
};
bio.welcomeMessage = "Yo, dude!"
bio.skills = ["Delivering things", "Seriously funny", "Hard working"];
bio.biopic = "images/carol.jpg";
bio.display = function() {

    HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#topContacts").append(HTMLmobile);
    $("#topContacts").append(HTMLemail);
    $("#topContacts").append(HTMLgithub);
    $("#topContacts").append(HTMLtwitter);
    $("#topContacts").append(HTMLlocation);

    $("#header").prepend(HTMLheaderRole);
    $("#header").prepend(HTMLheaderName);
    $("#header").append(HTMLbioPic);
    $("#header").append(HTMLwelcomeMsg);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(item) {
        $("#header").append(HTMLskills.replace("%data%", item));
    });
};

work = {
    jobs: [{
        employer: "Virtus / Valid",
        title: "Mid-Level Web Developer",
        location: "Campina Grande, PB",
        dates: "Sep/2015 - current",
        description: "Web development using Java, MongoDB, AngularJS, HTML, CSS, SASS and Gulp."
    }, {
        employer: "Analytics Lab / HP",
        title: "Junior Data Analyst",
        location: "Campina Grande, PB",
        dates: "Jan/2015 - Sep/2015",
        description: "IT solutions for urban mobility; Project financed by Hewlett Packard Brasil."
    }],
    display: function() {
        work.jobs.forEach(function(item) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", item.employer) + HTMLworkTitle.replace("%data%", item.title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", item.dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", item.location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", item.description));
        });
    }
};

projects = {
    projects: [{
        title: "Gift Cheaters",
        dates: "2015",
        description: "GiftCheaters is an Android app that uses Facebook data to recommend gifts to friends based on their likes in different categories, such as Books, Films and Music. Selected as Startup project for Campus Party Recife 4.",
        images: ["images/giftcheaters.jpg"]
    }, {
        title: "PP Quando?",
        dates: "2015",
        description: "'PPQuando?'' is a project created in less than 48 hours for the III Hackfest Analytics competition that examines the styles of the participating bands of the São João of Campina Grande, in order to inform citizens and tourists which music style is prevalent in each day of the festival.",
        images: ["images/ppquando.jpg"]
    }],
    display: function() {
        projects.projects.forEach(function(item) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", item.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", item.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", item.description));
            item.images.forEach(function(image) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
            });
        });
    }
};

education = {
    schools: [
        {
            name: "Universidade Federal de Campina Grande",
            location: "Campina Grande, PB",
            degree: "Bachelor of Science",
            majors: ["Computer Science"],
            dates: "2010 - 2015",
            url: "http://ufcg.edu.br"
        }
    ],
    onlineClasses: [
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "2016 - 2017",
            url: "http://udacity.com"
        }
    ],
    display: function() {
        education.schools.forEach(function(item) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append((HTMLschoolName.replace("%data%", item.name) + HTMLschoolDegree.replace("%data%", item.degree)).replace("#", item.url));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", item.dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", item.location));
            item.majors.forEach(function(major) {
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
            });
        });
        $("#education").append(HTMLonlineClasses);
        education.onlineClasses.forEach(function(item) {
            $("#education").append(HTMLschoolStart);
            $('.education-entry:last').append((HTMLonlineTitle.replace("%data%", item.title) + HTMLonlineSchool.replace("%data%", item.school)).replace("#", item.url));
            $('.education-entry:last').append(HTMLonlineDates.replace("%data%", item.dates));
            $('.education-entry:last').append(HTMLonlineURL.replace("%data%", item.url).replace("#", item.url));
        });
    }
};

var addMap = function() {
    $("#mapDiv").append(googleMap);
};

var addFooter = function() {
    $("#footerContacts").append(HTMLmobile);
    $("#footerContacts").append(HTMLemail);
    $("#footerContacts").append(HTMLgithub);
    $("#footerContacts").append(HTMLtwitter);
    $("#footerContacts").append(HTMLlocation);
};

bio.display();
work.display();
projects.display();
education.display();
addMap();
addFooter();