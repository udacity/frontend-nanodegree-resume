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
    "welcomeMessage": "Developing skills for Advancement",
    "skills": ["Web Developing", "Sales", "Marketing", "Employee Training", "Management"],
    "biopic": "images/editedMe.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedpic);

        var formattedmessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedmessage);

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

        function displaySkills() {
            $("#header").append(HTMLskillsStart);

            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
        displaySkills();
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Campbell University",
        "location": "Buis Creek, NC",
        "degree": "BS",
        "major": ["Pro Golf Mngmt"],
        "dates": "08.15.01-01.01.02",
        "url": "http://www.campbell.edu/"
    }, {
        "name": "Western Kentucky University",
        "location": "Bowling Green, KY",
        "degree": "BS",
        "major": ["Turf Mngmt"],
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
    }],
    "display": function() {
        education.schools.forEach(displaySchools);
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(displayOnlineSchools);

        function displaySchools(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
            $(".education-entry:last").append(formattedName + formattedDegree, formattedLocation, formattedDates, formattedMajor);
        }

        function displayOnlineSchools(course) {
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedonlineDates = HTMLschoolDates.replace("%data%", course.dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedonlineSchool, formattedonlineTitle, formattedonlineDates, formattedonlineURL);
        }
    }
};

education.display();

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
    }],
    "display": function() {
        work.jobs.forEach(displayJobs);

        function displayJobs(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedLocation, formattedDates, formattedDescription);
        }
    }
};

work.display();

var projects = {
    "project": [{
        "title": "Portfolio Page",
        "dates": "Feb 2016",
        "description": "Create a personal porfolio home page for myself",
        "images": "images/portfolio.jpg"
    }, {
        "title": "Choose a Charity",
        "dates": "Sept 2015",
        "description": "Create a portfolio page highlighting multiple charities",
        "images": "images/charity.jpg"
    }],
    "display": function() {
        projects.project.forEach(displayProjects);

        function displayProjects(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedImage = HTMLprojectImage.replace("%data%", project.images);
            $(".project-entry:last").append(formattedDates, formattedDescription, formattedImage);
        }
    }
};

projects.display();

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
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

function displayFooter() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub);
}
displayFooter();