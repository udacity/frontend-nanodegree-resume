// Bio JSON
var bio = {
    "name": "Niko Caron",
    "role": "Front-End Apprentice",
    "contacts": {
        "mobile": "506-426-2785",
        "email": "niko.caron90@gmail.com",
        "github": "ncaron",
        "location": "Grand Falls, NB"
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
    $("#topContacts").append(formattedMobile);
    
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        
        for (skill in bio.skills) {
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
            "location": "Ottawa, ON",
            "degree": "Bachelor of Applied Science",
            "majors": ["Computer Engineering"],
            "dates": 2016
        }],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "2015-present",
            "url": "https://www.udacity.com/"
        }]
}

// Function to display the education JSON
education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        
        if (education.schools[school].majors.length > 0) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        }
        
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
    }
    
    $(".education-entry:last").append(HTMLonlineClasses);
    
    for (onlineCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
        $(".education-entry:last").append(formattedOnlineDates);
        
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry:last").append(formattedOnlineUrl);
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
            "location": "Saint-Andre, NB",
            "dates": "2006-2012",
            "description": "I started this job when I was still in high school so I was just replacing people when needed which means I had to adapt quickly to being trained at a new area on the job site. Most jobs required attention to details. My last few years I was a machine operator, operating machines such as mixers and packaging equipment."
        },
        {
            "employer": "Givskud Farms",
            "title": "General Labor",
            "location": "Drummond, NB",
            "dates": "2014",
            "description": "During my time at this job, I was working with very little to no supervision. I was told what needed to be done during the day and I did it. More often than not, I was done the job before the end of the day and needed to find something else to work on, on my own. This involved a lot of learning new machinery I've never touched before."
        },
        {
            "employer": "J.D. Irving",
            "title": "General Labor",
            "location": "Veneer, NB",
            "dates": "2015-present",
            "description": "Fast paced job working in a physically demanding sawmill. There's a lot of machinery to be learend and I'm willing to learn anything!"
        }]
}

// Function to display the work JSON
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        $(".work-entry:last").append(formattedEmployer);
        
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedTitle);
        
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
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
            "images": ["images/project1.jpg"]
        }]
}

// Function to display the projects JSON
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
}

// Displays the projects JSON
projects.display();