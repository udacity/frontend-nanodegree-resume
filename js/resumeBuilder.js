var bio = {
    "name": "Tim Mulqueen",
    "role": "Front End Developer",
    "pic_url": "images/fry.jpg",
    "welcome_msg": "I am a self-taught Web developer who is adicted to making websites look good and loves coding!",
    "contacts": {
        "email": "tim.mulqueen@gmail.com",
        "github": "https://github.com/Multimo",
        "location": "Montreal, CA"
    },
    "skills": ["HTML and CSS", "Javascript and JQuery", "Python", "Angular and React", "Wordpress"]
};

var work = {
    "jobs": [{
        "employer": "Te Kura (The Correspondence School)",
        "title": "Enrolment Officer",
        "dates": "November 2013 - April 2014",
        "location": "Wellington, New Zealand",
        "description": "Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tatahi ke",
    }, {
        "employer": "Whistler Blackcomb",
        "title": "Lead Hand Lift Operator",
        "dates": "June 2012 - April 2013",
        "location": "Whistler, Brittish Columbia, Canada",
        "description": "Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tatahi ke",
    } ],
};

work.displayWork = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formatted_wrkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
        var formatted_wrkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
        var formatted_wrkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formatted_wrkLocation + formatted_wrkDates + formatted_wrkDescription;
        $(".work-entry:last").append(formattedEmployerTitle);
    }
};



var education = {
    "schools": [{
        "name": "Victoria University",
        "degree": "Bachaelor of Arts",
        "dates": "2009 - 2012",
        "location": "Wellington, New Zealand",
        "major": ["Cultural Anthropology"],
        "url": "www.victoria.ac.nz"
    }],
    "onlineCourses": [{
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": "March - 2015",
        "url": "https://www.udacity.com/course/ud804",
    }, {

        "title": "How to use Git and GitHub",
        "school": "Udacity",
        "dates": "March - 2015",
        "url": "https://www.udacity.com/course/ud775"
    }, 
    {
        "title": "Object Oriented Javascript",
        "school": "Udacity",
        "dates": "March - 2015",
        "url": "https://www.udacity.com/course/ud015",
    },
     {
        "title": "Programming Foundations with Python",
        "school": "Udacity",
        "dates": "March - 2015",
        "url": "https://www.udacity.com/course/ud036",
    },
     {
        "title": "Intro to JQuery",
        "school": "Udacity",
        "dates": "March - 2015",
        "url": "https://www.udacity.com/course/ud245",
    },
    {
        "title": "Shaping up with Angular.js",
        "school": "Codeschool",
        "dates": "March - 2015",
        "url": "https://www.codeschool.com/paths/javascript",
    },
    {
        "title": "Try JQuery",
        "school": "Codeschool",
        "dates": "March - 2015",
        "url": "https://www.codeschool.com/paths/javascript",
    },
    {
        "title": "Intro to Html and CSS",
        "school": "Udacity",
        "dates": "March - 2015",
        "url": "https://www.udacity.com/course/ud304",
    },
    {
        "title": "HTML5 Canvas",
        "school": "Udacity",
        "dates": "March - 2015",
        "url": "https://www.udacity.com/course/ud292",
    },]
   
};
 education.displayedu= function() {
        for (place in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formatted_schName = HTMLschoolName.replace("%data%", education.schools[place].name);
            var formatted_schjDegree = HTMLschoolDegree.replace("%data%", education.schools[place].degree);
            var formatted_schjMajor = HTMLschoolMajor.replace("%data%", education.schools[place].major[0]);
            var formatted_schjDates = HTMLschoolDates.replace("%data%", education.schools[place].dates);
            var formatted_schjCity = HTMLschoolLocation.replace("%data%", education.schools[place].location);
            var formattedschool = formatted_schjMajor + formatted_schName + formatted_schjDegree + formatted_schjCity + formatted_schjDates;
            $(".education-entry:last").append(formattedschool);
        }
};
education.displayonline = function(){
    for (index in education.onlineCourses){
     $("#online-course").append(HTMLonlineClasses);   

        var formatted_onTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
        var formatted_onSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
        var formatted_onUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
        var formatted_online = formatted_onUrl + formatted_onTitle + formatted_onSchool +  HTMLline;
        $(".online-entry:last").append(formatted_online);
    }
};

var project = {
    "projects": [{
        "title": "Portfolio WebSite",
        "dates": "2015",
        "desciption": "A hand-coded and designed Portfolio website to showcase my projects. Website is designed to with a mobile first approach for viewing on all platforms",
        "images": "images/profile.jpg",
    }, {
        "title": "Resume",
        "dates": "2014",
        "desciption": "My version of the final project for Udacity's Intro to Javascript course. The entire website is populated by JSON and JQuery ",
        "images": "images/resumeproject.jpg",
    }, ]
    
};
project.display = function() {
        for (prjo in project.projects) {
            $("#projects").append(HTMLprojectStart);

            var formatted_projTitle = HTMLprojectTitle.replace("%data%", project.projects[prjo].title);
            var formatted_projDates = HTMLprojectDates.replace("%data%", project.projects[prjo].dates)
            var formatted_projDescription = HTMLprojectDescription.replace("%data%", project.projects[prjo].desciption)
            var formatted_proj_img = HTMLprojectImage.replace("%data%", project.projects[prjo].images);
            var formattedproject = formatted_projTitle + formatted_projDescription + formatted_proj_img + HTMLline;
            $(".project-entry:last").append(formattedproject);
        }
    }

//header name and role
var formatted_name = HTMLheaderName.replace("%data%", bio.name);
var formatted_role = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formatted_role).prepend(formatted_name);

//contact info 
// var formatted_mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatted_email = HTMLemail.replace("%data%", bio.contacts.email);
var formatted_github = HTMLgithub.replace("%data%", bio.contacts.github);
var formatted_location = HTMLlocation.replace("%data%", bio.contacts.location);


$("#topContacts").append(formatted_email).append(formatted_github).append(formatted_location);
$("#footerContacts").append(formatted_email).append(formatted_github).append(formatted_location);

//pic and welcome message
var formatted_pic_url = HTMLbioPic.replace("%data%", bio.pic_url);
var formatted_welcome_msg = HTMLwelcomeMsg.replace("%data%", bio.welcome_msg);

$("#header").append(formatted_pic_url).append(formatted_welcome_msg);

//Skills that pay the bills
var formatted_skills0 = HTMLskills.replace("%data%", bio.skills[0]);
var formatted_skills1 = HTMLskills.replace("%data%", bio.skills[1]);
var formatted_skills2 = HTMLskills.replace("%data%", bio.skills[2]);
var formatted_skills3 = HTMLskills.replace("%data%", bio.skills[3]);
var formatted_skills4 = HTMLskills.replace("%data%", bio.skills[4]);

$("#header").append(HTMLskillsStart);
$("#skills").append(formatted_skills0).append(formatted_skills1).append(formatted_skills2).append(formatted_skills3).append(formatted_skills4);

$("#mapDiv").append(googleMap);

initializeMap();
project.display();
work.displayWork();
education.displayedu();
education.displayonline();


