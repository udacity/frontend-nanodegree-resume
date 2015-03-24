var bio = {
    "name": "Tim Mulqueen",
    "role": "Web Developer",
    "pic_url": "images/fry.jpg",
    "welcome_msg": "Welcome to my website!",
    "contacts": {
        "email": "tim.mulqueen@gmail.com",
        "mobile": "450 550 9123",
        "github": "https://github.com/Multimo",
        "location": "Montreal",
    },
    "skills": ["HTML and CSS", "Javascript", "Go-getter", "Kicking-ass", "Chewing-gum"],
};

var work = {
    "jobs": [{
        "employer": "Te Kura",
        "title": "Enrolment Officer",
        "dates": "November 2013 - April 2014",
        "location": "Wellington, New Zealand",
        "description": "Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tatahi ke",
    }, {
        "employer": "Whistler Blackcomb",
        "title": "Lead Head Lift Operator",
        "dates": "June 2012 - April 2013",
        "location": "Whistler, Brittish Columbia",
        "description": "Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tatahi ke",
    }]
};

function displayWork() {
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

displayWork();

var education = {
    "schools": [{
        "name": "Victoria University",
        "degree": "Bachaelor of Arts",
        "dates": "2012",
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
    }, ]
   
};
 education.displayedu= function() {
        for (place in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formatted_schName = HTMLschoolName.replace("%data%", education.schools[place].name);
            var formatted_schjDegree = HTMLschoolDegree.replace("%data%", education.schools[place].degree);
            var formatted_schjMajor = HTMLschoolMajor.replace("%data%", education.schools[place].major);
            var formatted_schjDates = HTMLschoolDates.replace("%data%", education.schools[place].dates);
            var formatted_schjCity = HTMLschoolLocation.replace("%data%", education.schools[place].location);
            var formatted_schurl = HTMLprojectImage.replace("%data%", education.schools[place].url);
            var formattedschool = formatted_schName + formatted_schjDegree + formatted_schjDates + formatted_schjMajor + formatted_schjCity + formatted_schurl;
            $(".education-entry:last").append(formattedschool);
        }
    }

var project = {
    "projects": [{
        "title": "project_1",
        "dates": "2014",
        "desciption": "Ko te moemoea a Maui kia haere ngatahi ai ",
        "images": "images/fry.jpg",
    }, {
        "title": "project_2",
        "dates": "2014",
        "desciption": "Ko te moemoea a Maui kia haere ngatahi ai ",
        "images": "images/fry.jpg",
    }, ]
    
};
project.display = function() {
        for (prjo in project.projects) {
            $("#projects").append(HTMLprojectStart);

            var formatted_projTitle = HTMLprojectTitle.replace("%data%", project.projects[prjo].title);
            var formatted_projDates = HTMLprojectDates.replace("%data%", project.projects[prjo].dates)
            var formatted_projDescription = HTMLprojectDescription.replace("%data%", project.projects[prjo].desciption)
            var formatted_proj_img = HTMLprojectImage.replace("%data%", project.projects[prjo].images);
            var formattedproject = formatted_projTitle + formatted_projDates + formatted_projDescription + formatted_proj_img;
            $(".project-entry:last").append(formattedproject);
        }
    }

//header name and role
var formatted_name = HTMLheaderName.replace("%data%", bio.name);
var formatted_role = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formatted_role).prepend(formatted_name);

//contact info 
var formatted_mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatted_email = HTMLemail.replace("%data%", bio.contacts.email);
var formatted_github = HTMLgithub.replace("%data%", bio.contacts.github);
var formatted_location = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formatted_mobile).append(formatted_email).append(formatted_github).append(formatted_location);

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
 education.displayedu();

