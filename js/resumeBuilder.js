//Variable declarations
// Global Variable
var data = "%data%";

//Bio
var bio = {

    name: "Elvis Hedji",
    role: "Web developer" + "<br /> ",
    biopic: src = "images/ehedji.jpg",
    welcomeMessage: 'Hello and welcome to my active online resume, here you can find my work experience, projects and contact details.',

    contacts: {
        email: ' ehedji@gmail.com',
        twitter: '@toucheism',
        mobile: '(202) 302 - 7107',
        github: 'toucheism',
        location: 'Washington D.C'
    },

    skills: ['HTML', 'CSS', 'Javascript', 'MS Office', 'CS6', "Sales"]
};

//Work
var work = {
    "jobs": [

        {
            "employer": "Humanity Helping Sudan Project",
            "title": "Operations Manager",
            "location": "Washington, D.C",
            "dates": "2016 - Present",
            "description": "Raising awareness of the world refugee crisis."
        },
        {
            "employer": "Play Footy Inc",
            "title": "CFO & and Co-founder",
            "location": "Washington, D.C",
            "dates": "2012 - Present",
            "description": "Play Footy Inc. dba \'Jouons\', has a mission of using soccer as a means to developing life skills, and breaking economic barriers that often separate the youth."
        },
        {
            "employer": "Branch Banking and Trust Company",
            "title": "Teller",
            "location": "Washington, D.C",
            "dates": "2011 - 2012",
            "description": "BB&T is a leading conservative financial institution headquratered in North Carolina, with branches all along the East coast and southwest."
        }
    ]
};

//Education
var education = {
    "schools": [{
            "name": "<a href='http://umd.edu' target='_blank'>University of Maryland</a>",
            "degree": "Masters",
            "location": "College Park, MD",
            "majors": [" Technology Entrepreneurship"],
            "dates": "Class of 2018",
            "url": "<a href='http://umd.edu' target='_blank'>umd.edu</a>"
        },
        {
            "name": "<a href='http://dewv.edu' target='_blank'>Davis & Elkins College</a>",
            "degree": "BS",
            "location": "Elkins, WV",
            "majors": ["Marketing"],
            "dates": "Class of 2011",
            "url": "<a href='http://dewv.edu' target='_blank'>dewv.edu</a>"

        }
    ],

    "onlineCourses": [

        {
            "title": "Front-end Web Developer",
            "city": "Washington, D.C",
            "school": "Udacity",
            "dates": "2017",
            "url": "<a href='http://Udacity.com' target='_blank'>Udacity.com</a>"
        }
    ]

};


//Projects
var projects = {
    "projects": [{
            "title": "<a href='http://toucheism.github.io/edd/' target='_blank'>Eat Drink Dance</a>",
            "dates": "December 2015",
            "description": "Washington DC social outing generator",
            "images": ["http://placehold.it/150x150", "http://placehold.it/100x100", "http://placehold.it/150x150"]
            //images/waffles.jpg
        },
        {
            "title": "<a href='http://toucheism.github.io/trumpmachine/' target='_blank'>Trump Dumpster</a>",
            "dates": "May 2016",
            "description": "Trump ignorant quote generator",
            "images": ["images/trump.jpg"]
        },
        {
            "title": "<a href='http://codepen.io/Ehedji/pen/oLLgLR' target='_blank'>Calculator</a>",
            "dates": "June 2016",
            "description": "Simple calculator",
            "images": ["images/calculator.png"]
        }
    ]
};


//Bio

bio.display = function(item){

    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);

    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedName, formattedRole);
    $("#topContacts, #footerContacts").append(formattedEmail, formattedMobile, formattedgithub,formattedTwitter, formattedLocation);
    $("#header").append(formattedWelcomeMessage, formattedBiopic, HTMLskillsStart);



    bio.skills.forEach(function(item) {

        var formattedSkill = HTMLskills.replace(data, item);
        $("#skills").append(formattedSkill);
    });};





bio.display();

// Skills
// bio.skills.display = function() {
//     $("#header").append(HTMLskillsStart);
//     bio.skills.forEach(function(item) {

//         var formattedSkill = HTMLskills.replace(data, item);
//         $("#skills").append(formattedSkill);
//     });
// }

// bio.skills.display();

//Work
work.display = function() {
    work.jobs.forEach(function(item) {
        //alert(item.employer);
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, item.employer);
        var formattedTitle = HTMLworkTitle.replace(data, item.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace(data, item.location);
        var formattedDates = HTMLworkDates.replace(data, item.dates);
        var formattedDescription = HTMLworkDescription.replace(data, item.description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();

//Projects
projects.display =function() {


    projects.projects.forEach(function(item) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, item.title);
        var formattedDates = HTMLprojectDates.replace(data, item.dates);
        var formattedDescription = HTMLprojectDescription.replace(data, item.description);
        var formattedImage = HTMLprojectImage.replace(data, item.images);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        for(var i =0; formattedImage.length>3; i++){
            // console.log(formattedImage)
            $(".project-entry:last").append(formattedImage);
            formattedImage = 3;
         }

    });
};

projects.display();


//Education
education.display = function() {

    education.schools.forEach(function(item) {

        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace(data, item.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, item.degree);
        var formattedSchoolDates = HTMLschoolLocation.replace(data, item.dates);
        var formattedSchoolLocation = HTMLschoolDates.replace(data, item.location);
        var formattedSchoolMajors = HTMLschoolMajor.replace(data, item.majors);
        var formattedSchoolUrl = HTMLschoolURL.replace(data, item.url);


        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajors);
        $(".education-entry:last").append(formattedSchoolUrl);


    }),
    education.onlineCourses.forEach(function(item) {
        //online courses
        var formattedonlineTitle = HTMLonlineTitle.replace(data, item.title);
        var formattedonlineSchool = HTMLonlineSchool.replace(data, item.school);
        var formattedonlineDates = HTMLonlineDates.replace(data, item.dates);
        var formattedonlineURL = HTMLonlineURL.replace(data, item.url);

        $(".education-entry:last").append(HTMLonlineClasses);
        $(".education-entry:last").append(formattedonlineTitle);
        $(".education-entry:last").append(formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);

});
};
education.display();


//Map
$("#mapDiv").append(googleMap);
initializeMap();
