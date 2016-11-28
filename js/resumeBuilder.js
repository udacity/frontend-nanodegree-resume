// object 'bio'
var bio = {
    "name": "Doe Hoon Lee",
    "role": "Front-End Developer",
    "contacts": [{
        "mobile": "604 - 000 - 0000",
        "email": "genesisparadox@gmail.com",
        "github": "https://github.com/DOEHOONLEE",
        "location": "Vancouver, Canada"
    }],
    "welcomeMessage": ["Hello. This is my online resume. Here, you can find out..", "<br>&#183; what I like to do", "<br>&#183; what skills I have", "<br>&#183; what projects I have worked on", "<br>&#183; education background", "<br>&#183; contact information"],
    "skills": ["&#183; HTML / CSS", "&#183; JavaScript", "&#183; Python", "&#183; Japanese", "&#183; English", "&#183; Korean"],
    "bioPic": "images/my_photo.jpg"
};

// object 'education'
var education = {
    "schools": [{
        "name": "Simon Fraser University",
        "major": "Cognitive Science",
        "dates": "2015 - current",
        "city": "Burnaby, CANADA",
        "url": "http://www.sfu.ca/"
    }, {
        "name": "Langara College",
        "major": "University Transfer",
        "dates": "2014",
        "city": "Vancouver, CANADA",
        "url": "http://langara.ca/index.html"
    }]
};

// object 'work'
var work = {
    "jobs": [{
        "employer": "HJangNara",
        "title": "Office assistant",
        "dates": ['2010'],
        "description": "description line",
        "location": "Seoul, Korea"
    }]
};

// object 'projects'

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016 - November",
        "description": "This is my portfolio website.",
        "images": ["images/portfolio.png"],
        "url": "https://doehoonlee.github.io/portfolio/"
    }, {
        "title": "Animal Chess",
        "dates": "2016 - September",
        "description": "Play animal chess!",
        "images": ["images/animal_chess.png"],
        "url": "https://doehoonlee.github.io/Animal_Chess/play.html"
    }, {
        "title": "Volunteer Abroad",
        "dates": "2016 - August",
        "description": "If you would like to do some volunteer work in other countries, check this out! Find out the price, destinations, and positions here",
        "images": ["images/volunteer_abroad.png"],
        "url": "https://doehoonlee.github.io/RED-Academy-project-1/"
    }]
};

// object 'certificates'

var certificates = {
    "certificates": [{
        "title": "ASL",
        "issuedBy": "start ASL",
        "date": "ongoing - expected end date : 2017  Spring",
        "description": "American Sign Language",
        "url": "https://www.startasl.com/learn-asl-online"
    }, {
        "title": "Front-End Nanodegree",
        "issuedBy": "Udacity",
        "date": "ongoing - expected end date : 2017  Spring",
        "description": "Front-end web development course",
        "url": "https://www.coursera.org/"
    }, {
        "title": "Medical Neuroscience",
        "issuedBy": "Duke University",
        "date": "ongoing - expected end date : 2017  Spring",
        "description": "Online course about medical neuroscience",
        "url": "https://www.udacity.com/"
    }, {
        "title": "CPR/AED-HCP",
        "issuedBy": "CANADIAN RED CROSS",
        "date": "2016 - November",
        "description": "CPR-Health Care Provider & AED Courses",
        "url": "https://vancouverfirstaid.ca/"
    }, {
        "title": "Web Developer Foundation",
        "issuedBy": "RED Academy",
        "date": "2016 - Sept",
        "description": "Web Development Foundation course. HTML5, CSS3, Responsive Web Design, Git and GitHub, UX&Wireframing, JavaScript, jQuery, LESS",
        "url": "https://www.redacademy.com/"
    }]
};

// display function 'bio'
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

            $("#skills").append(formattedSkill);
        }
    }

    for (msg = 1; msg < bio.welcomeMessage.legth; msg++) {
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage[msg]);

        $(".welcome-message").append(formattedWelcomeMessage);
    }
};

// display 'bio'
bio.display();

// display function 'education'
education.display = function() {
    for (school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedMajor = HTMLschoolDegree.replace("%data%", education.schools[school].major);

        var formattedTitleMajor = formattedTitle + formattedMajor;
        $(".education-entry:last").append(formattedTitleMajor);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedCity);

        $(".education-entry:last a").attr("href", education.schools[school].url);
    }
};

// display 'education'
education.display();

// display function 'work'
displayWork = function() {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

//display 'work'
displayWork();

// display function 'project'

projects.display = function() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

                $(".project-entry:last").append(formattedImage);
            }
        }

        $(".project-entry:last a").attr("href", projects.projects[project].url);
    }
    $("#project_img").addClass("img_border");
};

// display 'projects'
projects.display();

// display function 'certificates'
certificates.display = function() {
    for (certificate = 0; certificate < certificates.certificates.length; certificate++) {
        $("#certificates").append(HTMLcertificatesStart);
        //title issuedBy date description
        var formattedTitle = HTMLcertificatesTitle.replace("%data%", certificates.certificates[certificate].title);
        var formattedIssuedBy = HTMLcertificatesIssuedBy.replace("%data%", certificates.certificates[certificate].issuedBy);

        var formattedTitleIssuedBy = formattedTitle + formattedIssuedBy;
        $(".certificates-entry:last").append(formattedTitleIssuedBy);

        var formattedDates = HTMLcertificatesDates.replace("%data%", certificates.certificates[certificate].date);
        $(".certificates-entry:last").append(formattedDates);

        var formattedDescription = HTMLcertificatesDescription.replace("%data%", certificates.certificates[certificate].description);
        $(".certificates-entry:last").append(formattedDescription);

        $(".certificates-entry:last a").attr("href", certificates.certificates[certificate].url);
    }
};

// display 'certificates'
certificates.display();

// mouse click coordinate finder
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// locations of work places
function locationizer(work_obj) {
    var locationArray = [];

    for (job = 0; job < work_obj.jobs.length; job++) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

console.log(locationizer(work));

// name internationalization
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);

    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    name[1] = name[1].slice(0, 1).toUpperCase() + name[1].slice(1).toLowerCase();

    name[2] = name[2].toUpperCase();

    return name[0] + " " + name[1] + " " + name[2];
}

$("#main").append(internationalizeButton);

// google map

$("#mapDiv").append(googleMap);