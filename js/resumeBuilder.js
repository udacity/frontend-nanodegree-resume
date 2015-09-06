// Bio JSON
var bio = {
    "name": "Niko Caron",
    "role": "Front-End Apprentice",
    "contacts": {
        "mobile": "506-426-2785",
        "email": "niko.caron90@gmail.com",
        "github": "ncaron",
        "location": "Grand Falls, New Brunswick"
    },
    "welcomeMessage": "I've always liked technology a lot but it's only recenly that I started writing some code and instantly fell in love, this is a career I'd love to pursue. I'm currently taking Udacity's Front-End Web Developer Nanodegree. I'm not far into it but I've already learned so much!",
    "skills": ["HTML", "CSS", "Javascript", "Quick Learner"],
    "bioPic": "images/my_picture.jpeg"
}

// Function to display the bio JSON
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedNameRole = formattedName + formattedRole;
    $("#header").prepend(formattedNameRole);
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);
    
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        
        for (var skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill])
            $("#skills").append(formattedSkills);
        }
    }
}

// Displays the bio JSON
bio.display();

// Education JSON
var education = {
    "schools": [
        {
            "name": "University of Ottawa",
            "location": "Ottawa, Ontario",
            "degree": "Bachelor of Applied Science",
            "majors": ["Computer Engineering"],
            "dates": "DNF",
            "url": "http://www.uottawa.ca/academic/info/regist/calendars/programs/102.html"
        }],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "2015-present",
            "url": ["https://www.udacity.com/", "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"]
        }]
}

// Function to display the education JSON
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        
        if (education.schools[school].majors.length > 0) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        }
        
        // Makes all clickable links in Schools open a new tab if clicked
        $("#education a").attr("target", "_blank");
        // Opens school website
        $(".education-entry:last a").attr("href", education.schools[school].url);
    }
    
    $("#education").append(HTMLonlineClasses).css("margin-left", "none");
    
    for (var onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url[1]);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
        $(".education-entry:last").append(formattedOnlineDates);
        
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url[0]).replace("#", education.onlineCourses[onlineCourse].url[0]);
        $(".education-entry:last").append(formattedOnlineUrl);
        
        // Makes all clickable links in Online Courses open a new tab if clicked
        $("#education a").attr("target", "_blank");
    }
}

// Displays the education JSON
education.display();

// Work JSON
var work = {
    "jobs": [
        {
            "employer": "McCain Foods",
            "title": "Machine Operator",
            "location": "Saint Andre, NB",
            "dates": "2006-2012",
            "description": "I started this job when I was still in high school so I was just replacing people when needed which means I had to adapt quickly to being trained at a new area on the job site. Most jobs required attention to details. My last few years I was a machine operator, operating machines such as mixers and packaging equipment.",
            "url": "http://www.mccain.com/"
        },
        {
            "employer": "Givskud Farms",
            "title": "General Labor",
            "location": "Drummond, nb",
            "dates": "2014",
            "description": "During my time at this job, I was working with very little to no supervision. I was told what needed to be done during the day and I did it. More often than not, I was done the job before the end of the day and needed to find something else to work on, on my own. This involved a lot of learning new machinery I've never touched before.",
            "url": "http://www.givskudfarms.com/"
        },
        {
            "employer": "J.D. Irving",
            "title": "General Labor",
            "location": "Veneer, NB",
            "dates": "2015-present",
            "description": "Fast paced job working in a physically demanding sawmill. There's a lot of machinery to be learend and I'm willing to learn anything!",
            "url": "http://www.jdirvinglumber.com/"
        }]
}

// Function to display the work JSON
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        
        // Makes all clickable links in Work Experience open a new tab if clicked
        $("#workExperience a").attr("target", "_blank");
        // Opens employer website
        $(".work-entry:last a").attr("href", work.jobs[job].url);
    }
}

// Displays the work JSON
work.display();

// Projects JSON
var projects = {
    "projects": [
        {
            "title": "Design Mockup",
            "dates": "August 2015",
            "description": "This is part of my first project in Udacity's Front-End Web Developer Nanodegree. I had to replicate a design mockup. Before starting this, I had no prior formal coding experience and I've learned a lot! I've learned how to effectively use HTML, CSS, Bootstrap and make a website responsive to any screen sizes.",
            "images": ["images/project1.jpg"],
            "url": "project-1.html"
        }]
}

// Function to display the projects JSON
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
        
        // Makes all clickable links in Projects open a new tab if clicked
        $("#projects a").attr("target", "_blank");
        // Opens project website
        $(".project-entry:last a").attr("href", projects.projects[project].url);
    }
}

// Displays the projects JSON
projects.display();

// Displays a map on the screen
$("#mapDiv").append(googleMap);

// Changes the link colors when mouse hovers
$("a").on("mouseenter", function() {
    $(this).css("color", "#f5a623");
})
.on("mouseleave", function() {
    $(this).css("color", "#1199c3");
});

// Makes the list of contact info and skills fade in and out when mouse hovers
$(".white-text").hover(function() {
    $(this).fadeOut(250);
    $(this).fadeIn(250);
});